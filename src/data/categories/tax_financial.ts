import { ServiceItem } from './types';

export const TAX_FINANCIAL_SERVICES: ServiceItem[] = [
  {
    id: 'income-tax-filing',
    name: 'Income Tax Return Filing (ITR 1 - 7)',
    category: 'taxation-financial',
    categoryName: 'Taxation & Financial Services',
    shortDescription: 'Tax computation and statutory e-filing for individuals, HUFs, firms, LLPs, and corporates.',
    overview: 'Comprehensive direct tax return preparation under the Income Tax Act, 1961 evaluating Old vs. New Tax Regimes, foreign asset disclosures, AIS/26AS reconciliation, and maximizing legal deductions under Chapter VI-A.',
    whoNeeds: 'Salaried professionals, business owners, doctors, lawyers, partnership firms, LLPs, and companies.',
    whyRequired: 'Statutory obligation; prerequisite for housing/business bank loans, visa clearances, and claiming TDS refunds.',
    basicProcess: [
      'Consolidation of Form 16/16A, AIS, TIS, and 26AS data',
      'Tax computation comparing Old Regime and New Regime',
      'Filing appropriate ITR utility (ITR-1 to ITR-7) on incometax.gov.in',
      'E-verification and tracking of tax refund orders'
    ],
    assistanceSteps: [
      'Comprehensive tax optimization and capital gains calculation',
      'Accurate filing without mismatch notices under Section 143(1)',
      'Assistance in filing rectification requests under Section 154 if required'
    ],
    documents: [
      'PAN Card and Aadhaar Card',
      'Form 16 / Form 16A TDS certificates',
      'Annual Information Statement (AIS) and 26AS',
      'Bank account statements for full financial year',
      'Capital gains statements from stock brokers or property sale deeds'
    ],
    authority: 'Income Tax Department, Ministry of Finance, Government of India',
    officialPortal: 'https://www.incometax.gov.in',
    portalName: 'Income Tax e-Filing Portal',
    faq: [
      {
        question: 'Which tax regime is better: Old or New?',
        answer: 'We run a comparative computation; the New Regime offers lower tax rates, while the Old Regime benefits those with high 80C, 80D, and home loan interest deductions.'
      }
    ],
    keywords: ['income tax return', 'itr filing', 'itr-1', 'itr-4', 'itr-6', 'tax refund', 'ais reconciliation', '26as']
  },
  {
    id: 'tds-registration-filing',
    name: 'TDS Registration (TAN) & Return Filing',
    category: 'taxation-financial',
    categoryName: 'Taxation & Financial Services',
    shortDescription: 'Allotment of TAN, monthly Challan 281 deposits, and quarterly Form 24Q / 26Q filings.',
    overview: 'Tax Deducted at Source (TDS) compliance ensuring statutory deduction on vendor contracts, professional fees, commercial rent, and salaries, followed by TRACES portal reconciliation and Form 16/16A issuance.',
    whoNeeds: 'All employers, businesses, and entities making payments subject to withholding taxes.',
    whyRequired: 'Non-deduction disallows 30% of business expenses under Section 40(a)(ia) and incurs late filing fees of ₹200/day under Section 234E.',
    basicProcess: [
      'Applying for TAN allotment in Form 49B if not already held',
      'Monthly TDS deduction and deposit via Challan ITNS-281 before 7th of every month',
      'Filing quarterly TDS returns (Form 24Q / 26Q / 27Q) within statutory due dates',
      'Downloading authenticated Form 16/16A from TRACES portal'
    ],
    assistanceSteps: [
      'Determining applicable TDS sections (194C, 194J, 194I, 194Q) and thresholds',
      'Quarterly return preparation using approved NSDL e-TDS validation utilities',
      'Resolving TRACES default notices and prior year short deduction demands'
    ],
    documents: [
      'TAN allotment letter and deductor entity PAN',
      'Monthly salary sheets and vendor payment ledgers with deductee PANs',
      'Challan receipts for taxes deposited with banks'
    ],
    authority: 'Income Tax Department / TRACES Portal',
    officialPortal: 'https://www.incometax.gov.in',
    portalName: 'Income Tax & TRACES Gateway',
    faq: [
      {
        question: 'When is a quarterly TDS return due?',
        answer: 'TDS returns are due on July 31 (Q1), October 31 (Q2), January 31 (Q3), and May 31 (Q4).'
      }
    ],
    keywords: ['tds return', 'tan allotment', 'form 26q', 'form 24q', 'traces portal', 'form 16a', 'tds challan 281']
  },
  {
    id: 'gst-registration-return-filing',
    name: 'GST Registration & Return Filing',
    category: 'taxation-financial',
    categoryName: 'Taxation & Financial Services',
    shortDescription: '15-digit GSTIN allotment, monthly/quarterly GSTR-1 & GSTR-3B filings, and ITC reconciliation.',
    overview: 'Complete GST management covering fresh registration under the CGST Act, monthly invoice reconciliation against GSTR-2B, computation of output tax liabilities, and verified filing via DSC or EVC.',
    whoNeeds: 'Businesses with turnover > ₹40 Lakhs (goods) or ₹20 Lakhs (services), e-commerce sellers, and interstate traders.',
    whyRequired: 'Mandatory for commercial trade; non-filing attracts daily late fees, 18% annual interest, and portal suspension of e-Way bills.',
    basicProcess: [
      'Form REG-01 filing with promoter KYC and business address proofs',
      'Aadhaar biometric authentication or OTP verification and GSTIN issuance',
      'Monthly sales compilation for GSTR-1 and ITC matching with GSTR-2B',
      'Monthly GSTR-3B filing and tax payment'
    ],
    assistanceSteps: [
      'Handling Clarification Notices (REG-03) and filing prompt replies (REG-04)',
      'Maximizing 100% eligible Input Tax Credit (ITC) while flagging ineligible items',
      'Preparation and e-filing of monthly or QRMP quarterly returns'
    ],
    documents: [
      'PAN and Aadhaar of Proprietor / Partners / Directors',
      'Business address proof (Electricity bill with Landlord NOC / Rent agreement)',
      'Cancelled Cheque or Bank Statement showing business name'
    ],
    authority: 'Goods and Services Tax Network (GSTN) / CBIC',
    officialPortal: 'https://www.gst.gov.in',
    portalName: 'Goods and Services Tax (GST) Portal',
    faq: [
      {
        question: 'Can I file a Nil GST return via SMS?',
        answer: 'Yes, if there are zero outward supplies and zero input credit in a tax period, a Nil GSTR-3B can be filed via verified SMS.'
      }
    ],
    keywords: ['gst registration', 'gst return filing', 'gstr-1', 'gstr-3b', 'itc reconciliation', 'gstr-2b', 'gstin']
  },
  {
    id: 'gst-annual-return-audit',
    name: 'GST Annual Return (GSTR-9) & Audit Compliance',
    category: 'taxation-financial',
    categoryName: 'Taxation & Financial Services',
    shortDescription: 'Annual reconciliation of sales, taxes paid, and ITC claimed in Form GSTR-9 and GSTR-9C.',
    overview: 'Comprehensive annual consolidation matching audited financial statements with monthly GST returns, identifying missed input tax credits, correcting classification errors, and filing reconciliation statement GSTR-9C.',
    whoNeeds: 'All regular GST taxpayers with aggregate annual turnover exceeding ₹2 Crores.',
    whyRequired: 'Prevents departmental audit notices (DRC-01A / DRC-01) and heavy penalties under Section 73 & 74 of the CGST Act.',
    basicProcess: [
      'Annual sales, purchase, and ITC reconciliation against audited balance sheet',
      'Drafting Form GSTR-9 and Form GSTR-9C self-certified reconciliation',
      'Payment of differential tax liability (if any) via Form DRC-03',
      'Final submission on gst.gov.in before statutory deadline'
    ],
    assistanceSteps: [
      'In-depth reconciliation between books of accounts, GSTR-1, and GSTR-3B',
      'Remediation of mismatched Input Tax Credit and reversal of ineligible ITC',
      'Filing GSTR-9 and GSTR-9C with complete disclosure schedules'
    ],
    documents: [
      'Audited Financial Statements (Balance Sheet, P&L, Notes to Accounts)',
      'Monthly GSTR-1, GSTR-3B, and GSTR-2B data for the entire financial year',
      'Purchase register with HSN-wise tax breakdown'
    ],
    authority: 'GSTN / Commercial Taxes Department',
    officialPortal: 'https://www.gst.gov.in',
    portalName: 'GST Official Portal',
    faq: [
      {
        question: 'Who is required to file Form GSTR-9C?',
        answer: 'Registered taxpayers whose aggregate annual turnover exceeds ₹5 Crores must submit a self-certified reconciliation statement in Form GSTR-9C.'
      }
    ],
    keywords: ['gstr-9', 'gstr-9c', 'gst annual return', 'gst audit', 'drc-03', 'itc reversal']
  },
  {
    id: 'statutory-internal-audit',
    name: 'Statutory & Internal Audit Services',
    category: 'taxation-financial',
    categoryName: 'Taxation & Financial Services',
    shortDescription: 'Companies Act statutory audits, Tax Audits (Section 44AB), and internal risk audits.',
    overview: 'Independent assurance services evaluating financial reporting accuracy, internal financial controls (IFC), statutory compliance with Indian Accounting Standards (Ind AS), and Tax Audit reporting in Form 3CD.',
    whoNeeds: 'Private Limited Companies, LLPs with turnover > ₹40 Lakhs, and businesses with turnover > ₹1 Crore (or ₹10 Crores for digital transactions).',
    whyRequired: 'Mandatory statutory requirement under the Companies Act, 2013 and Section 44AB of the Income Tax Act.',
    basicProcess: [
      'Risk assessment, materiality determination, and audit plan formulation',
      'Substantive testing of vouchers, general ledger, depreciation, and bank statements',
      'Preparation of Independent Auditor’s Report and Form 3CA/3CB and 3CD',
      'Filing on Income Tax portal and MCA portal with CA UDIN'
    ],
    assistanceSteps: [
      'Pre-audit cleanup and reconciliation of inter-company accounts',
      'Coordination with qualified Chartered Accountants for smooth audit execution',
      'Preparation of statutory notes to accounts and accounting policy disclosures'
    ],
    documents: [
      'Trial Balance, General Ledger, and Balance Sheet schedules',
      'Bank Reconciliation Statements (BRS) for all operational accounts',
      'Fixed asset registers and statutory registers (PF, ESI, GST, TDS)'
    ],
    authority: 'Institute of Chartered Accountants of India (ICAI) / MCA / Income Tax',
    officialPortal: 'https://www.incometax.gov.in',
    portalName: 'Income Tax e-Filing Portal',
    faq: [
      {
        question: 'What is the penalty for failing to get accounts audited under Section 44AB?',
        answer: 'Penalty under Section 271B is 0.5% of total turnover, up to a maximum of ₹1,50,000.'
      }
    ],
    keywords: ['statutory audit', 'tax audit', 'section 44ab', 'form 3cd', 'internal audit', 'icai udin']
  },
  {
    id: 'virtual-cfo-services',
    name: 'Virtual CFO Services & Management Accounting',
    category: 'taxation-financial',
    categoryName: 'Taxation & Financial Services',
    shortDescription: 'Strategic CFO leadership, financial modeling, cash flow forecasting, and monthly MIS reporting.',
    overview: 'High-level financial governance providing businesses with an experienced Chief Financial Officer without the high cost of a full-time executive. Covers strategic budgeting, unit economics analysis, cash flow management, investor presentations, and debt advisory.',
    whoNeeds: 'Growth-stage startups, mid-sized enterprises, family businesses scaling operations, and funded ventures.',
    whyRequired: 'Strategic financial oversight prevents cash flow crises, ensures compliance, and positions the company for funding or acquisition.',
    basicProcess: [
      'Diagnostic review of financial systems, chart of accounts, and gross margins',
      'Establishing automated monthly Management Information System (MIS) reports',
      'Weekly cash flow forecasting and working capital optimization meetings',
      'Strategic board and investor representation on financial performance'
    ],
    assistanceSteps: [
      'Customized monthly P&L, balance sheet, and KPI dashboard delivery',
      'Cost reduction and margin expansion analysis',
      'Overseeing accounting staff, statutory filings, and bank credit facilities'
    ],
    documents: [
      'Historical financial statements and current accounting software access'
    ],
    authority: 'CFO Advisory Practice',
    officialPortal: 'https://www.companydocx.com',
    portalName: 'Company DOCX Financial Advisory',
    faq: [
      {
        question: 'How does a Virtual CFO differ from a regular accountant?',
        answer: 'An accountant records past transactions, whereas a Virtual CFO interprets numbers strategically to forecast cash flow, optimize taxes, and drive business growth.'
      }
    ],
    keywords: ['virtual cfo', 'management accounting', 'mis reporting', 'cash flow forecasting', 'cfo services chennai', 'fractional cfo']
  },
  {
    id: 'tax-planning-advisory',
    name: 'Tax Planning & Corporate Advisory',
    category: 'taxation-financial',
    categoryName: 'Taxation & Financial Services',
    shortDescription: 'Legitimate direct and indirect tax structuring, corporate restructuring, and capital gains planning.',
    overview: 'Strategic tax minimization utilizing statutory exemptions, deductions, and compliant business entity structuring under Indian tax jurisprudence, ensuring optimal post-tax corporate profits and personal wealth retention.',
    whoNeeds: 'High-net-worth individuals (HNIs), business owners, real estate sellers, and expanding corporate groups.',
    whyRequired: 'Unstructured business operations often result in paying 30% to 40% in avoidable taxes that could legitimately be reinvested.',
    basicProcess: [
      'Comprehensive financial asset and income stream review',
      'Evaluating statutory exemptions under Sections 54, 54EC, 54F, 80-IAC, and DTAA',
      'Formulating actionable tax planning roadmap and implementation oversight'
    ],
    assistanceSteps: [
      'Capital gains tax saving strategies for real estate and equity sales',
      'Cross-border Double Taxation Avoidance Agreement (DTAA) advisory',
      'Structuring promoter remuneration, dividends, and director loans'
    ],
    documents: [
      'Recent tax returns, capital asset details, and proposed commercial transaction memos'
    ],
    authority: 'Income Tax Department, Government of India',
    officialPortal: 'https://www.incometax.gov.in',
    portalName: 'Income Tax Strategic Advisory',
    faq: [
      {
        question: 'What is Section 54EC capital gains exemption?',
        answer: 'It allows taxpayers to invest long-term capital gains from real estate into specified government infrastructure bonds (REC/PFC) within 6 months to save capital gains tax.'
      }
    ],
    keywords: ['tax planning', 'capital gains tax', 'section 54ec', 'dtaa', 'corporate tax advisory', 'tax optimization']
  }
];
