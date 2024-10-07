export enum Gender {
  Male,
  Female,
  Other
}

export type User = {
  userId: string
  userName: string
  passWord: string
  email: string
  address: string
  phoneNumber: string
  roleId: string
  isShopOwner: boolean
  shopName: string
  shopAddress: string
  shopDescription: string
  shopLogo: string
  createdAt: string
  updatedAt: string
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

// {
//   "totalPrice": 200000,
//   "dateTime": "2024-10-07T10:43:47.5724782",
//   "address": "Bến tre",
//   "email": "duyvo1066@gmail.com",
//   "fullName": "Duy Võ",
//   "phone": "0987654321",
//   "listProducts": [
//     {
//       "productId": "5a6e2f3e-9c3e-4f87-9e8c-ea1d4f6e8b0e",
//       "name": "Áo Thun Cổ Điển Nam",
//       "size": "S",
//       "imageUrl": "https://down-vn.img.susercontent.com/file/c7db377b177fc8e2ff75a769022dcc23",
//       "price": 200000
//     }
//   ]
// },

export interface Order {
  orderId: string
  totalPrice: number
  dateTime: string
  address: string
  email: string
  fullName: string
  phone: string
  listProducts: CartItem[]
}

export interface CartItem {
  productId: string
  name: string
  size: string
  imageUrl: string
  price: number
}