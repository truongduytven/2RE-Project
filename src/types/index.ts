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
  mainImage: string
  relatedImages: string[]
  size: string
  // color: string
  cond: string
  price: number
  type: string
  brand: string
  sale: number
  shopName: string
  shopId: string
  collection: string
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

