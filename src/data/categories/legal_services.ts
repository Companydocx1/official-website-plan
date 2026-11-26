import { ServiceItem } from './types';

export const EXPANDED_LEGAL_SERVICES: ServiceItem[] = [
  {
    id: 'agreement-contract-drafting',
    name: 'Agreement & Contract Drafting',
    category: 'legal-services',
    categoryName: 'Legal Services',
    shortDescription: 'Custom commercial contracts, business agreements, and service level agreements (SLAs).',
    overview: 'Precision legal drafting enforceable under the Indian Contract Act, 1872 tailored to your operational risk profile, commercial payment covenants, indemnity limits, and dispute arbitration venues.',
    whoNeeds: 'Founders, enterprises, vendors, contractors, and service providers.',
    whyRequired: 'Vague or template contracts lead to expensive litigations, unpaid invoices, and unenforceability in court.',
    basicProcess: [
      'Commercial terms discovery and risk mapping',
      'First comprehensive draft preparation with customized protective covenants',
      'Client feedback integration and execution copy finalization with e-stamp guidance'
    ],
    assistanceSteps: [
      'Tailoring dispute resolution, limitation of liability, and termination clauses',
      'Drafting Vendor Agreements, SLAs, Agency Contracts, and Master Services Agreements (MSA)',
      'Advisory on valid non-judicial stamp duty values and digital execution'
    ],
    documents: [
      'Particulars of contracting parties (Legal Name, Address, PAN/CIN)',
      'Commercial scope sheet and fee payment milestones'
    ],
    authority: 'Indian Contract Act & Bar Council Standards',
    officialPortal: 'https://tnreginet.gov.in',
    portalName: 'Registration & Stamp Department',
    faq: [
      {
        question: 'Are digital/electronic signatures legally valid on commercial agreements in India?',
        answer: 'Yes, agreements signed via digital signatures complying with the Information Technology Act, 2000 are fully admissible and legally binding in Indian courts.'
      }
    ],
    keywords: ['contract drafting', 'agreement drafting', 'master services agreement', 'vendor contract', 'sla', 'commercial agreement']
  },
  {
    id: 'legal-notice-drafting',
    name: 'Legal Notice Drafting & Reply',
    category: 'legal-services',
    categoryName: 'Legal Services',
    shortDescription: 'Formal advocate notices for unpaid dues, cheque bounce (Section 138), breach of contract, and property disputes.',
    overview: 'Statutory formal demand notices drafted on advocate letterhead placing defaulting parties on official notice before instituting civil suits, commercial arbitration, or criminal proceedings.',
    whoNeeds: 'Businesses with defaulted receivables, bounced cheques, breached NDAs, or landlord-tenant disputes.',
    whyRequired: 'Mandatory statutory prerequisite in Section 138 NI Act and IBC demand notices; demonstrates bona fide demand in court.',
    basicProcess: [
      'Review of unpaid invoices, contract terms, or dishonored cheques',
      'Drafting formal Legal Notice citing applicable statutory sections and interest claim',
      'Dispatch via Registered Post with Acknowledgment Due (RPAD) and official tracking'
    ],
    assistanceSteps: [
      'Thorough fact-checking and calculation of principal with commercial interest',
      'Dispatch on advocate letterhead with postal tracking record preservation',
      'Negotiation assistance or drafting formal legal reply if you received a notice'
    ],
    documents: [
      'Unpaid invoices, purchase orders, or dishonored cheque with bank return memo',
      'Prior email communications and written reminders',
      'Defaulting party\'s registered address and contact details'
    ],
    authority: 'Negotiable Instruments Act / Civil Procedure Code (CPC)',
    officialPortal: 'https://www.companydocx.com',
    portalName: 'Company DOCX Litigation Advisory',
    faq: [
      {
        question: 'What is the time limit for issuing a Section 138 Cheque Bounce notice?',
        answer: 'A statutory legal notice must be issued within 30 days from the date of receiving the bank\'s cheque dishonour memo.'
      }
    ],
    keywords: ['legal notice', 'section 138 notice', 'cheque bounce', 'money recovery', 'breach of contract notice', 'rpad']
  },
  {
    id: 'property-due-diligence-docs',
    name: 'Property Due Diligence & Documentation',
    category: 'legal-services',
    categoryName: 'Legal Services',
    shortDescription: '30-year title search, Encumbrance Certificate (EC), Patta verification, and Sale Deed drafting.',
    overview: 'Exhaustive real estate title scrutiny across Sub-Registrar and revenue records tracing chain of ownership for 30+ years, confirming clear marketable title, CMDA/DTCP municipal approvals, and absence of bank mortgages.',
    whoNeeds: 'Property buyers, commercial tenants leasing office premises, industrial park investors, and developers in Chennai and Tamil Nadu.',
    whyRequired: 'Protects buyers from purchasing mortgaged properties, disputed family inheritances, or unapproved layouts.',
    basicProcess: [
      'Document collection (Parent Deeds, Link Documents, Patta, Chitta)',
      'Sub-Registrar record audit and Encumbrance Certificate verification via TNREGINET',
      'Site plan and municipal layout approval scrutiny',
      'Issuance of formal Legal Title Opinion and drafting Sale Deed / Lease Deed'
    ],
    assistanceSteps: [
      'Title flow trace from original owner to present seller',
      'Revenue record verification (Patta Passbook, Town Survey Land Register - TSLR)',
      'Drafting Sale Agreements, Sale Deeds, and long-term Commercial Leases'
    ],
    documents: [
      'Copies of Parent Deeds and Link Documents for 30 years',
      'Encumbrance Certificate (EC) for the relevant period',
      'Revenue records: Patta, Chitta, TSLR extract',
      'CMDA / DTCP / Municipal approved building plan'
    ],
    authority: 'Sub-Registrar Offices / TNREGINET, Government of Tamil Nadu',
    officialPortal: 'https://tnreginet.gov.in',
    portalName: 'Tamil Nadu Registration Department (TNREGINET)',
    faq: [
      {
        question: 'Why is Patta as important as the registered Sale Deed in Tamil Nadu?',
        answer: 'The Sale Deed establishes ownership transfer between parties, whereas the Patta confirms government revenue recognition of your legal possession.'
      }
    ],
    keywords: ['property due diligence', 'title search', 'encumbrance certificate', 'patta chitta', 'sale deed drafting', 'tnreginet']
  },
  {
    id: 'nda-confidentiality-agreements',
    name: 'NDA & Confidentiality Agreements',
    category: 'legal-services',
    categoryName: 'Legal Services',
    shortDescription: 'Bilateral and unilateral Non-Disclosure Agreements safeguarding trade secrets and proprietary code.',
    overview: 'Airtight confidentiality contracts preventing partners, potential investors, software developers, and employees from leaking, reverse engineering, or exploiting your proprietary business data and trade secrets.',
    whoNeeds: 'Founders pitching to investors, software agencies, inventors discussing prototypes, and businesses exploring joint ventures.',
    whyRequired: 'Without a signed NDA, trade secrets disclosed in business discussions can be copied with zero legal recourse.',
    basicProcess: [
      'Identifying confidential information categories (financials, source code, client lists)',
      'Drafting definition of confidential data, permitted use, and return protocols',
      'Inclusion of injunctive relief remedies and governing jurisdiction clauses'
    ],
    assistanceSteps: [
      'Customized drafting for mutual (bilateral) or one-way (unilateral) disclosures',
      'Crafting realistic term durations (typically 2 to 5 years, or perpetual for trade secrets)',
      'Execution copy ready for digital signing'
    ],
    documents: [
      'Names, addresses, and authorized signatories of both disclosing and receiving parties'
    ],
    authority: 'Indian Contract Act, 1872',
    officialPortal: 'https://www.companydocx.com',
    portalName: 'Company DOCX Legal Advisory',
    faq: [
      {
        question: 'Can an NDA protect an unpatented business idea?',
        answer: 'Yes, an NDA legally obligates the recipient to keep your disclosed idea confidential and not use it for commercial benefit without consent.'
      }
    ],
    keywords: ['nda drafting', 'non disclosure agreement', 'confidentiality agreement', 'trade secrets', 'bilateral nda']
  },
  {
    id: 'website-legal-policies',
    name: 'Website Legal Documentation (Terms & Privacy Policy)',
    category: 'legal-services',
    categoryName: 'Legal Services',
    shortDescription: 'Compliant Terms of Service, Privacy Policy (DPDP Act 2023 / GDPR), and Refund Policy.',
    overview: 'Mandatory digital legal policies for websites, SaaS applications, and e-commerce stores complying with India\'s Digital Personal Data Protection (DPDP) Act 2023, IT Act, and payment gateway regulations.',
    whoNeeds: 'All website owners, mobile apps, SaaS founders, and e-commerce store operators.',
    whyRequired: 'Payment gateways (Razorpay, Stripe) will not activate merchant accounts without published Terms and Refund policies; DPDP Act imposes fines up to ₹250 Crores for data privacy violations.',
    basicProcess: [
      'Audit of website data collection points, cookies, and user accounts',
      'Drafting customized Privacy Policy with user consent mechanisms and grievance officer contact',
      'Drafting Terms of Service, Limitation of Liability, and Refund/Cancellation Policy'
    ],
    assistanceSteps: [
      'DPDP Act 2023 compliance audit of user data consent flows',
      'Payment gateway compliance verification',
      'Delivery of ready-to-publish website policy markdown and HTML'
    ],
    documents: [
      'Website URL, company legal entity name, customer support email, and Grievance Officer details'
    ],
    authority: 'Digital Personal Data Protection Act 2023 / IT Act',
    officialPortal: 'https://www.meity.gov.in',
    portalName: 'Ministry of Electronics and Information Technology',
    faq: [
      {
        question: 'Why is appointing a Data Grievance Officer required on websites in India?',
        answer: 'Under the Information Technology (Intermediary Guidelines) Rules, commercial websites must publish the name and contact details of a Grievance Officer.'
      }
    ],
    keywords: ['terms and conditions', 'privacy policy', 'dpdp act', 'refund policy', 'website legal documents', 'grievance officer']
  },
  {
    id: 'corporate-legal-advisory',
    name: 'Corporate Legal Advisory & Retainership',
    category: 'legal-services',
    categoryName: 'Legal Services',
    shortDescription: 'Dedicated legal counsel on call for commercial negotiations, risk reviews, and dispute prevention.',
    overview: 'Ongoing legal counsel for growing businesses acting as your external general counsel, reviewing commercial contracts, drafting legal notices, structuring equity deals, and guiding executive management.',
    whoNeeds: 'Mid-sized businesses, technology startups, manufacturing firms, and foreign subsidiaries.',
    whyRequired: 'Immediate access to legal expertise prevents costly commercial blunders and minimizes litigation exposure.',
    basicProcess: [
      'Retainership agreement structuring response times and monthly consultation scope',
      'Direct WhatsApp and email hotline for immediate contract reviews and legal queries',
      'Periodic compliance health audits and contract updates'
    ],
    assistanceSteps: [
      'Priority turnaround for urgent contract vetting and negotiation redlines',
      'Strategic legal advice on shareholder deadlocks and regulatory changes',
      'Representation and coordination with senior High Court advocates when needed'
    ],
    documents: [
      'Company incorporation profile and standard business agreements'
    ],
    authority: 'Corporate Legal Practice',
    officialPortal: 'https://www.companydocx.com',
    portalName: 'Company DOCX Legal Retainership',
    faq: [
      {
        question: 'What is included in a corporate legal retainership?',
        answer: 'Monthly contract reviews, legal notice drafting, commercial negotiation advisory, policy updates, and executive legal consultations.'
      }
    ],
    keywords: ['corporate legal advisory', 'legal retainership', 'general counsel', 'commercial lawyer chennai', 'contract review']
  }
];
