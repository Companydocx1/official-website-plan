/**
 * Utility functions for generating WhatsApp links and messages for Company DOCX.
 * Official WhatsApp Number: +91 8870002141
 */

export const COMPANY_PHONE = '+91 8870002141';
export const COMPANY_PHONE_RAW = '918870002141';
export const COMPANY_EMAIL = 'admin@companydocx.com';
export const COMPANY_ADDRESS = 'Flat No. 137(68), Fathima Paradise, Prakasam Road, Broadway, Chennai – 600 001';
export const GOOGLE_MAPS_LINK = 'https://www.google.com/maps/place/Company+Docx/@13.0954941,80.2839254,17z/data=!3m1!4b1!4m6!3m5!1s0x3a526f4ac13c3391:0x53e7bddb0e60cdd3!8m2!3d13.0954889!4d80.2865003!16s%2Fg%2F11ntfj4z9r?entry=ttu&g_ep=EgoyMDI2MDkzMC4wIKXMDSoASAFQAw%3D%3D';

export interface WhatsAppEnquiryData {
  serviceName?: string;
  name?: string;
  mobile?: string;
  email?: string;
  businessType?: string;
  city?: string;
  message?: string;
  preferredContact?: 'WhatsApp' | 'Call' | 'Email';
  intent?: 'general' | 'documents' | 'quote' | 'service';
}

/**
 * Generates an encoded wa.me URL with clean, professional pre-filled text.
 */
export function generateWhatsAppLink(
  serviceName?: string,
  formData?: WhatsAppEnquiryData
): string {
  let messageText = '';

  if (formData && (formData.name || formData.message || formData.businessType)) {
    // Detailed Enquiry Form Template
    const lines = [
      'Hello Company DOCX,',
      '',
      'New Service Enquiry',
      `Service: ${serviceName || formData.serviceName || 'General Enquiry'}`,
      formData.name ? `Name: ${formData.name.trim()}` : null,
      formData.mobile ? `Mobile: ${formData.mobile.trim()}` : null,
      formData.email ? `Email: ${formData.email.trim()}` : null,
      formData.businessType ? `Business Type: ${formData.businessType.trim()}` : null,
      formData.city ? `City: ${formData.city.trim()}` : null,
      formData.preferredContact ? `Preferred Contact: ${formData.preferredContact}` : null,
      '',
      formData.message ? `Message:\n${formData.message.trim()}\n` : null,
      'Please share:',
      '- Required documents',
      '- Professional fees',
      '- Government fees',
      '- Process',
      '- Expected timeline',
      '',
      'Thank you.'
    ].filter((line): line is string => line !== null);

    messageText = lines.join('\n');
  } else if (serviceName) {
    // Quick Service-Specific Template
    messageText = [
      'Hello Company DOCX,',
      '',
      'I am interested in:',
      serviceName,
      '',
      'I would like to know:',
      '1. Required documents',
      '2. Professional fees',
      '3. Government fees',
      '4. Process',
      '5. Expected timeline',
      '',
      'Thank you.'
    ].join('\n');
  } else {
    // General Greeting Template
    messageText = 'Hello Company DOCX, I would like to know more about your services.';
  }

  const encodedMessage = encodeURIComponent(messageText);
  return `https://wa.me/${COMPANY_PHONE_RAW}?text=${encodedMessage}`;
}

/**
 * Opens WhatsApp link in a new window/tab safely across platforms.
 */
export function openWhatsApp(serviceName?: string, formData?: WhatsAppEnquiryData): void {
  const url = generateWhatsAppLink(serviceName, formData);
  window.open(url, '_blank', 'noopener,noreferrer');
}
