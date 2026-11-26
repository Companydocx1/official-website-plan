import { ServiceItem } from './types';

export const LABOUR_HR_SERVICES: ServiceItem[] = [
  {
    id: 'epfo-pf-registration',
    name: 'EPFO / PF Registration',
    category: 'labour-hr',
    categoryName: 'Labour & HR Compliance',
    shortDescription: 'Statutory establishment PF registration and Universal Account Number (UAN) generation.',
    overview: 'Mandatory registration under the Employees’ Provident Funds and Miscellaneous Provisions Act, 1952 for establishments employing 20 or more persons (and voluntary registration for smaller firms).',
    whoNeeds: 'Startups, manufacturers, commercial offices, and service firms with growing employee counts.',
    whyRequired: 'Statutory legal requirement; non-compliance triggers damages, interest penalties, and personal prosecution of directors.',
    basicProcess: [
      'Digital filing on the Shram Suvidha / Unified EPFO Portal',
      'Uploading establishment PAN, address proof, bank account, and director DSC',
      'Allotment of unique Establishment Code Number and portal activation'
    ],
    assistanceSteps: [
      'Applicability evaluation and voluntary coverage guidance',
      'DSC registration on Shram Suvidha portal and form submission',
      'Monthly Electronic Challan cum Return (ECR) filing assistance'
    ],
    documents: [
      'Certificate of Incorporation / Partnership Deed / Business Registration',
      'PAN Card of Establishment and authorized signatory',
      'Cancelled Cheque of Establishment Current Bank Account',
      'Employee count details and salary breakup'
    ],
    authority: 'Employees\' Provident Fund Organisation (EPFO), Ministry of Labour',
    officialPortal: 'https://www.epfindia.gov.in',
    portalName: 'EPFO Unified Portal',
    faq: [
      {
        question: 'Is PF registration mandatory if employees are fewer than 20?',
        answer: 'It is mandatory once headcount reaches 20. However, employers can opt for voluntary registration to provide social security benefits.'
      }
    ],
    keywords: ['epfo registration', 'pf registration', 'uan', 'shram suvidha', 'ecr filing']
  },
  {
    id: 'esic-registration',
    name: 'ESIC Registration',
    category: 'labour-hr',
    categoryName: 'Labour & HR Compliance',
    shortDescription: 'State employee health and maternity insurance coverage under the ESI Act, 1948.',
    overview: 'Statutory social security health insurance registration under the Employees’ State Insurance Act for entities employing 10 or more persons where wages are up to ₹21,000 per month.',
    whoNeeds: 'Factories, establishments, shops, restaurants, and IT firms employing staff.',
    whyRequired: 'Provides complete medical care, sickness benefits, maternity benefits, and disablement pensions to insured employees.',
    basicProcess: [
      'Registration on the ESIC / Shram Suvidha portal',
      'Issuance of 17-digit Employer Code',
      'Online generation of employee Pehchan identity cards'
    ],
    assistanceSteps: [
      'Wage threshold and headcount eligibility audit',
      'Online registration and portal setup',
      'Monthly contribution filing and compliance registers maintenance'
    ],
    documents: [
      'PAN, GST, and Address Proof of establishment',
      'Cancelled Cheque of business account',
      'List of employees earning up to ₹21,000/month with nominee KYC'
    ],
    authority: 'Employees\' State Insurance Corporation (ESIC)',
    officialPortal: 'https://www.esic.gov.in',
    portalName: 'ESIC Official Portal',
    faq: [
      {
        question: 'What is the current ESIC contribution rate?',
        answer: 'The current contribution rate is 4% of gross wages (3.25% contributed by employer, 0.75% contributed by employee).'
      }
    ],
    keywords: ['esic registration', 'esi code', 'pehchan card', 'employee insurance', 'shram suvidha']
  },
  {
    id: 'labour-license-clra',
    name: 'Labour License & CLRA Registration',
    category: 'labour-hr',
    categoryName: 'Labour & HR Compliance',
    shortDescription: 'Principal employer registration (Form I) and contractor labour licenses (Form IV/V).',
    overview: 'Mandatory licensing under the Contract Labour (Regulation and Abolition) Act, 1970 for principal employers engaging 20+ contract workers and manpower contractors supplying 20+ staff.',
    whoNeeds: 'Construction contractors, security agencies, facility management, and industrial manufacturers.',
    whyRequired: 'Operating without a contract labour license attracts penal fines and holding the principal employer directly liable for contract wages.',
    basicProcess: [
      'Principal employer obtains Registration Certificate in Form I',
      'Principal employer issues Form V certificate to contractor',
      'Contractor files Form IV on labour portal with statutory security deposit'
    ],
    assistanceSteps: [
      'Contract agreement audit and headcount scoping',
      'Form I and Form IV preparation on state/central labour portals',
      'Statutory labour registers setup (Muster Roll, Wage Register)'
    ],
    documents: [
      'Contract / Work Order between Principal Employer and Contractor',
      'Form V certificate issued by Principal Employer',
      'Establishment registration and security deposit payment receipt'
    ],
    authority: 'Office of the Labour Commissioner / Shram Suvidha',
    officialPortal: 'https://shramsuvidha.gov.in',
    portalName: 'Shram Suvidha Labour Portal',
    faq: [
      {
        question: 'How long is a Contract Labour License valid?',
        answer: 'The license is valid for the period specified in the contract work order and must be renewed for extensions.'
      }
    ],
    keywords: ['clra license', 'contract labour', 'form v', 'labour license', 'principal employer']
  },
  {
    id: 'payroll-compliance',
    name: 'Payroll Compliance',
    category: 'labour-hr',
    categoryName: 'Labour & HR Compliance',
    shortDescription: 'Monthly PF, ESIC, Professional Tax, and TDS (Salary) computation and challan settlement.',
    overview: 'End-to-end statutory payroll compliance ensuring accurate gross-to-net salary structuring, deduction of statutory contributions, and zero-default monthly challan generation.',
    whoNeeds: 'Companies with 5 to 500+ employees seeking error-free labour compliance.',
    whyRequired: 'Prevents statutory default notices, interest penalties, and employee dissatisfaction.',
    basicProcess: [
      'Monthly attendance and variable pay processing',
      'Computation of PF ECR, ESIC challan, PT, and Section 192 TDS',
      'Challan generation and automated payslip distribution'
    ],
    assistanceSteps: [
      'CTC restructuring to optimize tax savings and statutory obligations',
      'Timely monthly filings before the 15th of each calendar month',
      'Issuance of annual Form 16 Part A & B for all employees'
    ],
    documents: [
      'Monthly employee attendance and leave register',
      'Salary increment, bonus, or deduction authorization memos',
      'Employee PAN and UAN master database'
    ],
    authority: 'Ministry of Labour & Income Tax Department',
    officialPortal: 'https://www.epfindia.gov.in',
    portalName: 'EPFO & ESIC Portals',
    faq: [
      {
        question: 'What is the statutory deadline for depositing PF and ESI contributions?',
        answer: 'PF and ESI contributions must be deposited on or before the 15th of the following calendar month.'
      }
    ],
    keywords: ['payroll compliance', 'ecr challan', 'salary tds', 'form 16', 'gross to net']
  },
  {
    id: 'hr-policy-documentation',
    name: 'HR Policy Documentation',
    category: 'labour-hr',
    categoryName: 'Labour & HR Compliance',
    shortDescription: 'Custom employee handbook, leave policy, code of conduct, remote work, and disciplinary rules.',
    overview: 'Drafting comprehensive, legally vetted organizational policies tailored to Indian labour jurisprudence, ensuring clarity on employee duties, intellectual property assignment, and termination protocols.',
    whoNeeds: 'Growing startups, IT/BPO companies, manufacturing firms, and retail organizations.',
    whyRequired: 'Airtight HR policies protect management against unlawful termination suits, wage disputes, and workplace misconduct claims.',
    basicProcess: [
      'Consultation on work culture, hours, leave entitlement, and probation norms',
      'Drafting employee handbook and standard operating procedures (SOPs)',
      'Management sign-off and digital employee acknowledgment protocols'
    ],
    assistanceSteps: [
      'Drafting leave, overtime, maternity, and code of conduct policies',
      'Incorporating whistleblower, data protection, and IT asset usage rules',
      'Alignment with Tamil Nadu state labour model standing orders'
    ],
    documents: [
      'Current organizational structure and working shift schedules',
      'Existing employment letter formats or baseline terms'
    ],
    authority: 'Labour Laws & Model Standing Orders',
    officialPortal: 'https://labour.gov.in',
    portalName: 'Ministry of Labour & Employment',
    faq: [
      {
        question: 'Are standing orders mandatory for all establishments?',
        answer: 'Under the Industrial Employment (Standing Orders) Act, establishments employing 50 or 100+ workmen (varying by state) must adopt formal certified standing orders.'
      }
    ],
    keywords: ['hr policy', 'employee handbook', 'code of conduct', 'leave policy', 'standing orders']
  },
  {
    id: 'employment-agreement',
    name: 'Employment Agreement',
    category: 'labour-hr',
    categoryName: 'Labour & HR Compliance',
    shortDescription: 'Executive employment contracts, non-compete, confidentiality, and IP assignment clauses.',
    overview: 'Customized bilateral employment contracts defining job responsibilities, remuneration breakup, non-disclosure, intellectual property ownership, notice periods, and dispute resolution.',
    whoNeeds: 'Employers hiring key managerial personnel (KMP), software engineers, sales leaders, and general staff.',
    whyRequired: 'Protects proprietary code, customer lists, and business secrets from being taken by departing employees.',
    basicProcess: [
      'Scope definition (regular, probation, consultant, or executive contract)',
      'Drafting protective IP assignment and non-solicitation covenants',
      'Final execution copy with digital signing guidance'
    ],
    assistanceSteps: [
      'Tailoring terms to position seniority and sensitivity of trade secrets',
      'Drafting enforceable post-employment non-solicitation clauses',
      'Dual-language drafts if required by local regional statutes'
    ],
    documents: [
      'Candidate designation, CTC breakdown, and probation duration',
      'Employer business particulars and registered office'
    ],
    authority: 'Indian Contract Act & Industrial Disputes Act',
    officialPortal: 'https://www.companydocx.com',
    portalName: 'Company DOCX Legal Practice',
    faq: [
      {
        question: 'Are non-compete clauses post-termination enforceable in India?',
        answer: 'Under Section 27 of the Indian Contract Act, post-employment non-compete restrictions are generally void, whereas non-solicitation and confidentiality clauses are fully enforceable.'
      }
    ],
    keywords: ['employment agreement', 'offer letter', 'ip assignment', 'non solicitation', 'notice period']
  },
  {
    id: 'hr-documentation-suite',
    name: 'HR Documentation Suite',
    category: 'labour-hr',
    categoryName: 'Labour & HR Compliance',
    shortDescription: 'Standardized letters: Offer Letters, Confirmation, Promotion, Relieving, and Experience Letters.',
    overview: 'Complete set of professionally formatted employment lifecycle documentation preventing legal ambiguities during hiring, probation evaluation, performance warnings, and separation.',
    whoNeeds: 'Founders, HR departments, and office managers needing standard corporate templates.',
    whyRequired: 'Improperly worded termination or relieving letters frequently trigger legal disputes and labour court notices.',
    basicProcess: [
      'Review of corporate letterhead and branding',
      'Drafting modular templates for Offer, Appointment, NDA, Warning, Show Cause, and Relieving Letters',
      'Delivery of editable Word templates and usage guides'
    ],
    assistanceSteps: [
      'Comprehensive audit of current HR documentation templates',
      'Providing standardized legal forms compliant with statutory notice rules',
      'Advisory on documentation requirements for performance separations'
    ],
    documents: [
      'Corporate letterhead and basic HR workflow details'
    ],
    authority: 'Labour Laws & HR Best Practices',
    officialPortal: 'https://www.companydocx.com',
    portalName: 'Company DOCX HR Practice',
    faq: [
      {
        question: 'Is an employer legally obligated to issue an Experience Certificate?',
        answer: 'Yes, fair employment practices and state labour rules require employers to provide service certificates upon full and final settlement.'
      }
    ],
    keywords: ['hr documentation', 'offer letter', 'relieving letter', 'show cause notice', 'experience certificate']
  },
  {
    id: 'labour-law-compliance',
    name: 'Labour Law Compliance & Advisory',
    category: 'labour-hr',
    categoryName: 'Labour & HR Compliance',
    shortDescription: 'Statutory registers, annual labour returns, minimum wages audit, and inspection representation.',
    overview: 'Holistic compliance management across the Payment of Wages Act, Minimum Wages Act, Payment of Bonus Act, Maternity Benefit Act, and upcoming Labour Codes.',
    whoNeeds: 'Industrial units, corporate offices, IT campuses, and retail chains with substantial workforces.',
    whyRequired: 'Routine labour department inspections can lead to compounding fines and prosecution if statutory registers and notices are missing.',
    basicProcess: [
      'Audit of physical/digital labour registers and wage calculation records',
      'Display of mandatory statutory notices (Minimum Wages, Maternity Act abstracts)',
      'Filing unified annual returns with state labour departments'
    ],
    assistanceSteps: [
      'Onsite or virtual labour compliance health audit',
      'Drafting replies to Labour Enforcement Officer inspection notices',
      'Structuring records compliant with the new Occupational Safety and Wage Codes'
    ],
    documents: [
      'Muster roll and wage registers for the preceding 12 months',
      'Inspection reports or observation memos issued by Labour Officers'
    ],
    authority: 'Department of Labour, Government of Tamil Nadu / Central CLC',
    officialPortal: 'https://labour.tn.gov.in',
    portalName: 'Tamil Nadu Labour Department',
    faq: [
      {
        question: 'What are the core registers an establishment must maintain under labour laws?',
        answer: 'Key registers include the Register of Wages, Register of Fines and Deductions, Register of Advances, Register of Overtime, and Attendance Muster Roll.'
      }
    ],
    keywords: ['labour law compliance', 'minimum wages', 'bonus act', 'maternity benefit', 'labour inspection']
  }
];
