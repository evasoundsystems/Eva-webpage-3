export interface QuoteLead {
  id: string;
  refNumber: string;
  orgName: string;
  contactName: string;
  phone: string;
  email: string;
  service: string;
  soundboard?: string;
  roomCapacity?: string;
  dateTimeline?: string;
  notes?: string;
  status: 'New' | 'In Contact' | 'Scheduled' | 'Completed';
  createdAt: string;
  updatedAt?: string;
  internalNotes?: string;
}

const LOCAL_STORAGE_KEY = 'eva_customer_quotes_backup';

function getLocalQuotes(): QuoteLead[] {
  try {
    const raw = localStorage.getItem(LOCAL_STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
}

function saveLocalQuotes(quotes: QuoteLead[]) {
  try {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(quotes));
  } catch (e) {
    console.error('Failed to save quotes locally', e);
  }
}

export async function submitQuoteRequest(data: Omit<QuoteLead, 'id' | 'refNumber' | 'status' | 'createdAt'> & { refNumber?: string }): Promise<QuoteLead> {
  const refNumber = data.refNumber || 'EVA-' + Math.floor(100000 + Math.random() * 900000);
  const newLead: QuoteLead = {
    ...data,
    id: 'quote-' + Date.now(),
    refNumber,
    status: 'New',
    createdAt: new Date().toISOString(),
  };

  // 1. Save to localStorage immediately as backup
  const localQuotes = getLocalQuotes();
  localQuotes.unshift(newLead);
  saveLocalQuotes(localQuotes);

  // 2. Dispatch to backend API
  try {
    const res = await fetch('/api/quotes', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newLead),
    });

    if (res.ok) {
      const json = await res.json();
      if (json.quote) {
        return json.quote;
      }
    }
  } catch (err) {
    console.warn('Backend API offline or unreachable, saved locally:', err);
  }

  return newLead;
}

export async function fetchAllQuotes(): Promise<QuoteLead[]> {
  try {
    const res = await fetch('/api/quotes');
    if (res.ok) {
      const json = await res.json();
      if (Array.isArray(json.quotes) && json.quotes.length > 0) {
        // Merge with local quotes
        const serverQuotes: QuoteLead[] = json.quotes;
        saveLocalQuotes(serverQuotes);
        return serverQuotes;
      }
    }
  } catch (err) {
    console.warn('Fetching from backend failed, using local storage:', err);
  }

  return getLocalQuotes();
}

export async function updateQuoteStatus(id: string, status: QuoteLead['status'], internalNotes?: string): Promise<boolean> {
  // Update local storage
  const local = getLocalQuotes();
  const idx = local.findIndex((q) => q.id === id);
  if (idx !== -1) {
    local[idx].status = status;
    if (internalNotes !== undefined) local[idx].internalNotes = internalNotes;
    local[idx].updatedAt = new Date().toISOString();
    saveLocalQuotes(local);
  }

  // Update backend
  try {
    await fetch(`/api/quotes/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status, internalNotes }),
    });
    return true;
  } catch (err) {
    console.warn('Update to backend failed, updated locally:', err);
    return true;
  }
}

export async function deleteQuoteLead(id: string): Promise<boolean> {
  const local = getLocalQuotes().filter((q) => q.id !== id);
  saveLocalQuotes(local);

  try {
    await fetch(`/api/quotes/${id}`, { method: 'DELETE' });
  } catch (err) {
    console.warn('Failed to delete on backend', err);
  }
  return true;
}

export function generateQuotesCsv(quotes: QuoteLead[]): string {
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
    'Engineer Internal Notes',
  ];

  const escapeCsv = (val: any) => {
    if (val === null || val === undefined) return '""';
    const str = String(val).replace(/"/g, '""');
    return `"${str}"`;
  };

  const rows = quotes.map((q) => [
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
    escapeCsv(q.internalNotes || ''),
  ]);

  return [headers.join(','), ...rows.map((r) => r.join(','))].join('\r\n');
}

export function downloadQuotesCsv(quotes: QuoteLead[]) {
  const csvContent = generateQuotesCsv(quotes);
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.setAttribute('href', url);
  link.setAttribute('download', `eva-worship-customer-requests-${new Date().toISOString().slice(0, 10)}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
