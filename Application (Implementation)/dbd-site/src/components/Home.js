import React, { useState } from "react";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Login from "./Auth/Login";
import Signup from "./Auth/Signup";
import Cart from "./Cart";
import ProductDetail from "./ProductDetail";
import ProductList from "./ProductList";
import ResponsiveAppBar from "./Navbar";

const theme = createTheme({
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
});

const Home = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  // Dummy product data (replace with your actual product data)
  const products = [
    { id: 1, name: "Product A", description: "This is product A", price: 10, longdescription: "This is a long description for product A"},
    { id: 2, name: "Product B", description: "This is product B", price: 20, longdescription: "This is a long description for product B"},
    { id: 3, name: "Product C", description: "This is product C", price: 30, longdescription: "This is a long description for product C"},
    // Add more products...
  ];

  return (
    <ThemeProvider theme={theme}>
      <div>
        <ResponsiveAppBar /> {/* Include the Navbar component */}
        <h1>Welcome to Our E-commerce Site</h1>

        <ProductList products={products} onProductClick={handleProductClick} />
        {selectedProduct && <ProductDetail product={selectedProduct} />}
      </div>
    </ThemeProvider>
  );
};

export default Home;
