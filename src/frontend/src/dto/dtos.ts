// dtos.ts

// Enums
export type UserRole = "CUSTOMER" | "SELLER" | "ADMIN";
export type OrderStatus =
  | "PENDING"
  | "CONFIRMED"
  | "SHIPPED"
  | "DELIVERED"
  | "CANCELLED"
  | "RETURNED";
export type PaymentMethod =
  | "CREDIT_CARD"
  | "DEBIT_CARD"
  | "PAYPAL"
  | "BANK_TRANSFER"
  | "CASH_ON_DELIVERY"
  | "APPLE_PAY"
  | "GOOGLE_PAY";
export type PaymentStatus = "PENDING" | "COMPLETED" | "FAILED" | "CANCELLED" | "REFUNDED";

// DTOs
export interface UserDTO {
  user_id: number;
  name: string;
  email: string;
  password_hash: string;
  phone?: string;
  address?: string;
  role: UserRole;
  is_active: boolean;
  is_deleted: boolean;
  profile_picture_url?: string;
  last_login?: string; // ISO timestamp
  created_at?: string; // ISO timestamp
}

export interface ProductCategoryDTO {
  product_category_id: number;
  name: string;
  description: string;
}

export interface ProductDTO {
  product_id: number;
  name: string;
  description: string;
  price: number;
  stock_quantity: number;
  created_at?: string;
  updated_at?: string;
  product_category_id: number;
  created_by: number;
}

export interface ProductImageDTO {
  product_image_id: number;
  product_id: number;
  image_url: string;
  created_at?: string;
  updated_at?: string;
}

export interface OrderDTO {
  order_id: number;
  user_id: number;
  order_status: OrderStatus;
  total_price: number;
  created_at?: string;
  updated_at?: string;
}

export interface OrderItemDTO {
  order_item_id: number;
  order_id: number;
  product_id: number;
  quantity: number;
  price?: number;
}

export interface PaymentDTO {
  payment_id: number;
  order_id: number;
  payment_method: PaymentMethod;
  payment_status: PaymentStatus;
  payment_amount?: number;
  created_at?: string;
  updated_at?: string;
}

export interface CartDTO {
  cart_id: number;
  user_id: number;
  created_at?: string;
}

export interface CartItemDTO {
  cart_item_id: number;
  cart_id: number;
  product_id: number;
  quantity: number;
}

// Local Storage Interfaces 
export interface Filters {
  category: string | null;
  search: string;
}