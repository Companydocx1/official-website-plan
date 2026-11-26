import { ServiceItem } from './types';

export const IMPORT_EXPORT_SERVICES: ServiceItem[] = [
  {
    id: 'iec-registration',
    name: 'IEC Registration & Annual Renewal',
    category: 'import-export',
    categoryName: 'Import, Export & International Business',
    shortDescription: '10-digit DGFT Importer-Exporter Code issuance and mandatory annual re-validation.',
    overview: 'The Importer-Exporter Code (IEC) is a statutory prerequisite issued by the Directorate General of Foreign Trade (DGFT) for commercial import or export of goods and cross-border services from India.',
    whoNeeds: 'Manufacturers, merchant exporters, e-commerce global sellers, software exporters, and import houses.',
    whyRequired: 'Indian Customs will not clear inward or outward commercial shipments without an active, validated IEC linked with ICEGATE.',
    basicProcess: [
      'Application submission on official DGFT portal using Digital Signature or Aadhaar e-Sign',
      'Validation of PAN, bank current account credentials, and address proof',
      'Instant electronic generation of IEC Certificate and annual April-June validation'
    ],
    assistanceSteps: [
      'Entity credential verification on the DGFT national gateway',
      'Filing on dgft.gov.in and generating official electronic certificate',
      'Annual mandatory updating assistance to prevent deactivation'
    ],
    documents: [
      'PAN Card of entity / proprietor',
      'Cancelled Cheque / Bank Certificate of Business Current Account',
      'Business premise address proof (Electricity bill / Rent agreement)'
    ],
    authority: 'Directorate General of Foreign Trade (DGFT), Ministry of Commerce',
    officialPortal: 'https://www.dgft.gov.in',
    portalName: 'DGFT Official Portal',
    faq: [
      {
        question: 'Is annual renewal of IEC mandatory?',
        answer: 'Yes, as per DGFT guidelines, every IEC holder must confirm or update their portal details annually between April and June.'
      }
    ],
    keywords: ['iec registration', 'import export code', 'dgft renewal', 'icegate', 'export license']
  },
  {
    id: 'ad-code-registration',
    name: 'AD Code Registration (ICEGATE Port Linking)',
    category: 'import-export',
    categoryName: 'Import, Export & International Business',
    shortDescription: '14-digit Authorized Dealer code registration at customs sea and air ports for export clearance.',
    overview: 'An Authorised Dealer (AD) Code is issued by a foreign exchange authorized bank and must be registered at each customs port (e.g., Chennai Sea Port INMAA1, Chennai Air Cargo INMAA4) via ICEGATE to generate Shipping Bills.',
    whoNeeds: 'All physical goods exporters shipping overseas through customs ports.',
    whyRequired: 'Customs ICEGATE system blocks generation of export Shipping Bills and duty drawback credits without a port-registered AD Code.',
    basicProcess: [
      'Obtaining AD Code letter from current account bank branch in prescribed format',
      'Uploading on ICEGATE portal using Class 3 Digital Signature Certificate',
      'Customs officer verification and electronic port approval'
    ],
    assistanceSteps: [
      'Providing standardized bank letter format recognized by Indian Customs',
      'Filing port registration on ICEGATE with Class 3 DSC',
      'Follow-up with customs EDI service center until active status'
    ],
    documents: [
      'Bank AD Code Letter on bank letterhead with IFSC and branch seal',
      'IEC Certificate copy and PAN Card',
      'Class 3 Digital Signature Certificate of authorized director/partner'
    ],
    authority: 'Indian Customs Electronic Data Interchange Gateway (ICEGATE / CBIC)',
    officialPortal: 'https://www.icegate.gov.in',
    portalName: 'ICEGATE Customs Portal',
    faq: [
      {
        question: 'Do I need separate AD code registrations for different ports?',
        answer: 'Yes, if you export from multiple customs ports (e.g., Chennai Sea, Chennai Air, Tuticorin), the AD code must be linked at each port code.'
      }
    ],
    keywords: ['ad code', 'icegate port registration', 'shipping bill', 'duty drawback', 'chennai port export']
  },
  {
    id: 'apeda-rcmc-assistance',
    name: 'APEDA Registration & RCMC Assistance',
    category: 'import-export',
    categoryName: 'Import, Export & International Business',
    shortDescription: 'Registration-cum-Membership Certificate for agricultural and processed food exporters.',
    overview: 'Mandatory statutory export registration under the APEDA Act for exporters of scheduled commodities including fruits, vegetables, rice, meat, confectionery, honey, and herbal items.',
    whoNeeds: 'Exporters of food products, agro-commodities, grains, and processed snacks.',
    whyRequired: 'Customs will not clear scheduled food export consignments without a valid APEDA RCMC certificate.',
    basicProcess: [
      'Ensuring active IEC and bank account credentials',
      'Filing online application on APEDA portal with product category selection',
      'Issuance of 5-year digital APEDA RCMC Certificate'
    ],
    assistanceSteps: [
      'Product classification against APEDA scheduled list',
      'Application filing on apeda.gov.in with bank credentials',
      'Procurement of RCMC and guidance on export quality testing'
    ],
    documents: [
      'Import Export Code (IEC) certificate copy',
      'Bank Certificate in prescribed APEDA format / cancelled cheque',
      'PAN Card and Business Registration Certificate'
    ],
    authority: 'Agricultural and Processed Food Products Export Development Authority (APEDA)',
    officialPortal: 'https://apeda.gov.in',
    portalName: 'APEDA Official Portal',
    faq: [
      {
        question: 'How long is an APEDA RCMC Certificate valid?',
        answer: 'An APEDA RCMC is valid for 5 calendar years from the date of issuance.'
      }
    ],
    keywords: ['apeda rcmc', 'agro export', 'food export license', 'rice export', 'apeda certificate']
  },
  {
    id: 'import-export-documentation',
    name: 'Import Export Documentation & DGFT Services',
    category: 'import-export',
    categoryName: 'Import, Export & International Business',
    shortDescription: 'Letter of Undertaking (LUT), Bill of Lading, Commercial Invoice, Packing List, and DGFT schemes.',
    overview: 'Complete regulatory documentation for international trade transactions, including filing GST Letter of Undertaking (LUT) for zero-rated exports without paying IGST, Advance Authorizations, EPCG schemes, and Certificate of Origin (COO).',
    whoNeeds: 'Exporters, importers, global trading firms, and manufacturing exporters.',
    whyRequired: 'Inaccurate documentation leads to customs cargo seizure, demurrage charges, and loss of export tax refunds.',
    basicProcess: [
      'Drafting compliant Commercial Invoices, Packing Lists, and Proforma Invoices',
      'Filing annual GST LUT on gst.gov.in for export tax exemption',
      'Applying for preferential / non-preferential Certificate of Origin on DGFT'
    ],
    assistanceSteps: [
      'End-to-end export documentation review',
      'Annual GST LUT filing and ITC refund claim assistance',
      'DGFT Advance Authorization and RoDTEP export incentive applications'
    ],
    documents: [
      'IEC and GST Registration Certificates',
      'Purchase Orders / Contracts from overseas buyers',
      'Authorized Signatory DSC'
    ],
    authority: 'DGFT, Ministry of Commerce & GSTN',
    officialPortal: 'https://www.dgft.gov.in',
    portalName: 'DGFT Trade Services Gateway',
    faq: [
      {
        question: 'What is a GST LUT (Letter of Undertaking)?',
        answer: 'An annual declaration on the GST portal allowing exporters to ship goods and services overseas without paying output IGST upfront.'
      }
    ],
    keywords: ['export documentation', 'gst lut', 'certificate of origin', 'dgft schemes', 'bill of lading', 'rodtep']
  }
];
