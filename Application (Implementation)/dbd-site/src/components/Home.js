import React, { useState } from "react";
import Login from "./Auth/Login";
import Signup from "./Auth/Signup";
import Cart from "./Cart";
import ProductDetail from "./ProductDetail";
import ProductList from "./ProductList";
import Nav from "./Navbar";

const Home = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  // Dummy product data (replace with your actual product data)
  const products = [
    { id: 1, name: "Product A" },
    { id: 2, name: "Product B" },
    // Add more products...
  ];

  return (
    <div>
      <Nav /> {/* Include the Navbar component */}
      <h1>Welcome to Our E-commerce Site</h1>
      <Login />
      <Signup />
      <Cart />
      <ProductList products= {products} onProductClick={handleProductClick} />
      {selectedProduct && <ProductDetail product={selectedProduct} />}
    </div>
  );
};

export default Home;
