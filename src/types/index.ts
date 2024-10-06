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
  imgUrl: string
  size: string
  condition: string
  price: number
  brand: string
  name: string
  productId: string
  shopOwner: string
  category: string
  genderCategory: string
  status: string
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

