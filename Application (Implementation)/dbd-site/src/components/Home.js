import React, { useState } from "react";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ProductDetail from "./ProductList";
import ProductList from "./ProductList";
import ResponsiveAppBar from "./Navbar";
import Container from '@mui/material/Container';
import { Grid } from '@mui/material';
import {productsData} from "./Objects/productsData.objects";

// set as global variable
var products = productsData;

const theme = createTheme({
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
});

var handleAddProduct = () => {};

const Home = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  
  function handleProductClick(product){
    setSelectedProduct(product);
  };



  const [productList, setProductList] = useState(products);

  handleAddProduct = (newProduct) => {
    setProductList([...productList, newProduct]);
    console.log("Product list:", products)
  };


  return (
    <ThemeProvider theme={theme}>
      <div>
        <ResponsiveAppBar products={productList} /> {/* Include the Navbar component */}
        
        <h1>Welcome to Our E-commerce Site</h1>
        <p>Click on a product to view more details</p>
        <br />

        <Container maxWidth="page" > {/* Wrap the content in a Container component */}
          <Grid container spacing={2}>
            {productList.map((product) => (
              <Grid item xs={12} md={2} key={product.id}>
                <div className="product-list-wrapper" style={{ overflowWrap: 'break-word' }}>
                  <ProductList products={[product]} onProductClick={handleProductClick} />
                </div>
              </Grid>
            ))}
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
export { handleAddProduct };
