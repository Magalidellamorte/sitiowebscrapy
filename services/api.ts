// Base API URL
const API_URL =
  process.env.NODE_ENV === "production"
    ? "https://apibeneficios.scrapyapp.com"
    : "http://localhost:3001";

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
    }; // Default error structure
    try {
      errorPayload = await response.json(); // Try to parse more specific error from backend
    } catch (e) {
      // If parsing fails, errorPayload retains the default structure
    }

    throw new Error(
      errorPayload.message || `Error ${response.status}: ${response.statusText}`
    );
  }

  // Handle blob responses
  if (responseType === "blob") {
    return (await response.blob()) as T;
  }

  // For 204 No Content responses or empty bodies, return empty object
  if (
    response.status === 204 ||
    response.headers.get("content-length") === "0"
  ) {
    return {} as T;
  }

  // Handle potential empty responses that might still have content-length > 0
  try {
    return await response.json();
  } catch (error) {
    console.log("Warning: Could not parse JSON response", error);
    return {} as T;
  }
}

