import React, { useState } from 'react';
import { ALL_SERVICES, ServiceItem } from '../data/services';
import { FileCheck, AlertCircle, MessageSquare, Download, Share2, Check, ArrowRight } from 'lucide-react';
import { generateWhatsAppLink } from '../utils/whatsapp';

interface DocumentsSectionProps {
  initialServiceId?: string;
  onSelectServiceDetails: (service: ServiceItem) => void;
}

export const DocumentsSection: React.FC<DocumentsSectionProps> = ({
  initialServiceId = 'gst-registration',
  onSelectServiceDetails,
}) => {
  const [selectedServiceId, setSelectedServiceId] = useState<string>(initialServiceId);
  const [copied, setCopied] = useState(false);

  const selectedService = ALL_SERVICES.find((s) => s.id === selectedServiceId) || ALL_SERVICES[0];

  const handleCopyChecklist = () => {
    const checklistText = [
      `COMPANY DOCX - Document Checklist: ${selectedService.name}`,
      `Statutory Authority: ${selectedService.authority}`,
      '',
      'Required Documents:',
      ...selectedService.documents.map((d, i) => `${i + 1}. ${d}`),
      '',
      'Note: Document requirements can vary depending on applicant type, business structure and current government requirements.',
      'Office: Flat No. 137(68), Fathima Paradise, Prakasam Road, Broadway, Chennai – 600 001',
      'WhatsApp: +91 8870002141'
    ].join('\n');

    navigator.clipboard.writeText(checklistText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const whatsappChecklistLink = generateWhatsAppLink(
    `${selectedService.name} (Personalised Document Checklist)`
  );

  return (
    <section id="documents" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="mb-8 border-b border-slate-200 pb-4">
        <span className="text-xs font-bold uppercase tracking-widest text-[#C9A227]">
          Statutory Compliance Prerequisite
        </span>
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#061B36] mt-1">
          Required Documents Checklist
        </h2>
        <p className="mt-2 text-xs sm:text-sm text-slate-600 max-w-3xl">
          Select any legal, corporate, tax, or licensing service below to inspect the service-specific documentary records needed for statutory submission.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Service Selector & Info */}
        <div className="lg:col-span-4 rounded-xl border border-slate-200 bg-white p-5 shadow-xs">
          <label htmlFor="service-select" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
            Select Service:
          </label>
          <div className="relative">
            <select
              id="service-select"
              value={selectedServiceId}
              onChange={(e) => setSelectedServiceId(e.target.value)}
              className="w-full rounded-lg border border-slate-300 bg-slate-50 py-3 pl-3 pr-8 text-xs sm:text-sm font-semibold text-[#061B36] focus:border-[#C9A227] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#C9A227]"
            >
              {ALL_SERVICES.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.name} ({s.categoryName.split('&')[0].trim()})
                </option>
              ))}
            </select>
          </div>

          {/* Quick Context Card */}
          <div className="mt-6 rounded-lg bg-[#FAF9F6] border border-slate-200 p-4">
            <span className="text-[10px] font-bold text-[#C9A227] uppercase tracking-wider">
              Selected Service
            </span>
            <h3 className="font-serif text-base font-bold text-[#061B36] mt-0.5">
              {selectedService.name}
            </h3>
            <p className="mt-2 text-xs text-slate-600 leading-relaxed">
              {selectedService.shortDescription}
            </p>

            <div className="mt-4 pt-3 border-t border-slate-200/80 space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-slate-500">Authority:</span>
                <span className="font-medium text-slate-800 text-right truncate max-w-[180px]">
                  {selectedService.authority}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Document Count:</span>
                <span className="font-semibold text-[#061B36]">
                  {selectedService.documents.length} verified items
                </span>
              </div>
            </div>

            <div className="mt-5">
              <button
                onClick={() => onSelectServiceDetails(selectedService)}
                className="w-full flex items-center justify-center gap-1.5 rounded bg-[#061B36] py-2 text-xs font-semibold text-white hover:bg-[#0C2B55] transition-colors"
              >
                <span>View Full Service Details</span>
                <ArrowRight className="h-3 w-3" />
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: Tailored Document Checklist */}
        <div className="lg:col-span-8 rounded-xl border border-slate-200 bg-white p-6 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-slate-100 pb-4 gap-3">
            <div>
              <span className="text-[11px] font-bold text-[#C9A227] uppercase tracking-wider">
                Official Checklist
              </span>
              <h3 className="font-serif text-lg sm:text-xl font-bold text-[#061B36]">
                Typical Documents Required for {selectedService.name}
              </h3>
            </div>

            {/* Quick Actions */}
            <div className="flex items-center gap-2">
              <button
                onClick={handleCopyChecklist}
                className="inline-flex items-center gap-1.5 rounded border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-100 transition-colors"
                title="Copy checklist to clipboard"
              >
                {copied ? <Check className="h-3.5 w-3.5 text-emerald-600" /> : <Share2 className="h-3.5 w-3.5 text-slate-500" />}
                <span>{copied ? 'Copied!' : 'Copy List'}</span>
              </button>
            </div>
          </div>

          {/* Checklist Items */}
          <div className="mt-6 space-y-3">
            {selectedService.documents.map((doc, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 rounded-lg border border-slate-100 bg-[#FAF9F6]/80 p-3.5 transition-colors hover:border-[#C9A227]/40 hover:bg-white"
              >
                <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#061B36] text-white mt-0.5">
                  <FileCheck className="h-3 w-3 text-[#E5C76B]" />
                </div>
                <div className="text-xs sm:text-sm text-slate-800 font-medium">
                  {doc}
                </div>
              </div>
            ))}
          </div>

          {/* Service Disclaimer Box */}
          <div className="mt-6 rounded-lg border border-amber-200/90 bg-amber-50/70 p-4 text-xs text-amber-900 flex items-start gap-2.5">
            <AlertCircle className="h-4 w-4 shrink-0 text-amber-700 mt-0.5" />
            <div>
              <p className="font-semibold text-amber-950">Statutory Document Disclaimer:</p>
              <p className="mt-1 leading-relaxed text-amber-900/90">
                Document requirements can vary depending on applicant type, business structure and current government requirements. Please verify the latest requirements before submission.
              </p>
              <p className="mt-1.5 font-medium text-amber-950">
                Documents vary depending on your case. Contact us on WhatsApp for a personalised checklist.
              </p>
            </div>
          </div>

          {/* WhatsApp Personalised Checklist CTA */}
          <div className="mt-6 pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
            <span className="text-xs text-slate-500 text-center sm:text-left">
              Need assistance reviewing your documents before filing?
            </span>
            <a
              href={whatsappChecklistLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded bg-[#C9A227] px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-[#061B36] hover:bg-[#E5C76B] transition-colors shadow-xs"
            >
              <MessageSquare className="h-4 w-4" />
              <span>Get Personalised Checklist on WhatsApp</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
