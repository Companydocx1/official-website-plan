import React from 'react';
import { Phone, Mail, MapPin, MessageSquare, FileSpreadsheet, ExternalLink, ShieldCheck } from 'lucide-react';
import {
  COMPANY_PHONE,
  COMPANY_PHONE_RAW,
  COMPANY_EMAIL,
  COMPANY_ADDRESS,
  GOOGLE_MAPS_LINK,
  generateWhatsAppLink
} from '../utils/whatsapp';
import { GOOGLE_SHEET_URL, GOOGLE_SHEET_ID } from '../utils/googleSheetSync';
import { CompanyDocxLogo } from './CompanyDocxLogo';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onFilterCategory: (categoryId: string) => void;
  onOpenSheetSync?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onFilterCategory, onOpenSheetSync }) => {
  const serviceCategories = [
    { id: 'corporate-mca', label: '1. Corporate & MCA Services' },
    { id: 'taxation-financial', label: '2. Taxation & Financial Services' },
    { id: 'labour-hr', label: '3. Labour & HR Compliance' },
    { id: 'licences-noc', label: '4. Government Licences & Fire NOC' },
    { id: 'import-export', label: '5. Import, Export & International' },
    { id: 'ipr', label: '6. Intellectual Property (IPR)' },
    { id: 'iso-certifications', label: '7. ISO & Certification Services' },
    { id: 'legal-services', label: '8. Legal Services & Contracts' },
    { id: 'business-setup', label: '9. Business Setup & Startups' },
    { id: 'tech-digital-ai', label: '10. Digital, AI & Technology' }
  ];

  return (
    <footer className="bg-[#020B17] text-white border-t border-[#C9A227]/30 pb-24 sm:pb-8">
      {/* Upper Footer Grid */}
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand & Office Statement */}
          <div className="lg:col-span-4 space-y-4">
            <CompanyDocxLogo variant="horizontal" theme="dark" size="md" />
            
            <p className="text-xs leading-relaxed text-slate-300">
              Professional Legal, Accounting & Business Compliance Services. Assisting entrepreneurs, private companies, industrial units, trusts, and commercial enterprises with statutory registrations, taxation, and legal documentation.
            </p>

            <div className="pt-2 text-xs text-slate-400 space-y-2">
              <p className="flex items-start gap-2">
                <MapPin className="h-3.5 w-3.5 text-[#C9A227] shrink-0 mt-0.5" />
                <span className="text-slate-300">{COMPANY_ADDRESS}</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="h-3.5 w-3.5 text-[#C9A227] shrink-0" />
                <a href={`tel:+${COMPANY_PHONE_RAW}`} className="hover:text-amber-300 text-slate-300 transition-colors">
                  {COMPANY_PHONE}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="h-3.5 w-3.5 text-[#C9A227] shrink-0" />
                <a href={`mailto:${COMPANY_EMAIL}`} className="hover:text-amber-300 text-slate-300 transition-colors">
                  {COMPANY_EMAIL}
                </a>
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#C9A227]">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-[#E5C76B] transition-colors focus:outline-none cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-[#E5C76B] transition-colors focus:outline-none cursor-pointer"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('documents')}
                  className="hover:text-[#E5C76B] transition-colors focus:outline-none cursor-pointer"
                >
                  Documents Checklist
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('portals')}
                  className="hover:text-[#E5C76B] transition-colors focus:outline-none cursor-pointer"
                >
                  Government Portals
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('how-it-works')}
                  className="hover:text-[#E5C76B] transition-colors focus:outline-none cursor-pointer"
                >
                  How It Works
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-[#E5C76B] transition-colors focus:outline-none cursor-pointer"
                >
                  Why Choose Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-[#E5C76B] transition-colors focus:outline-none cursor-pointer"
                >
                  Contact & Desk
                </button>
              </li>
            </ul>
          </div>

          {/* Practice Areas (10 divisions) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#C9A227]">
              10 Practice Divisions
            </h4>
            <ul className="grid grid-cols-1 gap-2 text-xs text-slate-300">
              {serviceCategories.map((cat) => (
                <li key={cat.id}>
                  <button
                    onClick={() => {
                      onFilterCategory(cat.id);
                      onNavigate('services');
                    }}
                    className="hover:text-[#E5C76B] text-left transition-colors focus:outline-none truncate max-w-full cursor-pointer"
                  >
                    {cat.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect & Google Sheet */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#C9A227]">
              Direct Assistance
            </h4>
            <p className="text-xs text-slate-400">
              Reach our Broadway, Chennai office directly for document verifications, Fire NOC consultations, and statutory filings.
            </p>

            <div className="pt-2 flex flex-col gap-2">
              <a
                href={generateWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#DFBE5D] via-[#C9A227] to-[#A87E14] px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-[#061B36] hover:brightness-110 transition-all shadow"
              >
                <MessageSquare className="h-4 w-4" />
                <span>Chat on WhatsApp</span>
              </a>

              <a
                href={GOOGLE_SHEET_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 rounded-lg border border-emerald-500/40 bg-emerald-950/30 px-4 py-2 text-xs font-medium text-emerald-300 hover:bg-emerald-900/40 transition-colors"
              >
                <FileSpreadsheet className="h-3.5 w-3.5" />
                <span>Open Google Sheet (ID: 1CzCT...) ↗</span>
              </a>

              {onOpenSheetSync && (
                <button
                  type="button"
                  onClick={onOpenSheetSync}
                  className="flex items-center justify-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-slate-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                >
                  <ShieldCheck className="h-3.5 w-3.5 text-amber-400" />
                  <span>Enquiry Sync Log & Setup</span>
                </button>
              )}

              <a
                href={GOOGLE_MAPS_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-lg border border-slate-700 bg-white/5 px-4 py-2 text-xs font-medium text-slate-300 hover:border-[#C9A227] hover:text-[#E5C76B] transition-colors"
              >
                <MapPin className="h-3.5 w-3.5 text-[#C9A227]" />
                <span>Broadway Office Directions</span>
              </a>
            </div>
          </div>

        </div>

        {/* Mandatory Statutory Disclaimer Notice */}
        <div className="mt-12 rounded-xl border border-slate-800 bg-[#061B36]/60 p-4 text-[11px] leading-relaxed text-slate-400">
          <p className="font-semibold text-amber-300 mb-1">General Guidance Disclaimer:</p>
          <p>
            Information provided on this website is for general guidance only. Government rules, fees, forms, document requirements and procedures may change. Please verify the latest requirements through the respective official government portal or contact Company DOCX.
          </p>
        </div>

        {/* Copyright Bar */}
        <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-400 gap-3">
          <p>© {new Date().getFullYear()} COMPANY DOCX • Law & Accounting Firm. All rights reserved.</p>
          <p>Broadway, Chennai – 600 001 • Tamil Nadu, India</p>
        </div>
      </div>
    </footer>
  );
};
