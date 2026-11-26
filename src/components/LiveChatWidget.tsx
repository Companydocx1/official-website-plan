import React, { useState, useEffect, useRef } from 'react';
import {
  MessageSquare,
  X,
  Send,
  ExternalLink,
  ChevronDown,
  CheckCircle2,
} from 'lucide-react';
import {
  openWhatsApp,
  generateWhatsAppLink,
  COMPANY_PHONE,
} from '../utils/whatsapp';
import { CompanyDocxLogo } from './CompanyDocxLogo';

const QUICK_TOPICS = [
  'Private Limited Company',
  'GST Registration & Filing',
  'Trademark Registration',
  'Annual Compliance & Audit',
] as const;

export const LiveChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isInviteDismissed, setIsInviteDismissed] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [justLaunched, setJustLaunched] = useState<boolean>(false);

  const inputRef = useRef<HTMLTextAreaElement | null>(null);

  // Focus composer when chat drawer opens
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        inputRef.current?.focus();
      }, 120);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const trimmedMessage = message.trim();

  const buildFormData = () =>
    trimmedMessage
      ? {
          message: trimmedMessage,
          serviceName: selectedTopic || 'General Enquiry',
          intent: 'general' as const,
        }
      : undefined;

  const currentWhatsAppUrl = generateWhatsAppLink(
    selectedTopic || undefined,
    buildFormData()
  );

  const handleStartWhatsAppChat = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    openWhatsApp(selectedTopic || undefined, buildFormData());
    setJustLaunched(true);
    setTimeout(() => setJustLaunched(false), 5000);
  };

  const handleQuickTopicClick = (topic: string) => {
    setSelectedTopic((prev) => (prev === topic ? '' : topic));
  };

  const handleComposerKeyDown = (
    e: React.KeyboardEvent<HTMLTextAreaElement>
  ) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleStartWhatsAppChat();
    }
  };

  return (
    <aside
      aria-label="Live chat and WhatsApp support"
      className="fixed bottom-[70px] right-3 z-40 sm:bottom-6 sm:right-6 flex flex-col items-end"
    >
      {/* Expanded Lightweight Live Chat Panel */}
      {isOpen && (
        <div
          id="company-docx-live-chat"
          role="dialog"
          aria-modal="false"
          aria-labelledby="live-chat-title"
          className="mb-3 w-[350px] sm:w-[376px] max-w-[calc(100vw-1.5rem)] overflow-hidden rounded-2xl border border-[#C9A227]/45 bg-[#FAF8F3] shadow-2xl shadow-[#041021]/30 transition-all duration-200"
        >
          {/* Royal Navy Header */}
          <div className="bg-royal-navy px-4 py-3.5 text-white border-b border-[#C9A227]/30 flex items-center justify-between gap-3">
            <div className="flex items-center gap-3 min-w-0">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 border border-[#C9A227]/35">
                <CompanyDocxLogo variant="mark" theme="dark" size="sm" />
              </div>
              <div className="min-w-0">
                <h2
                  id="live-chat-title"
                  className="font-serif text-sm font-bold tracking-wide text-white truncate"
                >
                  Company DOCX Desk
                </h2>
                <p className="text-[11px] text-[#EED17B] truncate">
                  Instant WhatsApp Consultation · Chennai
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close live chat"
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-slate-300 hover:bg-white/10 hover:text-white transition-colors cursor-pointer"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Chat Body */}
          <div className="p-4 space-y-3.5">
            {/* Advisor Welcome Bubble */}
            <div className="rounded-xl rounded-tl-sm border border-[#C9A227]/25 bg-white p-3.5 shadow-sm">
              <p className="text-[11px] font-semibold tracking-wide text-[#8E6E12] mb-1">
                Advisory Team · Law &amp; Accounting
              </p>
              <p className="text-[13px] leading-relaxed text-[#172033]">
                Welcome! Ask about registrations, GST filings, compliance, or
                fees. Select a topic or type your question to continue directly
                on WhatsApp.
              </p>
            </div>

            {/* Quick Topic Selectors */}
            <div>
              <p className="text-[11px] font-semibold text-slate-600 mb-2">
                Quick enquiry topic (optional)
              </p>
              <div className="grid grid-cols-2 gap-1.5">
                {QUICK_TOPICS.map((topic) => {
                  const isSelected = selectedTopic === topic;
                  return (
                    <button
                      key={topic}
                      type="button"
                      onClick={() => handleQuickTopicClick(topic)}
                      aria-pressed={isSelected}
                      className={`text-left text-xs font-medium px-2.5 py-2 rounded-lg border transition-colors truncate cursor-pointer ${
                        isSelected
                          ? 'bg-[#061B36] text-[#EED17B] border-[#C9A227]'
                          : 'bg-white text-[#172033] border-[#C9A227]/25 hover:border-[#C9A227]/70 hover:bg-[#FCF5DC]/40'
                      }`}
                      title={topic}
                    >
                      {topic}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Lightweight Message Form */}
            <form onSubmit={handleStartWhatsAppChat} className="space-y-3">
              <div>
                <label htmlFor="live-chat-message" className="sr-only">
                  Your message for Company DOCX
                </label>
                <textarea
                  ref={inputRef}
                  id="live-chat-message"
                  rows={2}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyDown={handleComposerKeyDown}
                  placeholder="Type your question (e.g., Pvt Ltd registration fees)..."
                  className="w-full resize-none rounded-xl border border-[#C9A227]/35 bg-white px-3.5 py-2.5 text-sm text-[#172033] placeholder:text-slate-400 focus:border-[#C9A227] focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-[#25D366] hover:bg-[#1EB858] active:scale-[0.99] px-4 py-3 text-sm font-semibold text-white shadow-md transition-all duration-150 cursor-pointer whitespace-nowrap"
              >
                <MessageSquare className="h-4 w-4 fill-current shrink-0" />
                <span>Start WhatsApp Chat</span>
                <Send className="h-3.5 w-3.5 shrink-0" />
              </button>
            </form>

            {/* Launch Confirmation & Direct Fallback Link */}
            {justLaunched && (
              <div className="flex items-center justify-between gap-2 rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-2 text-xs text-emerald-900">
                <span className="flex items-center gap-1.5 font-medium">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-700 shrink-0" />
                  WhatsApp chat opened
                </span>
                <a
                  href={currentWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-semibold text-emerald-800 underline hover:text-emerald-950 whitespace-nowrap"
                >
                  Open link
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            )}

            <div className="flex items-center justify-between text-[11px] text-slate-500 pt-0.5">
              <span>Direct desk: {COMPANY_PHONE}</span>
              <a
                href={currentWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-medium text-[#0A2548] hover:text-[#8E6E12] transition-colors whitespace-nowrap"
              >
                Direct link
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Visible Desktop Invitation Callout (shown when closed and not dismissed) */}
      {!isOpen && !isInviteDismissed && (
        <div className="hidden sm:flex flex-col items-end mb-2.5 max-w-[290px]">
          <div className="relative rounded-2xl border border-[#C9A227]/45 bg-white p-3.5 shadow-xl shadow-[#041021]/12 text-[#172033]">
            <button
              type="button"
              onClick={() => setIsInviteDismissed(true)}
              aria-label="Dismiss chat invitation"
              className="absolute top-2 right-2 flex h-6 w-6 items-center justify-center rounded-full text-slate-400 hover:bg-slate-100 hover:text-slate-700 transition-colors cursor-pointer"
            >
              <X className="h-3.5 w-3.5" />
            </button>

            <p className="text-[11px] font-semibold text-[#8E6E12] pr-6">
              Need help with filings or registration?
            </p>
            <p className="mt-1 text-xs leading-relaxed text-slate-600">
              Chat live with our legal &amp; accounting desk directly on
              WhatsApp.
            </p>

            <div className="mt-2.5 flex items-center gap-2">
              <button
                type="button"
                onClick={() => setIsOpen(true)}
                className="flex-1 rounded-lg bg-[#061B36] hover:bg-[#0A2548] px-3 py-1.5 text-xs font-semibold text-[#EED17B] transition-colors cursor-pointer whitespace-nowrap"
              >
                Ask a Question
              </button>
              <button
                type="button"
                onClick={() => handleStartWhatsAppChat()}
                className="inline-flex items-center gap-1 rounded-lg bg-[#25D366] hover:bg-[#1EB858] px-3 py-1.5 text-xs font-semibold text-white transition-colors cursor-pointer whitespace-nowrap"
              >
                <MessageSquare className="h-3 w-3 fill-current" />
                <span>WhatsApp</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main Visible Chat Launcher Button */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-controls="company-docx-live-chat"
        aria-label={
          isOpen
            ? 'Minimize live chat widget'
            : 'Open live chat to message Company DOCX on WhatsApp'
        }
        className="group flex items-center gap-2.5 rounded-full bg-[#061B36] hover:bg-[#0A2548] border border-[#C9A227]/65 text-white pl-2 pr-4 py-2 shadow-2xl shadow-[#041021]/35 transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
      >
        <span className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-[#25D366] text-white shadow-sm transition-transform duration-200 group-hover:scale-105">
          {isOpen ? (
            <ChevronDown className="h-5 w-5" />
          ) : (
            <MessageSquare className="h-5 w-5 fill-current" />
          )}
        </span>
        <span className="flex flex-col text-left leading-tight">
          <span className="text-xs sm:text-sm font-semibold text-white whitespace-nowrap">
            {isOpen ? 'Close Chat' : 'Live Chat'}
          </span>
          {!isOpen && (
            <span className="hidden sm:block text-[10px] font-medium text-[#EED17B] whitespace-nowrap">
              WhatsApp Desk
            </span>
          )}
        </span>
      </button>
    </aside>
  );
};
