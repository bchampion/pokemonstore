export interface Pokemon {
  id: number;
  weight?: number;
  image_url?: string;
  name: string;
  types?: string[];
  height?: number;
  description?: string;
}
