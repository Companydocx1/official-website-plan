import React from 'react';
import { Scale, Building2, Receipt, Landmark, FileText, MessageSquare } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const reasons = [
    {
      title: 'Legal & Compliance Support',
      description: 'Experienced drafting and legal opinions covering corporate agreements, intellectual property protection, and statutory dispute minimization.',
      icon: Scale
    },
    {
      title: 'Business Registration Assistance',
      description: 'End-to-end guidance for Private Limited, LLP, OPC, Section 8, Trust, and Society incorporations with the Ministry of Corporate Affairs and state registrars.',
      icon: Building2
    },
    {
      title: 'Tax & Accounting Support',
      description: 'Accurate Goods & Services Tax (GST) filing, Income Tax Returns (ITR), TDS compliance, and structured double-entry cloud bookkeeping.',
      icon: Receipt
    },
    {
      title: 'Government Portal Guidance',
      description: 'Assistance navigating verified official platforms including MCA21, GST Portal, FoSCoS, DGFT, Startup India, and TNREGINET.',
      icon: Landmark
    },
    {
      title: 'Document Preparation',
      description: 'Service-specific checklists, stamp duty guidance, and meticulous verification of parent deeds and identity KYC records before filing.',
      icon: FileText
    },
    {
      title: 'WhatsApp-Based Enquiry',
      description: 'Direct communication channel without complex account creation, enabling quick transmission of checklists and progress updates.',
      icon: MessageSquare
    }
  ];

  return (
    <section id="about" className="bg-[#FAF9F6] py-16 border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12 text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C9A227]">
            Professional Integrity & Standard of Care
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#061B36] mt-1">
            Why Choose Company DOCX
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-600">
            We provide structured legal and accounting advisory founded on statutory adherence, transparent checklists, and direct client accessibility in Chennai.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="flex flex-col justify-between rounded-xl border border-slate-200/90 bg-white p-6 shadow-xs transition-all hover:border-[#C9A227]/70 hover:shadow-md"
              >
                <div>
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-[#061B36] text-[#E5C76B]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-serif text-base font-bold text-[#061B36]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-600">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Local Office Citation */}
        <div className="mt-12 rounded-xl border border-slate-200 bg-white p-6 text-center shadow-xs">
          <p className="text-xs text-slate-500 font-medium">
            Broadway Office Location: Flat No. 137(68), Fathima Paradise, Prakasam Road, Broadway, Chennai – 600 001
          </p>
          <p className="text-[11px] text-slate-400 mt-1">
            Serving individuals, startups, enterprises, and non-profits across Tamil Nadu and all Indian jurisdictions.
          </p>
        </div>

      </div>
    </section>
  );
};
