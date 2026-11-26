import { ServiceItem } from './types';

export const COMPANY_SERVICES: ServiceItem[] = [
  {
    id: 'pvt-ltd',
    name: 'Private Limited Company',
    category: 'company',
    categoryName: 'Company Formation & Corporate Compliances',
    shortDescription: 'Ideal legal structure for startups and growing businesses seeking limited liability and equity funding.',
    overview: 'A Private Limited Company (Pvt Ltd) is India’s most popular corporate entity under the Companies Act, 2013. It offers separate legal identity, limited liability protection to shareholders, and credibility for venture capital or institutional bank funding.',
    whoNeeds: 'Startups, tech founders, e-commerce ventures, manufacturing firms, and expanding SMEs needing equity investment.',
    whyRequired: 'Mandatory for raising venture capital/angel investment, protecting personal assets with limited liability, and providing a perpetual corporate lifespan.',
    basicProcess: [
      'Name reservation via RUN / SPICe+ Part A on MCA portal',
      'Digital Signature Certificate (DSC) issuance for all proposed directors',
      'Drafting Memorandum of Association (MOA) and Articles of Association (AOA)',
      'Filing SPICe+ Part B with AGILE-PRO-S (PAN, TAN, EPFO, ESIC, Bank Account, GST)',
      'Certificate of Incorporation (COI) issued by MCA with CIN'
    ],
    assistanceSteps: [
      'Preliminary name availability verification on MCA portal',
      'Documentation review and digital signature processing',
      'Drafting customized MoA & AoA objects aligned with your business model',
      'Submission and liaison with Central Scrutiny Centre (CRC - MCA)',
      'Post-incorporation compliance briefing & bank account resolution assistance'
    ],
    documents: [
      'PAN Card of all Directors and Shareholders',
      'Aadhaar Card / Passport / Voter ID for Identity Proof',
      'Recent Bank Statement / Electricity Bill / Mobile Bill (under 2 months old) as Address Proof',
      'Passport-size photographs of proposed directors',
      'Registered Office Proof: Electricity Bill / Property Tax Receipt',
      'No Objection Certificate (NOC) from the property owner',
      'Rent Agreement / Lease Deed if leased'
    ],
    authority: 'Ministry of Corporate Affairs (MCA), Government of India',
    officialPortal: 'https://www.mca.gov.in',
    portalName: 'Ministry of Corporate Affairs (MCA21)',
    faq: [
      {
        question: 'What is the minimum number of directors and shareholders needed?',
        answer: 'A minimum of 2 directors and 2 shareholders are required. An individual can act as both director and shareholder. At least one director must be a resident of India.'
      },
      {
        question: 'Is there a minimum paid-up capital requirement?',
        answer: 'No, the Companies Act no longer mandates a minimum paid-up capital. You can start with an authorized capital of ₹1,00,000 or as needed.'
      }
    ],
    keywords: ['company registration', 'private limited', 'pvt ltd', 'incorporation', 'mca', 'spice', 'cin']
  },
  {
    id: 'public-ltd',
    name: 'Public Limited Company',
    category: 'company',
    categoryName: 'Company Formation & Corporate Compliances',
    shortDescription: 'Designed for large-scale enterprises with public investment potential and transferable shares.',
    overview: 'A Public Limited Company is suitable for enterprises requiring large capital mobilization, public equity listing eligibility, and unrestricted share transferability under the Companies Act, 2013.',
    whoNeeds: 'Large enterprises, infrastructure ventures, financial institutions, and firms planning an Initial Public Offering (IPO).',
    whyRequired: 'Legal prerequisite for listing on stock exchanges (BSE/NSE) and inviting general public share capital subscriptions.',
    basicProcess: [
      'Obtain DSC for minimum 3 Directors',
      'Name approval via MCA SPICe+ Part A',
      'Preparation of comprehensive MoA, AoA, and legal declarations',
      'Filing SPICe+ Part B with MCA',
      'Receipt of Certificate of Incorporation and Commencement of Business declaration (INC-20A)'
    ],
    assistanceSteps: [
      'Advisory on corporate structure and capital allocation',
      'End-to-end statutory drafting and DSC collection',
      'Filing with MCA Registrar of Companies (ROC)',
      'Post-incorporation statutory register and secretarial framework set up'
    ],
    documents: [
      'PAN and Identity proofs for minimum 3 Directors and 7 Shareholders',
      'Address proof of all directors and shareholders (not older than 2 months)',
      'Registered office ownership proof or lease deed with landlord NOC',
      'Utility bill of registered premises (Electricity/Gas/Water bill)'
    ],
    authority: 'Ministry of Corporate Affairs (MCA)',
    officialPortal: 'https://www.mca.gov.in',
    portalName: 'Ministry of Corporate Affairs (MCA21)',
    faq: [
      {
        question: 'What is the minimum requirement of members for a Public Limited Company?',
        answer: 'A minimum of 7 shareholders and 3 directors are mandatory. There is no ceiling on the maximum number of shareholders.'
      }
    ],
    keywords: ['public limited', 'ltd company', 'ipo', 'shares', 'mca']
  },
  {
    id: 'opc',
    name: 'One Person Company (OPC)',
    category: 'company',
    categoryName: 'Company Formation & Corporate Compliances',
    shortDescription: 'Full corporate limited liability benefits for solo entrepreneurs and sole founders.',
    overview: 'An OPC enables a single entrepreneur to operate a corporate entity with limited liability, distinct legal personality, and complete individual control under the Companies Act.',
    whoNeeds: 'Solo founders, independent consultants, professionals, and individual product creators.',
    whyRequired: 'Provides corporate credibility, shielding personal assets while avoiding the need for a secondary co-founder.',
    basicProcess: [
      'DSC issuance for the sole director and the designated nominee',
      'Name reservation through MCA SPICe+',
      'Nominee consent form (INC-3) execution',
      'SPICe+ Part B submission and COI issuance'
    ],
    assistanceSteps: [
      'Sole proprietor to OPC viability advisory',
      'Preparation of statutory nominee paperwork',
      'MCA SPICe+ documentation and tracking',
      'PAN, TAN, and bank account setup guidance'
    ],
    documents: [
      'PAN and Aadhaar of Sole Director and Nominee',
      'Address proof of Director and Nominee (bank statement / utility bill)',
      'Nominee Consent Form in Form INC-3',
      'Registered office electricity bill and landlord NOC'
    ],
    authority: 'Ministry of Corporate Affairs (MCA)',
    officialPortal: 'https://www.mca.gov.in',
    portalName: 'Ministry of Corporate Affairs (MCA21)',
    faq: [
      {
        question: 'Why is a nominee required in an OPC?',
        answer: 'The law mandates appointing a nominee who would take charge of the company in the event of death or incapacity of the sole promoter.'
      }
    ],
    keywords: ['opc', 'one person company', 'solo founder', 'mca', 'single director']
  },
  {
    id: 'nidhi',
    name: 'Nidhi Limited Company',
    category: 'company',
    categoryName: 'Company Formation & Corporate Compliances',
    shortDescription: 'Mutual benefit financial entity fostering thrift and savings among its registered members.',
    overview: 'A Nidhi Company is a category of Non-Banking Financial Company (NBFC) governed under Section 406 of the Companies Act and Nidhi Rules. It operates solely for borrowing from and lending to its registered members.',
    whoNeeds: 'Mutual benefit societies and community thrift initiatives seeking structured legal status.',
    whyRequired: 'Enables lawful micro-savings and lending activities without requiring stringent RBI NBFC capital licensing.',
    basicProcess: [
      'Incorporation as Public Limited with Nidhi mandate',
      'Minimum 7 members and 3 directors',
      'Post-incorporation NDH-4 compliance filing for Central Government approval'
    ],
    assistanceSteps: [
      'Nidhi regulatory eligibility review',
      'Drafting specialized Nidhi MoA & AoA objects',
      'Incorporation filing and NDH compliance roadmap'
    ],
    documents: [
      'PAN & KYC proofs of 7 founding members and 3 directors',
      'Registered office proof and utility bill',
      'Declarations under Nidhi Rules 2014'
    ],
    authority: 'Ministry of Corporate Affairs (MCA)',
    officialPortal: 'https://www.mca.gov.in',
    portalName: 'Ministry of Corporate Affairs (MCA21)',
    faq: [
      {
        question: 'Can a Nidhi company do business with the general public?',
        answer: 'No. Nidhi companies can strictly transact deposits and loans exclusively with their own registered members.'
      }
    ],
    keywords: ['nidhi company', 'thrift', 'mutual benefit', 'nbfc', 'ndh-4']
  },
  {
    id: 'producer-company',
    name: 'Producer Company',
    category: 'company',
    categoryName: 'Company Formation & Corporate Compliances',
    shortDescription: 'Empowering farmers, agriculturists, and primary producers with corporate scale.',
    overview: 'A Producer Company brings together farmers, artisans, and primary producers into a corporate framework with cooperative principles and corporate efficiency.',
    whoNeeds: 'Agricultural cooperatives, farmer producer organisations (FPOs), handloom guilds, and dairy collectives.',
    whyRequired: 'Access government agricultural subsidies, collective procurement discounts, and institutional market linkages.',
    basicProcess: [
      'Verification of producer status of 10 or more primary producers (or 2+ producer institutions)',
      'DSC and DIN for minimum 5 directors',
      'SPICe+ incorporation with agriculture/primary produce MoA'
    ],
    assistanceSteps: [
      'Producer eligibility validation and documentation',
      'Bylaws and MoA customized for primary produce activities',
      'CRC filing and central approval coordination'
    ],
    documents: [
      'Farmer certificates / Land revenue records (Patta/Chitta) proving primary producer status',
      'KYC documents of minimum 10 member producers',
      'Registered office documents'
    ],
    authority: 'Ministry of Corporate Affairs (MCA)',
    officialPortal: 'https://www.mca.gov.in',
    portalName: 'Ministry of Corporate Affairs (MCA21)',
    faq: [
      {
        question: 'What is the minimum member count for a Producer Company?',
        answer: 'At least 10 primary producer individuals or 2 producer institutions are required.'
      }
    ],
    keywords: ['producer company', 'fpo', 'farmer', 'agriculture', 'patta', 'chitta']
  },
  {
    id: 'proprietorship',
    name: 'Sole Proprietorship',
    category: 'company',
    categoryName: 'Company Formation & Corporate Compliances',
    shortDescription: 'Simplest, most economical business structure for individual shop owners and local traders.',
    overview: 'A Sole Proprietorship is an unincorporated business owned and run by one individual. While there is no centralized single registration certificate, it is established through statutory business tax and shop registrations.',
    whoNeeds: 'Local retailers, freelance consultants, home businesses, and small service providers.',
    whyRequired: 'Prerequisite for opening a current bank account in the business firm name and legal trading.',
    basicProcess: [
      'Obtain PAN card of the proprietor',
      'Udyam (MSME) registration in firm name',
      'GST Registration and/or Shops & Establishments Registration',
      'Current Bank Account opening with registration certificates'
    ],
    assistanceSteps: [
      'Determination of optimal registration combination (Udyam + GST + Trade License)',
      'Filing Udyam MSME application',
      'Submitting GST Registration on gst.gov.in',
      'Issuing banker documentation dossier'
    ],
    documents: [
      'PAN Card & Aadhaar Card of Proprietor',
      'Passport-size photograph',
      'Business address proof (Electricity Bill / Rental Agreement)',
      'Bank statement or cancelled cheque of proprietor savings account'
    ],
    authority: 'Ministry of MSME / GSTN / State Commercial Tax',
    officialPortal: 'https://udyamregistration.gov.in',
    portalName: 'Udyam Registration Portal',
    faq: [
      {
        question: 'Is there a separate PAN card for a Proprietorship?',
        answer: 'No. A Sole Proprietorship uses the individual proprietor’s PAN card for all legal and tax purposes.'
      }
    ],
    keywords: ['sole proprietorship', 'proprietor', 'current account', 'udyam', 'shop']
  },
  {
    id: 'partnership',
    name: 'Partnership Firm',
    category: 'company',
    categoryName: 'Company Formation & Corporate Compliances',
    shortDescription: 'Traditional partnership model formed under the Indian Partnership Act, 1932.',
    overview: 'A Partnership Firm is formed between two or more persons entering into a legally executed Partnership Deed to share profits and liabilities. It can be registered with the Registrar of Firms (ROF).',
    whoNeeds: 'Small family businesses, trade distributors, joint retail ventures, and professional practices.',
    whyRequired: 'Legal clarity on profit sharing, operational responsibilities, and formal business existence.',
    basicProcess: [
      'Drafting comprehensive Partnership Deed specifying capital, ratios, and duties',
      'Stamp paper execution and notarization of the deed',
      'Applying for dedicated Partnership Firm PAN card (Form 49A)',
      'Registration with Registrar of Firms (ROF) (in Tamil Nadu via TNREGINET)',
      'Opening current account & obtaining GST/Udyam'
    ],
    assistanceSteps: [
      'Tailored Partnership Deed drafting covering dispute and dissolution clauses',
      'Coordination of stamp duty payment and notarization',
      'PAN application and ROF submission assistance'
    ],
    documents: [
      'PAN & Aadhaar of all partners',
      'Partnership Deed printed on required non-judicial stamp paper',
      'Principal place of business address proof & owner NOC',
      'Partnership Firm PAN application'
    ],
    authority: 'Registrar of Firms (ROF) / TNREGINET (Tamil Nadu)',
    officialPortal: 'https://tnreginet.gov.in',
    portalName: 'Tamil Nadu Registration Department (TNREGINET)',
    faq: [
      {
        question: 'Is registration with the Registrar of Firms compulsory?',
        answer: 'While not mandatory, an unregistered firm cannot file suits in court against third parties to enforce contractual rights.'
      }
    ],
    keywords: ['partnership firm', 'partnership deed', 'rof', 'tnreginet', 'firm pan']
  },
  {
    id: 'llp',
    name: 'Limited Liability Partnership (LLP)',
    category: 'company',
    categoryName: 'Company Formation & Corporate Compliances',
    shortDescription: 'Combines the flexibility of a partnership with the limited liability shield of a corporate body.',
    overview: 'An LLP is governed under the Limited Liability Partnership Act, 2008. It provides separate legal entity status, protecting partners from personal liability arising from the acts of other partners.',
    whoNeeds: 'Professional firms (CAs, advocates, consultants), service agencies, and bootstrapped businesses.',
    whyRequired: 'Lower compliance burden than a Pvt Ltd company with no mandatory statutory audit below specified turnover thresholds.',
    basicProcess: [
      'Obtain DSC for all Designated Partners',
      'Name reservation via RUN-LLP on MCA',
      'Filing FiLLiP (Form for incorporation of LLP)',
      'Certificate of Incorporation issuance',
      'Execution and filing of LLP Agreement in Form 3 within 30 days'
    ],
    assistanceSteps: [
      'Name clearance guidance on MCA portal',
      'Drafting exhaustive LLP Agreement reflecting partners’ commercial terms',
      'FiLLiP application filing and liaison with MCA CRC',
      'Form 3 agreement submission within statutory timeline'
    ],
    documents: [
      'PAN and Identity Proof (Aadhaar/Passport/Voter ID) of Designated Partners',
      'Address proof of Designated Partners (Bank statement/Utility bill under 2 months)',
      'Registered office address proof (Electricity bill with NOC / Lease agreement)',
      'Signed LLP Agreement'
    ],
    authority: 'Ministry of Corporate Affairs (MCA)',
    officialPortal: 'https://www.mca.gov.in',
    portalName: 'Ministry of Corporate Affairs (MCA21)',
    faq: [
      {
        question: 'Is audit mandatory for all LLPs every year?',
        answer: 'No. An audit is mandatory only if annual turnover exceeds ₹40 Lakhs or capital contribution exceeds ₹25 Lakhs.'
      }
    ],
    keywords: ['llp', 'limited liability partnership', 'fillip', 'form 3', 'mca', 'designated partner']
  },
  {
    id: 'huf',
    name: 'HUF (Hindu Undivided Family)',
    category: 'company',
    categoryName: 'Company Formation & Corporate Compliances',
    shortDescription: 'Tax-efficient family entity for managing ancestral wealth, assets, and business income.',
    overview: 'An HUF is a distinct tax entity under the Income Tax Act, 1961 consisting of family members descended from a common ancestor, managed by the Karta.',
    whoNeeds: 'Hindu, Sikh, Jain, and Buddhist families seeking legitimate tax optimization and wealth management.',
    whyRequired: 'Allows a separate PAN card and independent tax exemption slabs for family investments.',
    basicProcess: [
      'Drafting HUF Deed / Declaration',
      'Applying for HUF PAN Card with Karta details',
      'Opening dedicated HUF Bank Account'
    ],
    assistanceSteps: [
      'Drafting the legal HUF Deed including Coparcener details',
      'Filing Form 49A for HUF PAN with Income Tax authorities',
      'Bank account opening protocol guidance'
    ],
    documents: [
      'PAN & Aadhaar of Karta',
      'Names, relationships, and signatures of Coparceners/Members',
      'HUF Deed on stamp paper',
      'Proof of creation / capital contribution receipt'
    ],
    authority: 'Income Tax Department, Government of India',
    officialPortal: 'https://www.incometax.gov.in',
    portalName: 'Income Tax e-Filing Portal',
    faq: [
      {
        question: 'Who can be a Karta of an HUF?',
        answer: 'Traditionally the eldest male member, though the Supreme Court of India has held that women can also act as Karta.'
      }
    ],
    keywords: ['huf', 'hindu undivided family', 'karta', 'tax saving', 'income tax']
  },
  {
    id: 'fema-rbi',
    name: 'FEMA / RBI Compliances',
    category: 'company',
    categoryName: 'Company Formation & Corporate Compliances',
    shortDescription: 'Cross-border foreign investment reporting and statutory compliance under FEMA guidelines.',
    overview: 'Foreign Exchange Management Act (FEMA) and Reserve Bank of India (RBI) regulations govern foreign direct investment (FDI), external commercial borrowings (ECB), and overseas direct investment (ODI).',
    whoNeeds: 'Indian companies receiving foreign funding, overseas investors, export-import businesses, and joint ventures.',
    whyRequired: 'Non-reporting attracts heavy compounding penalties from the Reserve Bank of India.',
    basicProcess: [
      'KYC and FIRC receipt from Authorized Dealer (AD) Bank',
      'Entity Master Form (EMF) filing on RBI FIRMS portal',
      'Single Master Form (SMF) - FC-GPR filing within 30 days of share allotment',
      'Annual FLA (Foreign Liabilities and Assets) return submission'
    ],
    assistanceSteps: [
      'AD Bank coordination for FIRC and KYC settlement',
      'Filing FC-GPR on the RBI FIRMS portal',
      'Annual FLA return preparation and filing',
      'Advisory on FDI sectoral caps and valuation certificates'
    ],
    documents: [
      'Foreign Inward Remittance Certificate (FIRC) and KYC from remitting bank',
      'Valuation Certificate by a Chartered Accountant / SEBI Merchant Banker',
      'Board Resolution approving allotment of shares',
      'Certificate from Company Secretary regarding compliance'
    ],
    authority: 'Reserve Bank of India (RBI) & Authorized Dealer Banks',
    officialPortal: 'https://firms.rbi.org.in',
    portalName: 'RBI FIRMS Portal',
    faq: [
      {
        question: 'Within how many days must foreign investment be reported to RBI?',
        answer: 'Form FC-GPR must be filed on the RBI FIRMS portal within 30 days from the date of share allotment.'
      }
    ],
    keywords: ['fema', 'rbi', 'fdi', 'fc-gpr', 'fla', 'firms portal']
  },
  {
    id: 'posh',
    name: 'POSH Compliance',
    category: 'company',
    categoryName: 'Company Formation & Corporate Compliances',
    shortDescription: 'Mandatory workplace safety and Internal Complaints Committee framework under POSH Act.',
    overview: 'The Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act, 2013 mandates establishing an Internal Committee (IC) and conducting workplace sensitization.',
    whoNeeds: 'Every organization, office, branch, or workplace employing 10 or more employees.',
    whyRequired: 'Statutory mandate; non-compliance leads to fines up to ₹50,000 and potential cancellation of business licenses.',
    basicProcess: [
      'Drafting organizational POSH Policy',
      'Constitution of Internal Committee (IC) with External Member',
      'Conducting employee awareness and IC training sessions',
      'Filing Annual POSH Report with the District Officer'
    ],
    assistanceSteps: [
      'Drafting customized workplace POSH policies',
      'Providing an experienced External Member for the Internal Committee',
      'Employee sensitization workshops and compliance documentation',
      'Preparation and filing of statutory annual return with local authorities'
    ],
    documents: [
      'Employee headcount records and office location details',
      'Designated internal committee member profiles',
      'Previous year inquiry records (if any)'
    ],
    authority: 'Ministry of Women and Child Development & District Local Authorities',
    officialPortal: 'https://wcd.nic.in',
    portalName: 'Ministry of Women and Child Development',
    faq: [
      {
        question: 'Who should be the External Member in an Internal Committee?',
        answer: 'The external member must be from an NGO, an association committed to the cause of women, or a person familiar with issues relating to sexual harassment.'
      }
    ],
    keywords: ['posh', 'internal committee', 'women safety', 'annual return', 'compliance']
  },
  {
    id: 'strike-off',
    name: 'Company Closure / Strike Off',
    category: 'company',
    categoryName: 'Company Formation & Corporate Compliances',
    shortDescription: 'Formal, legally sound winding down and fast-track exit for inoperative companies.',
    overview: 'Closing an inactive or defunct company under Section 248 of the Companies Act through Fast Track Exit (Form STK-2) to avoid recurring penalties and director disqualification.',
    whoNeeds: 'Companies with no active business or revenue for 2+ consecutive financial years wanting to close.',
    whyRequired: 'Prevents non-filing penalties, director DIN deactivation, and statutory legal liabilities.',
    basicProcess: [
      'Extinguish all pending liabilities, bank accounts, and loans',
      'Obtain Statement of Accounts from a Chartered Accountant (not older than 30 days)',
      'Affidavits and Indemnity Bonds execution by all directors',
      'Form STK-2 filing on MCA portal and public notice publication'
    ],
    assistanceSteps: [
      'Due diligence on company status and MCA records',
      'Drafting Indemnity Bond (STK-3) and Affidavits (STK-4)',
      'Filing Form STK-2 with Registrar of Companies',
      'Monitoring ROC gazette notification till official dissolution'
    ],
    documents: [
      'Statement of Accounts prepared by CA certifying nil assets and liabilities',
      'Affidavits by all directors in Form STK-4',
      'Indemnity Bond in Form STK-3',
      'Bank Account closure certificate',
      'Board Resolution and Special Resolution / consent of 75% shareholders'
    ],
    authority: 'Registrar of Companies (ROC), Ministry of Corporate Affairs',
    officialPortal: 'https://www.mca.gov.in',
    portalName: 'Ministry of Corporate Affairs (MCA21)',
    faq: [
      {
        question: 'Can a company with pending litigations apply for strike off?',
        answer: 'No. All pending litigations, tax demands, and creditor liabilities must be resolved before filing for strike-off.'
      }
    ],
    keywords: ['company closure', 'strike off', 'stk-2', 'fast track exit', 'roc winding up']
  }
];
