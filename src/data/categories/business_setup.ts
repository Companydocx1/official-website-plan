import { ServiceItem } from './types';

export const BUSINESS_SETUP_SERVICES: ServiceItem[] = [
  {
    id: 'business-plan-dpr',
    name: 'Business Plan & Detailed Project Report (DPR)',
    category: 'business-setup',
    categoryName: 'Business Setup & Startup Services',
    shortDescription: 'Bankable Detailed Project Reports (DPR) for MSME bank loans, subsidies, and capital expenditure.',
    overview: 'Comprehensive techno-economic feasibility studies and Bankable Project Reports prepared as per guidelines of SIDBI, nationalized banks, and state financial corporations (TIIC in Tamil Nadu) for securing term loans, working capital limits, and government capital subsidies.',
    whoNeeds: 'Entrepreneurs seeking bank loans under PMEGP, CGTMSE, Mudra, or commercial bank term lending.',
    whyRequired: 'Banks reject loan applications that lack professional financial modeling, Debt Service Coverage Ratio (DSCR), and sensitivity analysis.',
    basicProcess: [
      'Operational and machinery quotation consolidation',
      '5-to-7 year financial projection modeling (P&L, Balance Sheet, Cash Flow, Break-Even Analysis)',
      'DSCR, Internal Rate of Return (IRR), and Current Ratio computations',
      'Final bound Bankable Project Report delivery for submission'
    ],
    assistanceSteps: [
      'Financial modeling aligned with bank lending benchmarks',
      'Assistance with state capital subsidy schemes (e.g., TIIC / NEEDS subsidy in Tamil Nadu)',
      'Bank appraisal query resolution assistance'
    ],
    documents: [
      'Project machinery and civil construction quotations',
      'Promoter profiles and financial net-worth statements',
      'Target production capacity and raw material costing notes'
    ],
    authority: 'Banking Guidelines (RBI / SIDBI) / TIIC Tamil Nadu',
    officialPortal: 'https://www.tiic.org',
    portalName: 'Tamil Nadu Industrial Investment Corporation (TIIC)',
    faq: [
      {
        question: 'What is a Bankable Project Report?',
        answer: 'A project report that complies with commercial banking norms and proves the technical feasibility and debt repayment capacity of the enterprise.'
      }
    ],
    keywords: ['business plan', 'project report', 'dpr preparation', 'bank loan report', 'cgtmse', 'pmegp dpr', 'tiic subsidy']
  },
  {
    id: 'startup-india-advisory',
    name: 'Startup India Registration & Advisory',
    category: 'business-setup',
    categoryName: 'Business Setup & Startup Services',
    shortDescription: 'DPIIT recognition, Section 80-IAC 3-year tax exemption, and Angel Tax relief under Section 56.',
    overview: 'Complete facilitation of DPIIT Startup Recognition on startupindia.gov.in unlocking 3 consecutive years of 100% income tax exemption under Section 80-IAC, exemption from angel tax scrutiny, and fast-track patent processing with 80% government fee discounts.',
    whoNeeds: 'Private Limited Companies and LLPs incorporated within the last 10 years with an innovative product or scalable model.',
    whyRequired: 'Saves millions of rupees in corporate income taxes and provides priority access to government procurement tenders.',
    basicProcess: [
      'Evaluation of innovation and scalability claims against DPIIT criteria',
      'Drafting pitch narrative, video prototype proof, and website links',
      'Filing application on the official Startup India portal',
      'Receipt of DPIIT Certificate of Recognition'
    ],
    assistanceSteps: [
      'Crafting compelling answers for the innovation justification questionnaire',
      'Assistance in applying for Section 80-IAC tax holiday certification',
      'Guiding applications for Government e-Marketplace (GeM) startup exemptions'
    ],
    documents: [
      'Certificate of Incorporation / Registration Certificate (LLP)',
      'Brief Pitch Deck explaining the innovation aspect',
      'Website URL, product prototype link, or video demonstration'
    ],
    authority: 'DPIIT, Ministry of Commerce & Industry',
    officialPortal: 'https://www.startupindia.gov.in',
    portalName: 'Startup India Portal',
    faq: [
      {
        question: 'Can an existing partnership firm apply for Startup India recognition?',
        answer: 'Registered Partnership firms can apply for DPIIT recognition; however, the Section 80-IAC income tax holiday is available only to Private Limited Companies.'
      }
    ],
    keywords: ['startup india', 'dpiit recognition', '80iac tax holiday', 'angel tax exemption', 'startup advisory']
  },
  {
    id: 'pitch-deck-investor-docs',
    name: 'Pitch Deck & Investor Documentation',
    category: 'business-setup',
    categoryName: 'Business Setup & Startup Services',
    shortDescription: 'Institutional investor decks, Term Sheet advisory, SHA, and Shareholders’ Agreements.',
    overview: 'Designing compelling 12-15 slide investor pitch decks combined with rigorous transaction documentation including Term Sheets, Share Subscription Agreements (SSA), Shareholders\' Agreements (SHA), and Conditions Precedent (CP) tracking for seed to venture capital rounds.',
    whoNeeds: 'Founders raising angel capital, seed funding, or Series A venture investment.',
    whyRequired: 'Prevents founders from signing unfavorable liquidation preferences or excessive dilution clauses.',
    basicProcess: [
      'Distilling the core narrative: Problem, Solution, TAM/SAM/SOM, Moat, Traction, and The Ask',
      'High-impact visual slide design designed for corporate angel scrutiny',
      'Legal drafting and negotiation of Term Sheet and SHA covenants'
    ],
    assistanceSteps: [
      'Unit economics modeling (CAC, LTV, Gross Margins, Churn, ARR)',
      'Drafting founder-friendly SHA voting and exit clauses',
      'Virtual Data Room (VDR) setup for investor due diligence'
    ],
    documents: [
      'Financial projections, historical metrics, and team background'
    ],
    authority: 'Venture Capital Advisory Practice',
    officialPortal: 'https://www.companydocx.com',
    portalName: 'Company DOCX Startup Advisory',
    faq: [
      {
        question: 'What is a Term Sheet in startup funding?',
        answer: 'A non-binding document outlining the fundamental terms and conditions (valuation, investment amount, voting rights) under which an investment will be made.'
      }
    ],
    keywords: ['pitch deck', 'investor documentation', 'term sheet', 'shareholders agreement', 'sha', 'venture capital', 'cap table']
  },
  {
    id: 'valuation-report-ibbi',
    name: 'Valuation Report (Registered Valuer - IBBI)',
    category: 'business-setup',
    categoryName: 'Business Setup & Startup Services',
    shortDescription: 'Statutory business, share, and asset valuation reports under Companies Act and Income Tax Rule 11UA.',
    overview: 'Formal valuation reports prepared and certified by IBBI Registered Valuers and SEBI Merchant Bankers as mandated under Section 247 of Companies Act, FEMA regulations, and Section 56(2)(viib) for issuing shares to investors.',
    whoNeeds: 'Startups issuing equity to investors, companies executing mergers or buybacks, and cross-border FDI recipients.',
    whyRequired: 'Issuing shares without an IBBI valuation report violates the Companies Act and attracts angel tax penalties under Income Tax Rule 11UA.',
    basicProcess: [
      'Financial model audit and 5-year business projection review',
      'Selecting compliant valuation methodologies (Discounted Cash Flow - DCF, Net Asset Value - NAV)',
      'Preparation of technical valuation report with UDIN certification'
    ],
    assistanceSteps: [
      'Liaison with IBBI Registered Valuers for corporate shares',
      'Valuation certificates acceptable to MCA, Income Tax, and RBI',
      'Assisting with post-valuation Form PAS-3 and FC-GPR filings'
    ],
    documents: [
      'Audited financial statements for the last 3 financial years',
      '5-year projected P&L, Balance Sheet, and Cash Flow statement',
      'Details of proposed share allotment and pricing terms'
    ],
    authority: 'Insolvency and Bankruptcy Board of India (IBBI) / CBDT / MCA',
    officialPortal: 'https://ibbi.gov.in',
    portalName: 'IBBI Registered Valuers Framework',
    faq: [
      {
        question: 'Who is legally authorized to issue a valuation report for share allotment in India?',
        answer: 'Only an IBBI Registered Valuer (for Companies Act/Income Tax) or a SEBI Merchant Banker (for FEMA/Income Tax) is legally authorized.'
      }
    ],
    keywords: ['valuation report', 'ibbi registered valuer', 'rule 11ua', 'dcf valuation', 'share valuation', 'angel tax']
  },
  {
    id: 'franchise-expansion-advisory',
    name: 'Business Structuring & Franchise Documentation',
    category: 'business-setup',
    categoryName: 'Business Setup & Startup Services',
    shortDescription: 'Franchise Disclosure Documents (FDD), Franchise Agreements, and multi-state expansion models.',
    overview: 'Structuring nationwide business expansion models including FOCO (Franchise Owned Company Operated) and FOFO (Franchise Owned Franchise Operated) models, drafting robust Franchise Agreements, Master Franchise contracts, and trademark licensing.',
    whoNeeds: 'Established retail brands, restaurants, cloud kitchens, salons, and educational centers expanding through franchisees.',
    whyRequired: 'Protects your brand integrity, ensures timely royalty collection, and prevents rogue franchisees from stealing your recipes or systems.',
    basicProcess: [
      'Structuring royalty models, franchise fees, and territory exclusivity rules',
      'Drafting Franchise Agreement, Brand Manual covenants, and Non-Compete agreements',
      'Standardizing onboarding SOPs and dispute resolution protocols'
    ],
    assistanceSteps: [
      'Drafting comprehensive FOFO / FOCO commercial agreements',
      'Trademark license linkage with the Trade Marks Registry',
      'Audit protocols for verifying franchisee gross revenue and royalty remittances'
    ],
    documents: [
      'Brand trademark certificate, business operational model, and proposed fee structure'
    ],
    authority: 'Commercial Law & Franchise Practice',
    officialPortal: 'https://www.companydocx.com',
    portalName: 'Company DOCX Franchise Advisory',
    faq: [
      {
        question: 'What is the difference between FOFO and FOCO models?',
        answer: 'In FOFO (Franchise Owned Franchise Operated), the franchisee runs daily operations. In FOCO (Franchise Owned Company Operated), the brand manages operations while the partner invests in setup capital.'
      }
    ],
    keywords: ['franchise agreement', 'franchise documentation', 'foco model', 'fofo model', 'business expansion', 'brand licensing']
  }
];
