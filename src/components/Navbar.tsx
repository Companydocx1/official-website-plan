import React, { useState } from 'react';
import { Phone, MessageSquare, Menu, X, MapPin, ExternalLink, FileSpreadsheet, ShieldCheck } from 'lucide-react';
import { COMPANY_PHONE, COMPANY_PHONE_RAW, COMPANY_ADDRESS, generateWhatsAppLink } from '../utils/whatsapp';
import { GOOGLE_SHEET_URL } from '../utils/googleSheetSync';
import { CompanyDocxLogo } from './CompanyDocxLogo';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onOpenEnquiry: (serviceName?: string) => void;
  onOpenSheetSync?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  onNavigate,
  onOpenEnquiry,
  onOpenSheetSync,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'services', label: 'All Services (100+)' },
    { id: 'documents', label: 'Checklists & Docs' },
    { id: 'portals', label: 'Govt Portals' },
    { id: 'how-it-works', label: 'How It Works' },
    { id: 'about', label: 'Why Us' },
    { id: 'contact', label: 'Office & Enquiry' },
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#041021] text-white shadow-xl border-b border-[#C9A227]/30">
      {/* Top Royal Utility Bar */}
      <div className="bg-[#020B17] border-b border-white/5 py-1.5 px-4 sm:px-6 lg:px-8 text-[11px] text-slate-300">
        <div className="mx-auto max-w-7xl flex flex-wrap items-center justify-between gap-2">
          {/* Location & Tagline */}
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-slate-300">
              <MapPin className="h-3 w-3 text-[#C9A227]" />
              <span className="hidden sm:inline">Prakasam Road, Broadway, Chennai – 600001</span>
              <span className="sm:hidden">Broadway, Chennai</span>
            </span>
            <span className="hidden md:inline-flex items-center gap-1 text-[#E5C76B] font-medium">
              <ShieldCheck className="h-3 w-3" />
              Corporate Law, Secretarial & Accounting Practice
            </span>
          </div>

          {/* Quick Desk Contact & Google Sheet Indicator */}
          <div className="flex items-center gap-4">
            <a
              href={GOOGLE_SHEET_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-emerald-400 hover:text-emerald-300 transition-colors"
              title="Official Google Sheet Storage (ID: 1CzCTUTn...)"
            >
              <FileSpreadsheet className="h-3 w-3" />
              <span className="hidden sm:inline">Google Sheet Database</span>
              <ExternalLink className="h-2.5 w-2.5" />
            </a>

            <a
              href={`tel:+${COMPANY_PHONE_RAW}`}
              className="inline-flex items-center gap-1 font-bold text-amber-300 hover:text-amber-200 transition-colors"
            >
              <Phone className="h-3 w-3" />
              <span>{COMPANY_PHONE}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main 3-Zone Navigation Bar */}
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Zone 1: Official Brand Logo Lockup */}
        <button
          onClick={() => handleLinkClick('home')}
          className="group flex items-center focus:outline-none cursor-pointer"
          aria-label="Company Docx Home"
        >
          <CompanyDocxLogo variant="horizontal" theme="dark" size="md" />
        </button>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden items-center gap-6 xl:gap-8 lg:flex">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`text-xs xl:text-sm font-semibold tracking-wide transition-colors hover:text-[#E5C76B] focus:outline-none cursor-pointer py-1 ${
                  isActive
                    ? 'text-[#E5C76B] border-b-2 border-[#C9A227]'
                    : 'text-slate-200'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: CTA Actions */}
        <div className="hidden items-center gap-3 sm:flex">
          <button
            onClick={() => onOpenEnquiry()}
            className="rounded-lg border border-[#C9A227]/50 bg-white/5 px-3.5 py-2 text-xs font-semibold text-amber-200 transition-all hover:border-[#C9A227] hover:bg-[#061B36] cursor-pointer"
          >
            Send Enquiry
          </button>

          <a
            href={generateWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#DFBE5D] via-[#C9A227] to-[#A87E14] px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#061B36] transition-all hover:brightness-110 shadow-md shadow-amber-900/20 active:scale-95 cursor-pointer"
          >
            <MessageSquare className="h-3.5 w-3.5" />
            <span className="whitespace-nowrap">WhatsApp Us</span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={generateWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 rounded-lg bg-[#C9A227] px-3 py-1.5 text-xs font-bold text-[#061B36]"
          >
            <MessageSquare className="h-3.5 w-3.5" />
            <span>Chat</span>
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-lg p-2 text-slate-300 hover:bg-white/10 hover:text-white focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Collapsible Navigation Panel */}
      {mobileMenuOpen && (
        <div className="border-t border-[#C9A227]/30 bg-[#020B17] px-4 pt-3 pb-6 lg:hidden animate-in fade-in">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`text-left text-sm font-medium py-2.5 px-3 rounded-lg transition-colors ${
                  activeSection === link.id
                    ? 'bg-[#061B36] text-[#E5C76B] font-semibold border-l-2 border-[#C9A227]'
                    : 'text-slate-300 hover:bg-[#061B36] hover:text-white'
                }`}
              >
                {link.label}
              </button>
            ))}

            <div className="border-t border-white/10 pt-3 flex flex-col gap-2">
              <a
                href={generateWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#DFBE5D] via-[#C9A227] to-[#A87E14] py-3 text-xs font-bold uppercase tracking-wider text-[#061B36] shadow"
              >
                <MessageSquare className="h-4 w-4" />
                <span>Chat on WhatsApp (+91 8870002141)</span>
              </a>

              <a
                href={`tel:+${COMPANY_PHONE_RAW}`}
                className="flex items-center justify-center gap-2 rounded-lg border border-[#C9A227]/40 py-2.5 text-xs font-medium text-slate-200 hover:bg-white/5"
              >
                <Phone className="h-3.5 w-3.5 text-[#C9A227]" />
                <span>Call Broadway Office</span>
              </a>

              <a
                href={GOOGLE_SHEET_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-lg bg-emerald-950/40 border border-emerald-500/30 py-2 text-xs font-medium text-emerald-300"
              >
                <FileSpreadsheet className="h-3.5 w-3.5" />
                <span>View Google Sheet Database</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
