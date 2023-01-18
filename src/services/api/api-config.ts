export interface ApiConfig {
  url: string;
  timeout: number;
}

export const DEFAULT_API_CONFIG: ApiConfig = {
  url: "https://api.tvmaze.com",
  timeout: 8000,
};
