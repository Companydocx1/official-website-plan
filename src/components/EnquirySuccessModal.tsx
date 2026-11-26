import React, { useState, useEffect } from 'react';
import {
  CheckCircle2,
  MessageSquare,
  Copy,
  Check,
  ExternalLink,
  X,
  FileSpreadsheet,
  Pause,
  Play,
  ShieldCheck,
  Clock,
  User,
  Phone,
  Building2,
  MapPin,
  Sparkles
} from 'lucide-react';
import { EnquiryRecord, GOOGLE_SHEET_URL } from '../utils/googleSheetSync';

interface EnquirySuccessModalProps {
  record: EnquiryRecord | null;
  whatsAppUrl: string;
  onClose: () => void;
}

export const EnquirySuccessModal: React.FC<EnquirySuccessModalProps> = ({
  record,
  whatsAppUrl,
  onClose,
}) => {
  const [countdown, setCountdown] = useState<number>(3);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const [hasRedirected, setHasRedirected] = useState<boolean>(false);

  useEffect(() => {
    if (!record || isPaused || hasRedirected) return;

    if (countdown <= 0) {
      setHasRedirected(true);
      window.open(whatsAppUrl, '_blank', 'noopener,noreferrer');
      return;
    }

    const timer = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [countdown, isPaused, hasRedirected, whatsAppUrl, record]);

  if (!record) return null;

  const handleManualRedirect = () => {
    setHasRedirected(true);
    window.open(whatsAppUrl, '_blank', 'noopener,noreferrer');
  };

  const handleCopy = () => {
    const formattedText = [
      '👑 *COMPANY DOCX - LAW & ACCOUNTING FIRM*',
      `*Reference:* #${record.id}`,
      `*Date:* ${record.formattedDate}`,
      '',
      `*Client Name:* ${record.name}`,
      `*Contact:* ${record.mobile}`,
      record.email && record.email !== 'Not Provided' ? `*Email:* ${record.email}` : null,
      `*Service:* ${record.serviceName}`,
      `*Entity Type:* ${record.businessType}`,
      `*City:* ${record.city}`,
      `*Preferred Mode:* ${record.preferredContact}`,
      '',
      record.message ? `*Notes:* ${record.message}` : null,
      '',
      'Please advise required documents, timeline, and fee structure.',
      'Thank you.'
    ].filter(Boolean).join('\n');

    navigator.clipboard.writeText(formattedText);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2500);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="success-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-xl overflow-hidden rounded-2xl border-2 border-[#C9A227]/40 bg-gradient-to-b from-[#061B36] via-[#041427] to-[#020B17] text-white shadow-2xl shadow-black/60 p-6 sm:p-8">
        {/* Decorative Gold Radial Glow */}
        <div className="absolute -top-24 -left-24 w-60 h-60 bg-[#C9A227]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-60 h-60 bg-[#0C2B55]/30 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 rounded-full p-2 text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Royal Crest Header */}
        <div className="text-center space-y-3 relative z-10">
          <div className="inline-flex relative items-center justify-center">
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#C9A227] to-[#F3E0A3] blur-md opacity-40 animate-pulse" />
            <div className="relative flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full bg-gradient-to-br from-[#122A4E] to-[#061B36] border-2 border-[#C9A227] shadow-lg">
              <CheckCircle2 className="h-9 w-9 sm:h-11 sm:w-11 text-[#E5C76B]" />
            </div>
            <span className="absolute -bottom-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-[#C9A227] text-[#061B36] shadow-sm">
              <Sparkles className="h-3.5 w-3.5" />
            </span>
          </div>

          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C9A227]/15 border border-[#C9A227]/30 text-[#E5C76B] text-[11px] font-semibold tracking-wider uppercase mb-1">
              <ShieldCheck className="h-3.5 w-3.5" />
              Verified Submission
            </div>
            <h3
              id="success-modal-title"
              className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-100 to-amber-300"
            >
              Message Sent Successfully!
            </h3>
            <p className="mt-1 text-xs sm:text-sm text-slate-300 max-w-md mx-auto">
              Your consultation request is logged under Reference <strong className="text-amber-300 font-mono">#{record.id}</strong> and prepared for our Senior Counsel.
            </p>
          </div>
        </div>

        {/* Auto Redirect Countdown Banner */}
        <div className="mt-6 rounded-xl border border-[#C9A227]/30 bg-[#092244]/80 p-4 text-center backdrop-blur-sm relative overflow-hidden">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2.5">
              <div className="relative flex h-8 w-8 items-center justify-center rounded-full bg-[#C9A227] text-[#061B36] font-bold text-sm shadow">
                {countdown > 0 ? countdown : '0'}
              </div>
              <div className="text-left">
                <p className="font-semibold text-white">
                  {hasRedirected
                    ? 'WhatsApp consultation window has been launched.'
                    : isPaused
                    ? 'Automatic redirect paused.'
                    : `Redirecting to WhatsApp in ${countdown} second${countdown === 1 ? '' : 's'}...`}
                </p>
                <p className="text-[11px] text-slate-400">
                  Connects directly with Official Firm Desk: +91 8870002141
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setIsPaused(!isPaused)}
                className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg border border-slate-600 bg-white/5 hover:bg-white/10 text-[11px] text-slate-300 transition-colors"
                title={isPaused ? 'Resume countdown' : 'Pause automatic redirect'}
              >
                {isPaused ? <Play className="h-3 w-3 text-emerald-400" /> : <Pause className="h-3 w-3 text-amber-400" />}
                <span>{isPaused ? 'Resume' : 'Pause'}</span>
              </button>

              <button
                type="button"
                onClick={handleManualRedirect}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gradient-to-r from-[#D4AF37] to-[#C9A227] text-[#061B36] font-bold text-[11px] hover:brightness-110 shadow transition-all"
              >
                <MessageSquare className="h-3.5 w-3.5" />
                <span>Open WhatsApp</span>
              </button>
            </div>
          </div>

          {/* Animated Countdown Progress Bar */}
          {!isPaused && countdown > 0 && (
            <div className="w-full bg-slate-800/80 h-1.5 rounded-full overflow-hidden mt-3">
              <div
                className="bg-gradient-to-r from-amber-300 to-amber-500 h-full transition-all duration-1000 ease-linear rounded-full"
                style={{ width: `${(countdown / 3) * 100}%` }}
              />
            </div>
          )}
        </div>

        {/* Enquiry Summary Card */}
        <div className="mt-5 rounded-xl border border-white/10 bg-black/25 p-4 sm:p-5 space-y-3.5 text-xs text-slate-300">
          <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
            <span className="text-amber-400 font-semibold uppercase tracking-wider text-[10px] flex items-center gap-1">
              <ShieldCheck className="h-3 w-3" /> Enquiry Snapshot
            </span>
            <span className="text-slate-400 font-mono text-[11px]">
              {record.formattedDate}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="flex items-start gap-2">
              <User className="h-3.5 w-3.5 text-[#C9A227] mt-0.5 shrink-0" />
              <div>
                <p className="text-[10px] text-slate-400 uppercase font-medium">Client Name</p>
                <p className="font-semibold text-white">{record.name}</p>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <Phone className="h-3.5 w-3.5 text-[#C9A227] mt-0.5 shrink-0" />
              <div>
                <p className="text-[10px] text-slate-400 uppercase font-medium">Contact Number</p>
                <p className="font-semibold text-white">{record.mobile}</p>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <Building2 className="h-3.5 w-3.5 text-[#C9A227] mt-0.5 shrink-0" />
              <div>
                <p className="text-[10px] text-slate-400 uppercase font-medium">Service Requested</p>
                <p className="font-semibold text-amber-200">{record.serviceName}</p>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <MapPin className="h-3.5 w-3.5 text-[#C9A227] mt-0.5 shrink-0" />
              <div>
                <p className="text-[10px] text-slate-400 uppercase font-medium">Location & Entity</p>
                <p className="font-semibold text-white">{record.city} • {record.businessType}</p>
              </div>
            </div>
          </div>

          {/* Google Sheet Storage Status */}
          <div className="pt-2 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 bg-[#061B36]/60 p-2.5 rounded-lg border border-[#C9A227]/20">
            <div className="flex items-center gap-2">
              <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <div className="text-[11px]">
                <span className="font-semibold text-white">Google Sheet Storage Active:</span>{' '}
                <span className="text-slate-300">Logged to official spreadsheet</span>
              </div>
            </div>
            <a
              href={GOOGLE_SHEET_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[11px] font-medium text-amber-300 hover:text-amber-200 underline shrink-0 transition-colors"
            >
              <FileSpreadsheet className="h-3.5 w-3.5" />
              <span>Open Google Sheet ↗</span>
            </a>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-3 pt-3 border-t border-white/10">
          <button
            type="button"
            onClick={handleCopy}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg border border-slate-600 bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-200 transition-colors"
          >
            {isCopied ? <Check className="h-4 w-4 text-emerald-400" /> : <Copy className="h-4 w-4 text-slate-400" />}
            <span>{isCopied ? 'Copied to Clipboard' : 'Copy Formatted Text'}</span>
          </button>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              type="button"
              onClick={onClose}
              className="w-1/2 sm:w-auto px-4 py-2.5 rounded-lg border border-transparent text-xs text-slate-400 hover:text-white transition-colors"
            >
              Stay on Website
            </button>
            <button
              type="button"
              onClick={handleManualRedirect}
              className="w-1/2 sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#DFBE5D] via-[#C9A227] to-[#A87E14] px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-[#061B36] shadow-lg shadow-amber-900/30 hover:brightness-110 active:scale-95 transition-all"
            >
              <MessageSquare className="h-4 w-4" />
              <span>Proceed to WhatsApp</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
