import React, { useState, useEffect } from 'react';
import {
  X,
  FileSpreadsheet,
  Download,
  Copy,
  Check,
  ExternalLink,
  Code,
  RefreshCw,
  Trash2,
  CheckCircle2,
  Database,
  Link as LinkIcon
} from 'lucide-react';
import {
  GOOGLE_SHEET_ID,
  GOOGLE_SHEET_URL,
  EnquiryRecord,
  getSavedEnquiries,
  deleteEnquiry,
  exportEnquiriesToCSV,
  copyRowForGoogleSheets,
  getCustomWebhookUrl,
  saveCustomWebhookUrl,
  READY_GOOGLE_APPS_SCRIPT
} from '../utils/googleSheetSync';

interface GoogleSheetSyncModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GoogleSheetSyncModal: React.FC<GoogleSheetSyncModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [enquiries, setEnquiries] = useState<EnquiryRecord[]>([]);
  const [activeTab, setActiveTab] = useState<'records' | 'webhook' | 'script'>('records');
  const [webhookUrl, setWebhookUrl] = useState<string>('');
  const [saveSuccess, setSaveSuccess] = useState<boolean>(false);
  const [copiedScript, setCopiedScript] = useState<boolean>(false);
  const [copiedRowId, setCopiedRowId] = useState<string | null>(null);

  useEffect(() => {
    if (isOpen) {
      setEnquiries(getSavedEnquiries());
      setWebhookUrl(getCustomWebhookUrl());
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSaveWebhook = (e: React.FormEvent) => {
    e.preventDefault();
    saveCustomWebhookUrl(webhookUrl);
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 2500);
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Are you sure you want to remove this enquiry record from local cache?')) {
      const updated = deleteEnquiry(id);
      setEnquiries(updated);
    }
  };

  const handleCopyScript = () => {
    navigator.clipboard.writeText(READY_GOOGLE_APPS_SCRIPT);
    setCopiedScript(true);
    setTimeout(() => setCopiedScript(false), 2500);
  };

  const handleCopyRow = (record: EnquiryRecord) => {
    const success = copyRowForGoogleSheets(record);
    if (success) {
      setCopiedRowId(record.id);
      setTimeout(() => setCopiedRowId(null), 2000);
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-slate-950/80 backdrop-blur-md animate-in fade-in"
    >
      <div className="relative w-full max-w-3xl overflow-hidden rounded-2xl border-2 border-[#C9A227]/40 bg-[#061B36] text-white shadow-2xl p-5 sm:p-7">
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 rounded-full p-2 text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-white/10 pb-5">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400">
              <FileSpreadsheet className="h-6 w-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
                  Google Sheet Integration
                </h3>
                <span className="rounded-full bg-emerald-500/20 px-2 py-0.5 text-[10px] font-semibold text-emerald-300 border border-emerald-500/30">
                  Live Connected
                </span>
              </div>
              <p className="text-xs text-slate-300">
                Connected Sheet ID: <span className="font-mono text-amber-300">{GOOGLE_SHEET_ID}</span>
              </p>
            </div>
          </div>

          <a
            href={GOOGLE_SHEET_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-gradient-to-r from-[#D4AF37] to-[#C9A227] text-[#061B36] text-xs font-bold uppercase tracking-wider hover:brightness-110 transition-all shadow shrink-0"
          >
            <ExternalLink className="h-3.5 w-3.5" />
            <span>Open Google Sheet</span>
          </a>
        </div>

        {/* Navigation Tabs */}
        <div className="flex border-b border-white/10 mt-5 gap-2">
          <button
            onClick={() => setActiveTab('records')}
            className={`px-4 py-2.5 text-xs font-semibold border-b-2 transition-colors flex items-center gap-1.5 ${
              activeTab === 'records'
                ? 'border-[#C9A227] text-[#E5C76B]'
                : 'border-transparent text-slate-400 hover:text-white'
            }`}
          >
            <Database className="h-3.5 w-3.5" />
            <span>Recorded Enquiries ({enquiries.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('webhook')}
            className={`px-4 py-2.5 text-xs font-semibold border-b-2 transition-colors flex items-center gap-1.5 ${
              activeTab === 'webhook'
                ? 'border-[#C9A227] text-[#E5C76B]'
                : 'border-transparent text-slate-400 hover:text-white'
            }`}
          >
            <LinkIcon className="h-3.5 w-3.5" />
            <span>Automated Webhook Sync</span>
          </button>

          <button
            onClick={() => setActiveTab('script')}
            className={`px-4 py-2.5 text-xs font-semibold border-b-2 transition-colors flex items-center gap-1.5 ${
              activeTab === 'script'
                ? 'border-[#C9A227] text-[#E5C76B]'
                : 'border-transparent text-slate-400 hover:text-white'
            }`}
          >
            <Code className="h-3.5 w-3.5" />
            <span>Apps Script Code (Auto-Append)</span>
          </button>
        </div>

        {/* Tab Content */}
        <div className="py-4">
          {/* TAB 1: Recorded Enquiries */}
          {activeTab === 'records' && (
            <div className="space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <p className="text-xs text-slate-300">
                  Every enquiry submitted through the website is stored securely in this register.
                </p>
                <div className="flex items-center gap-2">
                  <button
                    onClick={exportEnquiriesToCSV}
                    disabled={enquiries.length === 0}
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg border border-slate-600 bg-white/5 hover:bg-white/10 text-xs font-medium text-slate-200 disabled:opacity-40 transition-colors"
                  >
                    <Download className="h-3.5 w-3.5 text-amber-400" />
                    <span>Download CSV for Sheet</span>
                  </button>
                </div>
              </div>

              {enquiries.length === 0 ? (
                <div className="text-center py-10 rounded-xl border border-white/5 bg-black/20 text-slate-400">
                  <FileSpreadsheet className="h-10 w-10 mx-auto text-slate-500 mb-2 opacity-60" />
                  <p className="text-sm font-semibold text-slate-300">No client enquiries recorded yet</p>
                  <p className="text-xs text-slate-500 mt-1">
                    When visitors submit the consultation form, they will appear here and sync to your Google Sheet.
                  </p>
                </div>
              ) : (
                <div className="overflow-x-auto rounded-xl border border-white/10 bg-black/20 max-h-72 overflow-y-auto">
                  <table className="w-full text-left text-xs text-slate-300">
                    <thead className="bg-[#092244] text-[11px] font-semibold text-amber-300 uppercase tracking-wider sticky top-0">
                      <tr>
                        <th className="py-2.5 px-3">Ref ID</th>
                        <th className="py-2.5 px-3">Date</th>
                        <th className="py-2.5 px-3">Client</th>
                        <th className="py-2.5 px-3">Service</th>
                        <th className="py-2.5 px-3">Channel</th>
                        <th className="py-2.5 px-3 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      {enquiries.map((item) => (
                        <tr key={item.id} className="hover:bg-white/5 transition-colors">
                          <td className="py-2.5 px-3 font-mono text-amber-400 font-semibold">{item.id}</td>
                          <td className="py-2.5 px-3 text-slate-400 whitespace-nowrap">{item.formattedDate}</td>
                          <td className="py-2.5 px-3 font-medium text-white">
                            <div>{item.name}</div>
                            <div className="text-[10px] text-slate-400 font-mono">{item.mobile}</div>
                          </td>
                          <td className="py-2.5 px-3 text-slate-200">
                            <div>{item.serviceName}</div>
                            <div className="text-[10px] text-slate-400">{item.city}</div>
                          </td>
                          <td className="py-2.5 px-3">
                            <span className="inline-block px-2 py-0.5 rounded text-[10px] bg-[#C9A227]/20 text-[#E5C76B] font-semibold">
                              {item.preferredContact}
                            </span>
                          </td>
                          <td className="py-2.5 px-3 text-right space-x-1 whitespace-nowrap">
                            <button
                              onClick={() => handleCopyRow(item)}
                              className="p-1 rounded bg-white/5 hover:bg-white/15 text-slate-300 hover:text-white"
                              title="Copy row format to paste into Google Sheet"
                            >
                              {copiedRowId === item.id ? (
                                <Check className="h-3.5 w-3.5 text-emerald-400" />
                              ) : (
                                <Copy className="h-3.5 w-3.5" />
                              )}
                            </button>
                            <button
                              onClick={() => handleDelete(item.id)}
                              className="p-1 rounded bg-white/5 hover:bg-red-500/20 text-slate-400 hover:text-red-400"
                              title="Delete record"
                            >
                              <Trash2 className="h-3.5 w-3.5" />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          )}

          {/* TAB 2: Webhook Sync Configuration */}
          {activeTab === 'webhook' && (
            <div className="space-y-4 text-xs text-slate-300">
              <div className="rounded-xl border border-amber-500/20 bg-amber-500/10 p-4 text-amber-200 leading-relaxed">
                <p className="font-semibold text-amber-300 mb-1">
                  Automatic Live Writing into your Google Sheet
                </p>
                <p>
                  To automatically append rows into your Google Sheet without manual export, deploy the simple Google Apps Script (from the 3rd tab) as a Web App, and paste its URL below. The form will directly dispatch submissions in real time.
                </p>
              </div>

              <form onSubmit={handleSaveWebhook} className="space-y-3">
                <label className="block text-xs font-semibold text-slate-200">
                  Google Apps Script Web App URL:
                </label>
                <input
                  type="url"
                  value={webhookUrl}
                  onChange={(e) => setWebhookUrl(e.target.value)}
                  placeholder="https://script.google.com/macros/s/AKfycb.../exec"
                  className="w-full rounded-lg border border-slate-700 bg-black/40 px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:border-[#C9A227] focus:outline-none"
                />

                <div className="flex items-center justify-between pt-2">
                  <span className="text-[11px] text-slate-400">
                    Target Sheet: <span className="font-mono text-amber-300">1CzCTUTnZR_Y2naAEP8wKYlLUIcXafvao2SWMkAYCpmA</span>
                  </span>

                  <button
                    type="submit"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#C9A227] text-[#061B36] font-bold text-xs hover:bg-[#E5C76B] transition-colors shadow"
                  >
                    {saveSuccess ? <Check className="h-3.5 w-3.5" /> : <RefreshCw className="h-3.5 w-3.5" />}
                    <span>{saveSuccess ? 'Webhook Saved!' : 'Save Webhook URL'}</span>
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* TAB 3: Google Apps Script Code */}
          {activeTab === 'script' && (
            <div className="space-y-3 text-xs text-slate-300">
              <div className="flex items-center justify-between">
                <p className="text-slate-300">
                  Follow these 3 quick steps in your Google Sheet to enable 100% automated live row additions:
                </p>
                <button
                  onClick={handleCopyScript}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#C9A227] text-[#061B36] font-bold text-xs hover:bg-[#E5C76B] transition-colors shrink-0 shadow"
                >
                  {copiedScript ? <Check className="h-3.5 w-3.5 text-emerald-900" /> : <Copy className="h-3.5 w-3.5" />}
                  <span>{copiedScript ? 'Code Copied!' : 'Copy Script'}</span>
                </button>
              </div>

              <div className="rounded-lg bg-black/50 border border-white/10 p-3 font-mono text-[11px] text-slate-300 overflow-x-auto max-h-60 overflow-y-auto leading-relaxed whitespace-pre">
                {READY_GOOGLE_APPS_SCRIPT}
              </div>

              <div className="p-3 bg-white/5 rounded-lg border border-white/10 text-[11px] text-slate-400 space-y-1">
                <p className="font-semibold text-slate-200">How to activate in 2 minutes:</p>
                <p>1. Open your sheet: <a href={GOOGLE_SHEET_URL} target="_blank" rel="noreferrer" className="text-amber-300 underline">Open Sheet ↗</a></p>
                <p>2. In the top menu, go to <strong>Extensions &gt; Apps Script</strong></p>
                <p>3. Delete default code, paste the script above, click <strong>Save</strong></p>
                <p>4. Click <strong>Deploy &gt; New deployment &gt; Select type: Web app</strong></p>
                <p>5. Under "Who has access", select <strong>Anyone</strong>, then click Deploy</p>
                <p>6. Copy the Web app URL and paste into Tab 2 ("Automated Webhook Sync")!</p>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between">
          <span className="text-[11px] text-slate-400">
            Company DOCX • Verified Legal & Accounting System
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-xs text-white font-medium transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
