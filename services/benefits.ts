import { fetchApi } from "./api";

export interface Benefit {
  id: string;
  title: string;
  description: string;
  imageUrl?: string;
  cost: number;
  empresa: {
    id: string;
    name: string;
  };
  isActive: boolean;
  categories?: string[];
}

export interface BenefitsResponse {
  benefits: Benefit[];
  total: number;
}

export const benefitsService = {
  // Obtener beneficios activos para mostrar en la landing
  getActiveBenefits: async (limit = 3): Promise<BenefitsResponse> => {
    return fetchApi<BenefitsResponse>(`/api/beneficios?limit=${limit}&active=true`);
  },

  // Obtener un beneficio por ID
  getBenefitById: async (id: string): Promise<Benefit> => {
    return fetchApi<Benefit>(`/api/beneficios/${id}`);
  },
};
