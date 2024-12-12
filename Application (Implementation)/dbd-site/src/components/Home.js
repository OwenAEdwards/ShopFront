import React, { useState, useEffect } from "react";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ProductDetail from "./ProductDetail";
import ProductList from "./ProductList";
import ResponsiveAppBar from "./Navbar";
import Container from '@mui/material/Container';
import { Grid, Typography, Box } from '@mui/material';
import { productsData } from "./Objects/productsData.objects";

const theme = createTheme({
  typography: {
    fontFamily: 'Roboto, sans-serif',
    h1: {
      fontSize: '2rem',
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: '1rem',
    },
    body1: {
      textAlign: 'center',
      marginBottom: '2rem',
    }
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
        
        <Typography variant="h1">Welcome to Our E-commerce Site</Typography>
        <Typography variant="body1">Click on a product to view more details</Typography>

        <Container maxWidth="lg" sx={{ marginTop: 4 }}>
          <Grid container spacing={4}>
            {/* Product Grid */}
            {Object.values(products).length === 0 ? (
              <Grid item xs={12}>
                <Typography variant="h6" color="textSecondary" textAlign="center">No Products Available</Typography>
              </Grid>
            ) : (
              Object.values(products).map((product) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
                  <Box
                    className="product-list-wrapper"
                    sx={{
                      padding: 2,
                      borderRadius: 2,
                      boxShadow: 3,
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      transition: 'transform 0.3s ease',
                      '&:hover': {
                        transform: 'scale(1.05)',
                      },
                    }}
                  >
                    <ProductList product={product} onProductClick={handleProductClick} />
                  </Box>
                </Grid>
              ))
            )}

            {/* Product Detail */}
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
