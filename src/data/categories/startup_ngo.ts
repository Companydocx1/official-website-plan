import { ServiceItem } from './types';

export const STARTUP_SERVICES: ServiceItem[] = [
  {
    id: 'startup-india',
    name: 'DPIIT Startup India Registration',
    category: 'startup',
    categoryName: 'Startup & Government Registrations',
    shortDescription: 'Official government recognition unlocking income tax holidays, patent fee rebates, and tender benefits.',
    overview: 'Recognition under the Startup India initiative by the Department for Promotion of Industry and Internal Trade (DPIIT) certifies an entity as an innovative startup under Indian law.',
    whoNeeds: 'Incorporated Private Limited Companies or LLPs less than 10 years old with an innovative business model.',
    whyRequired: 'Mandatory prerequisite for Section 80-IAC tax holiday (3 consecutive years 100% tax exemption), Section 56 Angel Tax relief, and 80% discount on patent filing fees.',
    basicProcess: [
      'Eligibility verification under DPIIT criteria (innovation & scalability)',
      'Compiling company pitch deck, video proof, and website documentation',
      'Submission on official Startup India portal',
      'DPIIT evaluation and issuance of Startup Recognition Certificate'
    ],
    assistanceSteps: [
      'Scrutiny of business innovation claims and documentation',
      'Assistance in structuring answers for the innovation justification questionnaire',
      'End-to-end filing on startupindia.gov.in',
      'Follow-up and guidance for Section 80-IAC / Section 56 applications'
    ],
    documents: [
      'Certificate of Incorporation (Pvt Ltd) or Registration Certificate (LLP)',
      'Brief Pitch Deck or presentation explaining the innovative nature of product/service',
      'Website link or mobile app link or prototype video proof',
      'Board Resolution authorizing the application'
    ],
    authority: 'DPIIT, Ministry of Commerce and Industry',
    officialPortal: 'https://www.startupindia.gov.in',
    portalName: 'Startup India Portal',
    faq: [
      {
        question: 'Can a Sole Proprietorship get DPIIT Startup recognition?',
        answer: 'No. The entity must be registered as a Private Limited Company, Limited Liability Partnership (LLP), or Registered Partnership Firm.'
      }
    ],
    keywords: ['startup india', 'dpiit', '80iac', 'angel tax', 'innovation', 'startup recognition']
  },
  {
    id: 'udyam',
    name: 'MSME / Udyam Registration',
    category: 'startup',
    categoryName: 'Startup & Government Registrations',
    shortDescription: 'Government certificate for priority bank lending, collateral-free credit, and delayed payment protection.',
    overview: 'Udyam Registration is the official statutory registration system for Micro, Small, and Medium Enterprises (MSMEs) under the MSMED Act, 2006. It provides a unique 19-digit Udyam Registration Number (URN).',
    whoNeeds: 'All sole proprietors, partnerships, LLPs, and companies engaged in manufacturing or service industries.',
    whyRequired: 'Legal protection against delayed customer payments (mandated payment within 45 days under Section 43B(h)), lower interest rates on bank loans, and ISO/trademark fee subsidies.',
    basicProcess: [
      'Enter Aadhaar number of proprietor/partner/director on udyamregistration.gov.in',
      'Fetch PAN details and business data from CBDT database',
      'Specify National Industrial Classification (NIC) codes for business activities',
      'Submit and receive instant official Udyam Certificate with QR code'
    ],
    assistanceSteps: [
      'Classification audit (Micro, Small, or Medium) based on investment and turnover',
      'Selecting precise 5-digit NIC activity codes to ensure eligibility for subsidies',
      'Filing on official zero-fee portal without errors',
      'Assistance with MSME Samadhaan delayed payment filing if needed'
    ],
    documents: [
      'Aadhaar Card of the applicant (linked to mobile number for OTP)',
      'PAN Card of the business or proprietor',
      'Bank Account details (Account Number & IFSC Code)',
      'Business address proof'
    ],
    authority: 'Ministry of Micro, Small and Medium Enterprises (MSME)',
    officialPortal: 'https://udyamregistration.gov.in',
    portalName: 'Udyam Registration Portal',
    faq: [
      {
        question: 'Does Udyam registration require renewal every year?',
        answer: 'No, Udyam Registration is permanent and does not expire. However, annual investment and turnover details are automatically updated from ITR and GST records.'
      }
    ],
    keywords: ['udyam', 'msme', 'samadhaan', 'nic code', 'priority lending', '43bh']
  },
  {
    id: 'dsc',
    name: 'Digital Signature Certificate (DSC)',
    category: 'startup',
    categoryName: 'Startup & Government Registrations',
    shortDescription: 'Class 3 cryptographic USB token for secure e-filings with MCA, Income Tax, GST, and e-Tenders.',
    overview: 'A Class 3 Digital Signature Certificate (DSC) is a secure encrypted digital key issued by a Licensed Certifying Authority (e.g., eMudhra, Capricorn, VSign) under the Controller of Certifying Authorities (CCA).',
    whoNeeds: 'Company directors, authorized bank signatories, CAs, lawyers, GST filers, and government tender bidders.',
    whyRequired: 'Mandatory for signing all statutory MCA company filings, e-tendering portals, PF/ESI submissions, and corporate tax returns.',
    basicProcess: [
      'Aadhaar / PAN paperless eKYC verification',
      'Video verification of the applicant (15-second online recording)',
      'Issuance and cryptographic downloading of Class 3 DSC into FIPS-certified USB crypto token'
    ],
    assistanceSteps: [
      'Assisting with seamless Aadhaar OTP or paperless PAN eKYC',
      'Guiding video verification completion',
      'Burning the certificate onto a secure FIPS cryptographic USB token',
      'Token delivery or direct configuration on your device'
    ],
    documents: [
      'PAN Card of the applicant',
      'Aadhaar Card (with mobile linked for OTP) or Passport',
      'Passport-size color photograph',
      'Email address and mobile number'
    ],
    authority: 'Controller of Certifying Authorities (CCA), Ministry of Electronics & IT',
    officialPortal: 'https://cca.gov.in',
    portalName: 'Controller of Certifying Authorities (CCA)',
    faq: [
      {
        question: 'What is the validity period of a DSC?',
        answer: 'DSCs are usually issued with a validity of 2 years or 3 years, after which they must be renewed.'
      }
    ],
    keywords: ['dsc', 'digital signature', 'class 3', 'usb token', 'cca', 'emudhra']
  }
];

export const NGO_SERVICES: ServiceItem[] = [
  {
    id: 'trust',
    name: 'Trust Registration',
    category: 'ngo',
    categoryName: 'NGO Registration & Compliance',
    shortDescription: 'Formation of Public Charitable Trusts for education, healthcare, relief, and social causes.',
    overview: 'A Public Charitable Trust is established under the Indian Trusts Act, 1882 (or relevant state public trust acts) by executing and registering a Trust Deed before the jurisdictional Sub-Registrar.',
    whoNeeds: 'Philanthropists, families building educational institutions, spiritual bodies, and community relief groups.',
    whyRequired: 'Provides lawful authority to hold public donations, own institutional real estate, and conduct charitable programs.',
    basicProcess: [
      'Drafting the Trust Deed outlining charitable objectives and trustee powers',
      'Selecting minimum 2 trustees (Settlor and Managing Trustee)',
      'Submitting deed to local Sub-Registrar with non-judicial stamp duty',
      'Physical registration and issuance of Registered Trust Deed'
    ],
    assistanceSteps: [
      'Customized Trust Deed drafting incorporating clear charitable objectives',
      'Sub-Registrar appointment scheduling (via TNREGINET in Tamil Nadu)',
      'PAN Card application for Trust (Form 49A)',
      'Opening Trust bank account and establishing donor receipt procedures'
    ],
    documents: [
      'ID & Address proofs of Settlor and all Trustees (PAN, Aadhaar/Passport)',
      'Passport-size photos of all Trustees',
      'Trust registered office address proof (Electricity bill with NOC)',
      'Trust Deed executed on stamp paper'
    ],
    authority: 'Sub-Registrar Office / Registration Department',
    officialPortal: 'https://tnreginet.gov.in',
    portalName: 'Tamil Nadu Registration Department (TNREGINET)',
    faq: [
      {
        question: 'How many trustees are needed to create a public charitable trust?',
        answer: 'A minimum of 2 trustees are legally required, though 3 to 7 trustees are common for balanced governance.'
      }
    ],
    keywords: ['trust registration', 'charitable trust', 'trust deed', 'trustee', 'settlor', 'tnreginet']
  },
  {
    id: 'society',
    name: 'Society Registration',
    category: 'ngo',
    categoryName: 'NGO Registration & Compliance',
    shortDescription: 'Democratic membership-driven association registered under Societies Registration Act.',
    overview: 'A Society is formed by a group of individuals for literary, scientific, educational, artistic, or charitable purposes under the Societies Registration Act, 1860 (or Tamil Nadu Societies Registration Act, 1975).',
    whoNeeds: 'Alumni associations, sports clubs, resident welfare associations (RWA), and cultural organizations.',
    whyRequired: 'Enables democratic management by an elected governing body and legal recognition to hold community bank funds.',
    basicProcess: [
      'Drafting Memorandum of Association and Rules & Regulations (Bylaws)',
      'Adoption by minimum 7 founding members',
      'Filing with the Registrar of Societies and scrutiny of rules',
      'Issuance of Certificate of Registration'
    ],
    assistanceSteps: [
      'Drafting Society Bylaws, quorum rules, and annual general meeting procedures',
      'Filing documentation with the Registrar of Societies (Tamil Nadu Registration Dept)',
      'Procurement of certified copies and Society PAN'
    ],
    documents: [
      'KYC proofs (PAN & Aadhaar) of minimum 7 members',
      'Society registered office proof with owner NOC',
      'Signed Memorandum of Association and Bylaws'
    ],
    authority: 'Registrar of Societies, State Registration Department',
    officialPortal: 'https://tnreginet.gov.in',
    portalName: 'Tamil Nadu Registration Department (TNREGINET)',
    faq: [
      {
        question: 'What is the minimum member requirement for society registration in Tamil Nadu?',
        answer: 'Under the Tamil Nadu Societies Registration Act, 1975, a minimum of 7 members are required.'
      }
    ],
    keywords: ['society registration', 'bylaws', 'rwa', 'ngo', 'tnreginet', 'governing body']
  },
  {
    id: 'section-8',
    name: 'Section 8 Company Registration',
    category: 'ngo',
    categoryName: 'NGO Registration & Compliance',
    shortDescription: 'Most prestigious and transparent corporate NGO structure under the Companies Act, 2013.',
    overview: 'A Section 8 Company is established for promoting commerce, art, science, sports, education, research, social welfare, and charity. It operates as a limited liability company without using "Limited" in its name.',
    whoNeeds: 'High-impact philanthropic foundations, CSR vehicle entities, and institutional global NGOs.',
    whyRequired: 'Offers highest transparency, corporate governance credibility, global grant eligibility, and zero profit distribution to members.',
    basicProcess: [
      'DSC and name approval under Section 8 specific guidelines',
      'Filing Form INC-12 for Section 8 Central Government License',
      'Incorporation via SPICe+ Part B with MCA',
      'Issuance of Section 8 License and Certificate of Incorporation'
    ],
    assistanceSteps: [
      'Formulation of projected financial estimates and charitable action plan',
      'Drafting MoA and AoA compliant with Section 8 statutory conditions',
      'Filing Form INC-12 for Central Government license issuance',
      'Final incorporation with MCA'
    ],
    documents: [
      'PAN, Aadhaar, and bank statements of minimum 2 Directors',
      'Projected 3-year statement of assets, liabilities, and income/expenditure',
      'Grounds/objects on which Section 8 application is based',
      'Registered office address proof with utility bill and NOC'
    ],
    authority: 'Ministry of Corporate Affairs (MCA), Government of India',
    officialPortal: 'https://www.mca.gov.in',
    portalName: 'Ministry of Corporate Affairs (MCA21)',
    faq: [
      {
        question: 'Can profits of a Section 8 company be paid as dividend to members?',
        answer: 'No. All profits and surpluses must strictly be reinvested into promoting the charitable objects of the company.'
      }
    ],
    keywords: ['section 8', 'ngo company', 'inc-12', 'csr', 'mca', 'charity company']
  },
  {
    id: 'ngo-compliance',
    name: 'NGO Annual Compliances',
    category: 'ngo',
    categoryName: 'NGO Registration & Compliance',
    shortDescription: 'Statutory annual filings, audited accounts, and registrar submissions for non-profits.',
    overview: 'Ongoing statutory compliance for Trusts, Societies, and Section 8 companies, including annual audit, ITR-7 filing, ROC returns (AOC-4 & MGT-7), and annual society renewal filings.',
    whoNeeds: 'All registered charitable trusts, non-profit societies, and Section 8 companies in active operation.',
    whyRequired: 'Prevents de-recognition, loss of 12AA/80G status, blacklisting on DARPAN, and hefty penalty levies.',
    basicProcess: [
      'Statutory audit by independent CA',
      'Preparation of Balance Sheet and Income & Expenditure account',
      'Filing ITR-7 on Income Tax e-filing portal before statutory due dates',
      'Filing MCA Form AOC-4 & MGT-7 (for Section 8) or filing with Registrar of Societies'
    ],
    assistanceSteps: [
      'Review of receipt vouchers and charitable program expenditures',
      'ITR-7 tax audit report formulation (Form 10B/10BB)',
      'Filing compliance returns across MCA, Tax, and State authorities'
    ],
    documents: [
      'Annual bank statements of all NGO accounts',
      'Audit report, Balance Sheet, and Income & Expenditure statement',
      'Donation records, donor receipts, and beneficiary distribution vouchers'
    ],
    authority: 'Income Tax Department / MCA / Registrar of Societies',
    officialPortal: 'https://www.incometax.gov.in',
    portalName: 'Income Tax e-Filing Portal',
    faq: [
      {
        question: 'Which ITR form must an NGO file?',
        answer: 'Charitable trusts, societies, and Section 8 companies must file Form ITR-7.'
      }
    ],
    keywords: ['ngo compliance', 'itr-7', 'form 10b', 'society renewal', 'charity audit']
  },
  {
    id: '12aa',
    name: '12AA / 12AB Registration',
    category: 'ngo',
    categoryName: 'NGO Registration & Compliance',
    shortDescription: 'Income tax exemption certificate exempting non-profit surplus income from tax.',
    overview: 'Registration under Section 12AB (formerly 12AA) of the Income Tax Act exempts total surplus income of a charitable or religious non-profit from payment of income tax.',
    whoNeeds: 'Any registered trust, society, or Section 8 company carrying out charitable activities.',
    whyRequired: 'Without 12AB registration, an NGO\'s donation receipts and accumulated funds are treated as taxable commercial income at maximum marginal rates.',
    basicProcess: [
      'Filing online Form 10A (for provisional 3-year registration) or Form 10AB (for permanent 5-year renewal)',
      'Scrutiny of trust deed, objectives, and accounts by Commissioner of Income Tax (Exemptions)',
      'Issuance of Unique Registration Number (URN) and registration order'
    ],
    assistanceSteps: [
      'Documentation of charitable activities and audited expenditure trails',
      'Filing Form 10A/10AB on incometax.gov.in',
      'Drafting responses to Income Tax queries or notice clarifications'
    ],
    documents: [
      'Trust Deed / Certificate of Incorporation / Society Certificate',
      'NGO PAN Card',
      'Audited Financial Statements for up to 3 prior years (if active)',
      'Detailed Note on actual charitable activities undertaken'
    ],
    authority: 'Income Tax Department (Exemptions), Government of India',
    officialPortal: 'https://www.incometax.gov.in',
    portalName: 'Income Tax e-Filing Portal',
    faq: [
      {
        question: 'What is the validity period of provisional 12AB registration?',
        answer: 'Provisional registration is valid for 3 years, after which Form 10AB must be filed at least 6 months prior to expiry for 5-year regular registration.'
      }
    ],
    keywords: ['12aa', '12ab', 'form 10a', 'form 10ab', 'tax exemption', 'charity tax']
  },
  {
    id: '80g',
    name: '80G Certificate',
    category: 'ngo',
    categoryName: 'NGO Registration & Compliance',
    shortDescription: 'Enables your donors to claim 50% income tax deductions on their donations to your NGO.',
    overview: 'Section 80G certification empowers donors (individuals, corporates, and NRIs) to deduct 50% of the donated sum from their taxable income, greatly incentivizing public donations.',
    whoNeeds: 'All charitable trusts, societies, and Section 8 entities relying on public donations and philanthropic grants.',
    whyRequired: 'Crucial for fundraising; most institutional donors and individuals donate only to 80G-certified organizations.',
    basicProcess: [
      'Application via Form 10A / 10AB on the Income Tax portal',
      'Verification by CIT (Exemptions) that NGO funds are applied solely for non-religious charitable purposes',
      'Issuance of 80G registration order and URN'
    ],
    assistanceSteps: [
      'Verifying alignment of charitable objectives with Section 80G requirements',
      'Preparation of activity reports and donation records',
      'Form 10BD annual donation statement compliance assistance'
    ],
    documents: [
      '12AB registration order copy',
      'Trust Deed / MoA of the entity',
      'PAN Card of the NGO',
      'List of Trustees / Directors with KYC',
      'Detailed charitable activities report and photograph proof'
    ],
    authority: 'Income Tax Department (Exemptions)',
    officialPortal: 'https://www.incometax.gov.in',
    portalName: 'Income Tax e-Filing Portal',
    faq: [
      {
        question: 'Can a purely religious trust get 80G approval?',
        answer: 'Generally, trusts established purely for religious purposes are not eligible for 80G deduction benefits.'
      }
    ],
    keywords: ['80g', 'donor deduction', 'form 10bd', 'charity donation', 'tax deductible']
  },
  {
    id: 'darpan',
    name: 'NITI Aayog DARPAN Registration',
    category: 'ngo',
    categoryName: 'NGO Registration & Compliance',
    shortDescription: 'Mandatory central portal registration for NGOs seeking government grants and CSR funding.',
    overview: 'The NGO-DARPAN portal managed by NITI Aayog provides a centralized repository of voluntary organizations in India, generating a unique NGO DARPAN ID.',
    whoNeeds: 'Any NGO seeking central government scheme grants, ministry funding, or CSR contributions.',
    whyRequired: 'Compulsory prerequisite for applying for any Central/State Ministry funding, FCRA clearance, and CSR-1 registration.',
    basicProcess: [
      'Registration on ngodarpan.gov.in using NGO PAN and details',
      'Furnishing Trustee/Member PAN, Aadhaar, and email credentials',
      'Uploading registration certificate and deed',
      'Generation of official Unique NGO DARPAN ID'
    ],
    assistanceSteps: [
      'Data preparation and trustee Aadhaar validation',
      'Filing application on NITI Aayog portal',
      'DARPAN Unique ID procurement and maintenance'
    ],
    documents: [
      'Registration Certificate and Trust Deed / Society Bylaws / Section 8 MoA',
      'PAN Card of the NGO',
      'PAN and Aadhaar numbers of all Trustees / Office Bearers',
      'Sectoral details of operational work'
    ],
    authority: 'NITI Aayog, Government of India',
    officialPortal: 'https://ngodarpan.gov.in',
    portalName: 'NGO DARPAN Portal',
    faq: [
      {
        question: 'Is DARPAN registration required to receive CSR funds?',
        answer: 'Yes, having an active NGO DARPAN ID is mandatory when filing Form CSR-1 with the Ministry of Corporate Affairs.'
      }
    ],
    keywords: ['darpan', 'niti aayog', 'ngo id', 'government grant', 'voluntary organization']
  },
  {
    id: 'csr-1',
    name: 'CSR-1 Registration',
    category: 'ngo',
    categoryName: 'NGO Registration & Compliance',
    shortDescription: 'MCA certificate authorizing your NGO to legally receive corporate CSR funds.',
    overview: 'Under the Companies (Corporate Social Responsibility Policy) Rules, 2014, every NGO undertaking CSR activities on behalf of companies must register with the MCA by filing Form CSR-1.',
    whoNeeds: 'NGOs with at least 3 years of established charitable track record seeking corporate CSR funding.',
    whyRequired: 'Corporates are strictly prohibited by law from releasing CSR budgets to entities that do not hold a CSR-1 Registration Number.',
    basicProcess: [
      'Ensure active 12AB and 80G registrations and NGO DARPAN ID',
      'Preparation of Form CSR-1 on MCA portal',
      'Certification by practicing CA / CS / CMA',
      'Immediate generation of unique CSR Registration Number'
    ],
    assistanceSteps: [
      'Compliance eligibility check across 12AB, 80G, and DARPAN',
      'Form CSR-1 drafting and professional certification',
      'Filing on MCA portal and procuring approval certificate'
    ],
    documents: [
      'Section 12AB Registration Order copy',
      'NGO DARPAN Unique ID',
      'Certificate of Incorporation / Registration Certificate',
      'NGO PAN Card',
      'Resolution authorizing the applicant trustee'
    ],
    authority: 'Ministry of Corporate Affairs (MCA)',
    officialPortal: 'https://www.mca.gov.in',
    portalName: 'Ministry of Corporate Affairs (MCA21)',
    faq: [
      {
        question: 'Can an NGO receive CSR funds immediately upon incorporation?',
        answer: 'Unless established by the corporate itself, Section 8 companies, trusts, and societies must generally have a 3-year track record in undertaking similar activities.'
      }
    ],
    keywords: ['csr-1', 'corporate social responsibility', 'csr funding', 'mca', 'form csr-1']
  },
  {
    id: 'fcra',
    name: 'FCRA Registration',
    category: 'ngo',
    categoryName: 'NGO Registration & Compliance',
    shortDescription: 'Statutory clearance from Ministry of Home Affairs (MHA) to accept overseas charitable donations.',
    overview: 'Foreign Contribution (Regulation) Act, 2010 mandates that no NGO can accept foreign donations or overseas grant funding without prior permission or regular 5-year FCRA registration from the MHA.',
    whoNeeds: 'Non-profits receiving funds from foreign citizens, international foundations, UN bodies, or foreign corporate philanthropy.',
    whyRequired: 'Strict statutory compliance; accepting foreign funding without FCRA clearance constitutes a criminal offense under MHA laws.',
    basicProcess: [
      'Open mandatory designated FCRA account at State Bank of India, New Delhi Main Branch (NDMB)',
      'File Form FC-3A online on fcraonline.nic.in',
      'Thorough IB / Home Affairs background verification of trustees and past 3 years’ local activities',
      'Grant of FCRA Registration Certificate (valid for 5 years)'
    ],
    assistanceSteps: [
      'Pre-eligibility audit (minimum 3 years of audited charitable expenditure exceeding ₹15 Lakhs)',
      'Assistance with SBI NDMB mandatory account opening protocol',
      'Preparation and filing of Form FC-3A / Prior Permission (FC-3B)',
      'Advisory on handling MHA queries and annual FC-4 filing compliance'
    ],
    documents: [
      'Certified Trust Deed / MoA and registration certificate',
      'Last 3 years\' audited financial statements and activity reports',
      'KYC and affidavits of all trustees / governing council members',
      'Details of designated SBI New Delhi Main Branch FCRA account'
    ],
    authority: 'Ministry of Home Affairs (MHA), Government of India',
    officialPortal: 'https://fcraonline.nic.in',
    portalName: 'FCRA Online Services Portal (MHA)',
    faq: [
      {
        question: 'Where must the main FCRA bank account be maintained?',
        answer: 'By law, every organization granted FCRA registration must maintain its primary designated foreign contribution account strictly at the State Bank of India, New Delhi Main Branch (NDMB).'
      }
    ],
    keywords: ['fcra', 'foreign contribution', 'mha', 'sbi ndmb', 'fc-3a', 'foreign grant']
  }
];
