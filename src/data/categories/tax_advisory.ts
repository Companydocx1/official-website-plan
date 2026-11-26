import { ServiceItem } from './types';

export const TAX_SERVICES: ServiceItem[] = [
  {
    id: 'gst-registration',
    name: 'GST Registration',
    category: 'tax',
    categoryName: 'GST, Tax & Accounting',
    shortDescription: 'Mandatory 15-digit GSTIN allotment for inter-state sales, e-commerce, and threshold turnover.',
    overview: 'GST Registration under the Central Goods and Services Tax (CGST) Act, 2017 grants a unique 15-digit Goods and Services Tax Identification Number (GSTIN), enabling businesses to legally collect GST and claim input tax credit (ITC).',
    whoNeeds: 'Businesses with turnover exceeding ₹40 Lakhs (goods) or ₹20 Lakhs (services), e-commerce sellers, interstate traders, and export-import firms.',
    whyRequired: 'Mandatory for interstate business transactions, selling on Amazon/Flipkart, claiming input tax credit, and avoiding heavy penalty under Section 122 of CGST Act.',
    basicProcess: [
      'TRN (Temporary Reference Number) generation on gst.gov.in using PAN, email & mobile OTP',
      'Filing Form GST REG-01 with business particulars and promoter KYC',
      'Aadhaar authentication via biometric or OTP link',
      'Issuance of GST Registration Certificate in Form GST REG-06'
    ],
    assistanceSteps: [
      'Turnover and mandatory registration applicability review',
      'Determination of primary/additional place of business and HSN/SAC codes',
      'Filing Form REG-01 on the official GST portal',
      'Handling Clarification Notices (REG-03) and filing reply (REG-04)',
      'Delivery of Form REG-06 certificate and e-Way bill portal configuration'
    ],
    documents: [
      'PAN Card & Aadhaar Card of Proprietor / Partners / Directors',
      'Passport-size photograph of authorized signatory',
      'Business place ownership proof: Electricity Bill / Property Tax Receipt',
      'No Objection Certificate (NOC) from landlord / Rent Agreement if leased',
      'Bank Account details: Cancelled Cheque / First page of Passbook / Bank Statement',
      'Partnership Deed / Certificate of Incorporation (for firms & companies)'
    ],
    authority: 'Goods and Services Tax Network (GSTN) / State & Central GST Department',
    officialPortal: 'https://www.gst.gov.in',
    portalName: 'Goods & Services Tax (GST) Portal',
    faq: [
      {
        question: 'What is the turnover threshold for mandatory GST registration in Tamil Nadu?',
        answer: 'The threshold is ₹40 Lakhs annual aggregate turnover for businesses supplying goods only, and ₹20 Lakhs for businesses providing services.'
      },
      {
        question: 'Can I apply for voluntary GST registration even if my turnover is below the threshold limit?',
        answer: 'Yes, voluntary registration is allowed and beneficial for claiming Input Tax Credit (ITC) and establishing B2B commercial credibility.'
      }
    ],
    keywords: ['gst registration', 'gstin', 'reg-01', 'itc', 'gst portal', 'gst chennai']
  },
  {
    id: 'gst-returns',
    name: 'GST Return Filing',
    category: 'tax',
    categoryName: 'GST, Tax & Accounting',
    shortDescription: 'Monthly and quarterly compliance (GSTR-1, GSTR-3B, GSTR-9) and Input Tax Credit reconciliation.',
    overview: 'Periodic filing of outward supply details and tax liabilities through GSTR-1, GSTR-3B, quarterly QRMP scheme filings, and annual reconciliation (GSTR-9/9C) to maintain GST compliance and avoid portal blocking.',
    whoNeeds: 'Every entity holding an active GSTIN, including those with zero transactions during a tax period (Nil returns).',
    whyRequired: 'Failure to file attracts daily late fees, 18% annual interest on unpaid tax, suspension of GSTIN, and blocking of e-Way bills.',
    basicProcess: [
      'Monthly sales invoice and debit/credit note compilation for GSTR-1',
      'Input Tax Credit (ITC) reconciliation against GSTR-2B',
      'Computation of net output tax liability and tax challan payment (PMT-06)',
      'Submission and verification of GSTR-3B via DSC or EVC'
    ],
    assistanceSteps: [
      'Monthly invoice ledger ingestion and reconciliation with GSTR-2B/2A',
      'Maximizing legitimate ITC while preventing ineligible claims',
      'Preparation and filing of GSTR-1, GSTR-3B, and GSTR-9',
      'Advisory on handling GST DRC-01 notices and Departmental audits'
    ],
    documents: [
      'Sales register / Invoices issued during the tax period',
      'Purchase register / Inward supply tax invoices and expense bills',
      'Bank statement verifying output tax payments',
      'GSTR-2B data downloaded from the GST portal'
    ],
    authority: 'GSTN / Central Board of Indirect Taxes and Customs (CBIC)',
    officialPortal: 'https://www.gst.gov.in',
    portalName: 'Goods & Services Tax (GST) Portal',
    faq: [
      {
        question: 'Must I file a GST return if I had zero sales or purchases in a month?',
        answer: 'Yes, filing a Nil return is legally mandatory for every month/quarter until the GST registration is formally surrendered or cancelled.'
      }
    ],
    keywords: ['gst return', 'gstr-1', 'gstr-3b', 'gstr-9', 'itc reconciliation', 'qrmp', 'gst filing']
  },
  {
    id: 'income-tax-return',
    name: 'Income Tax Return Filing',
    category: 'tax',
    categoryName: 'GST, Tax & Accounting',
    shortDescription: 'Accurate e-filing of ITR-1 through ITR-7 for individuals, professionals, firms, and companies.',
    overview: 'Statutory declaration of annual earnings, deductions, tax liabilities, and advance tax payments to the Income Tax Department under the Income Tax Act, 1961.',
    whoNeeds: 'Salaried employees, freelancers, professionals, business owners, NRIs, partnership firms, and companies.',
    whyRequired: 'Statutory obligation; prerequisite for home loan/car loan approvals, visa applications, and claiming TDS refunds.',
    basicProcess: [
      'Annual financial data and TDS statement (Form 26AS & AIS/TIS) consolidation',
      'Comparative tax regime evaluation (Old Regime vs. New Regime)',
      'Drafting the appropriate ITR utility (ITR-1, 2, 3, 4, 5, 6, 7)',
      'e-Filing on incometax.gov.in followed by e-Verification'
    ],
    assistanceSteps: [
      'Review of Form 16, bank interest certificates, capital gains, and AIS disclosures',
      'Regime optimization to legitimately minimize personal or corporate tax liability',
      'Accurate filing without mismatch notices under Section 143(1)',
      'Handling processing intimations and monitoring TDS refunds'
    ],
    documents: [
      'PAN Card and Aadhaar Card',
      'Form 16 / Form 16A (TDS Certificates)',
      'Annual Information Statement (AIS) and Form 26AS',
      'Bank Account statements for the full financial year',
      'Investment proofs (80C, 80D, NPS, Home Loan Interest) if opting for Old Regime',
      'Capital Gains statements from stock brokers / mutual funds / property sale deeds'
    ],
    authority: 'Income Tax Department, Ministry of Finance, Government of India',
    officialPortal: 'https://www.incometax.gov.in',
    portalName: 'Income Tax e-Filing Portal',
    faq: [
      {
        question: 'What is the difference between Form 26AS and AIS?',
        answer: 'Form 26AS records tax deducted at source (TDS) and advance tax paid, whereas the AIS (Annual Information Statement) provides comprehensive disclosures on interest, dividends, mutual fund trades, and high-value transactions.'
      }
    ],
    keywords: ['income tax', 'itr filing', 'itr-1', 'itr-4', 'itr-6', 'ais', '26as', 'tax refund']
  },
  {
    id: 'tax-compliance',
    name: 'Tax Compliance & TDS Services',
    category: 'tax',
    categoryName: 'GST, Tax & Accounting',
    shortDescription: 'Quarterly TDS return filing (24Q, 26Q), TCS returns, advance tax computation, and tax notices.',
    overview: 'Ongoing direct tax governance including deducting and depositing TDS, filing quarterly TDS returns, issuing Form 16/16A certificates, and calculating advance tax installments to avoid interest under Sections 234B and 234C.',
    whoNeeds: 'Employers, corporates, firms, and individuals making payments subject to withholding tax (rent, contractor, salary, professional fees).',
    whyRequired: 'Prevents disallowance of business expenses under Section 40(a)(ia) and statutory late filing fees of ₹200/day under Section 234E.',
    basicProcess: [
      'Monthly TDS deduction and deposit via Challan ITNS-281 before the 7th of each month',
      'Quarterly TDS return preparation in Form 24Q (salaries) and Form 26Q (non-salaries)',
      'Generation of Form 16/16A from TRACES portal for payees',
      'Quarterly advance tax calculations (June 15, Sept 15, Dec 15, March 15)'
    ],
    assistanceSteps: [
      'Advisory on applicable TDS sections (194C, 194J, 194I, 194Q) and withholding thresholds',
      'Challan verification and TRACES portal management',
      'Filing quarterly TDS/TCS returns and resolving TRACES justification reports',
      'Representations for tax rectification petitions under Section 154'
    ],
    documents: [
      'TAN (Tax Deduction and Collection Account Number) allotment letter',
      'Monthly salary sheets and contractor/vendor payment ledgers',
      'Challan receipts for TDS deposited with designated banks',
      'PAN numbers and addresses of all deductees'
    ],
    authority: 'Income Tax Department / TRACES (TDS Reconciliation Analysis and Correction Enabling System)',
    officialPortal: 'https://www.incometax.gov.in',
    portalName: 'Income Tax e-Filing Portal / TRACES',
    faq: [
      {
        question: 'When is a business required to apply for a TAN?',
        answer: 'Every person liable to deduct tax at source (TDS) or collect tax at source (TCS) must obtain a TAN under Section 203A of the Income Tax Act.'
      }
    ],
    keywords: ['tds return', 'tan', 'form 26q', 'form 24q', 'traces', 'advance tax', 'tax notice']
  },
  {
    id: 'professional-tax',
    name: 'Professional Tax Registration & Compliance',
    category: 'tax',
    categoryName: 'GST, Tax & Accounting',
    shortDescription: 'State-level statutory registration and half-yearly return filing for employers and professionals.',
    overview: 'Professional Tax is a state-levied tax on professions, trades, and employment governed by the relevant State Municipalities and Municipal Corporation Acts (e.g., Greater Chennai Corporation in Tamil Nadu).',
    whoNeeds: 'All employers, practicing professionals (doctors, lawyers, CAs), and self-employed business owners.',
    whyRequired: 'Statutory mandate; necessary for municipal trade licenses, government inspections, and avoiding interest penalties.',
    basicProcess: [
      'Application for Employer Registration (PTEC) and Enrollment (PTRC) with local municipal authority',
      'Monthly deduction from employee salaries as per state slab rates',
      'Half-yearly or annual return filing and tax remittance to the municipal treasury'
    ],
    assistanceSteps: [
      'Determining municipal jurisdiction and applicable tax slabs',
      'Filing registration with Greater Chennai Corporation / relevant municipality',
      'Half-yearly return preparation and payment compliance'
    ],
    documents: [
      'Certificate of Incorporation / Partnership Deed / Business Registration',
      'PAN of the entity and authorized signatory',
      'Office lease agreement or property tax receipt',
      'Employee count and salary register details'
    ],
    authority: 'Greater Chennai Corporation / Commercial Taxes & Municipal Administration, Tamil Nadu',
    officialPortal: 'https://chennaicorporation.gov.in',
    portalName: 'Greater Chennai Corporation Portal',
    faq: [
      {
        question: 'How often is Professional Tax paid in Tamil Nadu?',
        answer: 'In Tamil Nadu, Professional Tax is typically paid on a half-yearly basis (April–September and October–March).'
      }
    ],
    keywords: ['professional tax', 'chennai corporation', 'ptrc', 'ptec', 'half yearly tax', 'tamil nadu']
  },
  {
    id: 'audit-assurance',
    name: 'Audit & Assurance Support',
    category: 'tax',
    categoryName: 'GST, Tax & Accounting',
    shortDescription: 'Assistance for Statutory Audits, Tax Audits (44AB), and internal compliance controls.',
    overview: 'Professional facilitation of statutory audits under the Companies Act, 2013, Tax Audits under Section 44AB of the Income Tax Act, and internal controls reviews conducted by qualified Chartered Accountants.',
    whoNeeds: 'Companies, LLPs with turnover > ₹40 Lakhs, and businesses with turnover exceeding ₹1 Crore (or ₹10 Crores for digital transactions).',
    whyRequired: 'Statutory legal requirement; non-compliance with Section 44AB incurs a penalty of 0.5% of total turnover (up to ₹1.5 Lakhs).',
    basicProcess: [
      'Trial Balance and General Ledger scrub and verification',
      'Verification of statutory books, vouchers, depreciation, and bank reconciliations',
      'Formulation of Independent Auditor’s Report and Form 3CA/3CB and Form 3CD',
      'Uploading and CA digital signing on the Income Tax and MCA portals'
    ],
    assistanceSteps: [
      'Pre-audit documentation cleanup and ledger verification',
      'Coordination with statutory auditors for seamless audit execution',
      'Drafting notes to accounts and accounting policy disclosures',
      'E-filing Form 3CD on incometax.gov.in'
    ],
    documents: [
      'Final Trial Balance, Balance Sheet, and Profit & Loss Statement',
      'Bank Reconciliation Statements (BRS) for all operational accounts',
      'Fixed Asset register and depreciation schedules',
      'Statutory compliance registers (PF, ESI, GST, TDS)'
    ],
    authority: 'Institute of Chartered Accountants of India (ICAI) / Income Tax / MCA',
    officialPortal: 'https://www.incometax.gov.in',
    portalName: 'Income Tax e-Filing Portal',
    faq: [
      {
        question: 'What is the turnover threshold for a business tax audit under Section 44AB?',
        answer: 'The threshold is ₹1 Crore for businesses; however, if cash receipts and payments do not exceed 5% of total turnover, the limit is relaxed to ₹10 Crores.'
      }
    ],
    keywords: ['audit', 'statutory audit', 'tax audit', 'section 44ab', 'form 3cd', 'icai']
  },
  {
    id: 'accounting-bookkeeping',
    name: 'Accounting & Bookkeeping',
    category: 'tax',
    categoryName: 'GST, Tax & Accounting',
    shortDescription: 'Dedicated monthly bookkeeping, bank reconciliation, MIS reports, and financial accounts maintenance.',
    overview: 'End-to-end accounting services maintaining compliant double-entry books of accounts on standard cloud accounting platforms (Zoho Books, Tally Prime, QuickBooks) in accordance with Indian Accounting Standards.',
    whoNeeds: 'Startups, SMEs, trading firms, retail shops, and professional service companies requiring clean books.',
    whyRequired: 'Accurate books are statutory under Section 128 of the Companies Act and essential for making informed business decisions and securing bank loans.',
    basicProcess: [
      'Systematic recording of purchase bills, sales invoices, and expense vouchers',
      'Monthly bank and credit card statement reconciliation',
      'Preparation of monthly Profit & Loss, Balance Sheet, and Cash Flow statements',
      'Accounts Receivable (AR) and Accounts Payable (AP) tracking'
    ],
    assistanceSteps: [
      'Chart of Accounts setup customized to your industry',
      'Daily/weekly ledger entries and digital invoice indexing',
      'Monthly financial closing and management reporting',
      'Clean year-end finalization ready for tax filing and audit'
    ],
    documents: [
      'Bank statements in PDF or Excel format',
      'Sales and purchase invoices / POS reports',
      'Expense receipts, utility bills, and loan amortization schedules'
    ],
    authority: 'Statutory Accounting Standards / MCA Section 128',
    officialPortal: 'https://www.companydocx.com',
    portalName: 'Company DOCX Accounting Practice',
    faq: [
      {
        question: 'Can you work with our existing accounting software like Zoho Books or Tally?',
        answer: 'Yes, our team works seamlessly across Zoho Books, Tally Prime, QuickBooks, and Excel-based systems.'
      }
    ],
    keywords: ['accounting', 'bookkeeping', 'zoho books', 'tally', 'mis reports', 'bank reconciliation']
  },
  {
    id: 'payroll-services',
    name: 'Payroll Services',
    category: 'tax',
    categoryName: 'GST, Tax & Accounting',
    shortDescription: 'Monthly salary structuring, payslips, PF, ESI, TDS calculations, and full & final settlements.',
    overview: 'Comprehensive payroll management ensuring timely salary disbursement calculations, professional tax deductions, EPF/ESIC statutory return filings, and delivery of password-protected payslips.',
    whoNeeds: 'Companies with 2 to 500+ employees seeking error-free, compliant employee remuneration processes.',
    whyRequired: 'Non-compliance with labour laws and delayed PF/ESI payments lead to criminal liability and hefty damages.',
    basicProcess: [
      'Monthly attendance, leave, and overtime compilation',
      'Salary computation with tax-efficient CTC structuring',
      'Preparation of PF ECR, ESIC challans, and TDS (Salary) remittances',
      'Generation of itemized employee payslips and bank payout files'
    ],
    assistanceSteps: [
      'CTC structuring ensuring PF, ESI, and Gratuity compliance',
      'Monthly payroll processing and automated payslip delivery',
      'Monthly EPFO and ESIC portal return submissions',
      'Annual Form 16 Part A and Part B generation for all employees'
    ],
    documents: [
      'Employee master data (Name, PAN, Aadhaar, Bank Details, UAN, ESIC IP)',
      'Monthly attendance and biometric log records',
      'Salary revision, incentive, or bonus authorization notes'
    ],
    authority: 'EPFO, ESIC & Ministry of Labour and Employment',
    officialPortal: 'https://www.epfindia.gov.in',
    portalName: 'EPFO Portal',
    faq: [
      {
        question: 'When is PF registration mandatory for an establishment?',
        answer: 'EPF registration is legally mandatory for any establishment employing 20 or more persons (and can be opted voluntarily for fewer employees).'
      }
    ],
    keywords: ['payroll', 'salary structuring', 'payslip', 'epf', 'esic', 'form 16', 'full and final']
  }
];

export const ADVISORY_SERVICES: ServiceItem[] = [
  {
    id: 'fundraising-support',
    name: 'Fundraising Support',
    category: 'advisory',
    categoryName: 'Business Advisory',
    shortDescription: 'Strategic transaction advisory for angel rounds, venture capital, and institutional debt.',
    overview: 'Comprehensive advisory for early-stage and growth startups preparing to raise capital. We assist with term sheet negotiations, due diligence preparedness, financial models, and transaction documentation.',
    whoNeeds: 'Startups and high-growth businesses raising Seed, Pre-Series A, Series A, or bank debt funding.',
    whyRequired: 'Prevents founder dilution mistakes, ensures compliance with FDI/Companies Act rules, and accelerates closure.',
    basicProcess: [
      'Financial model review and valuation readiness check',
      'Creating virtual data room (VDR) for investor legal & financial due diligence',
      'Term Sheet and Shareholders’ Agreement (SHA) advisory and negotiation',
      'Closing statutory filings with MCA and RBI'
    ],
    assistanceSteps: [
      'Reviewing capitalization table (Cap Table) and ESOP pool sizing',
      'Structuring compliance checklist for investor due diligence',
      'Advisory on Share Subscription Agreements (SSA) and Conditions Precedent (CP)',
      'Post-funding MCA allotment filings'
    ],
    documents: [
      '3-to-5 year financial model and unit economics analysis',
      'Historical audited financial statements and MCA corporate records',
      'Cap table showing existing shareholding patterns'
    ],
    authority: 'Corporate & Legal Governance',
    officialPortal: 'https://www.companydocx.com',
    portalName: 'Company DOCX Business Advisory',
    faq: [
      {
        question: 'What is a Condition Precedent (CP) in fundraising?',
        answer: 'Conditions Precedent are statutory and operational requirements that a startup must fulfill before the investor releases investment capital.'
      }
    ],
    keywords: ['fundraising', 'venture capital', 'term sheet', 'due diligence', 'cap table', 'angel round']
  },
  {
    id: 'valuation-report',
    name: 'Valuation Report',
    category: 'advisory',
    categoryName: 'Business Advisory',
    shortDescription: 'Statutory valuation by Registered Valuer (IBBI) and Merchant Banker for shares and assets.',
    overview: 'Professional business and share valuation reports required under the Companies Act, Income Tax Act (Rule 11UA/11UB), FEMA regulations, and IBC, prepared by IBBI Registered Valuers.',
    whoNeeds: 'Startups issuing shares to new investors, companies doing mergers/demergers, and cross-border investments.',
    whyRequired: 'Mandatory statutory requirement under Section 56(2)(viib) of the Income Tax Act and Section 62(1)(c) of the Companies Act.',
    basicProcess: [
      'Analysis of historical financial statements and business projections',
      'Selection of appropriate valuation methodology (DCF, NAV, Comparable Multiples)',
      'Preparation of detailed technical valuation model and report',
      'Issuance of formal Valuation Certificate with Valuer UDIN'
    ],
    assistanceSteps: [
      'Evaluating Discounted Cash Flow (DCF) projections and discount rate parameters',
      'Liaison with IBBI Registered Valuers and SEBI Merchant Bankers',
      'Delivery of compliant valuation certificate required for MCA & Income Tax'
    ],
    documents: [
      'Audited balance sheets and P&L statements for the last 3 years',
      'Projected financial statements (P&L, Balance Sheet, Cash Flow) for 5 years',
      'Details of proposed share allotment and pricing terms'
    ],
    authority: 'Insolvency and Bankruptcy Board of India (IBBI) / CBDT / MCA',
    officialPortal: 'https://ibbi.gov.in',
    portalName: 'IBBI Registered Valuer Framework',
    faq: [
      {
        question: 'Who is authorized to issue a valuation report for issue of shares under Companies Act?',
        answer: 'Under Section 247 of the Companies Act, 2013, only a Registered Valuer registered with IBBI is authorized to issue valuation reports.'
      }
    ],
    keywords: ['valuation report', 'ibbi', 'registered valuer', 'rule 11ua', 'dcf valuation', 'share valuation']
  },
  {
    id: 'pitch-deck',
    name: 'Pitch Deck Preparation',
    category: 'advisory',
    categoryName: 'Business Advisory',
    shortDescription: 'Institutional-grade investor presentations articulating market opportunity, traction, and unit economics.',
    overview: 'Drafting investor-ready pitch decks that present your problem statement, solution, addressable market (TAM/SAM/SOM), product roadmap, competitive moat, financial projections, and ask.',
    whoNeeds: 'Founders preparing to pitch to angel networks, micro VCs, incubators, or government grant committees.',
    whyRequired: 'Your pitch deck is your primary initial filter; a poorly structured deck leads to quick investor passes.',
    basicProcess: [
      'Founder discovery session to distill core narrative and unique value proposition',
      'Drafting the 12-to-15 slide narrative structure',
      'Refining market sizing, financial slides, and go-to-market strategy',
      'Delivery of editable presentation deck and executive summary one-pager'
    ],
    assistanceSteps: [
      'Formulating the business model story and defensible competitive moat',
      'Reviewing metrics (CAC, LTV, Gross Margins, Churn, MRR/ARR)',
      'Polished visual layout designed for corporate scrutiny'
    ],
    documents: [
      'Overview of product/service, customer traction, and milestone achievements',
      'Financial projections or past revenue history',
      'Founder and key team profiles'
    ],
    authority: 'Strategic Advisory Practice',
    officialPortal: 'https://www.companydocx.com',
    portalName: 'Company DOCX Business Advisory',
    faq: [
      {
        question: 'How many slides should an ideal investor pitch deck have?',
        answer: 'An effective seed-stage pitch deck typically contains 12 to 15 concise slides focusing on the problem, solution, market size, traction, business model, and the funding ask.'
      }
    ],
    keywords: ['pitch deck', 'investor presentation', 'tam sam som', 'startup pitch', 'financial model']
  },
  {
    id: 'business-consulting',
    name: 'Business Consulting',
    category: 'advisory',
    categoryName: 'Business Advisory',
    shortDescription: 'Strategic corporate advisory on restructuring, joint ventures, governance, and business expansion.',
    overview: 'High-level business and management consulting helping enterprises streamline operational governance, establish compliant inter-company agreements, resolve partner deadlocks, and structure new business divisions.',
    whoNeeds: 'Growing private companies, family-owned enterprises, foreign firms setting up operations in India, and joint ventures.',
    whyRequired: 'Navigating India’s complex multi-layered regulatory environment requires aligned legal, financial, and operational guidance.',
    basicProcess: [
      'Comprehensive operational diagnostic and regulatory health check',
      'Strategic roadmap formulation with milestones and risk analysis',
      'Implementation assistance and governance oversight'
    ],
    assistanceSteps: [
      'Diagnostic review of business legal structures and tax exposures',
      'Structuring Joint Venture (JV) frameworks and strategic alliances',
      'Advisory on corporate governance, board procedures, and statutory risk mitigation'
    ],
    documents: [
      'Corporate structure chart and ownership details',
      'Current operational agreements and regulatory licenses'
    ],
    authority: 'Corporate & Legal Governance Advisory',
    officialPortal: 'https://www.companydocx.com',
    portalName: 'Company DOCX Corporate Advisory',
    faq: [
      {
        question: 'Do you help foreign companies establish business operations in India?',
        answer: 'Yes, we advise foreign companies on entry strategies, subsidiary vs. branch office structures, FDI rules, and complete setup assistance.'
      }
    ],
    keywords: ['business consulting', 'corporate advisory', 'joint venture', 'restructuring', 'governance']
  }
];
