'use server';

import { addLocalityInterestToGoogleSheet } from '@/lib/google-sheets';
import availableLocalities from '@/data/available-localities.json';

export interface LocalityInterestData {
  locality: string;
  email: string;
}

export interface LocalityInterestResponse {
  success: boolean;
  available: boolean;
  zoneName: string;
  message?: string;
  error?: string;
}

export async function createLocalityInterest(
  data: LocalityInterestData
): Promise<LocalityInterestResponse> {
  try {
    const isAvailable = availableLocalities.some(
      (locality) => locality.toLowerCase() === data.locality.toLowerCase()
    );

    const result = await addLocalityInterestToGoogleSheet(data);
    
    if (!result.success) {
      return {
        success: false,
        available: false,
        zoneName: data.locality,
        error: result.error,
      };
    }

    return {
      success: true,
      available: isAvailable,
      zoneName: data.locality,
      message: 'Interés registrado con éxito',
    };
  } catch (error) {
    return {
      success: false,
      available: false,
      zoneName: data.locality,
      error: error instanceof Error ? error.message : 'Error desconocido',
    };
  }
}
