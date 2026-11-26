import React from 'react';
import {
  ExternalLink,
  FileText,
  MessageSquare,
  ArrowRight,
  Building2,
  ShieldCheck,
  Scale,
  Rocket,
  HeartHandshake,
  Receipt,
  Award,
  Globe,
  Users,
  ShieldAlert,
  Cpu
} from 'lucide-react';
import { ServiceItem } from '../data/services';
import { generateWhatsAppLink } from '../utils/whatsapp';

interface ServiceCardProps {
  service: ServiceItem;
  onViewDetails: (service: ServiceItem) => void;
  onViewDocuments: (service: ServiceItem) => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  service,
  onViewDetails,
  onViewDocuments,
}) => {
  // Category icon mapping across all divisions
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'corporate-mca':
      case 'company':
        return Building2;
      case 'taxation-financial':
      case 'tax':
        return Receipt;
      case 'labour-hr':
        return Users;
      case 'licences-noc':
      case 'licences':
        return ShieldAlert;
      case 'import-export':
        return Globe;
      case 'ipr':
        return ShieldCheck;
      case 'iso-certifications':
        return Award;
      case 'legal-services':
      case 'legal':
        return Scale;
      case 'business-setup':
      case 'startup':
        return Rocket;
      case 'tech-digital-ai':
        return Cpu;
      case 'ngo':
        return HeartHandshake;
      default:
        return Award;
    }
  };

  const IconComponent = getCategoryIcon(service.category);
  const whatsappUrl = generateWhatsAppLink(service.name);

  return (
    <div className="group relative flex flex-col justify-between rounded-2xl border border-[#C9A227]/25 bg-white p-5 sm:p-6 shadow-sm hover:shadow-xl hover:border-[#C9A227] transition-all duration-300 hover:-translate-y-1">
      {/* Top Subtle Royal Crest Line */}
      <div className="absolute top-0 left-6 right-6 h-0.5 bg-gradient-to-r from-transparent via-[#C9A227]/30 to-transparent group-hover:via-[#C9A227] transition-all" />

      {/* Top Section */}
      <div>
        {/* Header row with Icon and category name */}
        <div className="flex items-center justify-between gap-2 mb-3.5">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[#092244] to-[#041021] text-[#E5C76B] border border-[#C9A227]/30 shadow-sm group-hover:from-[#C9A227] group-hover:to-[#A88319] group-hover:text-[#061B36] group-hover:border-transparent transition-all duration-300">
            <IconComponent className="h-5 w-5 transition-transform group-hover:scale-110" />
          </div>
          <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest text-right truncate bg-slate-50 border border-slate-200/80 px-2 py-0.5 rounded-full">
            {service.categoryName.split('&')[0].trim()}
          </span>
        </div>

        {/* Service Name */}
        <h3 className="font-serif text-base sm:text-lg font-bold text-[#061B36] group-hover:text-[#0A2B58] transition-colors line-clamp-1">
          {service.name}
        </h3>

        {/* Short description */}
        <p className="mt-2 text-xs leading-relaxed text-slate-600 line-clamp-2">
          {service.shortDescription}
        </p>

        {/* Authority / Ministry quiet meta */}
        <div className="mt-3.5 flex items-center gap-1.5 text-[11px] text-slate-500 pt-2.5 border-t border-slate-100">
          <span className="text-[#C9A227] font-bold">Portal:</span>
          <span className="truncate font-medium text-slate-700">{service.portalName || service.authority}</span>
        </div>
      </div>

      {/* Action Buttons Matrix */}
      <div className="mt-5 pt-3.5 border-t border-slate-100 flex flex-col gap-2">
        {/* Row 1: View Details & Required Documents */}
        <div className="grid grid-cols-2 gap-2">
          <button
            onClick={() => onViewDetails(service)}
            className="flex items-center justify-center gap-1 rounded-lg bg-[#061B36] px-2.5 py-2.5 text-xs font-semibold text-white hover:bg-[#0A2B58] active:scale-95 transition-all cursor-pointer shadow-xs"
          >
            <span>View Details</span>
            <ArrowRight className="h-3 w-3" />
          </button>

          <button
            onClick={() => onViewDocuments(service)}
            className="flex items-center justify-center gap-1 rounded-lg border border-slate-300 bg-slate-50 px-2.5 py-2.5 text-xs font-medium text-slate-700 hover:border-[#C9A227] hover:bg-white hover:text-[#061B36] active:scale-95 transition-all cursor-pointer"
          >
            <FileText className="h-3 w-3 text-[#C9A227]" />
            <span>Documents</span>
          </button>
        </div>

        {/* Row 2: WhatsApp Enquiry & Official Portal */}
        <div className="grid grid-cols-2 gap-2">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1.5 rounded-lg bg-gradient-to-r from-[#DFBE5D] via-[#C9A227] to-[#A87E14] px-2 py-2 text-xs font-bold text-[#061B36] hover:brightness-105 active:scale-95 transition-all shadow-xs"
          >
            <MessageSquare className="h-3.5 w-3.5" />
            <span>WhatsApp</span>
          </a>

          <a
            href={service.officialPortal}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1 rounded-lg border border-slate-200 bg-white px-2 py-2 text-xs font-medium text-slate-600 hover:text-slate-900 hover:border-slate-300 hover:bg-slate-50 transition-all"
          >
            <ExternalLink className="h-3 w-3 text-slate-400" />
            <span className="truncate">Govt Portal</span>
          </a>
        </div>
      </div>
    </div>
  );
};
