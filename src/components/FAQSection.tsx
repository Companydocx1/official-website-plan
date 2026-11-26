import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: 'How do I enquire about a service?',
      answer: 'You can enquire directly via WhatsApp by clicking any "WhatsApp Us" or "Enquire on WhatsApp" button on this website, or by submitting the quick enquiry form. Your service preference is pre-formatted, so our Chennai team can review your requirement immediately.'
    },
    {
      question: 'What documents do I need for my registration or filing?',
      answer: 'Document requirements depend on your legal structure (Sole Proprietorship, Partnership, LLP, or Private Limited) and statutory rules. You can select your exact service in our "Required Documents" section to see a tailored checklist. Contact us on WhatsApp for a personalized document review.'
    },
    {
      question: 'Can I contact Company DOCX through WhatsApp for questions?',
      answer: 'Yes, our official WhatsApp (+91 8870002141) is actively monitored during business hours (Monday to Saturday, 9:30 AM to 6:30 PM) for client queries, document verification, and filing status updates.'
    },
    {
      question: 'Do you assist with government registrations directly?',
      answer: 'Yes, Company DOCX provides professional drafting, document verification, and end-to-end filing assistance. All official applications are legally submitted through the respective authorized government portals (such as MCA, GSTN, FoSCoS, and DGFT).'
    },
    {
      question: 'Where can I access the official government portal?',
      answer: 'We provide direct, verified statutory links in our dedicated "Official Government Portals" directory on this site (e.g., mca.gov.in, gst.gov.in, udyamregistration.gov.in, and ipindia.gov.in). Each service card also links directly to its respective statutory authority portal.'
    },
    {
      question: 'Are government statutory fees included in professional fees?',
      answer: 'Government statutory fees (which are mandated by law and paid to government treasuries) and professional facilitation fees are distinct. Depending on your authorized capital, trademark class, or state stamp duty, applicable government fees vary. Contact us on WhatsApp for a transparent, itemized quotation.'
    },
    {
      question: 'How long does a registration take?',
      answer: 'Processing timelines depend strictly on the respective government department, registrar workload, and statutory scrutiny intervals. For example, Udyam registration is often issued promptly, whereas Company Incorporation or Trademark examination involves sequential regulatory review. We do not make false promises of overnight government approvals.'
    },
    {
      question: 'Can you help with post-registration compliance and annual filings?',
      answer: 'Yes. Beyond initial incorporation or license issuance, we provide ongoing secretarial, monthly GST return filing, quarterly TDS compliance, annual ROC filings (AOC-4 & MGT-7), and Income Tax return submissions.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#FAF9F6] py-16 border-t border-slate-200">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-10 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C9A227]">
            Clarity & Guidance
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#061B36] mt-1">
            Frequently Asked Questions
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-600">
            Factual answers regarding legal processes, statutory fees, and filing expectations.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-xl border border-slate-200 bg-white shadow-xs overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex w-full items-center justify-between p-4 sm:p-5 text-left focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-sm sm:text-base font-bold text-[#061B36] pr-4">
                    {faq.question}
                  </span>
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-50 text-slate-500">
                    {isOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="border-t border-slate-100 bg-[#FAF9F6]/60 p-4 sm:p-5 text-xs sm:text-sm leading-relaxed text-slate-700">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
