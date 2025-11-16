export interface Massage {
  id: number;
  title: string;
  description: string;
  descriptionLong: string[];
  bonus?: string;
  duration?: string | null;
  price?: number | null;
  image: string;
}
