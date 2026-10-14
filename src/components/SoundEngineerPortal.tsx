import React, { useState, useEffect } from 'react';
import {
  X,
  Lock,
  Unlock,
  Download,
  Copy,
  Phone,
  Mail,
  MessageSquare,
  Search,
  CheckCircle2,
  Clock,
  Calendar,
  Sliders,
  FileSpreadsheet,
  Trash2,
  Edit3,
  ExternalLink,
  ChevronDown,
  RefreshCw,
  AlertCircle
} from 'lucide-react';
import {
  QuoteLead,
  fetchAllQuotes,
  updateQuoteStatus,
  deleteQuoteLead,
  downloadQuotesCsv
} from '../services/quotesApi';

interface SoundEngineerPortalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SoundEngineerPortal: React.FC<SoundEngineerPortalProps> = ({ isOpen, onClose }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    return localStorage.getItem('eva_portal_auth') === 'true';
  });
  const [passwordInput, setPasswordInput] = useState<string>('');
  const [loginError, setLoginError] = useState<string>('');
  const [quotes, setQuotes] = useState<QuoteLead[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [showSheetsGuide, setShowSheetsGuide] = useState<boolean>(false);
  const [copiedMessage, setCopiedMessage] = useState<string>('');
  const [editingNotesId, setEditingNotesId] = useState<string | null>(null);
  const [tempNotes, setTempNotes] = useState<string>('');

  const loadData = async () => {
    setLoading(true);
    const data = await fetchAllQuotes();
    setQuotes(data);
    setLoading(false);
  };

  useEffect(() => {
    if (isOpen && isAuthenticated) {
      loadData();
    }
  }, [isOpen, isAuthenticated]);

  if (!isOpen) return null;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const clean = passwordInput.trim();
    // Secret access code requested by Luis Martinez
    if (clean === '21232123') {
      setIsAuthenticated(true);
      localStorage.setItem('eva_portal_auth', 'true');
      setLoginError('');
      loadData();
    } else {
      setLoginError('Incorrect access code. Please try again.');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('eva_portal_auth');
    setPasswordInput('');
  };

  const handleStatusChange = async (id: string, newStatus: QuoteLead['status']) => {
    await updateQuoteStatus(id, newStatus);
    setQuotes((prev) =>
      prev.map((q) => (q.id === id ? { ...q, status: newStatus } : q))
    );
  };

  const handleSaveInternalNotes = async (id: string) => {
    const target = quotes.find((q) => q.id === id);
    if (!target) return;
    await updateQuoteStatus(id, target.status, tempNotes);
    setQuotes((prev) =>
      prev.map((q) => (q.id === id ? { ...q, internalNotes: tempNotes } : q))
    );
    setEditingNotesId(null);
  };

  const handleDelete = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this customer request?')) {
      await deleteQuoteLead(id);
      setQuotes((prev) => prev.filter((q) => q.id !== id));
    }
  };

  const handleCopyForSheets = () => {
    const headers = [
      'Ref ID\tDate\tStatus\tChurch / Org\tContact\tPhone\tEmail\tService\tSoundboard\tRoom\tTimeline\tNotes'
    ];
    const rows = quotes.map((q) =>
      [
        q.refNumber,
        new Date(q.createdAt).toLocaleDateString(),
        q.status,
        q.orgName,
        q.contactName,
        q.phone,
        q.email,
        q.service,
        q.soundboard || 'N/A',
        q.roomCapacity || 'N/A',
        q.dateTimeline || 'N/A',
        (q.notes || '').replace(/[\t\n\r]/g, ' ')
      ].join('\t')
    );

    const fullTsv = [headers, ...rows].join('\n');
    navigator.clipboard.writeText(fullTsv);
    setCopiedMessage('Copied to clipboard! Open Google Sheets and press Ctrl+V / Cmd+V');
    setTimeout(() => setCopiedMessage(''), 4000);
  };

  const filteredQuotes = quotes.filter((q) => {
    const matchesStatus = statusFilter === 'all' || q.status === statusFilter;
    const matchesSearch =
      searchQuery.trim() === '' ||
      q.orgName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.contactName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.phone.includes(searchQuery) ||
      q.refNumber.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  const newLeadsCount = quotes.filter((q) => q.status === 'New').length;
  const subLeadsCount = quotes.filter((q) => q.service.includes('$50/week')).length;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-6 overflow-y-auto overflow-x-hidden bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-5xl bg-[#0d131f] border border-slate-700/80 rounded-2xl shadow-2xl p-4 sm:p-8 my-auto sm:my-6 max-h-[94vh] overflow-y-auto overflow-x-hidden flex flex-col">
        
        {/* Top Close Bar */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 text-sky-400 flex items-center justify-center">
              <Sliders className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-white leading-tight">
                Luis Martinez · Sound Engineer Customer Portal
              </h3>
              <p className="text-xs text-slate-400">
                Incoming Quote Requests, Church Leads & Google Sheets Tracker
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {isAuthenticated && (
              <button
                type="button"
                onClick={handleLogout}
                className="px-3 py-1.5 text-xs text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700 rounded-lg transition-colors"
              >
                Log Out
              </button>
            )}
            <button
              type="button"
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-white rounded-lg bg-slate-800/80 hover:bg-slate-700 transition-colors"
              aria-label="Close Portal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content: Login Gate vs Lead Dashboard */}
        {!isAuthenticated ? (
          /* Login Form */
          <div className="py-12 max-w-md mx-auto w-full text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-slate-800 border border-slate-700 text-amber-400 flex items-center justify-center mx-auto shadow-md">
              <Lock className="w-8 h-8" />
            </div>

            <div>
              <h4 className="text-2xl font-bold text-white">
                Sound Engineer Portal Login
              </h4>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Enter your access code to view and manage customer quote requests.
              </p>
            </div>

            <form onSubmit={handleLogin} className="space-y-4">
              <div className="text-left">
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Engineer Security Passcode
                </label>
                <input
                  type="password"
                  value={passwordInput}
                  onChange={(e) => setPasswordInput(e.target.value)}
                  placeholder="Enter your security passcode"
                  className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-sky-400"
                  autoFocus
                />
                {loginError && (
                  <p className="text-xs text-red-400 mt-1.5">{loginError}</p>
                )}
              </div>

              <button
                type="submit"
                className="w-full py-3 text-sm font-bold text-slate-950 bg-gradient-to-r from-sky-400 to-amber-300 hover:from-sky-300 hover:to-amber-200 rounded-lg shadow-md transition-all"
              >
                Open Customer Request Dashboard
              </button>
            </form>
          </div>
        ) : (
          /* Authenticated Dashboard */
          <div className="pt-6 space-y-6">
            
            {/* Top KPI Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                <span className="text-xs text-slate-400 uppercase font-mono-nums block">
                  Total Quote Requests
                </span>
                <span className="text-2xl sm:text-3xl font-black text-white font-mono-nums">
                  {quotes.length}
                </span>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                <span className="text-xs text-amber-300 uppercase font-mono-nums block">
                  New Uncontacted
                </span>
                <span className="text-2xl sm:text-3xl font-black text-amber-400 font-mono-nums">
                  {newLeadsCount}
                </span>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                <span className="text-xs text-sky-400 uppercase font-mono-nums block">
                  $50/Wk Care Plan Leads
                </span>
                <span className="text-2xl sm:text-3xl font-black text-sky-400 font-mono-nums">
                  {subLeadsCount}
                </span>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex flex-col justify-between">
                <span className="text-xs text-emerald-400 uppercase font-mono-nums block">
                  Email Delivery Sync
                </span>
                <span className="text-xs text-slate-300">
                  eva.sound.systems@gmail.com
                </span>
              </div>
            </div>

            {/* Google Sheets Actions Bar */}
            <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center justify-center shrink-0">
                  <FileSpreadsheet className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">
                    Google Sheets & Excel Lead Sync
                  </h4>
                  <p className="text-xs text-slate-400">
                    Keep your spreadsheet updated with every customer inquiry.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <button
                  type="button"
                  onClick={() => downloadQuotesCsv(quotes)}
                  className="px-3.5 py-2 text-xs font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg transition-colors flex items-center gap-1.5"
                  title="Download CSV file ready for Google Sheets or Excel"
                >
                  <Download className="w-4 h-4" />
                  <span>Download for Google Sheets (CSV)</span>
                </button>

                <button
                  type="button"
                  onClick={handleCopyForSheets}
                  className="px-3.5 py-2 text-xs font-semibold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg transition-colors flex items-center gap-1.5"
                  title="Copy rows to clipboard to paste directly into Google Sheets"
                >
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy All to Paste in Sheet</span>
                </button>

                <button
                  type="button"
                  onClick={() => setShowSheetsGuide(!showSheetsGuide)}
                  className="px-2.5 py-2 text-xs text-slate-400 hover:text-white border border-slate-800 rounded-lg"
                >
                  <ChevronDown className={`w-3.5 h-3.5 transform transition-transform ${showSheetsGuide ? 'rotate-180' : ''}`} />
                </button>
              </div>
            </div>

            {/* Copied Alert Toast */}
            {copiedMessage && (
              <div className="p-3 rounded-lg bg-emerald-950/80 border border-emerald-800 text-xs text-emerald-300 flex items-center gap-2 animate-fadeIn">
                <CheckCircle2 className="w-4 h-4" />
                <span>{copiedMessage}</span>
              </div>
            )}

            {/* Google Sheets Step-by-Step Instructions Accordion */}
            {showSheetsGuide && (
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-300 space-y-2 animate-fadeIn">
                <div className="font-bold text-white text-sm">
                  How to Keep Track in Google Sheets (3 Simple Steps):
                </div>
                <ol className="list-decimal list-inside space-y-1 text-slate-400">
                  <li>
                    Click <strong className="text-white">"Download for Google Sheets (CSV)"</strong> above to save the file.
                  </li>
                  <li>
                    Go to <a href="https://sheets.new" target="_blank" rel="noopener noreferrer" className="text-sky-400 underline">sheets.new</a> (creates a fresh Google Sheet).
                  </li>
                  <li>
                    Click <strong className="text-white">File &gt; Import &gt; Upload</strong> and drag your downloaded file. All customer names, phone numbers, mixer models, and dates will populate in neat columns!
                  </li>
                </ol>
              </div>
            )}

            {/* Filter and Search Bar */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
              {/* Status filter tabs */}
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none min-w-0 max-w-full">
                {[
                  { id: 'all', label: `All (${quotes.length})` },
                  { id: 'New', label: `New (${newLeadsCount})` },
                  { id: 'In Contact', label: 'In Contact' },
                  { id: 'Scheduled', label: 'Scheduled' },
                  { id: 'Completed', label: 'Completed' },
                ].map((st) => (
                  <button
                    key={st.id}
                    type="button"
                    onClick={() => setStatusFilter(st.id)}
                    className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                      statusFilter === st.id
                        ? 'bg-sky-500 text-white shadow-sm'
                        : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                    }`}
                  >
                    {st.label}
                  </button>
                ))}
              </div>

              {/* Search input + Refresh button */}
              <div className="flex items-center gap-2">
                <div className="relative flex-1 sm:w-60">
                  <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-2.5 pointer-events-none" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search church, name, phone..."
                    className="w-full pl-8 pr-3 py-1.5 text-xs rounded-lg bg-slate-900 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-sky-400"
                  />
                </div>
                <button
                  type="button"
                  onClick={loadData}
                  className="p-2 text-slate-400 hover:text-white bg-slate-900 border border-slate-800 rounded-lg"
                  title="Refresh list"
                >
                  <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} />
                </button>
              </div>
            </div>

            {/* Leads List */}
            <div className="space-y-4">
              {filteredQuotes.map((q) => (
                <div
                  key={q.id}
                  className="rounded-xl bg-slate-900/80 border border-slate-800 p-4 sm:p-5 hover:border-slate-700 transition-colors space-y-4"
                >
                  {/* Lead Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-800">
                    <div className="flex items-center gap-2.5">
                      <span className="text-xs font-bold text-sky-400 font-mono-nums bg-sky-950/40 border border-sky-800/40 px-2 py-0.5 rounded">
                        {q.refNumber}
                      </span>
                      <h4 className="text-base font-bold text-white">
                        {q.orgName}
                      </h4>
                      <span className="text-xs text-slate-400">
                        ({q.contactName})
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="text-[11px] text-slate-400 font-mono-nums">
                        {new Date(q.createdAt).toLocaleDateString()} at{' '}
                        {new Date(q.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </span>

                      {/* Status Dropdown */}
                      <select
                        value={q.status}
                        onChange={(e) => handleStatusChange(q.id, e.target.value as any)}
                        className={`text-xs font-bold px-2.5 py-1 rounded-lg border focus:outline-none font-mono-nums ${
                          q.status === 'New'
                            ? 'bg-amber-400/10 text-amber-300 border-amber-400/30'
                            : q.status === 'In Contact'
                            ? 'bg-sky-400/10 text-sky-300 border-sky-400/30'
                            : q.status === 'Scheduled'
                            ? 'bg-indigo-400/10 text-indigo-300 border-indigo-400/30'
                            : 'bg-emerald-400/10 text-emerald-300 border-emerald-400/30'
                        }`}
                      >
                        <option value="New">Status: New</option>
                        <option value="In Contact">Status: In Contact</option>
                        <option value="Scheduled">Status: Scheduled</option>
                        <option value="Completed">Status: Completed</option>
                      </select>
                    </div>
                  </div>

                  {/* Lead Specs Details */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-xs text-slate-300">
                    <div>
                      <span className="text-slate-500 uppercase font-mono-nums text-[10px] block">Service:</span>
                      <span className="font-semibold text-white">{q.service}</span>
                    </div>
                    <div>
                      <span className="text-slate-500 uppercase font-mono-nums text-[10px] block">Console / Mixer:</span>
                      <span className="font-medium text-slate-200">{q.soundboard || 'Not specified'}</span>
                    </div>
                    <div>
                      <span className="text-slate-500 uppercase font-mono-nums text-[10px] block">Room Size:</span>
                      <span className="text-slate-300">{q.roomCapacity || 'N/A'}</span>
                    </div>
                    <div>
                      <span className="text-slate-500 uppercase font-mono-nums text-[10px] block">Timeline / Date:</span>
                      <span className="text-amber-300 font-semibold">{q.dateTimeline || 'ASAP'}</span>
                    </div>
                  </div>

                  {/* Customer Notes */}
                  {q.notes && (
                    <div className="p-3 rounded-lg bg-slate-950/60 border border-slate-800 text-xs text-slate-300">
                      <span className="text-slate-500 font-semibold block mb-0.5">Customer Message / Audio Issues:</span>
                      <p className="italic">"{q.notes}"</p>
                    </div>
                  )}

                  {/* Internal Sound Engineer Notes */}
                  <div className="p-3 rounded-lg bg-sky-950/20 border border-sky-800/30 text-xs">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sky-400 font-semibold flex items-center gap-1.5 font-mono-nums">
                        <Edit3 className="w-3.5 h-3.5" />
                        <span>Luis's Internal Engineer Notes:</span>
                      </span>
                      {editingNotesId !== q.id ? (
                        <button
                          type="button"
                          onClick={() => {
                            setEditingNotesId(q.id);
                            setTempNotes(q.internalNotes || '');
                          }}
                          className="text-[11px] text-slate-400 hover:text-white"
                        >
                          Edit Notes
                        </button>
                      ) : (
                        <button
                          type="button"
                          onClick={() => handleSaveInternalNotes(q.id)}
                          className="text-[11px] text-emerald-400 font-bold"
                        >
                          Save Notes
                        </button>
                      )}
                    </div>

                    {editingNotesId === q.id ? (
                      <textarea
                        rows={2}
                        value={tempNotes}
                        onChange={(e) => setTempNotes(e.target.value)}
                        placeholder="Add private note (e.g., called pastor, agreed on Saturday sound check, quoted X32 stage box)..."
                        className="w-full mt-1 p-2 rounded bg-slate-900 border border-slate-700 text-xs text-white"
                      />
                    ) : (
                      <p className="text-slate-300">
                        {q.internalNotes || <span className="text-slate-500 italic">No internal notes added yet.</span>}
                      </p>
                    )}
                  </div>

                  {/* Action Contact Bar for Luis */}
                  <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-slate-800/80">
                    <div className="flex flex-wrap items-center gap-2">
                      {/* Call Customer */}
                      <a
                        href={`tel:${q.phone.replace(/[^0-9]/g, '')}`}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 hover:bg-emerald-500/20 text-xs font-semibold transition-colors"
                      >
                        <Phone className="w-3.5 h-3.5" />
                        <span>Call ({q.phone})</span>
                      </a>

                      {/* Text Customer */}
                      <a
                        href={`sms:${q.phone.replace(/[^0-9]/g, '')}?&body=Hello ${encodeURIComponent(q.contactName)}, this is Luis Martinez from E.V.A Worship Engineer regarding your quote request for ${encodeURIComponent(q.orgName)}.`}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-sky-500/10 border border-sky-500/20 text-sky-400 hover:bg-sky-500/20 text-xs font-semibold transition-colors"
                      >
                        <MessageSquare className="w-3.5 h-3.5" />
                        <span>Text / SMS</span>
                      </a>

                      {/* Email Customer */}
                      <a
                        href={`mailto:${q.email}?subject=Quote Request [${q.refNumber}] - E.V.A Worship Engineer&body=Hello ${encodeURIComponent(q.contactName)},%0D%0A%0D%0AThank you for contacting E.V.A Worship Engineer regarding your ${encodeURIComponent(q.service)} request for ${encodeURIComponent(q.orgName)}.%0D%0A%0D%0ABest regards,%0D%0ALuis Martinez%0D%0AE.V.A Worship Engineer%0D%0A(414) 554-4388`}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-semibold transition-colors"
                      >
                        <Mail className="w-3.5 h-3.5" />
                        <span>Email ({q.email})</span>
                      </a>
                    </div>

                    <button
                      type="button"
                      onClick={() => handleDelete(q.id)}
                      className="p-1.5 text-slate-500 hover:text-red-400 rounded transition-colors"
                      title="Delete lead"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>

                </div>
              ))}

              {filteredQuotes.length === 0 && (
                <div className="p-10 text-center rounded-xl bg-slate-900 border border-slate-800">
                  <p className="text-sm text-slate-400">
                    No quote requests found matching that criteria.
                  </p>
                </div>
              )}
            </div>

          </div>
        )}

      </div>
    </div>
  );
};
