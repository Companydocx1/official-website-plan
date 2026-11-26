import { ServiceItem } from './types';

export const TECH_DIGITAL_AI_SERVICES: ServiceItem[] = [
  {
    id: 'custom-web-development',
    name: 'Website Development & Design',
    category: 'tech-digital-ai',
    categoryName: 'Digital, AI & Technology Solutions',
    shortDescription: 'High-performance corporate web portals, responsive UI/UX, Next.js/React applications, and cloud hosting.',
    overview: 'Full-stack web architecture creating fast, secure, search-engine-optimized, and brand-distinctive digital websites tailored for corporate firms, consultancies, e-commerce, and high-growth enterprises.',
    whoNeeds: 'Businesses needing a modern corporate web presence, high-converting landing pages, or bespoke web portals.',
    whyRequired: 'Your website is your primary digital headquarters; an outdated or slow site repels high-value clients and corporate buyers.',
    basicProcess: [
      'UI/UX wireframing and brand visual direction alignment',
      'Full-stack frontend and backend engineering with modern frameworks',
      'Mobile responsiveness, Core Web Vitals optimization, and security SSL setup',
      'Deployment on high-speed cloud infrastructure with continuous uptime'
    ],
    assistanceSteps: [
      'Bespoke architectural design avoiding generic templates',
      'End-to-end integration of WhatsApp enquiry engines and CRM leads',
      'Corporate email setup and domain configuration'
    ],
    documents: [
      'Brand logo files and corporate color preferences',
      'Service/product catalogue text and firm profile details'
    ],
    authority: 'Company DOCX Technology Division',
    officialPortal: 'https://www.companydocx.com',
    portalName: 'Company DOCX Tech Practice',
    faq: [
      {
        question: 'Are websites mobile-responsive and SEO-friendly?',
        answer: 'Yes, every web project is engineered mobile-first with clean semantic HTML, schema structured data, and rapid loading times.'
      }
    ],
    keywords: ['website development', 'web design', 'react', 'nextjs', 'corporate website', 'responsive web']
  },
  {
    id: 'ecommerce-web-solutions',
    name: 'E-Commerce Website Development',
    category: 'tech-digital-ai',
    categoryName: 'Digital, AI & Technology Solutions',
    shortDescription: 'Turnkey online stores with Indian payment gateway integration (UPI, Razorpay, Cashfree), and inventory sync.',
    overview: 'Scalable e-commerce web applications featuring automated product catalogues, cart checkout, GST tax invoice generation, shipping logistics integration (Shiprocket/Delhivery), and customer account portals.',
    whoNeeds: 'D2C brands, manufacturers selling direct, retail stores expanding online, and export houses.',
    whyRequired: 'Captures direct-to-consumer sales with zero marketplace commission fees and full customer data ownership.',
    basicProcess: [
      'Store architecture and product category structuring',
      'Payment gateway onboarding (Razorpay / Cashfree / Stripe)',
      'Automated GST invoice generation and shipping API linkage',
      'Store launch and staff training on inventory management'
    ],
    assistanceSteps: [
      'Setting up automated GST billing and invoice compliance',
      'Secure payment gateway API integration with UPI QR code checkout',
      'Automated WhatsApp order confirmation alerts setup'
    ],
    documents: [
      'Product images, pricing, and HSN/GST tax rates',
      'Bank current account details and merchant KYC for payment gateways'
    ],
    authority: 'E-Commerce & Digital Architecture',
    officialPortal: 'https://www.companydocx.com',
    portalName: 'Company DOCX E-Commerce Division',
    faq: [
      {
        question: 'Can the e-commerce store automatically calculate GST on orders?',
        answer: 'Yes, our systems automatically calculate CGST, SGST, or IGST based on customer delivery pin code and generate compliant tax invoices.'
      }
    ],
    keywords: ['ecommerce website', 'online store', 'razorpay integration', 'upi payments', 'd2c store', 'shiprocket']
  },
  {
    id: 'mobile-app-development',
    name: 'Mobile App Development (iOS & Android)',
    category: 'tech-digital-ai',
    categoryName: 'Digital, AI & Technology Solutions',
    shortDescription: 'Native and cross-platform mobile apps (React Native / Flutter) published on Google Play & App Store.',
    overview: 'Custom mobile application engineering delivering fluid touch performance, offline data synchronization, push notifications, biometric logins, and seamless backend API connectivity.',
    whoNeeds: 'Enterprises needing customer mobile apps, field staff tracking tools, or delivery fleet operations.',
    whyRequired: 'Engages users directly on their smartphones, increasing retention and transaction frequency.',
    basicProcess: [
      'User journey mapping and clickable Figma prototyping',
      'Cross-platform development in Flutter or React Native',
      'Integration of cloud databases, push notifications, and payment SDKs',
      'App Store and Google Play Store submission and approval'
    ],
    assistanceSteps: [
      'App Store & Play Store compliance guidance',
      'Backend API engineering and secure database design',
      'Post-launch maintenance and version updates'
    ],
    documents: [
      'Functional feature requirements or concept brief',
      'Developer account access (Apple Developer / Google Play Console)'
    ],
    authority: 'Mobile App Architecture Practice',
    officialPortal: 'https://www.companydocx.com',
    portalName: 'Company DOCX Mobile Solutions',
    faq: [
      {
        question: 'Will one codebase work on both iPhones and Android phones?',
        answer: 'Yes, utilizing React Native or Flutter allows a single robust codebase to compile into native apps for both iOS and Android.'
      }
    ],
    keywords: ['mobile app development', 'ios app', 'android app', 'flutter', 'react native', 'play store']
  },
  {
    id: 'custom-software-api',
    name: 'Custom Business Software & API Integration',
    category: 'tech-digital-ai',
    categoryName: 'Digital, AI & Technology Solutions',
    shortDescription: 'Bespoke ERP modules, CRM systems, billing software, and custom API pipelines.',
    overview: 'Tailor-made software applications engineered around your exact internal operations, replacing clumsy spreadsheets with centralized role-based web databases and automated workflows.',
    whoNeeds: 'Manufacturers, logistics firms, professional firms, and growing businesses with non-standard operational workflows.',
    whyRequired: 'Off-the-shelf software often forces businesses into rigid constraints; custom software adapts precisely to your competitive moat.',
    basicProcess: [
      'Operational workflow mapping and data schema design',
      'Database architecture and role-based access control (RBAC)',
      'Third-party API integrations (WhatsApp Business API, Tally, Zoho, SMS, GSTN)',
      'Deployment on secure cloud servers with automated daily backups'
    ],
    assistanceSteps: [
      'Business process re-engineering and technical blueprinting',
      'Clean modular software development with comprehensive documentation',
      'Staff onboarding and ongoing cloud server management'
    ],
    documents: [
      'Current spreadsheets, invoice formats, or operational workflow diagrams'
    ],
    authority: 'Enterprise Software Solutions',
    officialPortal: 'https://www.companydocx.com',
    portalName: 'Company DOCX Software Practice',
    faq: [
      {
        question: 'Can custom software connect directly with WhatsApp and Tally?',
        answer: 'Yes, we integrate official WhatsApp Cloud APIs and Tally/accounting bridges for instant ledger updates and automated alerts.'
      }
    ],
    keywords: ['custom software', 'business erp', 'custom crm', 'api integration', 'whatsapp api', 'tally bridge']
  },
  {
    id: 'ai-solutions-automation',
    name: 'AI Solutions & Business Automation',
    category: 'tech-digital-ai',
    categoryName: 'Digital, AI & Technology Solutions',
    shortDescription: 'Automated invoice OCR, document parsing, workflow agents, and smart predictive operations.',
    overview: 'Deploying practical Artificial Intelligence and Robotic Process Automation (RPA) to automate repetitive clerical tasks, extract data from legal/tax PDF documents, and orchestrate automated business pipelines.',
    whoNeeds: 'Companies drowning in manual paperwork, high-volume invoice processing, or repetitive customer communications.',
    whyRequired: 'Cuts operational overhead by up to 70%, eliminates manual data-entry errors, and accelerates customer response times.',
    basicProcess: [
      'Audit of manual workflow bottlenecks and document pipelines',
      'Deploying specialized AI models for OCR, data extraction, and validation',
      'Connecting automated triggers across email, ERP, and WhatsApp',
      'Continuous accuracy monitoring and human-in-the-loop validation'
    ],
    assistanceSteps: [
      'Identifying high-ROI automation targets in your business',
      'Engineering custom AI workflows without expensive enterprise lock-in',
      'Enterprise data privacy and confidential processing compliance'
    ],
    documents: [
      'Sample documents to be processed (invoices, receipts, contracts, or enquiry logs)'
    ],
    authority: 'Company DOCX AI Solutions Practice',
    officialPortal: 'https://www.companydocx.com',
    portalName: 'Company DOCX AI Practice',
    faq: [
      {
        question: 'Is client confidential data kept secure during AI processing?',
        answer: 'Yes, our solutions utilize private, enterprise-grade cloud endpoints where client data is never used to train public foundation models.'
      }
    ],
    keywords: ['ai solutions', 'business automation', 'rpa', 'document ocr', 'ai workflow', 'automated invoice']
  },
  {
    id: 'ai-chatbot-development',
    name: 'AI Chatbot Development (WhatsApp & Web)',
    category: 'tech-digital-ai',
    categoryName: 'Digital, AI & Technology Solutions',
    shortDescription: '24/7 intelligent conversational agents answering queries, qualifying leads, and booking appointments.',
    overview: 'Intelligent conversational AI bots trained specifically on your company\'s services, pricing guidelines, and document requirements, seamlessly deployed on WhatsApp Business and your website.',
    whoNeeds: 'Real estate firms, healthcare clinics, legal & tax practices, education providers, and service agencies.',
    whyRequired: 'Captures and qualifies inbound customer leads in real-time at midnight or on weekends when staff are offline.',
    basicProcess: [
      'Ingesting company knowledge base, FAQs, and service checklists',
      'Designing conversational dialogue trees and lead qualification logic',
      'Deploying on WhatsApp Business API and web floating chat widgets',
      'Automated hand-off to human consultants when high-intent leads are qualified'
    ],
    assistanceSteps: [
      'Knowledge base curation and anti-hallucination guardrail setup',
      'Meta WhatsApp Business API verification and green tick guidance',
      'Integration with Google Sheets, CRM, and instant staff SMS/email alerts'
    ],
    documents: [
      'Company service brochure, pricing guidelines, and frequently asked customer questions'
    ],
    authority: 'Conversational AI Practice',
    officialPortal: 'https://www.companydocx.com',
    portalName: 'Company DOCX AI Division',
    faq: [
      {
        question: 'Can the chatbot transfer a conversation to a human team member?',
        answer: 'Yes, the bot can seamlessly notify and hand over active conversations to human staff whenever complex or high-priority assistance is requested.'
      }
    ],
    keywords: ['ai chatbot', 'whatsapp bot', 'conversational ai', 'lead qualification', 'whatsapp business api']
  },
  {
    id: 'seo-digital-marketing',
    name: 'Search Engine Optimization (SEO) & Lead Generation',
    category: 'tech-digital-ai',
    categoryName: 'Digital, AI & Technology Solutions',
    shortDescription: 'Top Google rankings, Google Maps local SEO, organic search traffic, and qualified B2B inbound leads.',
    overview: 'Data-driven Search Engine Optimization combining technical web optimization, targeted commercial keyword strategies, Schema markup, and Google Business Profile ranking to dominate local and national search results.',
    whoNeeds: 'Local Chennai businesses, professional practices, manufacturing exporters, and service companies.',
    whyRequired: 'Organic Google search delivers the highest converting, zero-advertising-cost leads in professional industries.',
    basicProcess: [
      'Technical SEO audit and competitor keyword gap analysis',
      'On-page content optimization and Schema.org structured data deployment',
      'Google Business Profile (Map Pack) ranking optimization',
      'High-authority backlink acquisition and monthly ranking analytics'
    ],
    assistanceSteps: [
      'Local citation building for Chennai and Tamil Nadu commercial searches',
      'Optimizing page speed and mobile Core Web Vitals to satisfy Google algorithms',
      'Monthly transparent keyword ranking and lead tracking reports'
    ],
    documents: [
      'Target geographic locations and prioritized service offerings'
    ],
    authority: 'Digital Marketing & Growth Practice',
    officialPortal: 'https://www.companydocx.com',
    portalName: 'Company DOCX Growth Lab',
    faq: [
      {
        question: 'How long does SEO take to produce measurable inbound leads?',
        answer: 'Local Google Maps optimization often yields results within 30 to 60 days, while competitive organic national rankings typically scale over 3 to 6 months.'
      }
    ],
    keywords: ['seo', 'search engine optimization', 'google maps ranking', 'local seo chennai', 'lead generation', 'organic traffic']
  },
  {
    id: 'google-ads-social-marketing',
    name: 'Google Ads & Paid Performance Marketing',
    category: 'tech-digital-ai',
    categoryName: 'Digital, AI & Technology Solutions',
    shortDescription: 'High-intent Google Search Ads, Pay-Per-Click (PPC), Meta Ads (Facebook/Instagram), and LinkedIn B2B campaigns.',
    overview: 'Laser-focused paid advertising targeting decision-makers searching for exact commercial services, with negative keyword filtering, conversion tracking, and high-converting landing pages.',
    whoNeeds: 'Companies launching new services, entering new markets, or needing immediate qualified customer enquiries.',
    whyRequired: 'Generates immediate, measurable inbound phone calls and WhatsApp leads from day one of campaign launch.',
    basicProcess: [
      'Keyword intent research and negative keyword curation (eliminating wasted budget)',
      'Drafting compelling, high-CTR search ad copies and visual creatives',
      'Setting up conversion tracking on Google Tag Manager and GA4',
      'Daily bid optimization to maintain the lowest Cost-Per-Acquisition (CPA)'
    ],
    assistanceSteps: [
      'Targeting high-intent commercial keywords without wasting ad spend',
      'Building dedicated high-converting landing pages with WhatsApp click-to-chat triggers',
      'Weekly ROAS (Return on Ad Spend) reporting and continuous A/B testing'
    ],
    documents: [
      'Monthly advertising budget target and prioritized commercial services'
    ],
    authority: 'Performance Marketing Practice',
    officialPortal: 'https://www.companydocx.com',
    portalName: 'Company DOCX Media Lab',
    faq: [
      {
        question: 'Do you track how many WhatsApp leads come from Google Ads?',
        answer: 'Yes, we configure end-to-end conversion tracking so every WhatsApp click, phone call, and form submission is measured against your ad spend.'
      }
    ],
    keywords: ['google ads', 'ppc', 'performance marketing', 'meta ads', 'linkedin b2b', 'whatsapp lead generation']
  },
  {
    id: 'logo-brand-identity',
    name: 'Logo & Brand Identity Design',
    category: 'tech-digital-ai',
    categoryName: 'Digital, AI & Technology Solutions',
    shortDescription: 'Vector corporate logos, luxury brand marks, typography guidelines, and complete corporate stationery.',
    overview: 'Crafting memorable, legally registrable corporate brand marks, emblems, visual identities, typography palettes, letterheads, visiting cards, and brand guideline books for elite enterprises.',
    whoNeeds: 'New corporate incorporations, firms undergoing rebranding, and consumer brands launching new products.',
    whyRequired: 'A distinguished, professional logo instills instant institutional trust and commands premium market pricing.',
    basicProcess: [
      'Discovery session exploring corporate values, symbology, and industry positioning',
      'Formulating 3 distinct conceptual vector logo directions',
      'Refining chosen concept with exact typography, color palettes, and spacing geometry',
      'Delivery of full vector master files (AI, SVG, EPS, PNG) and brand style guide'
    ],
    assistanceSteps: [
      'Ensuring the brand mark is distinctive and fully registrable under Trademark Act',
      'Providing print-ready stationery templates (Visiting Cards, Letterhead, Envelopes)',
      'Designing social media profile kits and digital favicon assets'
    ],
    documents: [
      'Company legal name, tagline, and industry sector'
    ],
    authority: 'Brand Identity Practice',
    officialPortal: 'https://www.companydocx.com',
    portalName: 'Company DOCX Design Studio',
    faq: [
      {
        question: 'Will the logo design be suitable for trademark registration?',
        answer: 'Yes, our brand designers collaborate directly with our trademark attorneys to ensure logos are original, non-generic, and legally protectable.'
      }
    ],
    keywords: ['logo design', 'brand identity', 'corporate identity', 'brand guidelines', 'stationery design', 'vector emblem']
  }
];
