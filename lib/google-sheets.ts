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

// The ID of your spreadsheet - from the URL
const SHEET_ID = '1rrHEZ_z3LDdy1kYyuLkCK1Ca7cNCaWpvaUI7vfZIE7o';

export async function addContactToGoogleSheet(data: ContactFormData) {
  try {
    // Need to set these in your environment variables or .env file
    const GOOGLE_CLIENT_EMAIL = process.env.GOOGLE_CLIENT_EMAIL;
    const GOOGLE_PRIVATE_KEY = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n');
    
    if (!GOOGLE_CLIENT_EMAIL || !GOOGLE_PRIVATE_KEY) {
      throw new Error('Google API credentials not found');
    }

    // Create JWT for authentication
    const jwt = new JWT({
      email: GOOGLE_CLIENT_EMAIL,
      key: GOOGLE_PRIVATE_KEY,
      scopes: [
        'https://www.googleapis.com/auth/spreadsheets',
        'https://www.googleapis.com/auth/drive.file',
      ],
    });

    // Create a new document instance
    const doc = new GoogleSpreadsheet(SHEET_ID, jwt);
    
    // Load the document and the first sheet
    await doc.loadInfo();
    const sheet = doc.sheetsByIndex[0]; // Use the first sheet
    
    // Format timestamp as dd/mm/yyyy hh:mm
    const now = new Date();
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const year = now.getFullYear();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const timestamp = `${day}/${month}/${year} ${hours}:${minutes}`;
    
    // Capitalize first letter of serviceType
    const formattedServiceType = data.serviceType.charAt(0).toUpperCase() + data.serviceType.slice(1);
    
    // Add a row to the sheet
    await sheet.addRow({
      Nombre: data.firstName,
      Apellido: data.lastName,
      Email: data.email,
      Telefono: data.phone || '',
      Service: formattedServiceType,
      Timestamp: timestamp,
      Status: "Pendiente",
    });
    
    return { success: true };
  } catch (error) {
    console.error('Error adding data to Google Sheet:', error);
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
  }
}