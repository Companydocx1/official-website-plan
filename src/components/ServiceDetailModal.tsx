import React from 'react';
import { X, MessageSquare, Phone, ExternalLink, CheckCircle2, AlertCircle, HelpCircle, FileText, ArrowRight } from 'lucide-react';
import { ServiceItem } from '../data/services';
import { COMPANY_PHONE, COMPANY_PHONE_RAW, generateWhatsAppLink } from '../utils/whatsapp';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onViewDocuments: (service: ServiceItem) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onViewDocuments,
}) => {
  if (!service) return null;

  const whatsappUrl = generateWhatsAppLink(service.name);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/60 backdrop-blur-xs">
      {/* Background click handler */}
      <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />

      {/* Modal Dialog Card */}
      <div className="relative z-10 w-full max-w-3xl rounded-xl border border-slate-200 bg-white shadow-2xl overflow-hidden my-6">
        
        {/* Modal Header */}
        <div className="bg-[#061B36] px-6 py-5 text-white flex items-start justify-between border-b border-[#0C2B55]">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#C9A227]">
                {service.categoryName}
              </span>
            </div>
            <h2 className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-white">
              {service.name}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="rounded-lg p-1.5 text-slate-400 hover:bg-[#0C2B55] hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="max-h-[75vh] overflow-y-auto p-6 space-y-6 text-slate-700 text-sm">
          
          {/* 1. Overview */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
              Overview
            </h4>
            <p className="text-sm leading-relaxed text-slate-800 font-normal">
              {service.overview}
            </p>
          </div>

          {/* 2. Who Needs & Why Required in 2 columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <h5 className="font-semibold text-xs text-[#061B36] uppercase tracking-wide mb-1.5">
                Who Needs This Service?
              </h5>
              <p className="text-xs text-slate-600 leading-relaxed">
                {service.whoNeeds}
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <h5 className="font-semibold text-xs text-[#061B36] uppercase tracking-wide mb-1.5">
                Why It Is Required
              </h5>
              <p className="text-xs text-slate-600 leading-relaxed">
                {service.whyRequired}
              </p>
            </div>
          </div>

          {/* 3. Basic Statutory Process */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
              Standard Process Stages
            </h4>
            <div className="space-y-2">
              {service.basicProcess.map((step, idx) => (
                <div key={idx} className="flex items-start gap-3 rounded-lg border border-slate-100 bg-white p-2.5">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#061B36] text-[10px] font-bold text-[#E5C76B]">
                    {idx + 1}
                  </span>
                  <span className="text-xs text-slate-700">{step}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 4. Professional Assistance Steps */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#C9A227] mb-2.5">
              How Company DOCX Assists You
            </h4>
            <ul className="grid grid-cols-1 gap-2">
              {service.assistanceSteps.map((step, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-[#C9A227] mt-0.5" />
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 5. Required Documents Preview */}
          <div className="rounded-lg border border-[#C9A227]/30 bg-[#FAF9F6] p-4">
            <div className="flex items-center justify-between mb-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#061B36] flex items-center gap-1.5">
                <FileText className="h-4 w-4 text-[#C9A227]" />
                <span>Typical Documents Required</span>
              </h4>
              <button
                onClick={() => {
                  onClose();
                  onViewDocuments(service);
                }}
                className="text-xs font-semibold text-[#061B36] hover:text-[#C9A227] flex items-center gap-1"
              >
                <span>Full Checklist</span>
                <ArrowRight className="h-3 w-3" />
              </button>
            </div>
            <ul className="space-y-1.5 text-xs text-slate-600">
              {service.documents.slice(0, 4).map((doc, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-[#C9A227] font-bold">•</span>
                  <span>{doc}</span>
                </li>
              ))}
              {service.documents.length > 4 && (
                <li className="text-[11px] text-slate-500 italic pl-3">
                  + {service.documents.length - 4} more specific documents
                </li>
              )}
            </ul>
          </div>

          {/* 6. Authority & Official Portal */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between rounded-lg border border-slate-200 bg-slate-50 p-3.5 gap-2">
            <div>
              <span className="text-[10px] uppercase font-bold text-slate-400">Statutory Authority</span>
              <p className="text-xs font-semibold text-slate-800">{service.authority}</p>
            </div>
            <a
              href={service.officialPortal}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-[#061B36] hover:text-[#C9A227] hover:underline"
            >
              <span>{service.portalName || 'Open Official Portal'}</span>
              <ExternalLink className="h-3.5 w-3.5 text-slate-400" />
            </a>
          </div>

          {/* 7. Common Questions (FAQ) */}
          {service.faq && service.faq.length > 0 && (
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5 flex items-center gap-1.5">
                <HelpCircle className="h-3.5 w-3.5 text-[#C9A227]" />
                <span>Common Questions</span>
              </h4>
              <div className="space-y-2">
                {service.faq.map((item, idx) => (
                  <div key={idx} className="rounded-lg border border-slate-100 bg-slate-50/50 p-3">
                    <p className="text-xs font-semibold text-slate-800">{item.question}</p>
                    <p className="mt-1 text-xs text-slate-600">{item.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 8. Conservative Legal & Fee Disclaimer */}
          <div className="rounded-lg border border-amber-200/80 bg-amber-50/60 p-3 text-xs text-amber-900 flex items-start gap-2">
            <AlertCircle className="h-4 w-4 shrink-0 text-amber-700 mt-0.5" />
            <div className="space-y-1">
              <p className="font-semibold text-amber-950">Statutory & Fee Notice:</p>
              <p className="text-[11px] leading-relaxed text-amber-900/90">
                Requirements may vary depending on applicant entity type, jurisdictional authorities, and current government rules. Please verify the latest requirements on the official government portal or contact Company DOCX.
              </p>
              <p className="text-[11px] font-medium text-amber-950">
                Government statutory fees and professional assistance fees are distinct. Contact us on WhatsApp for current applicable government fees and professional quotes.
              </p>
            </div>
          </div>

        </div>

        {/* Modal Sticky Footer CTAs */}
        <div className="border-t border-slate-200 bg-slate-50 px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-slate-500 text-center sm:text-left">
            <span>Direct consultation with legal & accounting team in Chennai</span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <a
              href={`tel:+${COMPANY_PHONE_RAW}`}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 rounded-md border border-slate-300 bg-white px-4 py-2.5 text-xs font-semibold text-slate-700 hover:bg-slate-100 hover:text-slate-900 transition-colors"
            >
              <Phone className="h-3.5 w-3.5 text-[#C9A227]" />
              <span>Call Firm</span>
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 rounded-md bg-[#C9A227] px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-[#061B36] hover:bg-[#E5C76B] shadow-sm transition-all"
            >
              <MessageSquare className="h-4 w-4" />
              <span>Send Enquiry on WhatsApp</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
