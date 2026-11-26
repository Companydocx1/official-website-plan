import React from 'react';
import { CheckCircle2, MessageSquare, ArrowRight, ExternalLink, Scale } from 'lucide-react';
import { generateWhatsAppLink, COMPANY_PHONE } from '../utils/whatsapp';
import { CompanyDocxLogo } from './CompanyDocxLogo';

// Generated background atmosphere
import heroLawFirmOffice from '../assets/images/hero_law_firm_office_1791126168473.jpg';

interface HeroProps {
  onExploreServices: () => void;
  onViewPortals: () => void;
  onOpenEnquiry: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreServices, onViewPortals, onOpenEnquiry }) => {
  const trustPoints = [
    'MCA & Corporate Secretarial Compliance',
    'GST, Income Tax & Virtual CFO',
    'Fire NOC & Structural Stability Certification',
    'Trademarks, Patents & IP Litigation',
    'Labour Law & EPFO / ESIC Filings',
    'AI Solutions & Enterprise Technology'
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#031326] via-[#061B36] to-[#082245] text-white">
      {/* Subtle architectural background texture with controlled opacity */}
      <div className="absolute inset-0 z-0 opacity-15 mix-blend-luminosity">
        <img
          src={heroLawFirmOffice}
          alt="Company DOCX Corporate Legal Firm Office"
          className="h-full w-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#061B36] via-[#061B36]/90 to-[#031326]/95" />
      </div>

      {/* Decorative hairline gold borders */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#C9A227]/40 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#C9A227]/30 to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-20 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          
          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-7">
            {/* Editorial brand mark */}
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#C9A227]/30 bg-[#0C2B55]/70 px-3.5 py-1 text-xs text-[#E5C76B] backdrop-blur-sm">
              <Scale className="h-3.5 w-3.5 text-[#C9A227]" />
              <span className="font-medium tracking-wide">Broadway, Chennai • Established Practice</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl xl:text-5xl leading-[1.15]">
              Professional Legal, Accounting & Business Compliance Services
            </h1>

            {/* Subheadline */}
            <p className="mt-5 text-base sm:text-lg leading-relaxed text-slate-300 max-w-2xl">
              MCA secretarial compliances, GST, taxation, trademarks & patents, licences & Fire NOCs, labour laws, contracts, business setup, and modern AI technology solutions — all under one roof.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
              {/* Primary CTA */}
              <button
                onClick={onExploreServices}
                className="group flex items-center gap-2 rounded-md bg-[#C9A227] px-6 py-3.5 text-sm font-semibold uppercase tracking-wider text-[#061B36] transition-all duration-200 hover:bg-[#E5C76B] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#C9A227] focus:ring-offset-2 focus:ring-offset-[#061B36]"
              >
                <span>Explore 10 Practice Divisions</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>

              {/* Secondary CTA */}
              <a
                href={generateWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-md border border-[#C9A227] bg-[#0C2B55]/60 px-5 py-3.5 text-sm font-semibold text-[#E5C76B] transition-colors hover:bg-[#C9A227] hover:text-[#061B36]"
              >
                <MessageSquare className="h-4 w-4" />
                <span>Chat on WhatsApp</span>
              </a>

              {/* Third small CTA */}
              <button
                onClick={onViewPortals}
                className="flex items-center gap-1.5 text-xs font-medium text-slate-300 underline underline-offset-4 hover:text-[#E5C76B] transition-colors py-2 px-1"
              >
                <span>View Government Portals</span>
                <ExternalLink className="h-3 w-3" />
              </button>
            </div>

            {/* Trust-Focused Content Checklist */}
            <div className="mt-10 pt-6 border-t border-[#0C2B55] grid grid-cols-1 sm:grid-cols-2 gap-3">
              {trustPoints.map((point, index) => (
                <div key={index} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-200">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-[#C9A227]" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Royal Official Logo & Quick Portal Overview */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md rounded-xl border border-[#C9A227]/40 bg-gradient-to-b from-[#0C2B55]/95 via-[#061B36]/95 to-[#031326]/95 p-6 sm:p-8 shadow-2xl backdrop-blur-md">
              {/* Official Crest & Wordmark */}
              <div className="flex flex-col items-center border-b border-[#C9A227]/25 pb-6">
                <CompanyDocxLogo variant="full" theme="dark" size="md" />
                <p className="text-[11px] text-slate-300 mt-2 font-medium">
                  Official Corporate & Legal Advisory Practice
                </p>
              </div>

              {/* Quick Guidance Box */}
              <div className="my-5 space-y-3 text-xs text-slate-300 leading-relaxed">
                <p>
                  Specialized legal, secretarial, taxation, technical and licensing services for startups, industrial enterprises, and corporations across Tamil Nadu and India.
                </p>
                <div className="rounded-lg bg-[#031326]/80 p-3.5 border border-[#C9A227]/30">
                  <div className="flex items-center justify-between text-[11px] font-medium text-slate-400 mb-1">
                    <span>Direct WhatsApp Desk</span>
                    <span className="text-[#E5C76B] font-semibold">{COMPANY_PHONE}</span>
                  </div>
                  <p className="text-[11px] text-slate-300">
                    Get document checklists, statutory process guidelines, and fee quotes directly on WhatsApp.
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-2 pt-2">
                <button
                  onClick={onOpenEnquiry}
                  className="rounded bg-[#0C2B55] border border-slate-600 py-2.5 px-3 text-center text-xs font-medium text-white hover:border-[#C9A227] hover:text-[#E5C76B] transition-colors"
                >
                  Quick Enquiry
                </button>
                <a
                  href={generateWhatsAppLink('General Practice Consultation')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded bg-[#C9A227] py-2.5 px-3 text-center text-xs font-bold text-[#061B36] hover:bg-[#E5C76B] transition-colors flex items-center justify-center gap-1.5"
                >
                  <MessageSquare className="h-3.5 w-3.5" />
                  <span>Chat Now</span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
