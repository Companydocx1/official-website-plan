import { ServiceItem } from './types';

export const LICENCES_NOC_SERVICES: ServiceItem[] = [
  {
    id: 'fire-noc',
    name: 'Fire NOC / Fire Safety Compliance',
    category: 'licences-noc',
    categoryName: 'Government Licences & NOCs',
    shortDescription: 'State Fire Department inspection, safety audit, and Fire NOC procurement for commercial premises.',
    overview: 'Statutory Fire Safety Certificate and No Objection Certificate (NOC) granted by the Directorate of Fire and Rescue Services (Tamil Nadu Fire Services) verifying fire alarms, hydrants, smoke dampers, and safe egress corridors in commercial and industrial buildings.',
    whoNeeds: 'Commercial office complexes, hospitals, hotels, educational institutions, factories, warehouses, and assembly buildings.',
    whyRequired: 'Mandatory prerequisite for obtaining a Trade License, Factory License, school recognition, and CMDA/Corporation completion certificates.',
    basicProcess: [
      'Site safety audit and verification of building drawings with fire safety equipment layout',
      'Installation verification of hydrants, fire extinguishers, and emergency exits',
      'Application submission on Tamil Nadu Fire and Rescue Services online portal',
      'Joint physical inspection by District Fire Officer and grant of Fire NOC'
    ],
    assistanceSteps: [
      'Preliminary architectural plan review against National Building Code (NBC) Part IV',
      'Coordination with approved fire engineering and equipment vendors',
      'Online filing on the official Fire Services portal and scheduling departmental inspection',
      'Annual Fire NOC renewal and safety certificate compliance management'
    ],
    documents: [
      'Approved Building Architectural Plan showing fire escapes and staircase widths',
      'Building Completion Certificate / Property Tax Receipt',
      'Fire fighting equipment installation report and vendor calibration certificates',
      'Photographs of installed fire alarms, hose reels, and water storage sump'
    ],
    authority: 'Directorate of Fire and Rescue Services, Government of Tamil Nadu',
    officialPortal: 'https://tnfrs.tn.gov.in',
    portalName: 'Tamil Nadu Fire & Rescue Services Portal',
    faq: [
      {
        question: 'What is the validity period of a Fire NOC in Tamil Nadu?',
        answer: 'A Fire Safety License/NOC is typically valid for 1 year or 3 years (depending on occupancy classification) and requires annual inspection renewal.'
      },
      {
        question: 'Is a Fire NOC compulsory for small retail shops?',
        answer: 'Small shops under specified square footage generally need fire extinguishers; however, multi-storey commercial buildings and public gathering spaces strictly require formal Fire NOC.'
      }
    ],
    keywords: ['fire noc', 'fire safety certificate', 'tamil nadu fire service', 'fire extinguisher', 'nbc part iv', 'dfrs']
  },
  {
    id: 'structural-stability-certificate',
    name: 'Structural Stability Certificate',
    category: 'licences-noc',
    categoryName: 'Government Licences & NOCs',
    shortDescription: 'Statutory structural engineer inspection and certification (Form 1A / Form 42) for building safety.',
    overview: 'Mandatory certificate issued by a Government-Panel Chartered Structural Engineer certifying that a building is structurally sound, capable of bearing industrial loads, earthquakes, and safe for commercial/factory occupation under Public Building Acts and Factories Act.',
    whoNeeds: 'Factories, schools, hospitals, commercial complexes, banks, and industrial facilities in Chennai and across Tamil Nadu.',
    whyRequired: 'Compulsory statutory attachment for Factory License grant, School Recognition, Corporation Trade License, and institutional lease agreements.',
    basicProcess: [
      'On-site structural audit and testing of foundation, columns, beams, and slabs',
      'Review of structural design drawings and live load calculations',
      'Preparation of technical inspection report with Form 1A / Form 42',
      'Attestation by authorized Panel Structural Engineer (Class 1-A Engineer)'
    ],
    assistanceSteps: [
      'Direct engagement with certified Panel Structural Engineers on our approved roster',
      'Site visit scheduling and load test verification',
      'Issuance of legally valid, stamp-executed Structural Stability Certificate',
      'Filing with the Inspector of Factories / Education Department / Municipal Corporation'
    ],
    documents: [
      'Approved building floor plans and elevation drawings',
      'Soil test report and foundation structural details (if available)',
      'Property ownership deed or long-term lease agreement',
      'Prior stability certificate copies (for periodic 3-year renewals)'
    ],
    authority: 'Panel of Chartered Engineers / PWD / Inspectorate of Factories, Tamil Nadu',
    officialPortal: 'https://tnreginet.gov.in',
    portalName: 'Tamil Nadu Public Building / Factory Framework',
    faq: [
      {
        question: 'How often must a Structural Stability Certificate be renewed?',
        answer: 'Under the Tamil Nadu Public Buildings (Licensing) Act and Factories Rules, stability certificates are normally valid for 3 years, after which a re-inspection renewal is required.'
      }
    ],
    keywords: ['structural stability certificate', 'chartered engineer', 'form 1a', 'form 42', 'factory stability', 'chennai building safety']
  },
  {
    id: 'factory-licence',
    name: 'Factory Licence',
    category: 'licences-noc',
    categoryName: 'Government Licences & NOCs',
    shortDescription: 'Plan approval and operating license under the Factories Act, 1948 from Directorate of Industrial Safety.',
    overview: 'Statutory operating permit for manufacturing units employing 10 or more workers (with power) or 20 or more workers (without power) granted by the Directorate of Industrial Safety and Health (DISH).',
    whoNeeds: 'Manufacturing plants, food processing units, garment factories, engineering workshops, and fabrication facilities.',
    whyRequired: 'Operating an industrial factory without a license is a criminal violation under Section 92 of the Factories Act.',
    basicProcess: [
      'Submission and approval of Factory Building Plan (Form 1)',
      'Procurement of Structural Stability Certificate and Fire Safety approval',
      'Filing Form 2 for Factory License grant on DISH portal',
      'Physical inspection by Inspector of Factories and license issuance'
    ],
    assistanceSteps: [
      'Machine horse-power (HP) and manpower sizing calculations',
      'Coordination for factory plan drafting and structural engineer certification',
      'Online filing on Tamil Nadu Single Window Portal / DISH portal',
      'Annual renewal and Form 22 annual return filing compliance'
    ],
    documents: [
      'Factory Building Layout Plan with machinery positioning',
      'Structural Stability Certificate by Panel Engineer',
      'TNPCB Consent to Operate (CTO) or exemption order',
      'Electricity sanction letter showing connected industrial power load'
    ],
    authority: 'Directorate of Industrial Safety and Health (DISH), Government of Tamil Nadu',
    officialPortal: 'https://dish.tn.gov.in',
    portalName: 'Tamil Nadu DISH Portal',
    faq: [
      {
        question: 'What is the difference between Plan Approval and Factory License?',
        answer: 'Plan Approval is required prior to setting up machinery inside the premises. The Factory License is issued after site verification of safety installations and ventilation.'
      }
    ],
    keywords: ['factory licence', 'dish tamil nadu', 'factories act', 'form 1 plan approval', 'industrial safety']
  },
  {
    id: 'pcb-approvals',
    name: 'Pollution Control Board Approvals (CTE / CTO)',
    category: 'licences-noc',
    categoryName: 'Government Licences & NOCs',
    shortDescription: 'Consent to Establish (CTE) and Consent to Operate (CTO) under Water and Air Pollution Acts.',
    overview: 'Environmental clearance granted by the Tamil Nadu Pollution Control Board (TNPCB) categorizing industries into Red, Orange, Green, and White classifications based on pollution index.',
    whoNeeds: 'Manufacturing units, chemical handlers, electroplating, food processing, hospitals (Bio-medical), and recycling plants.',
    whyRequired: 'Operating without TNPCB Consent leads to disconnection of industrial electricity and closure notices under Section 33A of Water Act.',
    basicProcess: [
      'Industry categorization into White/Green/Orange/Red category on OCMMS',
      'Filing Consent to Establish (CTE) prior to civil construction/machinery purchase',
      'Installation of Effluent Treatment Plant (ETP) / Sewage Treatment Plant (STP) / Air pollution control devices',
      'Filing Consent to Operate (CTO) followed by departmental inspection'
    ],
    assistanceSteps: [
      'Categorization review to determine environmental compliance tier',
      'Preparation of Environmental Management Plan, water balance chart, and emission points',
      'Application filing on the TNPCB OCMMS portal',
      'Coordination with environmental engineers for periodic water/stack testing'
    ],
    documents: [
      'Site plan showing surrounding residential distance and water bodies',
      'Manufacturing process flow chart with raw material quantities',
      'Water balance statement and ETP/STP design proposals',
      'Land ownership deed or lease agreement'
    ],
    authority: 'Tamil Nadu Pollution Control Board (TNPCB) / Central CPCB',
    officialPortal: 'https://tnpcb.gov.in',
    portalName: 'TNPCB OCMMS Portal',
    faq: [
      {
        question: 'Are "White" category industries required to obtain CTE and CTO?',
        answer: 'White category industries (non-polluting) are exempt from regular CTE/CTO and only require a simple online self-declaration intimation.'
      }
    ],
    keywords: ['tnpcb consent', 'consent to establish', 'consent to operate', 'cte cto', 'ocmms', 'pollution control']
  },
  {
    id: 'trade-licence',
    name: 'Trade Licence (Municipal / Corporation)',
    category: 'licences-noc',
    categoryName: 'Government Licences & NOCs',
    shortDescription: 'Local body permit to carry on commercial activities within Greater Chennai Corporation limits.',
    overview: 'Municipal operating permit issued under the City Municipal Corporation Act ensuring commercial activities do not cause public health nuisance, environmental hazards, or traffic obstruction.',
    whoNeeds: 'Retail stores, commercial offices, bakeries, cafes, supermarkets, salons, and repair workshops.',
    whyRequired: 'Operating without a valid trade license can result in premises sealing and compounding municipal fines.',
    basicProcess: [
      'Verification of commercial zoning and property tax receipts',
      'Filing application on the Greater Chennai Corporation portal',
      'Payment of prescribed trade schedule fee',
      'Verification by Sanitary Inspector and certificate generation'
    ],
    assistanceSteps: [
      'Identifying appropriate trade category under corporation bylaws',
      'Compiling required property tax and lease documents',
      'Online filing and liaison with municipal revenue department'
    ],
    documents: [
      'Property Tax receipt of commercial building for current year',
      'Rental Agreement with Owner NOC',
      'Business Registration proof (GST / Udyam / Certificate of Incorporation)'
    ],
    authority: 'Greater Chennai Corporation / Local Municipalities in Tamil Nadu',
    officialPortal: 'https://chennaicorporation.gov.in',
    portalName: 'Greater Chennai Corporation Portal',
    faq: [
      {
        question: 'When should a Chennai Trade License be renewed?',
        answer: 'Trade licenses are valid for one financial year and must be renewed annually before April 30.'
      }
    ],
    keywords: ['trade licence', 'chennai corporation', 'municipal permit', 'commercial license', 'sanitary inspector']
  },
  {
    id: 'health-sanitary-licence',
    name: 'Health / Sanitary Licence',
    category: 'licences-noc',
    categoryName: 'Government Licences & NOCs',
    shortDescription: 'Public health clearance from local health officer for food, lodging, and hospitality establishments.',
    overview: 'Statutory health license granted by the municipal health department certifying that the premises maintain hygienic sanitation, adequate ventilation, clean drinking water, and safe waste disposal.',
    whoNeeds: 'Hotels, hostels, restaurants, bakeries, sweet stalls, salons, clinics, and packaging facilities.',
    whyRequired: 'Compulsory municipal requirement to operate food, lodging, or personal care services.',
    basicProcess: [
      'Premise inspection by Sanitary Inspector / Health Officer',
      'Testing drinking water potability and waste disposal arrangements',
      'Filing application and fee payment on local body portal'
    ],
    assistanceSteps: [
      'Pre-inspection hygiene and sanitation checklist review',
      'Arranging NABL water testing reports',
      'Procurement of Sanitary Certificate from jurisdictional health officer'
    ],
    documents: [
      'Commercial property tax receipt and lease deed',
      'Potable water testing laboratory certificate',
      'Staff medical fitness certificates'
    ],
    authority: 'Public Health Department / Municipal Corporation',
    officialPortal: 'https://chennaicorporation.gov.in',
    portalName: 'Public Health & Municipal Portal',
    faq: [
      {
        question: 'Is a Sanitary Certificate required for food outlets in addition to FSSAI?',
        answer: 'Yes. FSSAI covers food safety standards, while the Municipal Sanitary Certificate confirms premise hygiene, plumbing, and waste disposal.'
      }
    ],
    keywords: ['sanitary licence', 'health licence', 'chennai corporation health', 'sanitary certificate', 'water test']
  },
  {
    id: 'peso-licence',
    name: 'PESO Licence (Explosives & Petroleum Safety)',
    category: 'licences-noc',
    categoryName: 'Government Licences & NOCs',
    shortDescription: 'Safety clearance for petroleum storage, diesel generators, pressure vessels, and compressed gases.',
    overview: 'Statutory approvals under Petroleum Rules and Gas Cylinders Rules granted by the Petroleum and Explosives Safety Organisation (PESO) for bulk diesel storage (Class B/C), CNG/LPG cascades, and chemical storage.',
    whoNeeds: 'IT parks with bulk diesel storage for DG sets, petrol pumps, chemical warehouses, and medical gas pipeline systems.',
    whyRequired: 'Storing bulk petroleum or compressed gases without PESO approval carries severe criminal penalties under the Petroleum Act.',
    basicProcess: [
      'Site plan approval and safety buffer distance verification',
      'Fabrication and pressure vessel testing by PESO-approved competent person',
      'Filing application on PESO online portal with safety audit',
      'Grant of PESO Storage License'
    ],
    assistanceSteps: [
      'Storage capacity assessment and safety buffer layout checks',
      'Preparation of technical drawings compliant with PESO standards',
      'Liaison with PESO Joint Chief Controller of Explosives office'
    ],
    documents: [
      'Detailed site layout showing distance from public roads and buildings',
      'Fabrication drawings and calibration certificate of storage tanks',
      'Local District Magistrate / Police NOC'
    ],
    authority: 'Petroleum and Explosives Safety Organisation (PESO), Ministry of Commerce',
    officialPortal: 'https://peso.gov.in',
    portalName: 'PESO Official Portal',
    faq: [
      {
        question: 'What is the diesel storage limit that requires a PESO license for DG sets?',
        answer: 'Storage of diesel (Class B petroleum) exceeding 2,500 liters in total requires a formal PESO storage license and District Magistrate NOC.'
      }
    ],
    keywords: ['peso licence', 'petroleum safety', 'diesel storage', 'dg set fuel', 'pressure vessel', 'explosives licence']
  }
];
