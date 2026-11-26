import { ServiceItem } from './types';

export const IPR_SERVICES: ServiceItem[] = [
  {
    id: 'trademark',
    name: 'Trademark Registration',
    category: 'ipr',
    categoryName: 'Intellectual Property Rights (IPR)',
    shortDescription: 'Protect your brand name, logo, slogan, and visual identity from infringement across India.',
    overview: 'Trademark registration under the Trade Marks Act, 1999 gives exclusive nationwide proprietary rights over your brand name, wordmark, logo, or tagline. Once filed, you can use the ™ symbol immediately, and the ® symbol upon final registration.',
    whoNeeds: 'Startups, manufacturers, brand creators, service providers, Amazon/Flipkart sellers, and D2C businesses.',
    whyRequired: 'Prevents competitors from copying your brand, grants brand equity value, and is required for Amazon Brand Registry.',
    basicProcess: [
      'Comprehensive public trademark search across 45 NICE classifications',
      'Determining appropriate trademark class and specification of goods/services',
      'Filing Form TM-A with Controller General of Patents, Designs & Trademarks',
      'Responding to Examination Report / Objection (if issued)',
      'Publication in Trademark Journal and Certificate of Registration issuance'
    ],
    assistanceSteps: [
      'Pre-filing trademark availability check on IP India database',
      'Strategic classification advisory to ensure maximum protection',
      'Drafting TM-A with user-affidavit if prior use is claimed',
      'Monitoring examination status and drafting legal reply to objections',
      'Show-cause hearing representation if required'
    ],
    documents: [
      'Soft copy of the Brand Logo / Wordmark in high resolution',
      'Applicant PAN Card & Identity Proof (Aadhaar / Passport)',
      'MSME / Udyam Certificate (for 50% government fee concession for small businesses)',
      'Incorporation Certificate / Partnership Deed (if applying under entity name)',
      'Signed Form TM-48 (Power of Attorney authorizing representation)',
      'User Affidavit with invoice proof if prior continuous commercial use is claimed'
    ],
    authority: 'Trade Marks Registry, CGPDTM, DPIIT, Ministry of Commerce & Industry',
    officialPortal: 'https://ipindia.gov.in',
    portalName: 'Intellectual Property India (IP India)',
    faq: [
      {
        question: 'When can I start using the ™ symbol?',
        answer: 'You can legally display the ™ symbol right after receiving the official TM Application Number on the filing day.'
      },
      {
        question: 'For how long is a registered trademark valid?',
        answer: 'A registered trademark is valid for 10 years from the date of filing and can be renewed indefinitely every 10 years.'
      }
    ],
    keywords: ['trademark', 'brand registration', 'logo', 'tm', 'nice class', 'ip india', 'tm-a']
  },
  {
    id: 'patent',
    name: 'Patent Registration',
    category: 'ipr',
    categoryName: 'Intellectual Property Rights (IPR)',
    shortDescription: 'Exclusive 20-year legal monopoly over your technical inventions and novel products.',
    overview: 'A Patent granted under the Patents Act, 1970 grants an inventor exclusive commercial rights for 20 years, prohibiting anyone from making, using, or selling the patented invention without permission.',
    whoNeeds: 'Inventors, biotech firms, tech startups, hardware engineers, and pharmaceutical developers.',
    whyRequired: 'Protects research investments, creates high corporate valuation, and facilitates licensing royalties.',
    basicProcess: [
      'Prior art patent search across worldwide databases',
      'Drafting Provisional or Complete Patent Specification',
      'Filing Form 1 and Form 2 at the Indian Patent Office',
      'Request for Examination (RFE - Form 18)',
      'First Examination Report (FER) response and Grant of Patent'
    ],
    assistanceSteps: [
      'Patentability assessment and novelty search',
      'Patent drafting with independent and dependent claims',
      'Filing with Indian Patent Office with startup rebate support',
      'Responding to office actions and hearing representation'
    ],
    documents: [
      'Detailed technical description, abstract, and drawings of the invention',
      'Inventors\' and Applicants\' identity and address proofs',
      'DPIIT Startup or MSME certificate for reduced government fee',
      'Form 26 (Power of Attorney)'
    ],
    authority: 'Patent Office, CGPDTM, Government of India',
    officialPortal: 'https://ipindia.gov.in',
    portalName: 'Intellectual Property India (IP India)',
    faq: [
      {
        question: 'What is a Provisional Patent application?',
        answer: 'A provisional application secures a priority date when an invention is still in development. You get 12 months to file the complete specification.'
      }
    ],
    keywords: ['patent', 'invention', 'provisional patent', 'patent draft', 'claims', 'ip india']
  },
  {
    id: 'copyright',
    name: 'Copyright Registration',
    category: 'ipr',
    categoryName: 'Intellectual Property Rights (IPR)',
    shortDescription: 'Statutory protection for software code, books, music, artistic artwork, and content.',
    overview: 'Copyright protection under the Copyright Act, 1957 protects original literary, dramatic, musical, artistic works, cinematograph films, and computer software programs from unauthorized duplication.',
    whoNeeds: 'Software developers, authors, artists, musicians, filmmakers, and digital content creators.',
    whyRequired: 'Legal proof of ownership in court cases against intellectual property theft and digital piracy.',
    basicProcess: [
      'Preparation of work copies and statement of particulars',
      'Filing Form XIV on the Copyright Office online portal',
      'Statutory 30-day mandatory waiting period for objections',
      'Scrutiny by Copyright Examiner and issuance of Registration Extract (ROC)'
    ],
    assistanceSteps: [
      'Categorization and documentation of creative asset',
      'Online filing with the Copyright Office',
      'Monitoring objection timeline and addressing examiner discrepancies',
      'Procurement of certified copy of registration'
    ],
    documents: [
      'Original copies or digital source code samples of the work',
      'Applicant identity and address proof',
      'NOC from author / creator if applicant is an employer or company',
      'Search Certificate from Trade Marks Registry if work contains a logo or commercial artistic work'
    ],
    authority: 'Copyright Office, Government of India',
    officialPortal: 'https://copyright.gov.in',
    portalName: 'Copyright Office Portal',
    faq: [
      {
        question: 'Can software source code be protected by copyright in India?',
        answer: 'Yes, computer software programs and source code are protected as literary works under the Copyright Act.'
      }
    ],
    keywords: ['copyright', 'source code', 'artistic work', 'books', 'music', 'software copyright']
  },
  {
    id: 'design',
    name: 'Design Registration',
    category: 'ipr',
    categoryName: 'Intellectual Property Rights (IPR)',
    shortDescription: 'Protect the unique shape, pattern, configuration, and aesthetic exterior of products.',
    overview: 'Industrial Design registration under the Designs Act, 2000 protects the visual aesthetic features, shape, ornamentation, and configuration of an industrial product for 10 years (extendable to 15 years).',
    whoNeeds: 'Product designers, consumer electronics makers, packaging designers, and footwear/apparel creators.',
    whyRequired: 'Stops competitors from copying your product’s unique visual appearance and industrial ergonomics.',
    basicProcess: [
      'Novelty search in design classifications (Locarno Classification)',
      'Preparation of 6-angle perspective technical drawings/photos',
      'Filing Form 1 with the Kolkata Patent & Design Office',
      'Examination, publication, and grant of Design Certificate'
    ],
    assistanceSteps: [
      'Industrial design novelty check',
      'Preparation of standardized orthographic view drawings',
      'Application filing and prosecution till grant'
    ],
    documents: [
      'Photographs or technical drawings showing front, back, top, bottom, and side views',
      'Statement of Novelty highlighting distinctive visual features',
      'KYC proof of applicant & MSME certificate if applicable'
    ],
    authority: 'Patent Office, Design Wing, Government of India',
    officialPortal: 'https://ipindia.gov.in',
    portalName: 'Intellectual Property India (IP India)',
    faq: [
      {
        question: 'Does design registration protect the working mechanism or the look?',
        answer: 'Design registration strictly protects visual aesthetics and shape, not the mechanical functioning (which requires a patent).'
      }
    ],
    keywords: ['design registration', 'industrial design', 'locarno', 'product shape', 'ip india']
  }
];

export const LEGAL_SERVICES: ServiceItem[] = [
  {
    id: 'agreement-drafting',
    name: 'All Types of Agreement Drafting',
    category: 'legal',
    categoryName: 'Legal Documentation',
    shortDescription: 'Bespoke commercial, corporate, and employment contracts drafted with airtight legal precision.',
    overview: 'Professional legal drafting of contracts and commercial agreements enforceable under the Indian Contract Act, 1872. Customized clauses protect your commercial interests, minimize dispute risks, and ensure regulatory validity.',
    whoNeeds: 'Founders, employers, landlords, service providers, software vendors, and enterprise clients.',
    whyRequired: 'Ambiguous or cut-copy-paste agreements lead to protracted litigations, financial losses, and unenforceable terms.',
    basicProcess: [
      'Discovery session to understand commercial terms and risk exposures',
      'Drafting first comprehensive agreement version with customized clauses',
      'Client feedback and clause refinement',
      'Final execution copy with stamp duty & notarization guidance'
    ],
    assistanceSteps: [
      'Detailed consultation on rights, obligations, liability caps, and termination remedies',
      'Tailored drafting: Employment Contracts, Non-Disclosure Agreements (NDA), Service Level Agreements (SLA), Shareholder Agreements (SHA), Vendor Contracts, and Commercial Leases',
      'Advisory on proper e-stamping and digital execution validity'
    ],
    documents: [
      'Basic particulars of both contracting parties (Legal Name, Address, CIN/PAN)',
      'Commercial terms sheet or bulleted operational scope',
      'Existing contracts or related baseline documents'
    ],
    authority: 'Legal Jurisdiction / Notary & Registration Department',
    officialPortal: 'https://tnreginet.gov.in',
    portalName: 'Tamil Nadu Registration Department (TNREGINET)',
    faq: [
      {
        question: 'Are digital/electronic signatures legally valid on drafted agreements in India?',
        answer: 'Yes, agreements executed via digital signatures complying with the Information Technology Act, 2000 are recognized and legally valid in Indian courts.'
      }
    ],
    keywords: ['agreement drafting', 'contract', 'nda', 'sha', 'employment agreement', 'vendor contract', 'sla']
  },
  {
    id: 'document-review',
    name: 'Legal Document Review',
    category: 'legal',
    categoryName: 'Legal Documentation',
    shortDescription: 'Comprehensive risk audit and redlining of agreements before you sign.',
    overview: 'An expert legal audit of contracts, vendor terms, term sheets, or commercial leases drafted by the other party. We identify hidden liabilities, unfavorable indemnity clauses, and ambiguous termination covenants.',
    whoNeeds: 'Businesses presented with third-party contracts, employees signing senior executive agreements, and franchisees.',
    whyRequired: 'Prevents signing one-sided terms that can expose your assets to unlimited damages or onerous liabilities.',
    basicProcess: [
      'Receipt and thorough clause-by-clause legal analysis of the contract',
      'Risk profiling and identifying adverse conditions',
      'Redline markup with recommended substitute clauses',
      'Briefing call summarizing key commercial risks'
    ],
    assistanceSteps: [
      'Independent advocate scrutiny of indemnity, jurisdiction, and IP assignment clauses',
      'Provision of clean redline document and practical negotiation points',
      'Advisory on enforceable counter-proposals'
    ],
    documents: [
      'Editable Word document or PDF of the agreement to be reviewed',
      'Context on your business role and bargaining position'
    ],
    authority: 'Bar Council of India / Legal Advisory Practice',
    officialPortal: 'https://www.companydocx.com',
    portalName: 'Company DOCX Legal Practice',
    faq: [
      {
        question: 'What clauses are most commonly problematic in third-party contracts?',
        answer: 'Uncapped indemnities, one-sided non-compete clauses, non-reciprocal termination rights, and disadvantageous dispute resolution venues.'
      }
    ],
    keywords: ['document review', 'contract audit', 'redlining', 'legal vetting', 'risk analysis']
  },
  {
    id: 'property-verification',
    name: 'Property Verification & Legal Title Search',
    category: 'legal',
    categoryName: 'Legal Documentation',
    shortDescription: 'Title search and due diligence report for real estate purchase or commercial leasing.',
    overview: 'Thorough legal due diligence of immovable property titles spanning 30+ years to confirm clear, marketable ownership, absence of encumbrances, and municipal approval compliance before investing.',
    whoNeeds: 'Homebuyers, commercial investors, corporate tenants entering long leases, and developers.',
    whyRequired: 'Protects your life savings or corporate capital from disputed land, disputed inheritance, or bank mortgages.',
    basicProcess: [
      'Document collection (Mother Deed, Sale Deeds, Patta, EC)',
      'Sub-Registrar office search and Encumbrance Certificate (EC) audit for 13 to 30 years',
      'Verification of local body approvals (CMDA / DTCP / Municipal)',
      'Delivery of formal Legal Title Opinion Report'
    ],
    assistanceSteps: [
      'Complete title flow analysis from parent owner to current seller',
      'Cross-checking revenue records (Patta, Chitta, Adangal, Town Survey Register)',
      'Encumbrance Certificate verification via TNREGINET',
      'Comprehensive written Legal Scrutiny Report'
    ],
    documents: [
      'Copies of Parent Documents and Link Sale Deeds (traceable for 30 years)',
      'Encumbrance Certificate (EC) for the relevant period',
      'Revenue records: Patta Passbook, Chitta, TSLR (Town Survey Land Register)',
      'Approved Building Plan & Planning Permit from CMDA / DTCP / Corporation',
      'Latest Property Tax receipts and Water/Sewerage receipts'
    ],
    authority: 'Sub-Registrar Office / Registration Department (TNREGINET)',
    officialPortal: 'https://tnreginet.gov.in',
    portalName: 'Tamil Nadu Registration Department (TNREGINET)',
    faq: [
      {
        question: 'Why is an Encumbrance Certificate (EC) important?',
        answer: 'An EC reflects registered property transactions, loans, and mortgages, verifying whether the property is free from registered legal encumbrances.'
      }
    ],
    keywords: ['property verification', 'title opinion', 'legal search', 'encumbrance certificate', 'patta', 'cmda', 'tnreginet']
  },
  {
    id: 'legal-opinion',
    name: 'Legal Opinion',
    category: 'legal',
    categoryName: 'Legal Documentation',
    shortDescription: 'Written legal opinions by qualified corporate and civil advocates on complex legal questions.',
    overview: 'A formal legal opinion addressing corporate disputes, statutory interpretation, statutory compliance queries, contractual breaches, and property rights based on established statutes and precedent case law.',
    whoNeeds: 'Company directors, institutional lenders, corporate boards, and individuals facing legal disputes.',
    whyRequired: 'Provides decisive legal grounding for board decisions, banking compliance, and court readiness.',
    basicProcess: [
      'Briefing of legal facts and question formulation',
      'Case law precedent and statutory research',
      'Preparation of reasoned written legal opinion'
    ],
    assistanceSteps: [
      'In-depth factual inquiry and legal research',
      'Detailed written opinion covering applicable legal frameworks and practical risks',
      'Actionable recommendations for management or client'
    ],
    documents: [
      'Statement of facts and chronology of events',
      'Supporting documentary evidence, notices, or communication records'
    ],
    authority: 'Bar Council of India / Legal Framework',
    officialPortal: 'https://www.companydocx.com',
    portalName: 'Company DOCX Legal Advisory',
    faq: [
      {
        question: 'Can a formal legal opinion be submitted to banks or government departments?',
        answer: 'Yes, formal legal opinions issued by practicing advocates are accepted by banks, NBFCs, and regulatory bodies for corporate and compliance evaluations.'
      }
    ],
    keywords: ['legal opinion', 'advocate opinion', 'legal advice', 'legal dispute', 'statutory opinion']
  }
];
