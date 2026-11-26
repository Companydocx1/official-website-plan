import { ServiceCategory, ServiceItem } from './categories/types';
import { COMPANY_SERVICES } from './categories/company';
import { CORPORATE_MCA_SERVICES } from './categories/corporate_mca';
import { TAX_FINANCIAL_SERVICES } from './categories/tax_financial';
import { LABOUR_HR_SERVICES } from './categories/labour_hr';
import { LICENCES_NOC_SERVICES } from './categories/licences_noc';
import { IMPORT_EXPORT_SERVICES } from './categories/import_export';
import { IPR_EXPANDED_SERVICES } from './categories/ipr_expanded';
import { ISO_SERVICES } from './categories/iso_certifications';
import { EXPANDED_LEGAL_SERVICES } from './categories/legal_services';
import { BUSINESS_SETUP_SERVICES } from './categories/business_setup';
import { TECH_DIGITAL_AI_SERVICES } from './categories/tech_digital_ai';
import { NGO_SERVICES } from './categories/startup_ngo';

export type { ServiceCategory, ServiceItem };

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: 'corporate-mca',
    number: '01',
    name: 'Corporate Compliance & MCA Services',
    description: 'ROC Annual Filing, Director KYC, Share Transfer/Allotment, Name/Office Change, Strike-Off & Secretarial Services.',
    iconName: 'Building2'
  },
  {
    id: 'taxation-financial',
    number: '02',
    name: 'Taxation & Financial Services',
    description: 'Income Tax Return, TDS, GST Filings, GST Annual Audit, Statutory & Internal Audits, Bookkeeping & Virtual CFO.',
    iconName: 'Receipt'
  },
  {
    id: 'labour-hr',
    number: '03',
    name: 'Labour & HR Compliance',
    description: 'EPFO/PF, ESIC, Professional Tax, CLRA, Shops & Est., HR Policies, Employment Agreements & Labour Compliance.',
    iconName: 'Users'
  },
  {
    id: 'licences-noc',
    number: '04',
    name: 'Government Licences & NOCs',
    description: 'Fire NOC, Structural Stability Certificate, Factory Licence, PCB Approvals, Trade Licence, Health & PESO.',
    iconName: 'ShieldAlert'
  },
  {
    id: 'import-export',
    number: '05',
    name: 'Import, Export & International Business',
    description: 'IEC Registration, AD Code Port Linking, APEDA, RCMC Assistance, Export/Import Documentation & DGFT Services.',
    iconName: 'Globe'
  },
  {
    id: 'ipr',
    number: '06',
    name: 'Intellectual Property (IPR)',
    description: 'Trademark Search, Registration, Objection & Hearing, Patent Drafting, Prosecution, Copyright, Design & IP Portfolio.',
    iconName: 'ShieldCheck'
  },
  {
    id: 'iso-certifications',
    number: '07',
    name: 'ISO & Certification Services',
    description: 'ISO 9001, 14001, 45001, 22000, 27001, 13485, HACCP, GMP & European CE Certification Assistance.',
    iconName: 'Award'
  },
  {
    id: 'legal-services',
    number: '08',
    name: 'Legal Services & Contracts',
    description: 'Agreement & Contract Drafting, Legal Notice, Title Due Diligence, NDAs, Website Legal Policies & Corporate Retainer.',
    iconName: 'Scale'
  },
  {
    id: 'business-setup',
    number: '09',
    name: 'Business Setup & Startup Services',
    description: 'Detailed Project Reports (DPR), Business Plans, Startup India 80-IAC, Pitch Decks, IBBI Valuation & Franchise Models.',
    iconName: 'Rocket'
  },
  {
    id: 'tech-digital-ai',
    number: '10',
    name: 'Digital Marketing, Branding & AI Solutions',
    description: 'Website & App Development, E-Commerce, Custom Software, AI Solutions, AI Chatbots, SEO, Google Ads & Brand Identity.',
    iconName: 'Cpu'
  }
];

export const ALL_SERVICES: ServiceItem[] = [
  ...CORPORATE_MCA_SERVICES,
  ...TAX_FINANCIAL_SERVICES,
  ...LABOUR_HR_SERVICES,
  ...LICENCES_NOC_SERVICES,
  ...IMPORT_EXPORT_SERVICES,
  ...IPR_EXPANDED_SERVICES,
  ...ISO_SERVICES,
  ...EXPANDED_LEGAL_SERVICES,
  ...BUSINESS_SETUP_SERVICES,
  ...TECH_DIGITAL_AI_SERVICES,
  ...COMPANY_SERVICES,
  ...NGO_SERVICES
];

export const POPULAR_SERVICE_IDS = [
  'fire-noc',
  'structural-stability-certificate',
  'trademark-registration',
  'trademark-objection',
  'gst-registration-return-filing',
  'mca-annual-compliance',
  'pvt-ltd',
  'patent-registration',
  'iso-9001',
  'iso-27001',
  'custom-web-development',
  'ai-solutions-automation',
  'ai-chatbot-development',
  'business-plan-dpr',
  'epfo-pf-registration',
  'iec-registration',
  'legal-notice-drafting',
  'virtual-cfo-services'
];

export const POPULAR_SERVICES = ALL_SERVICES.filter(service =>
  POPULAR_SERVICE_IDS.includes(service.id)
);

export function getServiceById(id: string): ServiceItem | undefined {
  return ALL_SERVICES.find(s => s.id === id);
}

export function searchServices(query: string, categoryFilter: string = 'all'): ServiceItem[] {
  const cleanQuery = query.toLowerCase().trim();

  return ALL_SERVICES.filter(service => {
    // Category match
    const categoryMatches =
      categoryFilter === 'all' ||
      service.category.toLowerCase() === categoryFilter.toLowerCase() ||
      (categoryFilter === 'mca' && (service.category === 'corporate-mca' || service.category === 'company')) ||
      (categoryFilter === 'tax' && (service.category === 'taxation-financial' || service.category === 'tax')) ||
      (categoryFilter === 'labour' && service.category === 'labour-hr') ||
      (categoryFilter === 'licences' && (service.category === 'licences-noc' || service.category === 'licences')) ||
      (categoryFilter === 'trade' && service.category === 'import-export') ||
      (categoryFilter === 'ipr' && service.category === 'ipr') ||
      (categoryFilter === 'iso' && service.category === 'iso-certifications') ||
      (categoryFilter === 'legal' && (service.category === 'legal-services' || service.category === 'legal')) ||
      (categoryFilter === 'startup' && (service.category === 'business-setup' || service.category === 'startup')) ||
      (categoryFilter === 'tech' && service.category === 'tech-digital-ai');

    if (!categoryMatches) return false;
    if (!cleanQuery) return true;

    // Search query matches name, description, authority, or keywords
    return (
      service.name.toLowerCase().includes(cleanQuery) ||
      service.shortDescription.toLowerCase().includes(cleanQuery) ||
      service.authority.toLowerCase().includes(cleanQuery) ||
      service.keywords.some(k => k.toLowerCase().includes(cleanQuery))
    );
  });
}
