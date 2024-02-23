import React, { useState } from "react";
import Login from "./Auth/Login";
import Signup from "./Auth/Signup";
import Cart from "./Cart";
import ProductDetail from "./ProductDetail";
import ProductList from "./ProductList";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";

const Home = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  return (
    <div>
      <h1>Welcome to Our E-commerce Site</h1>
      <Login />
      <Signup />
      <Cart />
      <ProductList onProductClick={handleProductClick} />
      {selectedProduct && <ProductDetail product={selectedProduct} />}
    </div>
  );
};

export default Home;
