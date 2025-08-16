import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';

interface ContactFormData {
  email: string;
  firstName: string;
  lastName: string;
  phone?: string;
  serviceType: string;
  timestamp?: string;
}

interface LocalityInterestData {
  email: string;
  locality: string;
}

// The ID of your spreadsheet - from the URL
const SHEET_ID = '1rrHEZ_z3LDdy1kYyuLkCK1Ca7cNCaWpvaUI7vfZIE7o';

// Common function to create authenticated Google Sheets document
async function createAuthenticatedDocument() {
  const GOOGLE_CLIENT_EMAIL = process.env.GOOGLE_CLIENT_EMAIL;
  const GOOGLE_PRIVATE_KEY = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n');
  
  if (!GOOGLE_CLIENT_EMAIL || !GOOGLE_PRIVATE_KEY) {
    throw new Error('Google API credentials not found');
  }

  const jwt = new JWT({
    email: GOOGLE_CLIENT_EMAIL,
    key: GOOGLE_PRIVATE_KEY,
    scopes: [
      'https://www.googleapis.com/auth/spreadsheets',
      'https://www.googleapis.com/auth/drive.file',
    ],
  });

  const doc = new GoogleSpreadsheet(SHEET_ID, jwt);
  await doc.loadInfo();
  return doc;
}

// Common function to format timestamp
function formatTimestamp(): string {
  const now = new Date();
  const day = String(now.getDate()).padStart(2, '0');
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const year = now.getFullYear();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  return `${day}/${month}/${year} ${hours}:${minutes}`;
}

export async function addContactToGoogleSheet(data: ContactFormData) {
  try {
    const doc = await createAuthenticatedDocument();
    const sheet = doc.sheetsByIndex[0]; // Use the first sheet for contacts
    
    const timestamp = formatTimestamp();
    const formattedServiceType = data.serviceType.charAt(0).toUpperCase() + data.serviceType.slice(1);
    
    await sheet.addRow({
      Name: data.firstName,
      LastName: data.lastName,
      Email: data.email,
      Phone: data.phone || '',
      Service: formattedServiceType,
      Timestamp: timestamp,
      Status: "Pendiente",
    });
    
    return { success: true };
  } catch (error) {
    console.error('Error adding contact data to Google Sheet:', error);
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
  }
}

export async function addLocalityInterestToGoogleSheet(data: LocalityInterestData) {
  try {
    const doc = await createAuthenticatedDocument();
    
    // Get the second sheet (index 1) for locality interests
    // If it doesn't exist, we'll create it
    let localitySheet;
    if (doc.sheetsByIndex.length > 1) {
      localitySheet = doc.sheetsByIndex[1];
    } else {
      // Create a new sheet for localities
      localitySheet = await doc.addSheet({ 
        title: 'Localidades',
        headerValues: ['Timestamp', 'Email', 'Localidad']
      });
    }
    
    const timestamp = formatTimestamp();
    
    await localitySheet.addRow({
      Timestamp: timestamp,
      Email: data.email,
      Localidad: data.locality,
    });
    
    return { success: true };
  } catch (error) {
    console.error('Error adding locality interest to Google Sheet:', error);
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
  }
}