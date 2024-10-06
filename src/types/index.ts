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
  productId: string
  shopOwner: string
  category: string
  genderCategory: string
  size: string
  name: string
  price: number
  mainImgUrl: string
  listImgUrl: string[]
  description: string
  brand: string
  condition: string
  status: string
  createdAt: string
  updatedAt: string
}