import React from 'react';
import {
  Flame,
  ShieldCheck,
  Building2,
  FileCheck2,
  Receipt,
  FileSpreadsheet,
  Globe,
  Award,
  Scale,
  Rocket,
  Code2,
  Bot,
  Briefcase,
  Users
} from 'lucide-react';

interface QuickActionItem {
  id: string;
  label: string;
  serviceId: string;
  icon: React.ElementType;
}

interface DashboardQuickActionsProps {
  onSelectService: (serviceId: string) => void;
}

export const DashboardQuickActions: React.FC<DashboardQuickActionsProps> = ({ onSelectService }) => {
  const quickActions: QuickActionItem[] = [
    { id: '1', label: 'Fire NOC & Safety', serviceId: 'fire-noc', icon: Flame },
    { id: '2', label: 'Stability Certificate', serviceId: 'structural-stability-certificate', icon: FileCheck2 },
    { id: '3', label: 'Register Trademark', serviceId: 'trademark-registration', icon: ShieldCheck },
    { id: '4', label: 'Trademark Objection', serviceId: 'trademark-objection', icon: ShieldCheck },
    { id: '5', label: 'MCA Annual Filing', serviceId: 'mca-annual-compliance', icon: Building2 },
    { id: '6', label: 'Register Company', serviceId: 'pvt-ltd', icon: Building2 },
    { id: '7', label: 'GST Registration & Return', serviceId: 'gst-registration-return-filing', icon: Receipt },
    { id: '8', label: 'Income Tax Return (ITR)', serviceId: 'income-tax-filing', icon: FileSpreadsheet },
    { id: '9', label: 'EPFO / PF Registration', serviceId: 'epfo-pf-registration', icon: Users },
    { id: '10', label: 'Import Export Code (IEC)', serviceId: 'iec-registration', icon: Globe },
    { id: '11', label: 'ISO 9001 / 27001', serviceId: 'iso-9001', icon: Award },
    { id: '12', label: 'Legal Notice Drafting', serviceId: 'legal-notice-drafting', icon: Scale },
    { id: '13', label: 'Bankable DPR / Project Report', serviceId: 'business-plan-dpr', icon: Rocket },
    { id: '14', label: 'Website & App Development', serviceId: 'custom-web-development', icon: Code2 },
    { id: '15', label: 'AI Solutions & Automation', serviceId: 'ai-solutions-automation', icon: Bot },
    { id: '16', label: 'Virtual CFO Services', serviceId: 'virtual-cfo-services', icon: Briefcase }
  ];

  return (
    <section className="mx-auto max-w-7xl px-4 pt-10 pb-6 sm:px-6 lg:px-8">
      <div className="mb-5 flex flex-col sm:flex-row sm:items-end sm:justify-between border-b border-slate-200 pb-3">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-[#C9A227]">
            Direct Dashboard
          </span>
          <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#061B36]">
            Popular Quick Actions
          </h2>
        </div>
        <p className="text-xs text-slate-500 mt-1 sm:mt-0">
          Fast-track access to top corporate compliance, licences, patents, tax filings, and AI solutions
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-2.5 sm:gap-3">
        {quickActions.map((action) => {
          const Icon = action.icon;
          return (
            <button
              key={action.id}
              onClick={() => onSelectService(action.serviceId)}
              className="group flex flex-col items-center justify-center rounded-lg border border-slate-200 bg-white p-3 text-center shadow-xs transition-all duration-150 hover:-translate-y-0.5 hover:border-[#C9A227] hover:shadow-md focus:outline-none focus:ring-1 focus:ring-[#C9A227]"
            >
              <div className="mb-2 flex h-9 w-9 items-center justify-center rounded-lg bg-[#FAF9F6] text-[#061B36] border border-slate-100 group-hover:border-[#C9A227]/40 group-hover:bg-[#061B36] group-hover:text-[#E5C76B] transition-colors">
                <Icon className="h-4 w-4" />
              </div>
              <span className="text-[11px] font-semibold text-slate-800 group-hover:text-[#061B36] line-clamp-2 leading-tight">
                {action.label}
              </span>
            </button>
          );
        })}
      </div>
    </section>
  );
};
