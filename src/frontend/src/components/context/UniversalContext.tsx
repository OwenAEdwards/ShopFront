import React, { createContext, useContext, useState, useEffect } from "react";

// --- Types ---
export type User = { id: string; name: string; email: string } | null;
export type Product = { id: string; name: string; category: string; price: number };
export type CartItem = { productId: string; quantity: number };
export type Filters = { category: string | null; search: string };

// --- Store Shape ---
type Store<T> = {
  value: T;
  set: React.Dispatch<React.SetStateAction<T>>;
};

type UniversalStore = {
  user: Store<User>;
  filters: Store<Filters>;
  categories: Store<string[]>;
  products: Store<Product[]>;
  cart: Store<CartItem[]>;
};

const UniversalContext = createContext<UniversalStore | undefined>(undefined);

const MOCK_USER: User = { id: "u1", name: "John Doe", email: "john@example.com" };
const MOCK_CATEGORIES = ["Electronics", "Books", "Fashion", "Home", "Toys"];
const MOCK_PRODUCTS: Product[] = [
  { id: "p1", name: "Laptop", category: "Electronics", price: 1200 },
  { id: "p2", name: "Novel", category: "Books", price: 20 },
  { id: "p3", name: "Sneakers", category: "Fashion", price: 80 },
  { id: "p4", name: "Sofa", category: "Home", price: 350 },
  { id: "p5", name: "Action Figure", category: "Toys", price: 25 },
];
const MOCK_CART: CartItem[] = [{ productId: "p1", quantity: 1 }];

export const UniversalProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User>(null);
  const [filters, setFilters] = useState<Filters>({ category: null, search: "" });
  const [categories, setCategories] = useState<string[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    setUser(MOCK_USER);
    setCategories(MOCK_CATEGORIES);
    setProducts(MOCK_PRODUCTS);
    setCart(MOCK_CART);
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
