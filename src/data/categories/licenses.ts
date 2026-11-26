import { ServiceItem } from './types';

export const LICENSES_SERVICES: ServiceItem[] = [
  {
    id: 'fssai',
    name: 'FSSAI Registration & Food Licensing',
    category: 'licences',
    categoryName: 'Licenses & Certifications',
    shortDescription: '14-digit FSSAI license for food manufacturers, cloud kitchens, restaurants, and food traders.',
    overview: 'Mandatory registration and licensing under the Food Safety and Standards Act, 2006 for every Food Business Operator (FBO) in India through the FoSCoS portal (Basic, State, or Central License based on turnover/capacity).',
    whoNeeds: 'Restaurants, cafes, cloud kitchens, food manufacturers, repackers, grocery stores, food exporters, and Swiggy/Zomato partners.',
    whyRequired: 'Mandatory by law; operating a food business without an FSSAI license attracts imprisonment up to 6 months and fines up to ₹5 Lakhs under Section 63 of FSS Act.',
    basicProcess: [
      'Determining applicable license category (Basic Registration, State License, or Central License)',
      'Filing Form A (Registration) or Form B (License) on the official FoSCoS portal',
      'Uploading kitchen layout, food safety management plan (FSMS), and water test reports',
      'Food Safety Officer inspection (for licenses) and grant of 14-digit FSSAI License'
    ],
    assistanceSteps: [
      'Classification audit based on annual turnover, production capacity, and geographical spread',
      'Preparation of standard FSMS declaration, kitchen layout, and machinery list',
      'Submission on foscos.fssai.gov.in and liaison with designated Food Safety Officers',
      'FSSAI renewal and annual Form D1 filing support'
    ],
    documents: [
      'Photo of applicant / Food Business Operator',
      'Identity and Address Proof (PAN, Aadhaar/Passport)',
      'Premises Proof: Electricity Bill / Rent Agreement with Landlord NOC',
      'Food Safety Management System (FSMS) plan or undertaking',
      'List of Food Product Categories to be manufactured/sold',
      'Water testing report from NABL-accredited lab (for manufacturing units)',
      'Layout plan of the processing unit / kitchen (for State/Central license)'
    ],
    authority: 'Food Safety and Standards Authority of India (FSSAI), Ministry of Health & Family Welfare',
    officialPortal: 'https://foscos.fssai.gov.in',
    portalName: 'Food Safety Compliance System (FoSCoS - FSSAI)',
    faq: [
      {
        question: 'When is a Central FSSAI License required instead of a State License?',
        answer: 'A Central License is required if turnover exceeds ₹20 Crores/year, or for food businesses operating across multiple states, 100% export units, e-commerce food platforms, or large-scale manufacturers.'
      },
      {
        question: 'Can I list on Swiggy or Zomato with a Basic FSSAI Registration?',
        answer: 'Yes, basic food registration is sufficient for home chefs and small food outlets with annual turnover under ₹12 Lakhs.'
      }
    ],
    keywords: ['fssai', 'foscos', 'food license', 'cloud kitchen', 'restaurant license', 'swiggy zomato fssai']
  },
  {
    id: 'iso-certification',
    name: 'ISO Certification',
    category: 'licences',
    categoryName: 'Licenses & Certifications',
    shortDescription: 'Internationally recognized quality benchmarks (ISO 9001, 14001, 27001, 22000, 45001).',
    overview: 'ISO certification demonstrates that your management systems adhere to international standards for quality (ISO 9001), information security (ISO 27001), environmental safety (ISO 14001), or food safety (ISO 22000).',
    whoNeeds: 'Manufacturing plants, IT/SaaS firms, engineering contractors, exporters, and government tender bidders.',
    whyRequired: 'Prerequisite for bidding on major corporate and government tenders, exports, and building international buyer confidence.',
    basicProcess: [
      'Gap analysis between existing operations and target ISO standard',
      'Formulation of Standard Operating Procedures (SOPs) and Quality Manual',
      'Internal audit and management review',
      'Stage 1 and Stage 2 certification audit by accredited Certification Body'
    ],
    assistanceSteps: [
      'Selecting the appropriate ISO standard for your industry',
      'Customized SOP and quality manual drafting',
      'Facilitating audit with IAF-accredited or non-IAF certification bodies',
      'Delivery of authentic ISO Certificate with global validation link'
    ],
    documents: [
      'Business Registration Proof (COI / GST / Udyam)',
      'Scope of business activities and organizational hierarchy chart',
      'Sample invoices, purchase orders, or work contracts'
    ],
    authority: 'International Organization for Standardization / Accredited Certification Bodies (IAF)',
    officialPortal: 'https://www.iso.org',
    portalName: 'International Organization for Standardization',
    faq: [
      {
        question: 'What is the difference between IAF and non-IAF ISO certification?',
        answer: 'IAF (International Accreditation Forum) certifications are globally recognized and accepted by government tenders, while non-IAF certifications are typically used for internal quality branding at lower cost.'
      }
    ],
    keywords: ['iso certification', 'iso 9001', 'iso 27001', 'iaf accredited', 'quality certificate', 'tender eligibility']
  },
  {
    id: 'iec',
    name: 'Import Export Code (IEC)',
    category: 'licences',
    categoryName: 'Licenses & Certifications',
    shortDescription: '10-digit DGFT code mandatory for commercial import and export of goods and services.',
    overview: 'The Importer-Exporter Code (IEC) is a statutory 10-digit number issued by the Directorate General of Foreign Trade (DGFT), Ministry of Commerce and Industry. In modern practice, your business PAN acts as the IEC.',
    whoNeeds: 'Exporters, importers, Amazon Global sellers, cross-border software vendors, and merchant exporters.',
    whyRequired: 'Customs authorities will not clear inward or outward commercial shipments without a valid, active IEC.',
    basicProcess: [
      'Application submission on official DGFT portal using Digital Signature or Aadhaar e-Sign',
      'Verification of PAN, bank details, and business address',
      'Instant electronic generation of IEC Certificate'
    ],
    assistanceSteps: [
      'Verification of PAN and bank credentials with DGFT gateway',
      'Application filing on dgft.gov.in',
      'Annual mandatory IEC updating and validation assistance'
    ],
    documents: [
      'PAN Card of the business entity or proprietor',
      'Aadhaar / Voter ID of authorized signatory',
      'Cancelled Cheque or Bank Certificate of the business current account',
      'Proof of business address (Electricity bill / Rental agreement)'
    ],
    authority: 'Directorate General of Foreign Trade (DGFT), Ministry of Commerce and Industry',
    officialPortal: 'https://www.dgft.gov.in',
    portalName: 'Directorate General of Foreign Trade (DGFT)',
    faq: [
      {
        question: 'Is it true that IEC must be updated annually?',
        answer: 'Yes, as per DGFT notification, every IEC holder must confirm or update their details annually between April and June on the DGFT portal, even if there are no changes.'
      }
    ],
    keywords: ['iec', 'import export code', 'dgft', 'export license', 'customs clearance', 'foreign trade']
  },
  {
    id: 'trade-license',
    name: 'Trade License',
    category: 'licences',
    categoryName: 'Licenses & Certifications',
    shortDescription: 'Municipal permit to carry on commercial activities safely within local corporation limits.',
    overview: 'A Trade License is granted by the local municipal corporation (such as Greater Chennai Corporation) under the City Municipal Corporation Act, permitting a business to trade at a specific commercial premise without causing health or environmental nuisance.',
    whoNeeds: 'Retail shops, restaurants, bakeries, manufacturing units, warehouses, and commercial service establishments.',
    whyRequired: 'Statutory local municipal requirement; unauthorized commercial operations can face sealing of premises and steep municipal fines.',
    basicProcess: [
      'Premise inspection and commercial zoning verification',
      'Submission to the Revenue / Health Department of the local municipal body',
      'Payment of prescribed municipal license fee based on floor area and trade category',
      'Grant of municipal trade license certificate'
    ],
    assistanceSteps: [
      'Identifying the appropriate trade schedule under the Greater Chennai Corporation act',
      'Documentation review and NOC coordination (Fire, Health, Police where applicable)',
      'Filing with municipal revenue authorities and fee settlement'
    ],
    documents: [
      'Property Tax receipt of the commercial premises',
      'Rental Agreement and Owner NOC',
      'Building approval plan / completion certificate',
      'Business Registration proof (GST / Udyam / COI)',
      'PAN and Aadhaar of the applicant'
    ],
    authority: 'Greater Chennai Corporation / Local Municipal Bodies in Tamil Nadu',
    officialPortal: 'https://chennaicorporation.gov.in',
    portalName: 'Greater Chennai Corporation Portal',
    faq: [
      {
        question: 'How long is a Trade License valid in Chennai?',
        answer: 'Trade licenses in Chennai are generally valid for one financial year and must be renewed annually before the beginning of the next fiscal year.'
      }
    ],
    keywords: ['trade license', 'chennai corporation', 'municipal license', 'commercial permit', 'local body']
  },
  {
    id: 'shops-establishments',
    name: 'Shops & Establishments Registration',
    category: 'licences',
    categoryName: 'Licenses & Certifications',
    shortDescription: 'State labour department registration regulating working hours, employee rights, and holidays.',
    overview: 'Registration under the Tamil Nadu Shops and Establishments Act, 1947 regulates terms of employment, working hours, weekly holidays, rest intervals, and statutory staff benefits in commercial workplaces.',
    whoNeeds: 'All commercial offices, IT firms, shops, retail outlets, restaurants, and service agencies employing staff.',
    whyRequired: 'Statutory mandate within 30 days of commencing operations; mandatory for opening commercial bank accounts and labour department compliance.',
    basicProcess: [
      'Online submission on the Tamil Nadu Labour Department portal',
      'Furnishing employer details, employee breakdown, and working hour schedules',
      'Scrutiny by jurisdictional Labour Inspector and issuance of Form C Registration Certificate'
    ],
    assistanceSteps: [
      'Preparation of employee statutory registers and working schedule disclosures',
      'Online application on the state labour department portal',
      'Procurement of the official Shops & Establishments Certificate'
    ],
    documents: [
      'Business registration certificate (COI / Partnership Deed / Udyam)',
      'Premise address proof and rental agreement',
      'PAN and Aadhaar of the employer / partners / directors',
      'List of employees with designations and joining dates'
    ],
    authority: 'Department of Labour, Government of Tamil Nadu',
    officialPortal: 'https://labour.tn.gov.in',
    portalName: 'Tamil Nadu Labour Department Portal',
    faq: [
      {
        question: 'Within how many days of opening an office must I apply for Shops & Establishments?',
        answer: 'You must apply within 30 days from the date of commencement of commercial operations.'
      }
    ],
    keywords: ['shops and establishments', 'gumasta', 'labour department', 'tamil nadu labour', 'form c']
  },
  {
    id: 'drug-cosmetic',
    name: 'Drug & Cosmetic License',
    category: 'licences',
    categoryName: 'Licenses & Certifications',
    shortDescription: 'Statutory license for manufacturing, wholesale distribution, and retail sale of pharmaceuticals and cosmetics.',
    overview: 'Governed under the Drugs and Cosmetics Act, 1940 and Rules, this license is granted by the State Drugs Control Administration for retail pharmacy, wholesale distribution, or manufacturing of drugs, pharmaceuticals, and cosmetic products.',
    whoNeeds: 'Pharmacies, wholesale pharma distributors, Ayurvedic/allopathic medicine retailers, and cosmetic manufacturers.',
    whyRequired: 'Strictly prohibited to stock, sell, or distribute medicines without a valid drug license; violations carry criminal charges.',
    basicProcess: [
      'Appointment of a Registered Pharmacist (for retail) or competent person with experience (for wholesale)',
      'Verification of minimum commercial carpet area (minimum 10 sq.m / 15 sq.m) and air-conditioned cold storage',
      'Filing application with the State Drugs Control Administration',
      'Physical site inspection by Drug Inspector and issuance of Form 20/21 license'
    ],
    assistanceSteps: [
      'Commercial premise suitability and technical qualification audit',
      'Preparation of statutory layout plans and cold-chain documentation',
      'Filing on state drug control portal and coordinating inspector audit'
    ],
    documents: [
      'Registered Pharmacist\'s registration certificate with State Pharmacy Council and appointment letter',
      'Premises ownership proof or commercial rent agreement with landlord NOC',
      'Site plan and blueprint of premises showing separate storage and refrigerator',
      'Purchase invoice and proof of operational refrigerator/cold storage'
    ],
    authority: 'Drugs Control Department, Government of Tamil Nadu / CDSCO',
    officialPortal: 'https://www.drugcontrol.tn.gov.in',
    portalName: 'Tamil Nadu Drugs Control Department',
    faq: [
      {
        question: 'Is a registered pharmacist compulsory for a wholesale drug license?',
        answer: 'For wholesale, either a registered pharmacist or an individual with a university degree and minimum 1 year of drug dealing experience is acceptable.'
      }
    ],
    keywords: ['drug license', 'cosmetic license', 'pharmacy', 'wholesale drug', 'registered pharmacist', 'cdsco']
  },
  {
    id: 'clra',
    name: 'CLRA Registration & Contract Labour License',
    category: 'licences',
    categoryName: 'Licenses & Certifications',
    shortDescription: 'Registration for principal employers and contractor licenses under Contract Labour (Regulation & Abolition) Act.',
    overview: 'The Contract Labour (Regulation and Abolition) Act, 1970 requires principal employers employing 20 or more contract workmen to obtain a Principal Employer Registration, and contractors supplying 20+ workmen to obtain a Contract Labour License.',
    whoNeeds: 'Factories, construction firms, IT parks, security agencies, and manpower staffing agencies.',
    whyRequired: 'Prevents prosecution by the Labour Enforcement Directorate and protects businesses from direct liability for contractor staff.',
    basicProcess: [
      'Principal employer obtains Form I Registration Certificate from the Licensing Officer',
      'Issuance of Form V certificate from Principal Employer to the Contractor',
      'Contractor applies for Form IV license with security deposit',
      'Grant of Contract Labour License for the designated contract duration'
    ],
    assistanceSteps: [
      'Determining applicability based on contract terms and staff count',
      'Filing Form I (Principal Employer) or Form IV (Contractor) on the Shram Suvidha / State portal',
      'Compliance registers setup (Muster Roll, Wage Register, Deduction Register)'
    ],
    documents: [
      'Work contract / Agreement between Principal Employer and Contractor',
      'Form V issued by the Principal Employer',
      'PAN, registration certificates, and security deposit challan'
    ],
    authority: 'Ministry of Labour & Employment / Shram Suvidha Portal',
    officialPortal: 'https://shramsuvidha.gov.in',
    portalName: 'Shram Suvidha Portal',
    faq: [
      {
        question: 'Who needs to apply first: the principal employer or the contractor?',
        answer: 'The Principal Employer must first obtain the Registration Certificate (Form I) and issue Form V to the contractor before the contractor can apply for the license.'
      }
    ],
    keywords: ['clra', 'contract labour', 'shram suvidha', 'principal employer', 'form v', 'labour license']
  },
  {
    id: 'pasara',
    name: 'PASARA License (Private Security Agency)',
    category: 'licences',
    categoryName: 'Licenses & Certifications',
    shortDescription: 'Mandatory controlling authority license to operate a private security or guarding agency.',
    overview: 'Under the Private Security Agencies (Regulation) Act, 2005 (PSARA), no person can carry on or commence the business of a private security agency without obtaining a license from the State Controlling Authority.',
    whoNeeds: 'Private security companies, bouncer/guarding providers, cash transit agencies, and surveillance providers.',
    whyRequired: 'Operating without a PSARA license is a cognizable criminal offense punishable with imprisonment up to 1 year under Section 20 of PSARA.',
    basicProcess: [
      'Verification of antecedents of promoters and directors with the State Police Department',
      'MOU with a recognized security guard training institute',
      'Submission of application to the Controlling Authority (Home Department)',
      'Local police station physical verification and issuance of PSARA License'
    ],
    assistanceSteps: [
      'Promoter qualification and criminal antecedent scrutiny',
      'Facilitating mandatory Security Training Institute MOU',
      'Filing application on the National PSARA Portal (psara.gov.in)',
      'Follow-up with state police intelligence and controlling authorities'
    ],
    documents: [
      'Police Verification Report / Character certificate of all directors',
      'MOU with recognized Security Training Institute',
      'Affidavit of compliance with standard uniform, badges, and equipment',
      'Income tax returns of directors for the last 3 years'
    ],
    authority: 'Controlling Authority, Home Department (Government of Tamil Nadu)',
    officialPortal: 'https://psara.gov.in',
    portalName: 'National PSARA Portal',
    faq: [
      {
        question: 'Can a person with a criminal record obtain a PSARA license?',
        answer: 'No. PSARA explicitly disqualifies any person who has been convicted by a court or dismissed from government/military service.'
      }
    ],
    keywords: ['pasara', 'psara', 'security agency', 'guard license', 'police verification', 'home department']
  },
  {
    id: 'apeda',
    name: 'APEDA Registration (RCMC)',
    category: 'licences',
    categoryName: 'Licenses & Certifications',
    shortDescription: 'Registration-cum-Membership Certificate for exporters of scheduled agricultural and processed food products.',
    overview: 'Mandatory statutory registration under the APEDA Act, 1985 for exporters of scheduled products including fruits, vegetables, meat, poultry, dairy, confectionery, biscuits, honey, and herbal items.',
    whoNeeds: 'Exporters of food products, agro-commodities, basmati rice, spices, processed snacks, and beverages.',
    whyRequired: 'Customs and shipping lines require an APEDA RCMC certificate to clear scheduled agricultural export consignments.',
    basicProcess: [
      'Ensure active IEC (Import Export Code) and valid bank account',
      'Submit online RCMC application on the official APEDA portal',
      'Document scrutiny and issuance of digital APEDA RCMC Certificate (valid for 5 years)'
    ],
    assistanceSteps: [
      'Verification of eligible scheduled products and HS codes',
      'Filing application on apeda.gov.in with required bank certificates',
      'Procurement of RCMC and guidance on export quality certifications'
    ],
    documents: [
      'Import Export Code (IEC) certificate',
      'Bank Certificate in prescribed APEDA format / cancelled cheque',
      'PAN Card & Business Registration Certificate',
      'List of scheduled agricultural/food products intended for export'
    ],
    authority: 'Agricultural and Processed Food Products Export Development Authority (APEDA)',
    officialPortal: 'https://apeda.gov.in',
    portalName: 'APEDA Portal',
    faq: [
      {
        question: 'What is the validity period of an APEDA RCMC Certificate?',
        answer: 'An APEDA RCMC is valid for a period of 5 calendar years from the date of issue.'
      }
    ],
    keywords: ['apeda', 'rcmc', 'agro export', 'food export', 'basmati export', 'processed food']
  },
  {
    id: 'ad-code',
    name: 'AD Code Registration',
    category: 'licences',
    categoryName: 'Licenses & Certifications',
    shortDescription: 'Authorised Dealer code registration with Customs ICEGATE for export clearance and duty drawbacks.',
    overview: 'An Authorised Dealer (AD) Code is a 14-digit numerical code issued by a bank authorized by RBI to deal in foreign exchange. It must be registered at every customs port (airport or seaport) where export cargo is handled.',
    whoNeeds: 'All exporters shipping physical goods overseas through seaports, air cargo complexes, or ICDs.',
    whyRequired: 'Customs ICEGATE will not generate the mandatory Shipping Bill without a registered AD Code; essential for crediting export subsidies and duty drawback.',
    basicProcess: [
      'Request formal AD Code Letter on bank letterhead from your branch in the prescribed format',
      'Login to Indian Customs ICEGATE portal',
      'Submit AD Code and Bank IFSC for registration at the specific port code (e.g., INMAA1 for Chennai Port)',
      'Verification and approval by the Customs Officer'
    ],
    assistanceSteps: [
      'Providing the standard bank letter format acceptable to customs',
      'Submitting AD code registration application on ICEGATE portal using Class 3 DSC',
      'Liaison with jurisdictional Customs EDI helpdesk until port approval'
    ],
    documents: [
      'Official AD Code Letter issued by Authorized Dealer Bank on its letterhead',
      'IEC Certificate copy',
      'PAN Card of business entity',
      'Class 3 Digital Signature Certificate of authorized signatory'
    ],
    authority: 'Central Board of Indirect Taxes and Customs (CBIC) / ICEGATE',
    officialPortal: 'https://www.icegate.gov.in',
    portalName: 'ICEGATE Customs Portal',
    faq: [
      {
        question: 'Do I need to register the AD Code separately for every port?',
        answer: 'Yes, if you export goods from multiple customs ports (e.g., Chennai Sea Port, Chennai Air Cargo, Tuticorin), the AD Code must be registered for each respective port code.'
      }
    ],
    keywords: ['ad code', 'icegate', 'customs port', 'shipping bill', 'duty drawback', 'chennai port']
  },
  {
    id: 'legal-metrology',
    name: 'Legal Metrology Registration',
    category: 'licences',
    categoryName: 'Licenses & Certifications',
    shortDescription: 'Packaged commodities registration (LMPC) and verification of weights, measures, and retail declarations.',
    overview: 'Governed by the Legal Metrology Act, 2009 and Packaged Commodities Rules, 2011, this registration is mandatory for any manufacturer, packer, or importer of pre-packaged commodities sold in retail markets.',
    whoNeeds: 'Importers of packaged goods, FMCG brands, e-commerce direct-to-consumer brands, and packaging units.',
    whyRequired: 'Prevents customs confiscation of imported cargo and protects businesses from heavy seizure penalties under Legal Metrology.',
    basicProcess: [
      'Review of package labeling declarations (MRP, Net Quantity, Best Before, Consumer Care)',
      'Filing application with the Director / Controller of Legal Metrology',
      'Issuance of Registration Certificate under Rule 27 of Packaged Commodities Rules'
    ],
    assistanceSteps: [
      'Compliance audit of product artwork and retail label declarations',
      'Filing Rule 27 application with state or central legal metrology department',
      'Procurement of LMPC Certificate for smooth customs clearance'
    ],
    documents: [
      'Sample product packaging label / artwork showing mandatory declarations',
      'Import Export Code (IEC) (for importers)',
      'GST & Business Registration Certificate',
      'PAN and Aadhaar of Directors / Partners / Proprietor'
    ],
    authority: 'Department of Consumer Affairs, Legal Metrology Wing',
    officialPortal: 'https://consumeraffairs.nic.in',
    portalName: 'Department of Consumer Affairs',
    faq: [
      {
        question: 'When must an importer obtain the Legal Metrology Packaged Commodities (LMPC) certificate?',
        answer: 'The LMPC certificate must be obtained prior to the arrival of the import consignment at Indian customs ports.'
      }
    ],
    keywords: ['legal metrology', 'lmpc', 'packaged commodities', 'mrp declaration', 'customs import clearance']
  },
  {
    id: 'spice-board',
    name: 'Spice Board Registration (CRES)',
    category: 'licences',
    categoryName: 'Licenses & Certifications',
    shortDescription: 'Certificate of Registration as Exporter of Spices (CRES) for trading cardamom, pepper, and Indian spices.',
    overview: 'Under the Spices Board Act, 1986, any individual or entity exporting spices or spice products from India must register with the Spices Board and obtain the Certificate of Registration as Exporter of Spices (CRES).',
    whoNeeds: 'Exporters, merchant traders, and spice processors exporting turmeric, chili, cardamom, cumin, curry powder, and blends.',
    whyRequired: 'Mandatory export clearance requirement; customs will not allow export of Indian spices without a valid CRES certificate.',
    basicProcess: [
      'Online application on the official Spices Board portal',
      'Uploading business credentials, FSSAI, and bank guarantees',
      'Scrutiny by Spices Board officials and issuance of CRES certificate (valid for 3 years)'
    ],
    assistanceSteps: [
      'Ensuring alignment with quality lab testing benchmarks',
      'Filing CRES application on indianspices.com',
      'Follow-up until registration approval'
    ],
    documents: [
      'Import Export Code (IEC)',
      'FSSAI Central / State License for spice dealing',
      'Bank Confidential Report or Solvency Certificate',
      'PAN & GST Certificates'
    ],
    authority: 'Spices Board of India, Ministry of Commerce and Industry',
    officialPortal: 'https://www.indianspices.com',
    portalName: 'Spices Board of India',
    faq: [
      {
        question: 'What is the validity of a Spices Board CRES certificate?',
        answer: 'The CRES certificate is generally valid for a block period of 3 to 5 financial years.'
      }
    ],
    keywords: ['spices board', 'cres', 'spice export', 'turmeric', 'cardamom', 'indianspices']
  },
  {
    id: 'legal-heir',
    name: 'Legal Heir Certificate Assistance',
    category: 'licences',
    categoryName: 'Licenses & Certifications',
    shortDescription: 'Documentation assistance for claiming deceased assets, bank accounts, pensions, and property transfer.',
    overview: 'Facilitation of Legal Heir Certificates (Varisu Certificate) through the jurisdictional Tahsildar / Revenue Department (via TNREGINET / e-Sevai in Tamil Nadu) to establish surviving family relationships of a deceased person.',
    whoNeeds: 'Surviving spouse, children, or parents seeking to transfer bank deposits, PF, family pensions, or immovable property.',
    whyRequired: 'Essential legal document required by banks, insurance companies, employers, and revenue registries to release assets.',
    basicProcess: [
      'Death Certificate procurement from Corporation / Municipality',
      'Drafting Affidavits and collecting family tree records',
      'Application submission through e-Sevai / Revenue Inspector inquiry',
      'Inquiry by Village Administrative Officer (VAO) and issuance by Tahsildar'
    ],
    assistanceSteps: [
      'Compiling complete legal heir documentation and family lineage evidence',
      'Drafting self-declarations and non-judicial stamp affidavits',
      'Guiding application submission and tracking revenue inquiries',
      'Advisory on Succession Certificate via High Court if disputed'
    ],
    documents: [
      'Death Certificate of the deceased in original / digital copy',
      'Aadhaar Card / ID Proof of the deceased',
      'Aadhaar and PAN cards of all surviving legal heirs',
      'Proof of relationship (Birth Certificate, Marriage Certificate, Ration Card / Smart Card)',
      'Self-declaration Affidavit on stamp paper'
    ],
    authority: 'Revenue Department / Tahsildar / e-Sevai (Tamil Nadu)',
    officialPortal: 'https://tnesevai.tn.gov.in',
    portalName: 'Tamil Nadu e-Sevai Portal',
    faq: [
      {
        question: 'What is the difference between a Legal Heir Certificate and a Succession Certificate?',
        answer: 'A Legal Heir Certificate is issued by the Tahsildar for basic asset transfers (pension, small bank balances). A Succession Certificate is granted by a Civil Court for high-value securities, stocks, and litigated estates.'
      }
    ],
    keywords: ['legal heir certificate', 'varisu certificate', 'death claim', 'tahsildar', 'tnesevai', 'succession']
  }
];
