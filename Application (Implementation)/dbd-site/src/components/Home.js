import React, { useState } from "react";
import Login from "./Auth/Login";
import Signup from "./Auth/Signup";
import Cart from "./Cart";
import ProductDetail from "./ProductDetail";
import ProductList from "./ProductList";
import Nav from "./Navbar";
import ResponsiveAppBar from "./Navbar";

const Home = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  // Dummy product data (replace with your actual product data)
  const products = [
    { id: 1, name: "Product A", description: "This is product A"},
    { id: 2, name: "Product B", description: "This is product B"},
    { id: 3, name: "Product C", description: "This is product C"},
    // Add more products...
  ];

  return (
    <div>
      <ResponsiveAppBar /> {/* Include the Navbar component */}
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
