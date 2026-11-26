import { ServiceItem } from './types';

export const IPR_EXPANDED_SERVICES: ServiceItem[] = [
  {
    id: 'trademark-registration',
    name: 'Trademark Registration',
    category: 'ipr',
    categoryName: 'Intellectual Property (IPR)',
    shortDescription: 'Nationwide legal protection for brand name, logo, slogan, and visual identity (TM-A).',
    overview: 'Statutory registration under the Trade Marks Act, 1999 granting exclusive commercial ownership across 45 NICE product/service classifications in India. Immediate right to use ™ symbol on filing, and ® symbol on registration.',
    whoNeeds: 'Startups, manufacturers, D2C brands, e-commerce vendors, Amazon/Flipkart brand registry sellers.',
    whyRequired: 'Prevents copycats and competitors from profiting from your goodwill; mandatory for Amazon Brand Registry and investor valuations.',
    basicProcess: [
      'Comprehensive clearance search on official IP India database',
      'Class classification and specification drafting (Goods/Services)',
      'Filing Form TM-A with Registrar of Trademarks',
      'Issuance of official TM Application Number and filing receipt'
    ],
    assistanceSteps: [
      'Preliminary trademark availability and phonetic similarity search',
      'Drafting TM-A with user-affidavit if prior commercial use is claimed',
      'Availing 50% government fee discount for MSME / DPIIT registered startups',
      'Continuous tracking of trademark status through examination and journal publication'
    ],
    documents: [
      'High-resolution soft copy of Logo / Brand Name artwork',
      'Applicant PAN & Aadhaar (or Certificate of Incorporation / Partnership Deed)',
      'Udyam (MSME) Certificate to claim 50% government fee concession',
      'Signed Form TM-48 (Power of Attorney authorizing Company Docx)',
      'User Affidavit with sales invoices if prior use is claimed'
    ],
    authority: 'Trade Marks Registry, CGPDTM, DPIIT, Ministry of Commerce & Industry',
    officialPortal: 'https://ipindia.gov.in',
    portalName: 'Intellectual Property India (IP India)',
    faq: [
      {
        question: 'How long is a trademark valid once registered?',
        answer: 'A trademark registration is valid for 10 years and can be renewed indefinitely every 10 years.'
      }
    ],
    keywords: ['trademark registration', 'tm-a', 'brand registration', 'logo copyright', 'amazon brand registry', 'ip india']
  },
  {
    id: 'trademark-search',
    name: 'Trademark Search & Clearance Report',
    category: 'ipr',
    categoryName: 'Intellectual Property (IPR)',
    shortDescription: 'Exhaustive phonetic, visual, and conceptual conflict analysis across all 45 classes.',
    overview: 'Pre-filing risk assessment conducting public search on IP India database, international Madrid registry, and common-law market presence to identify conflicting phonetic, visual, or semantic marks before investing in filing.',
    whoNeeds: 'Entrepreneurs selecting brand names, corporate rebranding projects, and agencies creating product lines.',
    whyRequired: 'Saves thousands of rupees in lost filing fees and prevents protracted objection/opposition litigations.',
    basicProcess: [
      'Wordmark prefix, suffix, and phonetic search algorithm execution',
      'Device/logo search using Vienna Code classification',
      'Preparation of Trademark Search & Risk Assessment Report'
    ],
    assistanceSteps: [
      'Multi-class search analyzing identical and deceptively similar marks',
      'Assessing Section 9 (absolute grounds) and Section 11 (relative grounds) risks',
      'Actionable recommendations on modifying brand elements to maximize registrability'
    ],
    documents: [
      'Proposed brand names or logo designs',
      'Intended list of products, goods, or services'
    ],
    authority: 'CGPDTM Public Search Database',
    officialPortal: 'https://ipindiaonline.gov.in/eregister/eregister.aspx',
    portalName: 'IP India Public Search Gateway',
    faq: [
      {
        question: 'What is a "deceptively similar" mark?',
        answer: 'A mark that resembles another mark so closely as to likely deceive consumers or cause confusion regarding trade origin.'
      }
    ],
    keywords: ['trademark search', 'vienna code', 'brand clearance', 'phonetic search', 'trademark risk analysis']
  },
  {
    id: 'trademark-objection',
    name: 'Trademark Objection Reply Drafting',
    category: 'ipr',
    categoryName: 'Intellectual Property (IPR)',
    shortDescription: 'Professional legal response to Examination Reports under Section 9 and Section 11.',
    overview: 'Drafting robust, precedent-backed legal replies to Examination Reports issued by the Trademark Examiner citing Section 9 (distinctiveness/descriptiveness) or Section 11 (similarity with existing marks) within the mandatory 30-day statutory window.',
    whoNeeds: 'Any trademark applicant whose status shows "Objected" on the IP India portal.',
    whyRequired: 'Failure to file an appropriate legal reply within 30 days results in the application being officially treated as "Abandoned".',
    basicProcess: [
      'Analysis of cited conflicting marks or examination grounds',
      'Drafting formal legal response citing High Court and Supreme Court precedents',
      'Submission via Comprehensive e-Filing gateway within statutory deadline'
    ],
    assistanceSteps: [
      'Evaluating Examiner citations and preparing factual distinction matrices',
      'Drafting written submissions with supporting evidence of commercial distinctiveness',
      'Filing response on the IP India e-filing portal and tracking examiner reconsideration'
    ],
    documents: [
      'Official Examination Report copy',
      'Evidence of prior commercial use (invoices, marketing materials, social media proofs)',
      'TM Application number and Form TM-48'
    ],
    authority: 'Trade Marks Registry, Government of India',
    officialPortal: 'https://ipindia.gov.in',
    portalName: 'IP India e-Filing System',
    faq: [
      {
        question: 'What happens if a trademark objection is not replied to within 30 days?',
        answer: 'The Registrar will issue an abandonment notice and cancel the application unless a condonation of delay is approved.'
      }
    ],
    keywords: ['trademark objection', 'examination report', 'section 9 reply', 'section 11 reply', 'abandoned tm']
  },
  {
    id: 'trademark-hearing',
    name: 'Trademark Hearing Representation',
    category: 'ipr',
    categoryName: 'Intellectual Property (IPR)',
    shortDescription: 'Virtual or physical appearance before the Hearing Officer / Senior Registrar of Trademarks.',
    overview: 'Formal advocacy and verbal oral representation by experienced trademark attorneys and advocates before the Hearing Officer to argue and secure acceptance of objected marks for publication in the Trademark Journal.',
    whoNeeds: 'Applicants whose examination reply was not accepted during initial scrutiny and scheduled for a show-cause hearing.',
    whyRequired: 'The final statutory chance to persuade the Registrar to accept your mark; non-appearance leads to summary refusal.',
    basicProcess: [
      'Receipt of Hearing Notice with date and video conference link',
      'Preparation of hearing synopsis, case law compendium, and affidavits',
      'Appearance before the Hearing Officer and presenting legal arguments',
      'Securing acceptance order for publication in Trade Marks Journal'
    ],
    assistanceSteps: [
      'Comprehensive hearing brief preparation',
      'Representation by designated IP Attorney on the virtual hearing bench',
      'Filing supplementary written submissions and evidence of acquired distinctiveness'
    ],
    documents: [
      'Hearing Notice issued by Trade Marks Registry',
      'Prior written reply and complete documentary evidence file'
    ],
    authority: 'Trade Marks Registry (Chennai / Mumbai / Delhi / Kolkata / Ahmedabad)',
    officialPortal: 'https://ipindia.gov.in',
    portalName: 'Trade Marks Hearing Portal',
    faq: [
      {
        question: 'Are trademark hearings conducted online in India?',
        answer: 'Yes, the majority of trademark show-cause hearings are conducted via official virtual video conference (VC) links.'
      }
    ],
    keywords: ['trademark hearing', 'show cause hearing', 'ip attorney', 'trademark journal', 'hearing representation']
  },
  {
    id: 'trademark-renewal',
    name: 'Trademark Renewal',
    category: 'ipr',
    categoryName: 'Intellectual Property (IPR)',
    shortDescription: '10-year renewal (Form TM-R) and restoration of expired trademarks.',
    overview: 'Timely filing of Form TM-R with statutory renewal fee within 6 months prior to the 10-year expiry date, ensuring continuous legal ownership and uninterrupted protection of the registered mark.',
    whoNeeds: 'Owners of registered trademarks approaching their 10th anniversary of filing.',
    whyRequired: 'Expired trademarks lose legal protection and can be removed from the register, allowing competitors to claim the brand name.',
    basicProcess: [
      'Filing Form TM-R before expiration (or within 6-month surcharge grace period)',
      'Payment of prescribed government renewal fee',
      'Issuance of Renewal Certificate extending protection for another 10 years'
    ],
    assistanceSteps: [
      'Monitoring renewal deadlines across your entire trademark portfolio',
      'Filing Form TM-R on IP India portal',
      'Filing restoration petitions if renewal deadline was missed'
    ],
    documents: [
      'Original Trademark Registration Certificate',
      'Applicant KYC and signed Form TM-48'
    ],
    authority: 'Trade Marks Registry, Government of India',
    officialPortal: 'https://ipindia.gov.in',
    portalName: 'IP India Portal',
    faq: [
      {
        question: 'Can an expired trademark be restored?',
        answer: 'Yes, an expired trademark can generally be restored within 1 year from the date of expiry by paying statutory restoration and renewal fees.'
      }
    ],
    keywords: ['trademark renewal', 'form tm-r', 'trademark restoration', '10 year renewal', 'expired brand']
  },
  {
    id: 'patent-registration',
    name: 'Patent Registration & Filing',
    category: 'ipr',
    categoryName: 'Intellectual Property (IPR)',
    shortDescription: 'Complete or provisional patent application filing with Indian Patent Office (Form 1 & 2).',
    overview: 'Granting a 20-year legal monopoly over novel technical inventions, scientific products, and unique manufacturing processes under the Indian Patents Act, 1970.',
    whoNeeds: 'Tech founders, hardware creators, biotech enterprises, pharmaceutical developers, and university researchers.',
    whyRequired: 'Creates proprietary enterprise value, protects R&D investment, and enables multimillion-rupee licensing royalties.',
    basicProcess: [
      'Filing Form 1 (Application) and Form 2 (Provisional / Complete Specification)',
      'Securing immediate priority date across all Paris Convention countries',
      'Publication in Patent Journal after 18 months (or early publication via Form 9)'
    ],
    assistanceSteps: [
      'Patentability review and eligibility under Section 3 & 4 exclusions',
      'Filing provisional or complete patent applications',
      'Availing 80% patent fee rebate for DPIIT recognized startups'
    ],
    documents: [
      'Technical writeup, invention disclosure document, and CAD drawings',
      'Inventors\' and Applicants\' identity and address proofs',
      'DPIIT Startup or Udyam Certificate for subsidized government fees'
    ],
    authority: 'Indian Patent Office, CGPDTM, Government of India',
    officialPortal: 'https://ipindia.gov.in',
    portalName: 'Indian Patent Office Portal',
    faq: [
      {
        question: 'What is the benefit of filing a Provisional Patent?',
        answer: 'It locks your invention\'s priority date worldwide and grants 12 months to finalize technical details before filing the complete specification.'
      }
    ],
    keywords: ['patent registration', 'patent filing', 'provisional patent', 'complete specification', 'paris convention']
  },
  {
    id: 'patent-search',
    name: 'Patent Prior Art Search',
    category: 'ipr',
    categoryName: 'Intellectual Property (IPR)',
    shortDescription: 'Global patentability and Freedom to Operate (FTO) prior art landscape analysis.',
    overview: 'Exhaustive prior art search across global patent databases (USPTO, EPO, WIPO, Google Patents, InPASS) to assess whether an invention satisfies statutory criteria of Novelty, Inventive Step, and Industrial Applicability.',
    whoNeeds: 'R&D departments, inventors, and technology investors before embarking on patent drafting.',
    whyRequired: 'Prevents spending on patent drafting and prosecution for inventions that already exist in published prior literature.',
    basicProcess: [
      'Keyword, classification (IPC/CPC), and citation search',
      'Scrutiny of non-patent scientific literature and academic journals',
      'Delivery of Comprehensive Patentability Opinion Report'
    ],
    assistanceSteps: [
      'Mapping technical claims against existing published inventions',
      'Identifying white spaces and novelty angles to emphasize in claims',
      'Freedom to Operate (FTO) analysis to avoid third-party infringement'
    ],
    documents: [
      'Technical problem statement and proposed mechanism/solution drawings'
    ],
    authority: 'Indian Patent Advanced Search System (InPASS) & WIPO',
    officialPortal: 'https://ipindiaservices.gov.in/publicsearch',
    portalName: 'InPASS Patent Search Gateway',
    faq: [
      {
        question: 'Can software alone be patented in India?',
        answer: 'Under Section 3(k), computer software per se is not patentable; however, software tied to novel hardware or producing a technical effect is patentable.'
      }
    ],
    keywords: ['patent search', 'prior art', 'freedom to operate', 'fto', 'inpass', 'novelty search']
  },
  {
    id: 'patent-drafting',
    name: 'Patent Drafting (Claims & Specifications)',
    category: 'ipr',
    categoryName: 'Intellectual Property (IPR)',
    shortDescription: 'Airtight drafting of independent and dependent claims, abstract, and technical drawings.',
    overview: 'Specialized techno-legal drafting by registered patent agents and engineers creating complete patent specifications that balance broad claim protection with defensibility against prior art.',
    whoNeeds: 'Inventors and engineering companies requiring robust patent asset protection.',
    whyRequired: 'A poorly drafted patent claim can render the patent worthless or easily bypassed by competitors.',
    basicProcess: [
      'Invention disclosure meeting with technical experts',
      'Drafting background, summary, detailed description, and claim tree',
      'Preparation of standardized patent drawings compliant with Patent Rules'
    ],
    assistanceSteps: [
      'Drafting independent claims and fallback dependent claims',
      'Technical review to ensure full enablement and best mode disclosures',
      'Client review and revision before formal submission'
    ],
    documents: [
      'Detailed technical drawings, schematics, and functional block diagrams',
      'Experimental results, prototypes, and operational parameters'
    ],
    authority: 'Registered Patent Agents / Indian Patent Office',
    officialPortal: 'https://ipindia.gov.in',
    portalName: 'Patent Office Drafting Guidelines',
    faq: [
      {
        question: 'Why are patent claims the most important part of a patent?',
        answer: 'Claims define the legal boundary of your exclusive monopoly; whatever is not claimed is free for competitors to copy.'
      }
    ],
    keywords: ['patent drafting', 'patent claims', 'independent claims', 'patent specification', 'patent agent']
  },
  {
    id: 'patent-prosecution',
    name: 'Patent Prosecution & FER Response',
    category: 'ipr',
    categoryName: 'Intellectual Property (IPR)',
    shortDescription: 'Request for Examination (Form 18) and First Examination Report (FER) legal responses.',
    overview: 'Managing the examination and prosecution lifecycle of patent applications, including filing Request for Examination (Form 18), responding to FER objections, and attending oral hearings before the Controller of Patents.',
    whoNeeds: 'Applicants who have filed patents and received First Examination Reports (FER).',
    whyRequired: 'Mandatory statutory timeline; the applicant must put the application in order for grant within 6 months of FER issuance.',
    basicProcess: [
      'Filing Form 18 (RFE) to initiate examination',
      'Receipt and thorough analysis of objections raised in the FER',
      'Amending claims and drafting technical reply within 6 months',
      'Attending Controller hearing and grant of patent certificate'
    ],
    assistanceSteps: [
      'Comparing cited prior art against amended claims',
      'Drafting comprehensive legal and technical reply to FER',
      'Representing the inventor in Controller hearings until formal patent grant'
    ],
    documents: [
      'First Examination Report (FER) issued by the Patent Office',
      'Prior art documents cited by the Patent Examiner',
      'Technical explanation of inventive differences from the inventor'
    ],
    authority: 'Controller General of Patents, Designs and Trade Marks',
    officialPortal: 'https://ipindia.gov.in',
    portalName: 'Patent Examination Gateway',
    faq: [
      {
        question: 'Can the 6-month FER response deadline be extended?',
        answer: 'Yes, a one-time extension of 3 months can be requested by filing Form 4 before the expiry of the initial 6-month period.'
      }
    ],
    keywords: ['patent prosecution', 'fer response', 'first examination report', 'form 18', 'controller hearing', 'patent grant']
  },
  {
    id: 'copyright-registration',
    name: 'Copyright Registration',
    category: 'ipr',
    categoryName: 'Intellectual Property (IPR)',
    shortDescription: 'Statutory protection for software source code, books, music, video, and creative content.',
    overview: 'Copyright protection under the Copyright Act, 1957 protects original literary, dramatic, musical, artistic works, cinematograph films, and computer software code from unauthorized duplication for the author\'s lifetime plus 60 years.',
    whoNeeds: 'Software development firms, authors, artists, musicians, filmmakers, and digital content creators.',
    whyRequired: 'Legal proof of ownership in court cases against code duplication, pirated courses, and digital media theft.',
    basicProcess: [
      'Preparation of work copies and statement of particulars',
      'Filing Form XIV on the Copyright Office online portal',
      'Statutory 30-day mandatory waiting period for public objections',
      'Scrutiny by Copyright Examiner and issuance of Registration Certificate (ROC)'
    ],
    assistanceSteps: [
      'Categorization and formatting of source code or artistic assets',
      'Online filing with the Copyright Office',
      'Monitoring objection timeline and addressing examiner discrepancies'
    ],
    documents: [
      'Source code samples (first and last 10 pages) or creative artwork',
      'Applicant identity and address proof',
      'NOC from author / creator if applicant is a corporate employer'
    ],
    authority: 'Copyright Office, Government of India',
    officialPortal: 'https://copyright.gov.in',
    portalName: 'Copyright Office Portal',
    faq: [
      {
        question: 'Is copyright registration valid internationally?',
        answer: 'Yes, under the Berne Convention, copyright registered in India is automatically recognized across more than 175 member countries.'
      }
    ],
    keywords: ['copyright registration', 'software copyright', 'source code copyright', 'berne convention', 'form xiv']
  },
  {
    id: 'design-registration',
    name: 'Design Registration (Industrial Design)',
    category: 'ipr',
    categoryName: 'Intellectual Property (IPR)',
    shortDescription: 'Protection for unique shape, pattern, configuration, and aesthetic exterior of products.',
    overview: 'Industrial Design registration under the Designs Act, 2000 protects visual aesthetic features, shape, ornamentation, and configuration of an industrial product for 10 years (extendable to 15 years).',
    whoNeeds: 'Product designers, consumer electronics makers, packaging designers, and footwear/apparel creators.',
    whyRequired: 'Stops competitors from copying your product’s distinctive visual appearance and ergonomic styling.',
    basicProcess: [
      'Novelty search in Locarno Classification',
      'Preparation of 6-angle perspective technical drawings/photos',
      'Filing Form 1 with Patent & Design Office (Kolkata)',
      'Examination, publication, and grant of Design Certificate'
    ],
    assistanceSteps: [
      'Industrial design novelty check',
      'Preparation of standardized orthographic view drawings',
      'Application filing and prosecution until grant'
    ],
    documents: [
      'Photographs or technical drawings showing front, back, top, bottom, and side views',
      'Statement of Novelty highlighting distinctive visual features',
      'KYC proof of applicant & MSME certificate'
    ],
    authority: 'Patent Office, Design Wing, Government of India',
    officialPortal: 'https://ipindia.gov.in',
    portalName: 'Patent & Design Office Portal',
    faq: [
      {
        question: 'Does design registration protect functionality or appearance?',
        answer: 'It strictly protects visual appearance, shape, and surface aesthetic ornamentation, not the mechanical functioning.'
      }
    ],
    keywords: ['design registration', 'industrial design', 'locarno classification', 'product shape', 'aesthetic design']
  },
  {
    id: 'ip-due-diligence-portfolio',
    name: 'IP Due Diligence & Portfolio Management',
    category: 'ipr',
    categoryName: 'Intellectual Property (IPR)',
    shortDescription: 'Audit of trademark, patent, and copyright assets for valuation, mergers, and renewals.',
    overview: 'Strategic IP audit verifying chain of title, renewal schedules, infringement risks, and monetization opportunities across all corporate intellectual property assets.',
    whoNeeds: 'Startups raising Series A/B funding, acquiring companies, and brand licensing conglomerates.',
    whyRequired: 'Identifies lapsed registrations, unassigned employee creations, and prevents invalid IP acquisitions.',
    basicProcess: [
      'Asset inventory compilation across trademarks, patents, designs, and domains',
      'Verification of assignment deeds, employment IP clauses, and renewal status',
      'Delivery of IP Audit Report and enterprise portfolio valuation'
    ],
    assistanceSteps: [
      'Full IP registry audit across national and international portfolios',
      'Centralized renewal calendaring and status tracking',
      'Remediation of broken chains of title and missing assignment deeds'
    ],
    documents: [
      'List of all filed and registered IP application numbers',
      'Employment agreements and contractor work-for-hire agreements'
    ],
    authority: 'Corporate IP Practice',
    officialPortal: 'https://ipindia.gov.in',
    portalName: 'IP India Portfolio Gateway',
    faq: [
      {
        question: 'Why do investors require IP Due Diligence?',
        answer: 'Investors must verify that the startup legitimately owns its core software and brand assets and that former founders cannot claim ownership.'
      }
    ],
    keywords: ['ip due diligence', 'ip audit', 'ip portfolio management', 'patent audit', 'trademark audit']
  },
  {
    id: 'ip-licensing-assignment',
    name: 'IP Licensing / Assignment Agreements',
    category: 'ipr',
    categoryName: 'Intellectual Property (IPR)',
    shortDescription: 'Formal deed of assignment (Form TM-P) and commercial technology licensing agreements.',
    overview: 'Drafting and statutory recordal of Intellectual Property assignments (transfer of full ownership) and licensing contracts (commercial royalty agreements) with the Trade Marks Registry and Patent Office.',
    whoNeeds: 'Brand owners selling trademarks, software companies licensing technology, and franchisees.',
    whyRequired: 'An IP assignment is legally incomplete until recorded with the Registrar of Trademarks/Patents.',
    basicProcess: [
      'Drafting bilateral Deed of Assignment or License Agreement with royalty terms',
      'Stamp paper execution and notarization',
      'Filing Form TM-P (Trademark) or Form 16 (Patent) for statutory title recordal'
    ],
    assistanceSteps: [
      'Structuring royalty percentage, audit rights, and territorial restrictions',
      'Drafting enforceable assignment deeds with consideration receipts',
      'Filing on IP India portal until the new owner is officially reflected on master data'
    ],
    documents: [
      'Original IP Registration Certificates',
      'Executed and stamped Assignment Deed / License Agreement',
      'PAN and KYC of assignor and assignee'
    ],
    authority: 'Trade Marks Registry / Patent Office, Government of India',
    officialPortal: 'https://ipindia.gov.in',
    portalName: 'IP India Title Recordal Gateway',
    faq: [
      {
        question: 'Can a trademark be assigned without goodwill?',
        answer: 'Yes, under the Trade Marks Act, trademarks can be assigned either with the goodwill of the business or without goodwill.'
      }
    ],
    keywords: ['ip licensing', 'trademark assignment', 'form tm-p', 'patent license', 'royalty agreement']
  }
];
