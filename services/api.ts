// Base API URL para el backend de beneficios
const API_URL = "https://apibeneficios.scrapyapp.com"; // Always use production API

// Generic fetch function with error handling
export async function fetchApi<T>(
  endpoint: string,
  options: RequestInit & { responseType?: "json" | "blob" } = {}
): Promise<T> {
  const url = `${API_URL}${endpoint}`;
  const { responseType = "json", ...fetchOptions } = options;

  const response = await fetch(url, {
    ...fetchOptions,
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      ...fetchOptions.headers,
    },
  });

  if (!response.ok) {
    let errorPayload: any = {
      message: `Error ${response.status}: ${response.statusText}`,
    };
    try {
      errorPayload = await response.json();
    } catch (e) {
      // Si falla el parsing, mantener el error por defecto
    }

    throw new Error(
      errorPayload.message || `Error ${response.status}: ${response.statusText}`
    );
  }

  // Handle blob responses
  if (responseType === "blob") {
    return response.blob() as Promise<T>;
  }

  return response.json();
}
