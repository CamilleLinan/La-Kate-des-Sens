import type { MassageOption } from "./MassageOption";

export interface Massage {
  id: string;
  title: string;
  title2?: string;
  description: string;
  descriptionLong: string[];
  bonus?: string;
  duration?: string;
  prices?: number[];
  options?: MassageOption[];
  image: string;
}
