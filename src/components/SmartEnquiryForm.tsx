import React, { useState } from 'react';
import { ALL_SERVICES } from '../data/services';
import {
  MessageSquare,
  Send,
  FileSpreadsheet,
  CheckCircle2,
  ExternalLink,
  ShieldCheck,
  Sparkles,
  Info,
  Clock,
  ListFilter
} from 'lucide-react';
import { generateWhatsAppLink } from '../utils/whatsapp';
import {
  recordNewEnquiry,
  EnquiryRecord,
  GOOGLE_SHEET_URL,
  GOOGLE_SHEET_ID,
  getSavedEnquiries
} from '../utils/googleSheetSync';
import { EnquirySuccessModal } from './EnquirySuccessModal';
import { GoogleSheetSyncModal } from './GoogleSheetSyncModal';

interface SmartEnquiryFormProps {
  initialServiceName?: string;
  onSuccess?: () => void;
}

export const SmartEnquiryForm: React.FC<SmartEnquiryFormProps> = ({
  initialServiceName = 'Private Limited Company',
  onSuccess,
}) => {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [selectedService, setSelectedService] = useState(initialServiceName);
  const [businessType, setBusinessType] = useState('New Startup');
  const [city, setCity] = useState('Chennai');
  const [message, setMessage] = useState('');
  const [preferredContact, setPreferredContact] = useState<'WhatsApp' | 'Call' | 'Email'>('WhatsApp');
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedRecord, setSubmittedRecord] = useState<EnquiryRecord | null>(null);
  const [whatsAppRedirectUrl, setWhatsAppRedirectUrl] = useState<string>('');
  const [isSheetModalOpen, setIsSheetModalOpen] = useState(false);
  const [enquiryCount, setEnquiryCount] = useState<number>(() => getSavedEnquiries().length);

  const businessTypes = [
    'New Startup',
    'Sole Proprietorship',
    'Partnership Firm',
    'Private Limited Company',
    'Limited Liability Partnership (LLP)',
    'Public Limited Company',
    'Non-Profit / NGO / Trust / Section 8',
    'Factory / Manufacturing Unit',
    'Individual / Professional',
    'Other'
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !mobile.trim()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // 1. Record enquiry in Google Sheet storage engine
      const record = await recordNewEnquiry({
        name,
        mobile,
        email,
        serviceName: selectedService,
        businessType,
        city,
        message,
        preferredContact
      });

      // 2. Generate customized WhatsApp link
      const link = generateWhatsAppLink(selectedService, {
        name,
        mobile,
        email,
        serviceName: selectedService,
        businessType,
        city,
        message,
        preferredContact
      });

      setSubmittedRecord(record);
      setWhatsAppRedirectUrl(link);
      setEnquiryCount((prev) => prev + 1);

      if (onSuccess) {
        onSuccess();
      }
    } catch (err) {
      console.error('Enquiry submission failed', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className="relative rounded-2xl border-2 border-[#C9A227]/30 bg-white p-6 sm:p-8 shadow-xl shadow-slate-900/5 overflow-hidden">
        {/* Top Royal Accent Line */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#DFBE5D] via-[#C9A227] to-[#A87E14]" />

        {/* Header with Google Sheet Connection Badge */}
        <div className="border-b border-slate-100 pb-5 mb-6">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#061B36] text-[#E5C76B] text-[10px] font-bold uppercase tracking-wider">
              <Sparkles className="h-3 w-3 text-amber-400" />
              <span>Fast-Track Client Consultation</span>
            </div>

            {/* Google Sheet Live Sync Pill */}
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-50 px-3 py-1 text-[11px] font-medium text-emerald-800">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Google Sheet Sync Active</span>
              <a
                href={GOOGLE_SHEET_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-0.5 font-bold text-emerald-700 hover:text-emerald-900 underline"
                title="View your connected Google Sheet"
              >
                <span>View Sheet</span>
                <ExternalLink className="h-2.5 w-2.5" />
              </a>
            </div>
          </div>

          <h3 className="font-serif text-2xl font-bold text-[#061B36]">
            Send Service Enquiry
          </h3>
          <p className="mt-1 text-xs text-slate-500 leading-relaxed">
            Fill your requirements below. Your enquiry is recorded to your designated <strong>Google Sheet</strong> and formatted for instant WhatsApp consultation with our legal & accounting team.
          </p>
        </div>

        {/* Form Fields */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Full Name */}
            <div>
              <label htmlFor="enquiry-name" className="block text-xs font-bold text-[#061B36] mb-1">
                Your Full Name <span className="text-red-500">*</span>
              </label>
              <input
                id="enquiry-name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Rahul Sundaram"
                className="w-full rounded-lg border border-slate-300 bg-slate-50/50 px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:border-[#C9A227] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#C9A227]/20 transition-all font-medium"
              />
            </div>

            {/* Mobile Number */}
            <div>
              <label htmlFor="enquiry-mobile" className="block text-xs font-bold text-[#061B36] mb-1">
                Mobile Number <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-xs font-bold text-slate-500">
                  +91
                </span>
                <input
                  id="enquiry-mobile"
                  type="tel"
                  required
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  placeholder="9876543210"
                  className="w-full rounded-lg border border-slate-300 bg-slate-50/50 pl-11 pr-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:border-[#C9A227] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#C9A227]/20 transition-all font-medium"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Email */}
            <div>
              <label htmlFor="enquiry-email" className="block text-xs font-bold text-[#061B36] mb-1">
                Email Address <span className="text-slate-400 font-normal">(Optional)</span>
              </label>
              <input
                id="enquiry-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="e.g. rahul@company.com"
                className="w-full rounded-lg border border-slate-300 bg-slate-50/50 px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:border-[#C9A227] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#C9A227]/20 transition-all font-medium"
              />
            </div>

            {/* Service Selection */}
            <div>
              <label htmlFor="enquiry-service" className="block text-xs font-bold text-[#061B36] mb-1">
                Service Interested In <span className="text-red-500">*</span>
              </label>
              <select
                id="enquiry-service"
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
                className="w-full rounded-lg border border-slate-300 bg-slate-50/50 px-3 py-2.5 text-xs text-slate-900 focus:border-[#C9A227] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#C9A227]/20 transition-all font-medium"
              >
                {ALL_SERVICES.map((s) => (
                  <option key={s.id} value={s.name}>
                    {s.name} ({s.categoryName})
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Business Type */}
            <div>
              <label htmlFor="enquiry-business-type" className="block text-xs font-bold text-[#061B36] mb-1">
                Business Type / Legal Structure
              </label>
              <select
                id="enquiry-business-type"
                value={businessType}
                onChange={(e) => setBusinessType(e.target.value)}
                className="w-full rounded-lg border border-slate-300 bg-slate-50/50 px-3 py-2.5 text-xs text-slate-900 focus:border-[#C9A227] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#C9A227]/20 transition-all font-medium"
              >
                {businessTypes.map((type, idx) => (
                  <option key={idx} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            {/* City */}
            <div>
              <label htmlFor="enquiry-city" className="block text-xs font-bold text-[#061B36] mb-1">
                City / Location
              </label>
              <input
                id="enquiry-city"
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="e.g. Chennai, Tamil Nadu"
                className="w-full rounded-lg border border-slate-300 bg-slate-50/50 px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:border-[#C9A227] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#C9A227]/20 transition-all font-medium"
              />
            </div>
          </div>

          {/* Specific Requirement or Message */}
          <div>
            <label htmlFor="enquiry-message" className="block text-xs font-bold text-[#061B36] mb-1">
              Message or Specific Requirement
            </label>
            <textarea
              id="enquiry-message"
              rows={3}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tell us any specific requirements, current stage of business, deadline, or urgent compliances..."
              className="w-full rounded-lg border border-slate-300 bg-slate-50/50 px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:border-[#C9A227] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#C9A227]/20 transition-all font-medium resize-none"
            />
          </div>

          {/* Preferred Contact Mode */}
          <div>
            <span className="block text-xs font-bold text-[#061B36] mb-2">
              Preferred Contact Channel
            </span>
            <div className="flex flex-wrap gap-4">
              {(['WhatsApp', 'Call', 'Email'] as const).map((mode) => (
                <label
                  key={mode}
                  className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border text-xs font-medium cursor-pointer transition-all ${
                    preferredContact === mode
                      ? 'border-[#C9A227] bg-[#FAF8F3] text-[#061B36] font-bold shadow-sm'
                      : 'border-slate-200 bg-slate-50 text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  <input
                    type="radio"
                    name="preferredContact"
                    value={mode}
                    checked={preferredContact === mode}
                    onChange={() => setPreferredContact(mode)}
                    className="accent-[#C9A227] text-[#C9A227] focus:ring-[#C9A227]"
                  />
                  <span>{mode}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-[#DFBE5D] via-[#C9A227] to-[#A87E14] py-3.5 px-5 text-xs font-bold uppercase tracking-wider text-[#061B36] hover:brightness-105 active:scale-[0.99] transition-all shadow-md shadow-amber-900/10 cursor-pointer disabled:opacity-70"
            >
              <Send className="h-4 w-4" />
              <span>
                {isSubmitting ? 'Recording Enquiry...' : 'Submit Enquiry & Connect on WhatsApp'}
              </span>
            </button>
          </div>
        </form>

        {/* Google Sheet & Privacy Footer Info */}
        <div className="mt-5 pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-[11px] text-slate-500">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
            <span>Strict privacy. Enquiries stored in Google Sheet ID: <span className="font-mono text-slate-700 font-semibold">{GOOGLE_SHEET_ID.slice(0, 8)}...</span></span>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setIsSheetModalOpen(true)}
              className="inline-flex items-center gap-1 font-semibold text-[#061B36] hover:text-[#C9A227] underline transition-colors cursor-pointer"
            >
              <FileSpreadsheet className="h-3.5 w-3.5 text-emerald-600" />
              <span>Sheet Sync & Logs ({enquiryCount})</span>
            </button>

            <a
              href={GOOGLE_SHEET_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-0.5 text-slate-600 hover:text-slate-900 underline"
            >
              <span>Open Sheet ↗</span>
            </a>
          </div>
        </div>
      </div>

      {/* Success Modal with Message Sent Successfully & Auto-Redirect to WhatsApp */}
      {submittedRecord && (
        <EnquirySuccessModal
          record={submittedRecord}
          whatsAppUrl={whatsAppRedirectUrl}
          onClose={() => setSubmittedRecord(null)}
        />
      )}

      {/* Google Sheet Integration & Submissions Management Modal */}
      <GoogleSheetSyncModal
        isOpen={isSheetModalOpen}
        onClose={() => setIsSheetModalOpen(false)}
      />
    </>
  );
};
