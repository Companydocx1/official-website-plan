/**
 * Official Government Portals Data
 * Strictly official domains (.gov.in, .nic.in, or verified statutory authority portals).
 */

export interface GovernmentPortal {
  id: string;
  name: string;
  department: string;
  category: string;
  purpose: string;
  officialUrl: string;
  displayUrl: string;
  keyServices: string[];
}

export const GOVERNMENT_PORTALS: GovernmentPortal[] = [
  {
    id: 'mca',
    name: 'Ministry of Corporate Affairs (MCA21)',
    department: 'Ministry of Corporate Affairs, Government of India',
    category: 'Corporate & Company',
    purpose: 'Official statutory portal for company incorporation, LLP registration, DIN allotment, annual ROC filing, and corporate governance.',
    officialUrl: 'https://www.mca.gov.in',
    displayUrl: 'mca.gov.in',
    keyServices: ['Company Incorporation (SPICe+)', 'LLP Formation (FiLLiP)', 'DIN Allotment', 'Annual ROC Filings', 'Company Strike Off']
  },
  {
    id: 'gst',
    name: 'Goods & Services Tax (GST) Portal',
    department: 'Goods and Services Tax Network (GSTN), Government of India',
    category: 'Taxation & GST',
    purpose: 'Unified digital taxation platform for fresh GST registration, monthly/quarterly return filings (GSTR-1, GSTR-3B), e-way bills, and tax refunds.',
    officialUrl: 'https://www.gst.gov.in',
    displayUrl: 'gst.gov.in',
    keyServices: ['New GST Registration (REG-01)', 'GSTR-1 & GSTR-3B Filing', 'Annual Return (GSTR-9)', 'ITC Reconciliation', 'LUT Filing for Exports']
  },
  {
    id: 'incometax',
    name: 'Income Tax e-Filing Portal',
    department: 'Income Tax Department, Ministry of Finance, Government of India',
    category: 'Taxation & GST',
    purpose: 'Statutory platform for individual and corporate Income Tax Return (ITR) filings, TDS compliance, PAN services, and tax audit reporting.',
    officialUrl: 'https://www.incometax.gov.in',
    displayUrl: 'incometax.gov.in',
    keyServices: ['ITR Filing (ITR-1 to ITR-7)', 'TDS Statements Compliance', 'Tax Audit Submissions', 'Form 10A / 10AB (12AA & 80G)', 'AIS / 26AS Verification']
  },
  {
    id: 'ipindia',
    name: 'Intellectual Property India (IP India)',
    department: 'Office of the CGPDTM, Department for Promotion of Industry and Internal Trade (DPIIT)',
    category: 'IPR & Patents',
    purpose: 'Statutory authority portal for filing, examination, journal publication, and registration of Trademarks, Patents, Designs, and Copyrights.',
    officialUrl: 'https://ipindia.gov.in',
    displayUrl: 'ipindia.gov.in',
    keyServices: ['Trademark Application (TM-A)', 'Patent Filing', 'Industrial Design Registration', 'IP Public Search', 'Trademark Examination Response']
  },
  {
    id: 'startupindia',
    name: 'Startup India Portal',
    department: 'Department for Promotion of Industry and Internal Trade (DPIIT), Ministry of Commerce and Industry',
    category: 'Startup & MSME',
    purpose: 'Official portal for obtaining DPIIT recognition, tax exemptions (Section 56 & 80IAC), patent rebate eligibility, and government tender exemptions.',
    officialUrl: 'https://www.startupindia.gov.in',
    displayUrl: 'startupindia.gov.in',
    keyServices: ['DPIIT Startup Recognition', 'Tax Exemption Certificates', 'Fast-Track Patent Processing', 'Government Tender Relaxations']
  },
  {
    id: 'udyam',
    name: 'Udyam Registration Portal',
    department: 'Ministry of Micro, Small and Medium Enterprises (MSME), Government of India',
    category: 'Startup & MSME',
    purpose: 'Official, zero-fee government portal for obtaining MSME/Udyam Registration Certificate for micro, small, and medium business enterprises.',
    officialUrl: 'https://udyamregistration.gov.in',
    displayUrl: 'udyamregistration.gov.in',
    keyServices: ['New Udyam Registration', 'Udyam Certificate Download', 'MSME Classification Updates', 'Priority Sector Bank Lending Access']
  },
  {
    id: 'fssai',
    name: 'Food Safety Compliance System (FoSCoS - FSSAI)',
    department: 'Food Safety and Standards Authority of India (FSSAI), Ministry of Health & Family Welfare',
    category: 'Licences & Certifications',
    purpose: 'National platform for food business operators (FBO) to apply for basic registration, state licenses, central licenses, and annual return submissions.',
    officialUrl: 'https://foscos.fssai.gov.in',
    displayUrl: 'foscos.fssai.gov.in',
    keyServices: ['FSSAI Basic Registration', 'FSSAI State / Central License', 'Food Category Endorsements', 'FSSAI Annual Returns (Form D1)']
  },
  {
    id: 'dgft',
    name: 'Directorate General of Foreign Trade (DGFT)',
    department: 'Ministry of Commerce and Industry, Government of India',
    category: 'Licences & Certifications',
    purpose: 'Official portal for issuance and annual renewal of Import Export Code (IEC), export incentives, Advance Authorizations, and foreign trade policy schemes.',
    officialUrl: 'https://www.dgft.gov.in',
    displayUrl: 'dgft.gov.in',
    keyServices: ['Import Export Code (IEC) Issuance', 'Annual IEC Updating / Re-validation', 'Advance Authorization', 'RoDTEP Schemes']
  },
  {
    id: 'ngodarpan',
    name: 'NGO DARPAN Portal',
    department: 'NITI Aayog, Government of India',
    category: 'NGO & Trusts',
    purpose: 'National registry for Non-Government Organizations, Voluntary Organizations, Public Charitable Trusts, and Societies seeking central grants.',
    officialUrl: 'https://ngodarpan.gov.in',
    displayUrl: 'ngodarpan.gov.in',
    keyServices: ['NGO Unique ID Generation', 'FCRA Clearance Prerequisites', 'Eligibility for Central Government Grants', 'CSR-1 Filing Baseline']
  },
  {
    id: 'apeda',
    name: 'APEDA Portal',
    department: 'Agricultural and Processed Food Products Export Development Authority, Ministry of Commerce & Industry',
    category: 'Licences & Certifications',
    purpose: 'Statutory registration authority for exporters of scheduled agricultural and processed food products from India (RCMC Certificate).',
    officialUrl: 'https://apeda.gov.in',
    displayUrl: 'apeda.gov.in',
    keyServices: ['RCMC Registration', 'Export Certification for Agro-Commodities', 'Trade Facilitation Support']
  },
  {
    id: 'epfindia',
    name: 'Employees\' Provident Fund Organisation (EPFO)',
    department: 'Ministry of Labour and Employment, Government of India',
    category: 'Labour & Compliance',
    purpose: 'Unified portal for establishment PF registration, electronic challan cum return (ECR) monthly filing, and social security compliance.',
    officialUrl: 'https://www.epfindia.gov.in',
    displayUrl: 'epfindia.gov.in',
    keyServices: ['Establishment PF Registration', 'Monthly ECR Filings', 'Universal Account Number (UAN) Management']
  },
  {
    id: 'esic',
    name: 'Employees\' State Insurance Corporation (ESIC)',
    department: 'Ministry of Labour and Employment, Government of India',
    category: 'Labour & Compliance',
    purpose: 'Statutory portal for business registration under the ESI Act, employee insurance coverage, and monthly contribution payments.',
    officialUrl: 'https://www.esic.gov.in',
    displayUrl: 'esic.gov.in',
    keyServices: ['ESIC Employer Registration', 'Employee Pehchan Cards', 'Monthly Contribution Filings']
  },
  {
    id: 'tnreginet',
    name: 'Tamil Nadu Registration Department (TNREGINET)',
    department: 'Commercial Taxes and Registration Department, Government of Tamil Nadu',
    category: 'State & Legal',
    purpose: 'Official Tamil Nadu state portal for partnership firm registration, society registration under TN Societies Act, encumbrance certificate (EC), and land records.',
    officialUrl: 'https://tnreginet.gov.in',
    displayUrl: 'tnreginet.gov.in',
    keyServices: ['Partnership Firm Registration', 'Society Registration under TN Act', 'Encumbrance Certificate (EC)', 'Certified Copies of Deeds']
  }
];
