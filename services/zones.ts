import { fetchApi } from "./api";

export interface CreateInterestData {
  zoneName: string;
  email: string;
}

export interface CreateInterestResponse {
  zoneName: string;
  available: boolean;
}

export const zonesService = {
  createInterest: async (
    data: CreateInterestData
  ): Promise<CreateInterestResponse> => {
    return fetchApi<CreateInterestResponse>("/api/zones/interests", {
      method: "POST",
      body: JSON.stringify(data),
    });
  },
};

