import React, { useState } from 'react';
import { ServiceItem, SERVICE_CATEGORIES, ALL_SERVICES } from '../data/services';
import { ServiceCard } from './ServiceCard';
import { MessageSquare, Layers } from 'lucide-react';
import { generateWhatsAppLink } from '../utils/whatsapp';

interface ServicesSectionProps {
  services: ServiceItem[];
  isSearching: boolean;
  selectedCategory: string;
  onSelectCategory: (cat: string) => void;
  onViewDetails: (service: ServiceItem) => void;
  onViewDocuments: (service: ServiceItem) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  services,
  isSearching,
  selectedCategory,
  onSelectCategory,
  onViewDetails,
  onViewDocuments,
}) => {
  return (
    <section id="services" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="mb-8 flex flex-col md:flex-row md:items-end md:justify-between border-b border-slate-200 pb-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-[#C9A227]">
            Comprehensive Practice Portfolio
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#061B36] mt-1">
            Our Legal, Tax & Compliance Services
          </h2>
        </div>
        <div className="mt-3 md:mt-0 flex items-center gap-3 text-xs text-slate-600">
          <span className="font-semibold text-slate-800">{ALL_SERVICES.length} Specialized Offerings</span>
          <span aria-hidden="true">•</span>
          <span>End-to-End Professional Guidance</span>
        </div>
      </div>

      {/* If Searching, show direct filtered list */}
      {isSearching ? (
        <div>
          {services.length === 0 ? (
            <div className="rounded-xl border border-dashed border-slate-300 bg-white p-12 text-center">
              <Layers className="mx-auto h-12 w-12 text-slate-300 mb-3" />
              <h3 className="font-serif text-lg font-bold text-slate-800">
                No matching service found
              </h3>
              <p className="mt-2 text-xs text-slate-500 max-w-md mx-auto">
                We handle customized legal, taxation, and business compliance requirements. Contact us on WhatsApp for tailored assistance.
              </p>
              <div className="mt-5">
                <a
                  href={generateWhatsAppLink('Custom Business Compliance Enquiry')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded bg-[#C9A227] px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-[#061B36] hover:bg-[#E5C76B]"
                >
                  <MessageSquare className="h-4 w-4" />
                  <span>Enquire on WhatsApp</span>
                </a>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {services.map((service) => (
                <ServiceCard
                  key={service.id}
                  service={service}
                  onViewDetails={onViewDetails}
                  onViewDocuments={onViewDocuments}
                />
              ))}
            </div>
          )}
        </div>
      ) : (
        /* If Not Searching, show grouped by categories with category navigation */
        <div className="space-y-14">
          {SERVICE_CATEGORIES.map((category) => {
            const categoryServices = services.filter((s) => s.category === category.id);
            if (categoryServices.length === 0) return null;

            return (
              <div key={category.id} className="scroll-mt-24">
                {/* Category Header */}
                <div className="mb-6 flex flex-col sm:flex-row sm:items-baseline sm:justify-between border-l-4 border-[#C9A227] pl-3">
                  <div>
                    <span className="text-xs font-bold text-[#C9A227] tracking-wider uppercase">
                      Category {category.number}
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#061B36]">
                      {category.name}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1">
                      {category.description}
                    </p>
                  </div>
                  <span className="mt-2 sm:mt-0 text-xs font-semibold text-slate-500">
                    {categoryServices.length} {categoryServices.length === 1 ? 'service' : 'services'}
                  </span>
                </div>

                {/* Service Cards Grid */}
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {categoryServices.map((service) => (
                    <ServiceCard
                      key={service.id}
                      service={service}
                      onViewDetails={onViewDetails}
                      onViewDocuments={onViewDocuments}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
};
