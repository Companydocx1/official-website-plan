import { ServiceItem } from './types';

export const CORPORATE_MCA_SERVICES: ServiceItem[] = [
  {
    id: 'mca-annual-compliance',
    name: 'MCA Annual Compliance',
    category: 'corporate-mca',
    categoryName: 'Corporate Compliance & MCA Services',
    shortDescription: 'Comprehensive annual secretarial and MCA statutory compliance suite for Indian corporate entities.',
    overview: 'Statutory compliance package covering annual filing of Form AOC-4 (financial statements), Form MGT-7/MGT-7A (annual return), DIR-3 KYC for directors, and mandatory maintenance of secretarial registers under the Companies Act, 2013.',
    whoNeeds: 'All active Private Limited, Public Limited, OPC, and Section 8 companies registered in India.',
    whyRequired: 'Prevents punitive late fees of ₹100/day per form, company strike-off by ROC, and director DIN deactivation.',
    basicProcess: [
      'Finalization of audited financial statements with Chartered Accountant',
      'Convening Annual General Meeting (AGM) and drafting Board Minutes',
      'Preparation and DSC signing of Form AOC-4 and MGT-7',
      'E-filing on MCA V3 portal and procurement of SRN challan receipts'
    ],
    assistanceSteps: [
      'Statutory compliance audit of past year filings',
      'Preparation of director’s report, AGM notices, and secretarial registers',
      'MCA V3 upload with Class 3 DSC and verification tracking'
    ],
    documents: [
      'Audited Balance Sheet, Profit & Loss Statement & Auditor’s Report',
      'Directors’ Report with statutory disclosures',
      'Notice of AGM and Attendance Sheet',
      'Valid Class 3 DSC of at least one Director and practicing CA/CS'
    ],
    authority: 'Ministry of Corporate Affairs (MCA), Government of India',
    officialPortal: 'https://www.mca.gov.in',
    portalName: 'Ministry of Corporate Affairs (MCA21 V3)',
    faq: [
      {
        question: 'What is the penalty for delayed AOC-4 and MGT-7 filing?',
        answer: 'Late filing penalty is ₹100 per day per form with no upper ceiling until filed.'
      }
    ],
    keywords: ['mca annual compliance', 'aoc-4', 'mgt-7', 'roc filing', 'agm minutes', 'mca v3']
  },
  {
    id: 'roc-annual-filing',
    name: 'ROC Annual Filing',
    category: 'corporate-mca',
    categoryName: 'Corporate Compliance & MCA Services',
    shortDescription: 'Mandatory annual financial statement and annual return submission with the Registrar of Companies.',
    overview: 'Timely filing of statutory corporate returns with the jurisdictional ROC (Chennai for Tamil Nadu) ensuring the company status remains active on the MCA master database.',
    whoNeeds: 'Every company and LLP incorporated under the Companies Act and LLP Act.',
    whyRequired: 'Non-filing marks the company as defaulting and triggers prosecution notices under Section 92 & 137.',
    basicProcess: [
      'Preparation of financial statements in XBRL/PDF format',
      'Filing Form AOC-4 / Form 11 (LLP)',
      'Filing Form MGT-7 / Form 8 (LLP)',
      'ROC approval and receipt verification'
    ],
    assistanceSteps: [
      'Verification of balance sheet schedules and disclosures',
      'XBRL taxonomy conversion if applicable',
      'ROC filing and SRN settlement'
    ],
    documents: [
      'Audited financial statements and notes to accounts',
      'List of shareholders and shareholding transfer log',
      'Director DSC tokens'
    ],
    authority: 'Registrar of Companies (ROC, Chennai)',
    officialPortal: 'https://www.mca.gov.in',
    portalName: 'MCA21 V3 Portal',
    faq: [
      {
        question: 'When is the due date for ROC annual filing?',
        answer: 'AOC-4 is due within 30 days of the AGM, and MGT-7 is due within 60 days of the AGM.'
      }
    ],
    keywords: ['roc annual filing', 'roc chennai', 'form 11', 'form 8', 'xbrl', 'mca filing']
  },
  {
    id: 'director-kyc-din',
    name: 'Director KYC / DIN Services',
    category: 'corporate-mca',
    categoryName: 'Corporate Compliance & MCA Services',
    shortDescription: 'Annual DIR-3 KYC filing, DIN deactivation restoration, and new DIN allotment.',
    overview: 'Annual biometric / OTP-based verification of every Director Identification Number (DIN) holder under Rule 12A of Companies (Appointment and Qualification of Directors) Rules.',
    whoNeeds: 'Every individual who holds an approved DIN, even if not currently serving on an active board.',
    whyRequired: 'Failure to file DIR-3 KYC on or before September 30 deactivates the DIN and attracts a statutory ₹5,000 late fee for reactivation.',
    basicProcess: [
      'Web-based OTP verification (DIR-3 KYC Web) or eForm submission with DSC',
      'Mobile and email OTP authentication on the MCA portal',
      'Instant DIN reactivation / active status confirmation'
    ],
    assistanceSteps: [
      'Verification of linked PAN, Aadhaar, email, and mobile records',
      'Filing web KYC or eForm with CA/CS certification',
      'Restoring deactivated DINs through challan payment assistance'
    ],
    documents: [
      'PAN Card & Aadhaar Card of Director',
      'Active mobile number and email ID for OTP',
      'Passport (mandatory for foreign directors)'
    ],
    authority: 'Ministry of Corporate Affairs (MCA)',
    officialPortal: 'https://www.mca.gov.in',
    portalName: 'MCA21 V3 Portal',
    faq: [
      {
        question: 'Who can file DIR-3 KYC Web vs eForm?',
        answer: 'DIR-3 KYC Web is used if personal details (phone, email, address) have not changed. If details changed, eForm DIR-3 KYC with DSC is required.'
      }
    ],
    keywords: ['dir-3 kyc', 'din kyc', 'din deactivation', 'director kyc', 'din reactivation']
  },
  {
    id: 'dsc-registration-renewal',
    name: 'DSC Registration & Renewal',
    category: 'corporate-mca',
    categoryName: 'Corporate Compliance & MCA Services',
    shortDescription: 'Issuance and renewal of Class 3 cryptographic USB tokens for MCA V3, Income Tax, and GST.',
    overview: 'Procurement and role registration of Class 3 Digital Signature Certificates on the MCA V3 portal and Income Tax portal, ensuring uninterrupted statutory signing authority.',
    whoNeeds: 'Directors, Designated Partners, Authorized Signatories, and Tax Filers.',
    whyRequired: 'MCA V3 requires all signers to associate their DSC with their MCA user ID before executing filings.',
    basicProcess: [
      'Paperless Aadhaar/PAN eKYC and video recording',
      'Cryptographic burning of Class 3 DSC into FIPS USB token',
      'Association of DSC with MCA V3 profile and Income Tax portal'
    ],
    assistanceSteps: [
      'Immediate video verification guidance',
      'Issuing 2-year or 3-year Class 3 signing token',
      'MCA V3 portal DSC registration and browser configuration'
    ],
    documents: [
      'PAN Card and Aadhaar Card of applicant',
      'Color passport photograph',
      'Email and mobile number linked with Aadhaar'
    ],
    authority: 'Controller of Certifying Authorities (CCA)',
    officialPortal: 'https://cca.gov.in',
    portalName: 'CCA Official Portal',
    faq: [
      {
        question: 'Can an expired DSC be renewed without video verification?',
        answer: 'Regulatory standards require fresh Aadhaar eKYC and a 15-second video verification for all new and renewal DSC tokens.'
      }
    ],
    keywords: ['dsc renewal', 'class 3 token', 'mca v3 dsc', 'associate dsc', 'emudhra']
  },
  {
    id: 'company-name-change',
    name: 'Company Name Change',
    category: 'corporate-mca',
    categoryName: 'Corporate Compliance & MCA Services',
    shortDescription: 'End-to-end statutory rebranding, name reservation (RUN), and Central Government MCA approval.',
    overview: 'Formal change of corporate identity under Section 13 of the Companies Act through name reservation, special shareholder resolution, and Form MGT-14 and INC-24 approval from Central Registration Centre (CRC).',
    whoNeeds: 'Businesses rebranding, pivoting industry focus, or resolving trademark disputes.',
    whyRequired: 'Legal validity of the new brand identity; requires updated Certificate of Incorporation from the ROC.',
    basicProcess: [
      'Board Meeting resolution for proposed name change',
      'Name reservation application via RUN on MCA V3',
      'Extraordinary General Meeting (EGM) special resolution & Form MGT-14 filing',
      'Filing Form INC-24 for Central Government approval and issuance of new COI'
    ],
    assistanceSteps: [
      'Pre-filing trademark conflict check on IP India',
      'Drafting EGM notices, special resolutions, and altered MOA/AOA',
      'Liaison with CRC MCA until fresh Certificate of Incorporation is issued'
    ],
    documents: [
      'Existing Certificate of Incorporation & MOA/AOA',
      'Board Resolution and EGM Special Resolution',
      'Altered MOA and AOA reflecting new name',
      'Trademark NOC if name matches a registered mark'
    ],
    authority: 'Ministry of Corporate Affairs / CRC',
    officialPortal: 'https://www.mca.gov.in',
    portalName: 'MCA21 V3 Portal',
    faq: [
      {
        question: 'Does changing company name affect existing contracts and bank accounts?',
        answer: 'No. The legal entity continues with the same CIN; existing contracts and liabilities remain valid and transfer automatically under the new name.'
      }
    ],
    keywords: ['company name change', 'run mca', 'inc-24', 'mgt-14', 'corporate rebranding']
  },
  {
    id: 'registered-office-change',
    name: 'Registered Office Change',
    category: 'corporate-mca',
    categoryName: 'Corporate Compliance & MCA Services',
    shortDescription: 'Relocation of registered office within city, state, or across ROC/RD jurisdictions.',
    overview: 'Statutory compliance for changing principal place of business under Section 12 of the Companies Act (Form INC-22 / INC-23) ensuring statutory notices reach valid premises.',
    whoNeeds: 'Companies shifting office premises, moving between cities, or relocating state headquarters.',
    whyRequired: 'Mandatory statutory requirement; operating from an unnotified address attracts severe penalties under Section 12(8).',
    basicProcess: [
      'Board resolution approving premises relocation',
      'Filing Form INC-22 within 30 days of change (with address proof & landlord NOC)',
      'Regional Director (RD) approval via INC-23 if moving across state borders'
    ],
    assistanceSteps: [
      'Documentation review for property ownership, lease deed, and utility bill',
      'Filing Form INC-22 on MCA V3',
      'Updating GST, PAN, bank records, and statutory signage'
    ],
    documents: [
      'Utility bill of new premises (Electricity/Gas under 2 months)',
      'Rent Agreement / Lease Deed with Landlord NOC',
      'Photographs of registered office with exterior name board and director presence'
    ],
    authority: 'Registrar of Companies / Regional Director',
    officialPortal: 'https://www.mca.gov.in',
    portalName: 'MCA21 V3 Portal',
    faq: [
      {
        question: 'Are exterior office photographs mandatory for INC-22?',
        answer: 'Yes, MCA mandates uploading photographs showing the exterior building with the company name board and interior director presence.'
      }
    ],
    keywords: ['registered office change', 'inc-22', 'inc-23', 'office shifting', 'roc address']
  },
  {
    id: 'director-appointment-resignation',
    name: 'Director Appointment / Resignation',
    category: 'corporate-mca',
    categoryName: 'Corporate Compliance & MCA Services',
    shortDescription: 'Addition, regularisation, or resignation of directors on the MCA portal (Form DIR-11 & DIR-12).',
    overview: 'Statutory management changes governed by Sections 152, 161, and 168 of the Companies Act, ensuring board composition is updated with the ROC within 30 days.',
    whoNeeds: 'Companies onboarding new founders, investor directors, or relieving retiring board members.',
    whyRequired: 'Legal validity of board signatories; banks and investors require approved DIR-12 for authorizing transactions.',
    basicProcess: [
      'Consent to act as director (DIR-2) and declaration of non-disqualification (DIR-8)',
      'Board/Shareholder meeting resolution',
      'Filing Form DIR-12 with ROC within 30 days',
      'Filing Form DIR-11 (by resigning director if desired)'
    ],
    assistanceSteps: [
      'Drafting appointment letter, DIR-2, DIR-8, and resignation letters',
      'E-filing Form DIR-12 on MCA V3 with CA/CS certification',
      'Updating MCA master data and signatory bank resolutions'
    ],
    documents: [
      'PAN and Aadhaar of incoming/outgoing Director',
      'Consent Form DIR-2 and Intimation Form DIR-8',
      'Resignation Letter / Board Resolution',
      'Notice of Board Meeting & Minutes'
    ],
    authority: 'Ministry of Corporate Affairs (MCA)',
    officialPortal: 'https://www.mca.gov.in',
    portalName: 'MCA21 V3 Portal',
    faq: [
      {
        question: 'Can a company operate with zero directors after resignations?',
        answer: 'No. A Private Limited company must have at least 2 directors, and an OPC must have at least 1 director at all times.'
      }
    ],
    keywords: ['director appointment', 'director resignation', 'dir-12', 'dir-11', 'dir-2', 'board change']
  },
  {
    id: 'share-transfer-allotment',
    name: 'Share Transfer & Share Allotment',
    category: 'corporate-mca',
    categoryName: 'Corporate Compliance & MCA Services',
    shortDescription: 'Execution of SH-4 transfer deeds, PAS-3 return of allotment, stamp duty, and share certificates.',
    overview: 'Structuring corporate equity changes including fresh issuance of shares (rights issue/private placement) and secondary share transfers between shareholders under Companies Act rules.',
    whoNeeds: 'Startups bringing in angel investors, partners buying out shares, or family wealth succession.',
    whyRequired: 'Mandatory statutory compliance; share transfers require payment of Indian stamp duty (0.015%) and filing Form PAS-3 for fresh allotments.',
    basicProcess: [
      'Execution of Securities Transfer Deed in Form SH-4 with revenue stamp',
      'Board approval and entry into Register of Members (MGT-1)',
      'For fresh allotment: Filing Form PAS-3 within 30 days with ROC',
      'Issuance of stamped Share Certificates in Form SH-1'
    ],
    assistanceSteps: [
      'Advisory on stamp duty payment on e-Stamping portals',
      'Preparation of Form SH-4, Board Minutes, and share register updates',
      'Filing Form PAS-3 with certified list of allottees'
    ],
    documents: [
      'Executed Form SH-4 Securities Transfer Deed',
      'Original Share Certificates for endorsement',
      'Board Resolution approving transfer or allotment',
      'List of allottees with PAN and address'
    ],
    authority: 'Ministry of Corporate Affairs / State Revenue Stamp Authority',
    officialPortal: 'https://www.mca.gov.in',
    portalName: 'MCA21 V3 Portal',
    faq: [
      {
        question: 'What is the stamp duty on share transfers in India?',
        answer: 'As per the Indian Stamp Act, stamp duty on transfer of shares is 0.015% of the total consideration value.'
      }
    ],
    keywords: ['share transfer', 'share allotment', 'pas-3', 'sh-4', 'share certificate', 'sh-1']
  },
  {
    id: 'increase-authorised-capital',
    name: 'Increase in Authorised Capital',
    category: 'corporate-mca',
    categoryName: 'Corporate Compliance & MCA Services',
    shortDescription: 'Expansion of company capital ceiling via SH-7 filing, ROC stamp duty, and MOA alteration.',
    overview: 'Statutory procedure under Section 61 & 64 to raise the company’s capital ceiling, enabling new share issuance, equity funding rounds, or conversion of debt.',
    whoNeeds: 'Companies issuing fresh equity exceeding their current authorized capital limit.',
    whyRequired: 'A company cannot legally issue shares beyond its registered authorized capital without MCA approval.',
    basicProcess: [
      'Convening EGM and passing Ordinary Resolution to alter Capital Clause',
      'Payment of differential ROC fee and state stamp duty on MCA portal',
      'Filing Form SH-7 within 30 days of resolution',
      'Update of MCA master data capital limits'
    ],
    assistanceSteps: [
      'Calculation of differential ROC registration fee and stamp duty',
      'Drafting EGM notice, resolutions, and amended MOA Capital Clause',
      'Form SH-7 filing and approval confirmation'
    ],
    documents: [
      'Notice of Extraordinary General Meeting (EGM) and Explanatory Statement',
      'Certified copy of Ordinary Resolution',
      'Altered Memorandum of Association (MOA Clause V)'
    ],
    authority: 'Ministry of Corporate Affairs (MCA)',
    officialPortal: 'https://www.mca.gov.in',
    portalName: 'MCA21 V3 Portal',
    faq: [
      {
        question: 'Does increasing authorized capital require paying stamp duty?',
        answer: 'Yes, differential ROC fees and state-specific stamp duty on the increased capital amount are payable to the government.'
      }
    ],
    keywords: ['increase authorised capital', 'sh-7', 'capital clause', 'moa alteration', 'roc fee']
  },
  {
    id: 'moa-aoa-amendment',
    name: 'MOA / AOA Amendment',
    category: 'corporate-mca',
    categoryName: 'Corporate Compliance & MCA Services',
    shortDescription: 'Altering object clause, liability clause, capital clause, or articles of association (MGT-14).',
    overview: 'Statutory alteration of the charter documents of the company under Sections 13 and 14 of the Companies Act, allowing new business activities or customized shareholder voting covenants.',
    whoNeeds: 'Companies expanding into new business sectors, adding product lines, or adopting investor protective covenants.',
    whyRequired: 'Engaging in business activities not authorized by the MOA Object Clause is ultra vires and unlawful under company law.',
    basicProcess: [
      'Board meeting formulation of altered draft MOA/AOA',
      'Passing Special Resolution at EGM',
      'Filing Form MGT-14 with ROC within 30 days',
      'ROC approval and endorsement of altered charter'
    ],
    assistanceSteps: [
      'Drafting compliant main and incidental object clauses',
      'Filing Form MGT-14 with certified copies of altered MOA/AOA',
      'Procurement of ROC approval certificate'
    ],
    documents: [
      'Existing MOA & AOA copies',
      'Notice of EGM, Explanatory Statement, and Special Resolution',
      'Amended copy of MOA and AOA'
    ],
    authority: 'Ministry of Corporate Affairs (MCA)',
    officialPortal: 'https://www.mca.gov.in',
    portalName: 'MCA21 V3 Portal',
    faq: [
      {
        question: 'Can a company enter a new industry without amending its MOA?',
        answer: 'No. The company must first amend its Object Clause (Clause III) via Special Resolution and Form MGT-14 approval.'
      }
    ],
    keywords: ['moa amendment', 'aoa amendment', 'object clause', 'mgt-14', 'ultra vires']
  },
  {
    id: 'company-secretarial-services',
    name: 'Company Secretarial Services',
    category: 'corporate-mca',
    categoryName: 'Corporate Compliance & MCA Services',
    shortDescription: 'Dedicated CS retainership, statutory registers, corporate governance, and secretarial audit.',
    overview: 'Ongoing corporate secretarial oversight by practicing Company Secretaries ensuring compliance with Secretarial Standards (SS-1 & SS-2), board governance, and statutory register maintenance.',
    whoNeeds: 'Growth-stage startups, mid-market companies, joint ventures, and funded entities.',
    whyRequired: 'Mandatory under Section 205 of the Companies Act; protects directors from personal regulatory liability.',
    basicProcess: [
      'Monthly/quarterly governance health checks',
      'Maintenance of statutory registers in forms MBP-1, DIR-8, MGT-1, MGT-2',
      'Drafting agenda and proceedings for 4 mandatory board meetings per year'
    ],
    assistanceSteps: [
      'Comprehensive maintenance of secretarial records',
      'Secretarial compliance review and advisory on corporate governance',
      'Coordination for Secretarial Audit (Form MR-3) if applicable'
    ],
    documents: [
      'Incorporation documents and prior year filing records',
      'Current register of members and debenture holders',
      'Minutes of past board and general meetings'
    ],
    authority: 'Institute of Company Secretaries of India (ICSI) / MCA',
    officialPortal: 'https://www.icsi.edu',
    portalName: 'ICSI Official Portal',
    faq: [
      {
        question: 'How many board meetings are mandatory in a financial year?',
        answer: 'Every company must hold a minimum of 4 board meetings every year, with not more than 120 days intervening between two consecutive meetings.'
      }
    ],
    keywords: ['company secretarial', 'secretarial standards', 'ss-1', 'ss-2', 'statutory registers', 'icsi']
  },
  {
    id: 'board-resolution-minutes',
    name: 'Board Resolution & Minutes Preparation',
    category: 'corporate-mca',
    categoryName: 'Corporate Compliance & MCA Services',
    shortDescription: 'Professional drafting of Board Meeting, AGM, and EGM resolutions and statutory minute books.',
    overview: 'Drafting compliant corporate resolutions for opening bank accounts, availing loans, authorizing tenders, changing signatories, or issuing shares in strict compliance with ICSI Secretarial Standards.',
    whoNeeds: 'Companies interacting with banks, government departments, courts, and commercial vendors.',
    whyRequired: 'Banks and authorities reject applications lacking validly certified board resolutions and proper minute book citations.',
    basicProcess: [
      'Formulating specific business agenda and resolution draft',
      'Circulating notice and agenda 7 days prior to board meeting',
      'Entry and signing in statutory Minute Book within 30 days'
    ],
    assistanceSteps: [
      'Customized resolution drafting for banking, tenders, leases, and contracts',
      'Issuing certified true copies for statutory authorities',
      'Maintaining physical or electronic signed Minute Books'
    ],
    documents: [
      'Company letterhead and corporate details (CIN, PAN)',
      'Transaction particulars (bank name, loan terms, or tender details)',
      'Director signature specimens'
    ],
    authority: 'Companies Act, 2013 / ICSI Standards',
    officialPortal: 'https://www.mca.gov.in',
    portalName: 'MCA21 Portal',
    faq: [
      {
        question: 'How long must signed minute books be preserved?',
        answer: 'Minute books of general meetings and board meetings must be preserved permanently in physical or secure digital format.'
      }
    ],
    keywords: ['board resolution', 'minutes book', 'certified true copy', 'board meeting notice', 'agm minutes']
  },
  {
    id: 'due-diligence-compliance-review',
    name: 'Due Diligence & Compliance Review',
    category: 'corporate-mca',
    categoryName: 'Corporate Compliance & MCA Services',
    shortDescription: 'In-depth corporate legal and financial audit for investors, acquisitions, and bank lending.',
    overview: 'Rigorous legal and corporate secretarial audit reviewing title to shares, charge status on MCA, statutory non-compliances, pending litigation, and regulatory exposure before mergers or funding.',
    whoNeeds: 'Venture capital funds, acquiring companies, angel syndicates, and banks extending corporate credit.',
    whyRequired: 'Uncovers hidden liabilities, regulatory defaults, and ownership flaws that can jeopardize multimillion-rupee investments.',
    basicProcess: [
      'Issue of comprehensive Information Requisition List (IRL)',
      'MCA public index search and secretarial record examination',
      'Review of corporate contracts, employee registers, and tax filings',
      'Delivery of exhaustive Due Diligence Report with Red Flag summary'
    ],
    assistanceSteps: [
      'End-to-end secretarial and regulatory due diligence',
      'Review of MCA Charge Index (CHG-1 / CHG-4)',
      'Detailed Red Flag matrix and remediation roadmap'
    ],
    documents: [
      'All MCA incorporation and annual filing records since inception',
      'Statutory registers and share certificates',
      'Material business contracts, IP certificates, and litigation records'
    ],
    authority: 'Corporate Due Diligence Practice / MCA',
    officialPortal: 'https://www.mca.gov.in',
    portalName: 'MCA Master Data & Charge Index',
    faq: [
      {
        question: 'What is a Charge Search on MCA?',
        answer: 'A charge search inspects whether company assets or book debts are mortgaged to banks or financial institutions through registered Form CHG-1 filings.'
      }
    ],
    keywords: ['due diligence', 'compliance review', 'red flag report', 'mca charge search', 'investor audit']
  }
];
