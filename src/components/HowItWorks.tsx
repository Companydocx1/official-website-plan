import React from 'react';
import { Search, FileCheck, MessageSquare, Briefcase } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Choose Your Service',
      description: 'Select your needed corporate, legal, taxation, or licensing requirement from our verified service catalogue.',
      icon: Search
    },
    {
      number: '02',
      title: 'Check Required Documents',
      description: 'Review our transparent, statutory document checklist to verify the documents required for your specific entity.',
      icon: FileCheck
    },
    {
      number: '03',
      title: 'Send Your Enquiry',
      description: 'Connect with our Broadway, Chennai office directly via WhatsApp with your customized requirements pre-filled.',
      icon: MessageSquare
    },
    {
      number: '04',
      title: 'Get Professional Assistance',
      description: 'Receive guided drafting, application filing on official government portals, and ongoing compliance oversight.',
      icon: Briefcase
    }
  ];

  return (
    <section id="how-it-works" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-12 text-center">
        <span className="text-xs font-bold uppercase tracking-widest text-[#C9A227]">
          Predictable 4-Step Process
        </span>
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#061B36] mt-1">
          How Company DOCX Works
        </h2>
        <p className="mt-2 text-xs sm:text-sm text-slate-600 max-w-xl mx-auto">
          From first enquiry to statutory registration and regular annual compliance in four simple steps.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((step) => {
          const Icon = step.icon;
          return (
            <div
              key={step.number}
              className="relative flex flex-col items-start rounded-xl border border-slate-200 bg-white p-6 shadow-xs transition-all hover:border-[#C9A227]/60 hover:shadow-md"
            >
              <div className="flex w-full items-center justify-between mb-4">
                <span className="font-serif text-2xl font-bold text-[#C9A227]">
                  {step.number}
                </span>
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#FAF9F6] text-[#061B36] border border-slate-100">
                  <Icon className="h-5 w-5" />
                </div>
              </div>

              <h3 className="font-serif text-base font-bold text-[#061B36]">
                {step.title}
              </h3>

              <p className="mt-2 text-xs leading-relaxed text-slate-600">
                {step.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};
