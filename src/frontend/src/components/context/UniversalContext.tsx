import React, { createContext, useContext, useState, useEffect } from "react";
// Import DTO interfaces from your centralized dtos file
import type {
  UserDTO,
  ProductDTO,
  CartItemDTO,
  Filters,
} from "@/dto/dtos";

// --- Store Shape ---
type Store<T> = {
  value: T;
  set: React.Dispatch<React.SetStateAction<T>>;
};

type UniversalStore = {
  user: Store<UserDTO>;
  filters: Store<Filters>;
  categories: Store<string[]>;
  products: Store<ProductDTO[]>;
  cart: Store<CartItemDTO[]>;
};

const UniversalContext = createContext<UniversalStore | undefined>(undefined);

// Mock data adapted to DTO shapes
const MOCK_USER: UserDTO = {
  user_id: 1,
  name: "John Doe",
  email: "john@example.com",
  password_hash: "<hashed>",
  role: "CUSTOMER",
  is_active: true,
  is_deleted: false,
};
const MOCK_CATEGORIES = ["Electronics", "Books", "Fashion", "Home", "Toys"];
const MOCK_PRODUCTS: ProductDTO[] = [
  {
    product_id: 1,
    name: "Laptop",
    description: "High-performance laptop",
    price: 1200,
    stock_quantity: 10,
    product_category_id: 1,
    created_by: 1,
  },
  {
    product_id: 2,
    name: "Novel",
    description: "Bestselling novel",
    price: 20,
    stock_quantity: 50,
    product_category_id: 2,
    created_by: 1,
  },
  // ...other products
];
const MOCK_CART: CartItemDTO[] = [{ cart_item_id: 1, cart_id: 1, product_id: 1, quantity: 1 }];

export const UniversalProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<UserDTO>(MOCK_USER);
  const [filters, setFilters] = useState<Filters>({ category: null, search: "" });
  const [categories, setCategories] = useState<string[]>(MOCK_CATEGORIES);
  const [products, setProducts] = useState<ProductDTO[]>(MOCK_PRODUCTS);
  const [cart, setCart] = useState<CartItemDTO[]>(MOCK_CART);

  // If you fetch from an API, replace the above defaults and useEffect
  useEffect(() => {
    // e.g. fetch and set real data
  }, []);

  const store: UniversalStore = {
    user: { value: user, set: setUser },
    filters: { value: filters, set: setFilters },
    categories: { value: categories, set: setCategories },
    products: { value: products, set: setProducts },
    cart: { value: cart, set: setCart },
  };

  return <UniversalContext.Provider value={store}>{children}</UniversalContext.Provider>;
};

export const useUniversal = () => {
  const context = useContext(UniversalContext);
  if (!context) {
    throw new Error("useUniversal must be used within UniversalProvider");
  }
  return context;
};
