export enum Gender {
  Male,
  Female,
  Other
}

export type User = {
  name: string
  address?: string
  gender: Gender
}

export type Product = {
  id: number
  name: string
  image: string
  size: string
  cond: string
  price: string
  type: string
  brand: string
}
export interface ProductDetail {
  id: string;
  name: string;
  description: string;
  price: number;
  size: string;
  color: string[];
  mainImage: string;
  relatedImages: string[];
}

