import React, { useState, useEffect } from "react";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ProductDetail from "./ProductDetail"; // Assuming this is the correct import for ProductDetail
import ProductList from "./ProductList";
import ResponsiveAppBar from "./Navbar";
import Container from '@mui/material/Container';
import { Grid } from '@mui/material';
import { productsData } from "./Objects/productsData.objects";

const theme = createTheme({
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
});

const Home = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [products, setProducts] = useState(productsData); // Initialize products with productsData

  function handleProductClick(product) {
    setSelectedProduct(product);
  }

  // useEffect to update productList whenever products change
  useEffect(() => {
    setProducts(productsData); // Update products with the latest data from productsData
  }, [productsData]);

  return (
    <ThemeProvider theme={theme}>
      <div>
        <ResponsiveAppBar /> {/* Include the Navbar component */}
        
        <h1>Welcome to Our E-commerce Site</h1>
        <p>Click on a product to view more details</p>
        <br />

        <Container maxWidth="page"> {/* Wrap the content in a Container component */}
          <Grid container spacing={2}>
            {Object.values(products).length === 0 ? (
              <p>No Products Available</p>
            ) : (
              Object.values(products).map((product) => (
                <Grid item xs={12} md={2} key={product.id}>
                  <div className="product-list-wrapper" style={{ overflowWrap: 'break-word' }}>
                    {/* Include the ProductList component */}
                    <ProductList products={[product]} onProductClick={handleProductClick} />
                  </div>
                </Grid>
              ))
            )}
            <Grid item xs={12} md={6}>
              {selectedProduct && <ProductDetail product={selectedProduct} />}
            </Grid>
          </Grid>
        </Container>
      </div>
    </ThemeProvider>
  );
};

export default Home;
