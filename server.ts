import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = Number(process.env.PORT) || 3000;
const DATA_DIR = path.join(__dirname, 'data');
const QUOTES_FILE = path.join(DATA_DIR, 'quotes.json');

app.use(express.json());

// Ensure data directory exists
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

// Initial sample quotes if file doesn't exist yet
if (!fs.existsSync(QUOTES_FILE)) {
  const initialQuotes = [
    {
      id: 'quote-sample-1',
      refNumber: 'EVA-849120',
      orgName: 'Iglesia Comunidad de Fe',
      contactName: 'Pastor Carlos Méndez',
      phone: '(414) 555-0199',
      email: 'pastor.carlos@fechurch.org',
      service: '$50/week On-Call Tech Maintenance Plan',
      soundboard: 'Behringer X32',
      roomCapacity: '100-300 seats',
      dateTimeline: 'Immediate / Next Sunday',
      notes: 'Experiencing pulpit mic feedback and need volunteer training in Spanish.',
      status: 'New',
      createdAt: new Date(Date.now() - 3600000 * 4).toISOString(),
    },
    {
      id: 'quote-sample-2',
      refNumber: 'EVA-312954',
      orgName: 'Hope City Church',
      contactName: 'Marcus Vance',
      phone: '(414) 555-0245',
      email: 'marcus@hopecityworship.org',
      service: 'Recall-Safe AV Design & Mixer Preset Locking',
      soundboard: 'Midas M32 Live',
      roomCapacity: '300-800 seats',
      dateTimeline: 'Within 2 weeks',
      notes: 'Need to lock safe scenes and re-tune room acoustics.',
      status: 'In Contact',
      createdAt: new Date(Date.now() - 86400000 * 2).toISOString(),
    },
  ];
  fs.writeFileSync(QUOTES_FILE, JSON.stringify(initialQuotes, null, 2), 'utf-8');
}

function readQuotes() {
  try {
    const raw = fs.readFileSync(QUOTES_FILE, 'utf-8');
    return JSON.parse(raw);
  } catch (err) {
    console.error('Error reading quotes file:', err);
    return [];
  }
}

function writeQuotes(quotes: any[]) {
  try {
    fs.writeFileSync(QUOTES_FILE, JSON.stringify(quotes, null, 2), 'utf-8');
  } catch (err) {
    console.error('Error writing quotes file:', err);
  }
}

// API Routes
app.get('/api/quotes', (req, res) => {
  const quotes = readQuotes();
  res.json({ success: true, quotes });
});

app.post('/api/quotes', (req, res) => {
  const newQuote = req.body;
  if (!newQuote || !newQuote.orgName || !newQuote.contactName || !newQuote.phone) {
    return res.status(400).json({ success: false, error: 'Missing required quote fields' });
  }

  const quotes = readQuotes();
  const quoteToSave = {
    ...newQuote,
    id: newQuote.id || 'quote-' + Date.now(),
    refNumber: newQuote.refNumber || 'EVA-' + Math.floor(100000 + Math.random() * 900000),
    status: newQuote.status || 'New',
    createdAt: newQuote.createdAt || new Date().toISOString(),
  };

  quotes.unshift(quoteToSave);
  writeQuotes(quotes);

  console.log(`[NEW QUOTE RECEIVED] Ref #${quoteToSave.refNumber} from ${quoteToSave.orgName} (${quoteToSave.contactName} - ${quoteToSave.phone})`);
  console.log(`Service: ${quoteToSave.service} | Email: ${quoteToSave.email}`);

  res.status(201).json({ success: true, quote: quoteToSave });
});

app.patch('/api/quotes/:id', (req, res) => {
  const { id } = req.params;
  const updates = req.body;
  const quotes = readQuotes();
  const index = quotes.findIndex((q: any) => q.id === id);

  if (index === -1) {
    return res.status(404).json({ success: false, error: 'Quote not found' });
  }

  quotes[index] = { ...quotes[index], ...updates, updatedAt: new Date().toISOString() };
  writeQuotes(quotes);

  res.json({ success: true, quote: quotes[index] });
});

app.delete('/api/quotes/:id', (req, res) => {
  const { id } = req.params;
  const quotes = readQuotes();
  const filtered = quotes.filter((q: any) => q.id !== id);

  if (filtered.length === quotes.length) {
    return res.status(404).json({ success: false, error: 'Quote not found' });
  }

  writeQuotes(filtered);
  res.json({ success: true, message: 'Quote removed' });
});

// CSV Export endpoint specifically designed for Google Sheets import
app.get('/api/quotes/export-csv', (req, res) => {
  const quotes = readQuotes();
  const headers = [
    'Ref ID',
    'Date Submitted',
    'Status',
    'Church / Organization',
    'Contact Name',
    'Phone',
    'Email',
    'Service Requested',
    'Soundboard Model',
    'Room Capacity',
    'Timeline',
    'Customer Notes',
  ];

  const escapeCsv = (val: any) => {
    if (val === null || val === undefined) return '""';
    const str = String(val).replace(/"/g, '""');
    return `"${str}"`;
  };

  const rows = quotes.map((q: any) => [
    escapeCsv(q.refNumber),
    escapeCsv(new Date(q.createdAt).toLocaleString()),
    escapeCsv(q.status),
    escapeCsv(q.orgName),
    escapeCsv(q.contactName),
    escapeCsv(q.phone),
    escapeCsv(q.email),
    escapeCsv(q.service),
    escapeCsv(q.soundboard || 'N/A'),
    escapeCsv(q.roomCapacity || 'N/A'),
    escapeCsv(q.dateTimeline || 'N/A'),
    escapeCsv(q.notes || ''),
  ]);

  const csvContent = [headers.join(','), ...rows.map((r: any) => r.join(','))].join('\r\n');

  res.setHeader('Content-Type', 'text/csv; charset=utf-8');
  res.setHeader('Content-Disposition', `attachment; filename="eva-quotes-${Date.now()}.csv"`);
  res.status(200).send(csvContent);
});

// Vite middleware integration in Dev vs Static in Prod
async function startServer() {
  const isProd = process.env.NODE_ENV === 'production';

  if (!isProd) {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: {
        middlewareMode: true,
        watch: process.env.DISABLE_HMR === 'true' ? null : {},
      },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.join(__dirname, 'dist')));
    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server listening on http://0.0.0.0:${PORT}`);
  });
}

startServer();
