import { ServiceItem } from './types';

export const ISO_SERVICES: ServiceItem[] = [
  {
    id: 'iso-9001',
    name: 'ISO 9001:2015 Quality Management System (QMS)',
    category: 'iso-certifications',
    categoryName: 'ISO & Certification Services',
    shortDescription: 'World\'s premier benchmark for process standardization, quality assurance, and customer satisfaction.',
    overview: 'ISO 9001:2015 provides a structured framework for establishing consistent quality management, standardized workflows, risk-based thinking, and continuous improvement across service and manufacturing industries.',
    whoNeeds: 'Manufacturing plants, IT services, construction companies, exporters, and corporate vendors.',
    whyRequired: 'Prerequisite for bidding on government and institutional tenders, supplier onboarding, and international credibility.',
    basicProcess: [
      'Gap analysis between current operational workflows and ISO 9001 standard',
      'Documentation of Standard Operating Procedures (SOPs) and Quality Manual',
      'Internal audit and management review',
      'Stage 1 & Stage 2 certification audit by accredited Certification Body'
    ],
    assistanceSteps: [
      'Drafting tailored Quality Manual and process flowcharts',
      'Staff training on quality records maintenance',
      'Facilitating audit with IAF-accredited certification bodies'
    ],
    documents: [
      'Company registration (GST / Udyam / Certificate of Incorporation)',
      'Scope of operations and organization chart',
      'Sample operational records and purchase/sales invoices'
    ],
    authority: 'IAF Accredited Certification Bodies / ISO Framework',
    officialPortal: 'https://www.iso.org',
    portalName: 'International Organization for Standardization',
    faq: [
      {
        question: 'What is the validity of an ISO 9001 certificate?',
        answer: 'ISO certificates are valid for 3 years subject to mandatory annual surveillance audits.'
      }
    ],
    keywords: ['iso 9001', 'qms', 'quality management', 'iaf certificate', 'tender eligibility']
  },
  {
    id: 'iso-14001',
    name: 'ISO 14001:2015 Environmental Management (EMS)',
    category: 'iso-certifications',
    categoryName: 'ISO & Certification Services',
    shortDescription: 'Sustainable operations, carbon footprint reduction, and environmental compliance.',
    overview: 'Demonstrates corporate commitment to environmental sustainability, statutory waste disposal compliance, efficient resource utilization, and emergency preparedness.',
    whoNeeds: 'Chemical plants, heavy industries, waste processors, construction, and green tech firms.',
    whyRequired: 'Required for corporate ESG ratings, multinational client audits, and Pollution Control Board compliance.',
    basicProcess: [
      'Identification of environmental aspects and operational impacts',
      'Setting objectives for waste reduction and energy efficiency',
      'Implementation of environmental management procedures',
      'Third-party audit and ISO 14001 certification'
    ],
    assistanceSteps: [
      'Formulating Environmental Policy and aspect-impact register',
      'Audit coordination and documentation support'
    ],
    documents: [
      'Pollution control approvals (CTO/CTE if applicable)',
      'Waste management records and utility consumption data'
    ],
    authority: 'International Organization for Standardization (ISO)',
    officialPortal: 'https://www.iso.org',
    portalName: 'ISO Environmental Portal',
    faq: [
      {
        question: 'Does ISO 14001 replace statutory Pollution Control Board clearances?',
        answer: 'No, ISO 14001 is a voluntary international standard; statutory TNPCB approvals remain mandatory by law.'
      }
    ],
    keywords: ['iso 14001', 'ems', 'environmental management', 'esg certification', 'waste management']
  },
  {
    id: 'iso-45001',
    name: 'ISO 45001:2018 Occupational Health & Safety (OHSMS)',
    category: 'iso-certifications',
    categoryName: 'ISO & Certification Services',
    shortDescription: 'Workplace hazard mitigation, accident prevention, and employee safety management.',
    overview: 'International standard dedicated to reducing workplace risks, preventing occupational injuries, and ensuring robust safety protocols across high-risk working environments.',
    whoNeeds: 'Construction sites, manufacturing plants, logistics hubs, mining, and oil & gas facilities.',
    whyRequired: 'Drastically lowers workplace accidents, mitigates employer liability claims, and satisfies corporate client safety criteria.',
    basicProcess: [
      'Hazard Identification and Risk Assessment (HIRA)',
      'Development of occupational health and safety procedures and PPE norms',
      'Emergency response drills and accident reporting systems',
      'Third-party safety certification audit'
    ],
    assistanceSteps: [
      'Conducting HIRA matrix audit and safety manual drafting',
      'Facilitating Stage 1 and Stage 2 certification audits'
    ],
    documents: [
      'Factory/Site safety layout and machinery list',
      'PPE distribution records and incident logs'
    ],
    authority: 'ISO / IAF Accredited Bodies',
    officialPortal: 'https://www.iso.org',
    portalName: 'ISO Health & Safety Portal',
    faq: [
      {
        question: 'What is HIRA in ISO 45001?',
        answer: 'HIRA stands for Hazard Identification and Risk Assessment, which systematically evaluates workplace dangers and controls.'
      }
    ],
    keywords: ['iso 45001', 'ohsms', 'workplace safety', 'hira', 'industrial safety']
  },
  {
    id: 'iso-22000-haccp',
    name: 'ISO 22000 & HACCP (Food Safety Management)',
    category: 'iso-certifications',
    categoryName: 'ISO & Certification Services',
    shortDescription: 'Farm-to-fork food safety management, hazard analysis, and Critical Control Points (CCP).',
    overview: 'Integrates the principles of Hazard Analysis and Critical Control Points (HACCP) with prerequisite programs to ensure food products are safe for human consumption at all stages of the supply chain.',
    whoNeeds: 'Food processing plants, commercial bakeries, dairies, cold storage, packaged food brands, and exporters.',
    whyRequired: 'Mandatory requirement for international food export consignments and premium retail supermarket tie-ups.',
    basicProcess: [
      'Establishing Prerequisite Programs (PRPs) and GMP protocols',
      'Conducting biological, chemical, and physical hazard analyses',
      'Identifying Critical Control Points (CCPs) and establishing monitoring limits',
      'Certification audit and grant of ISO 22000 / HACCP certificate'
    ],
    assistanceSteps: [
      'Drafting HACCP plan and food safety manual',
      'Kitchen/factory layout sanitization and CCP verification',
      'Audit facilitation with food safety certification auditors'
    ],
    documents: [
      'FSSAI State or Central License copy',
      'Product formulation list and water testing lab reports',
      'Pest control contracts and cleaning schedules'
    ],
    authority: 'ISO / Codex Alimentarius Commission',
    officialPortal: 'https://www.iso.org',
    portalName: 'ISO Food Safety Portal',
    faq: [
      {
        question: 'How does ISO 22000 differ from HACCP?',
        answer: 'HACCP focuses specifically on food safety hazards, whereas ISO 22000 incorporates full management systems and communication alongside HACCP.'
      }
    ],
    keywords: ['iso 22000', 'haccp', 'food safety', 'ccp', 'codex alimentarius', 'food export']
  },
  {
    id: 'iso-27001',
    name: 'ISO 27001:2022 Information Security (ISMS)',
    category: 'iso-certifications',
    categoryName: 'ISO & Certification Services',
    shortDescription: 'Cybersecurity, data protection, cloud infrastructure resilience, and risk treatment.',
    overview: 'The international gold standard for Information Security Management Systems (ISMS), certifying that client data, intellectual property, and cloud IT systems are protected against cyber breaches.',
    whoNeeds: 'SaaS platforms, IT service providers, fintech companies, data centers, and healthcare tech developers.',
    whyRequired: 'Mandatory requirement for enterprise B2B sales, US/EU client contracts, and vendor security assessments.',
    basicProcess: [
      'Risk assessment of digital assets, databases, and network endpoints',
      'Formulation of Statement of Applicability (SoA) across 93 controls (Annex A)',
      'Implementation of access control, encryption, and incident response policies',
      'Independent external certification audit'
    ],
    assistanceSteps: [
      'Gap analysis against ISO 27001:2022 revised controls',
      'Drafting InfoSec policies, password rules, and vendor security agreements',
      'Audit coordination with accredited technical certification bodies'
    ],
    documents: [
      'Cloud architecture diagram and data flow map',
      'IT asset inventory and third-party vendor list'
    ],
    authority: 'ISO / IEC International Electrotechnical Commission',
    officialPortal: 'https://www.iso.org',
    portalName: 'ISO Information Security Portal',
    faq: [
      {
        question: 'How long does an ISO 27001 certification implementation take?',
        answer: 'Depending on organizational complexity and cloud infrastructure, it typically takes 4 to 12 weeks.'
      }
    ],
    keywords: ['iso 27001', 'isms', 'information security', 'cybersecurity', 'soc 2', 'statement of applicability']
  },
  {
    id: 'iso-13485-gmp-ce',
    name: 'ISO 13485, GMP & CE Certification Assistance',
    category: 'iso-certifications',
    categoryName: 'ISO & Certification Services',
    shortDescription: 'Medical device manufacturing compliance (ISO 13485), Good Manufacturing Practice (GMP), and CE marking.',
    overview: 'Specialized regulatory certifications for medical devices, pharmaceuticals, diagnostics, and European exports ensuring compliance with European Medical Device Regulation (MDR) and WHO-GMP benchmarks.',
    whoNeeds: 'Medical device manufacturers, surgical equipment makers, pharma distributors, and diagnostic kit developers.',
    whyRequired: 'Mandatory prerequisite for CDSCO medical device manufacturing licenses and exporting to European and global markets.',
    basicProcess: [
      'Technical file compilation and clinical evaluation documentation',
      'Cleanroom protocol setup and GMP process validation',
      'Notified Body or certification audit and issuance of CE / GMP certificate'
    ],
    assistanceSteps: [
      'Drafting Device Master Records (DMR) and Risk Management files (ISO 14971)',
      'Coordination with accredited Notified Bodies for CE Mark and ISO 13485 certification'
    ],
    documents: [
      'Technical product specifications and manufacturing flow diagrams',
      'Sterilization validation and biocompatibility reports (if applicable)'
    ],
    authority: 'European Notified Bodies / WHO-GMP / CDSCO',
    officialPortal: 'https://www.iso.org',
    portalName: 'ISO Medical Devices Portal',
    faq: [
      {
        question: 'What is CE marking for medical devices?',
        answer: 'CE marking confirms that a medical device complies with European health, safety, and environmental protection standards for trade in the EU.'
      }
    ],
    keywords: ['iso 13485', 'gmp certificate', 'ce marking', 'medical device', 'cdsco', 'mdr']
  }
];
