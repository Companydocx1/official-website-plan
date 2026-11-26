import React from 'react';
import { MapPin, Phone, MessageSquare, Mail, Navigation, Clock, ExternalLink } from 'lucide-react';
import {
  COMPANY_PHONE,
  COMPANY_PHONE_RAW,
  COMPANY_EMAIL,
  COMPANY_ADDRESS,
  GOOGLE_MAPS_LINK,
  generateWhatsAppLink
} from '../utils/whatsapp';
import { SmartEnquiryForm } from './SmartEnquiryForm';
import { CompanyDocxLogo } from './CompanyDocxLogo';

interface ContactSectionProps {
  initialService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialService }) => {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="mb-12 border-b border-slate-200 pb-4">
        <span className="text-xs font-bold uppercase tracking-widest text-[#C9A227]">
          Direct Office & Client Desk
        </span>
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#061B36] mt-1">
          Contact Company DOCX
        </h2>
        <p className="mt-2 text-xs sm:text-sm text-slate-600">
          Visit our registered corporate advisory office in Broadway, Chennai, or connect via WhatsApp for immediate support.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Office Information & Direct Action Buttons */}
        <div className="lg:col-span-5 rounded-xl border border-slate-200 bg-[#061B36] text-white p-6 sm:p-8 shadow-md">
          {/* Logo Brand Lockup */}
          <div className="border-b border-[#0C2B55] pb-5 mb-6">
            <CompanyDocxLogo variant="horizontal" theme="dark" size="md" />
            <p className="text-xs text-slate-300 mt-2">
              Corporate Legal, Secretarial, Taxation & Business Advisory Practice
            </p>
          </div>

          <div className="space-y-4 text-xs text-slate-200">
            {/* Address */}
            <div className="flex items-start gap-3.5">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#0C2B55] text-[#C9A227]">
                <MapPin className="h-4 w-4" />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase text-slate-400">Broadway Office Address</span>
                <p className="text-xs font-medium text-white mt-0.5 leading-relaxed">
                  {COMPANY_ADDRESS}
                </p>
              </div>
            </div>

            {/* Official Phone */}
            <div className="flex items-start gap-3.5">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#0C2B55] text-[#C9A227]">
                <Phone className="h-4 w-4" />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase text-slate-400">Direct Telephone</span>
                <p className="text-xs font-medium text-white mt-0.5">
                  <a href={`tel:+${COMPANY_PHONE_RAW}`} className="hover:text-[#E5C76B] transition-colors">
                    {COMPANY_PHONE}
                  </a>
                </p>
              </div>
            </div>

            {/* Official WhatsApp */}
            <div className="flex items-start gap-3.5">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#0C2B55] text-[#C9A227]">
                <MessageSquare className="h-4 w-4" />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase text-slate-400">Official WhatsApp Desk</span>
                <p className="text-xs font-medium text-white mt-0.5">
                  <a
                    href={generateWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#E5C76B] hover:underline"
                  >
                    {COMPANY_PHONE}
                  </a>
                </p>
              </div>
            </div>

            {/* Official Email */}
            <div className="flex items-start gap-3.5">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#0C2B55] text-[#C9A227]">
                <Mail className="h-4 w-4" />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase text-slate-400">Electronic Mail</span>
                <p className="text-xs font-medium text-white mt-0.5">
                  <a href={`mailto:${COMPANY_EMAIL}`} className="hover:text-[#E5C76B] transition-colors">
                    {COMPANY_EMAIL}
                  </a>
                </p>
              </div>
            </div>

            {/* Office Hours */}
            <div className="flex items-start gap-3.5 pt-2 border-t border-[#0C2B55]">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#0C2B55] text-[#C9A227]">
                <Clock className="h-4 w-4" />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase text-slate-400">Consultation Hours</span>
                <p className="text-xs font-medium text-slate-200 mt-0.5">
                  Monday – Saturday: 9:30 AM – 6:30 PM (IST)
                </p>
              </div>
            </div>
          </div>

          {/* Embedded Map Card */}
          <div className="mt-5 rounded-lg border border-[#0C2B55] bg-[#031326] p-3 text-xs">
            <div className="flex items-center justify-between mb-2">
              <span className="font-semibold text-slate-200 flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5 text-[#C9A227]" />
                <span>Exact Location Pin</span>
              </span>
              <a
                href={GOOGLE_MAPS_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] font-semibold text-[#E5C76B] hover:underline flex items-center gap-1"
              >
                <span>View on Google Maps</span>
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>
            <div className="rounded overflow-hidden border border-slate-700 aspect-video relative bg-slate-800">
              <iframe
                title="Company Docx Location Map"
                src="https://maps.google.com/maps?q=13.0954889,80.2865003&hl=en&z=17&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full opacity-90 hover:opacity-100 transition-opacity"
              />
            </div>
          </div>

          {/* 4 Primary Action Buttons Matrix */}
          <div className="mt-6 pt-5 border-t border-[#0C2B55] grid grid-cols-2 gap-2.5">
            {/* Call Now */}
            <a
              href={`tel:+${COMPANY_PHONE_RAW}`}
              className="flex items-center justify-center gap-1.5 rounded-md bg-[#0C2B55] border border-slate-600 px-3 py-2.5 text-xs font-semibold text-white hover:border-[#C9A227] hover:text-[#E5C76B] transition-colors"
            >
              <Phone className="h-3.5 w-3.5 text-[#C9A227]" />
              <span>Call Now</span>
            </a>

            {/* WhatsApp */}
            <a
              href={generateWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 rounded-md bg-[#C9A227] px-3 py-2.5 text-xs font-bold uppercase tracking-wider text-[#061B36] hover:bg-[#E5C76B] transition-colors"
            >
              <MessageSquare className="h-3.5 w-3.5" />
              <span>WhatsApp</span>
            </a>

            {/* Email Us */}
            <a
              href={`mailto:${COMPANY_EMAIL}?subject=Service%20Enquiry%20-%20Company%20DOCX`}
              className="flex items-center justify-center gap-1.5 rounded-md bg-[#0C2B55] border border-slate-600 px-3 py-2.5 text-xs font-semibold text-white hover:border-[#C9A227] hover:text-[#E5C76B] transition-colors"
            >
              <Mail className="h-3.5 w-3.5 text-[#C9A227]" />
              <span>Email Us</span>
            </a>

            {/* Get Directions */}
            <a
              href={GOOGLE_MAPS_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 rounded-md bg-[#0C2B55] border border-slate-600 px-3 py-2.5 text-xs font-semibold text-white hover:border-[#C9A227] hover:text-[#E5C76B] transition-colors"
            >
              <Navigation className="h-3.5 w-3.5 text-[#C9A227]" />
              <span>Get Directions</span>
            </a>
          </div>

        </div>

        {/* Right Column: Interactive Smart Enquiry Form */}
        <div className="lg:col-span-7">
          <SmartEnquiryForm initialServiceName={initialService} />
        </div>

      </div>
    </section>
  );
};
