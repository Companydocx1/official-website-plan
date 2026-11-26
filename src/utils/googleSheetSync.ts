/**
 * Google Sheet Sync & Storage Utility for Company DOCX
 * Target Google Sheet: https://docs.google.com/spreadsheets/d/1CzCTUTnZR_Y2naAEP8wKYlLUIcXafvao2SWMkAYCpmA/edit?gid=0#gid=0
 */

export const GOOGLE_SHEET_ID = '1CzCTUTnZR_Y2naAEP8wKYlLUIcXafvao2SWMkAYCpmA';
export const GOOGLE_SHEET_URL = `https://docs.google.com/spreadsheets/d/${GOOGLE_SHEET_ID}/edit?gid=0#gid=0`;

const STORAGE_KEY = 'company_docx_enquiries_v1';
const WEBHOOK_STORAGE_KEY = 'company_docx_sheet_webhook_url';

export interface EnquiryRecord {
  id: string; // e.g. CDX-2026-7842
  timestamp: string; // ISO string
  formattedDate: string; // Readable local date/time
  name: string;
  mobile: string;
  email?: string;
  serviceName: string;
  businessType: string;
  city: string;
  message?: string;
  preferredContact: 'WhatsApp' | 'Call' | 'Email';
  syncStatus: 'synced' | 'pending' | 'saved_locally';
  syncedAt?: string;
}

/**
 * Generate a unique reference ID for each enquiry
 */
export function generateReferenceId(): string {
  const year = new Date().getFullYear();
  const random = Math.floor(1000 + Math.random() * 9000);
  return `CDX-${year}-${random}`;
}

/**
 * Retrieve all enquiries stored in localStorage
 */
export function getSavedEnquiries(): EnquiryRecord[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    return JSON.parse(raw);
  } catch (err) {
    console.error('Failed to load enquiries from localStorage', err);
    return [];
  }
}

/**
 * Save a new enquiry into local storage and attempt background Google Sheet sync
 */
export async function recordNewEnquiry(data: {
  name: string;
  mobile: string;
  email?: string;
  serviceName: string;
  businessType: string;
  city: string;
  message?: string;
  preferredContact: 'WhatsApp' | 'Call' | 'Email';
}): Promise<EnquiryRecord> {
  const now = new Date();
  const formattedDate = now.toLocaleString('en-IN', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  });

  const newRecord: EnquiryRecord = {
    id: generateReferenceId(),
    timestamp: now.toISOString(),
    formattedDate,
    name: data.name.trim(),
    mobile: data.mobile.trim(),
    email: data.email?.trim() || 'Not Provided',
    serviceName: data.serviceName,
    businessType: data.businessType,
    city: data.city.trim() || 'Chennai',
    message: data.message?.trim() || 'General enquiry',
    preferredContact: data.preferredContact,
    syncStatus: 'saved_locally',
  };

  // Save to LocalStorage
  const existing = getSavedEnquiries();
  const updated = [newRecord, ...existing];
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  } catch (e) {
    console.error('Failed to save enquiry to localStorage', e);
  }

  // Attempt Webhook sync if configured
  const webhookUrl = getCustomWebhookUrl();
  if (webhookUrl) {
    try {
      // Send as POST request with payload
      await fetch(webhookUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          referenceId: newRecord.id,
          timestamp: newRecord.formattedDate,
          sheetId: GOOGLE_SHEET_ID,
          name: newRecord.name,
          mobile: newRecord.mobile,
          email: newRecord.email,
          service: newRecord.serviceName,
          businessType: newRecord.businessType,
          city: newRecord.city,
          message: newRecord.message,
          preferredContact: newRecord.preferredContact,
        }),
      });

      // Mark as synced
      newRecord.syncStatus = 'synced';
      newRecord.syncedAt = new Date().toISOString();
      updateEnquiryStatus(newRecord.id, 'synced');
    } catch (err) {
      console.warn('Webhook transmission encountered network boundary, saved locally:', err);
    }
  }

  return newRecord;
}

/**
 * Update enquiry sync status in storage
 */
export function updateEnquiryStatus(id: string, status: 'synced' | 'pending' | 'saved_locally') {
  const list = getSavedEnquiries();
  const item = list.find((e) => e.id === id);
  if (item) {
    item.syncStatus = status;
    item.syncedAt = new Date().toISOString();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
  }
}

/**
 * Delete a specific enquiry from history
 */
export function deleteEnquiry(id: string): EnquiryRecord[] {
  const list = getSavedEnquiries().filter((item) => item.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
  return list;
}

/**
 * Custom Webhook URL helpers (e.g. Google Apps Script Web App)
 */
export function getCustomWebhookUrl(): string {
  return localStorage.getItem(WEBHOOK_STORAGE_KEY) || '';
}

export function saveCustomWebhookUrl(url: string): void {
  localStorage.setItem(WEBHOOK_STORAGE_KEY, url.trim());
}

/**
 * Format all records into CSV format for immediate 1-click import into Google Sheets
 */
export function exportEnquiriesToCSV(): void {
  const enquiries = getSavedEnquiries();
  if (enquiries.length === 0) {
    alert('No enquiries recorded yet.');
    return;
  }

  const headers = [
    'Reference ID',
    'Timestamp',
    'Client Name',
    'Mobile Number',
    'Email Address',
    'Service Requested',
    'Business Type',
    'City',
    'Preferred Contact',
    'Message / Requirements',
    'Status',
  ];

  const rows = enquiries.map((item) => [
    `"${item.id}"`,
    `"${item.formattedDate}"`,
    `"${item.name.replace(/"/g, '""')}"`,
    `"${item.mobile}"`,
    `"${item.email || ''}"`,
    `"${item.serviceName.replace(/"/g, '""')}"`,
    `"${item.businessType.replace(/"/g, '""')}"`,
    `"${item.city.replace(/"/g, '""')}"`,
    `"${item.preferredContact}"`,
    `"${(item.message || '').replace(/"/g, '""').replace(/\n/g, ' ')}"`,
    `"${item.syncStatus}"`,
  ]);

  const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map((e) => e.join(','))].join('\n');
  const encodedUri = encodeURI(csvContent);
  const link = document.createElement('a');
  link.setAttribute('href', encodedUri);
  link.setAttribute('download', `Company_DOCX_Google_Sheet_Enquiries_${new Date().toISOString().slice(0, 10)}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

/**
 * Copy tab-delimited data for instant copy-pasting directly into row in Google Sheets
 */
export function copyRowForGoogleSheets(record: EnquiryRecord): boolean {
  const rowData = [
    record.id,
    record.formattedDate,
    record.name,
    record.mobile,
    record.email || '',
    record.serviceName,
    record.businessType,
    record.city,
    record.preferredContact,
    record.message?.replace(/\n/g, ' ') || '',
  ].join('\t');

  try {
    navigator.clipboard.writeText(rowData);
    return true;
  } catch (e) {
    return false;
  }
}

/**
 * Ready-to-paste Google Apps Script code preconfigured with the user's Sheet ID
 */
export const READY_GOOGLE_APPS_SCRIPT = `/**
 * Company DOCX - Google Apps Script Web App
 * Target Google Sheet: https://docs.google.com/spreadsheets/d/${GOOGLE_SHEET_ID}/edit
 * 
 * Instructions:
 * 1. In your Google Sheet, click 'Extensions' > 'Apps Script'
 * 2. Replace everything with this code and click Save (Floppy disk icon)
 * 3. Click 'Deploy' > 'New deployment'
 * 4. Select type: 'Web app'
 *    - Description: Company DOCX Enquiry Webhook
 *    - Execute as: 'Me' (your account)
 *    - Who has access: 'Anyone'
 * 5. Click 'Deploy' and copy the 'Web app URL' into your Company DOCX website
 */

function doPost(e) {
  try {
    var sheet = SpreadsheetApp.openById("${GOOGLE_SHEET_ID}").getActiveSheet();
    
    // Add header row if sheet is empty
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        "Reference ID",
        "Timestamp",
        "Client Name",
        "Mobile Number",
        "Email",
        "Service Requested",
        "Business Type",
        "City",
        "Preferred Channel",
        "Message"
      ]);
      // Style header
      sheet.getRange(1, 1, 1, 10).setFontWeight("bold").setBackground("#061B36").setFontColor("#FFFFFF");
    }
    
    var data = JSON.parse(e.postData.contents);
    
    sheet.appendRow([
      data.referenceId || "CDX-" + new Date().getTime(),
      data.timestamp || new Date().toLocaleString(),
      data.name || "",
      "'" + (data.mobile || ""),
      data.email || "",
      data.service || "",
      data.businessType || "",
      data.city || "",
      data.preferredContact || "",
      data.message || ""
    ]);
    
    return ContentService.createTextOutput(JSON.stringify({ status: "success", result: "Row appended" }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ status: "error", message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService.createTextOutput("Company DOCX Google Sheet Webhook is active.");
}
`;
