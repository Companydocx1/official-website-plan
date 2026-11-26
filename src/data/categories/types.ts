export interface ServiceItem {
  id: string;
  name: string;
  category: string;
  categoryName: string;
  shortDescription: string;
  overview: string;
  whoNeeds: string;
  whyRequired: string;
  basicProcess: string[];
  assistanceSteps: string[];
  documents: string[];
  authority: string;
  officialPortal: string;
  portalName: string;
  faq: { question: string; answer: string }[];
  keywords: string[];
}

export interface ServiceCategory {
  id: string;
  number: string;
  name: string;
  description: string;
  iconName: string;
}
