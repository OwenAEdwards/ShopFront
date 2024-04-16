import React, { useState } from "react";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ProductDetail from "./ProductList";
import ProductList from "./ProductList";
import ResponsiveAppBar from "./Navbar";
import Container from '@mui/material/Container';
import { Grid } from '@mui/material';

// set as global variable
var products = [];

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

  // Dummy product data (replace with your actual product data)
  products = [
    { id: 1, name: "Tacoritto", description: "A burrito / taco", price: 10, longdescription: "This is a burrito / taco. New innovations have allowed for this amazing feat of engineering.", inCart: false , 
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.tasteofhome.com%2Fwp-content%2Fuploads%2F2021%2F05%2Fcalifornia-burrito-GettyImages-685254771.jpg%3Fw%3D1200&f=1&nofb=1&ipt=450da67ad33bc714801713b2b78b16de0adccc323a10c733af42a81d81f75e6e&ipo=images"},
    
    { id: 2, name: "Product 2", description: "Yes", price: 20, 
    longdescription: "Buy now.", 
    inCart: false, 
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.istockphoto.com%2Fphotos%2Fnerd-student-making-a-funny-smiling-face-picture-id156303400%3Fk%3D6%26m%3D156303400%26s%3D612x612%26w%3D0%26h%3DO5qvTA5strYKjTkF8e0GjnEpOZ6Tk48t829ST3tjxCU%3D&f=1&nofb=1&ipt=90af06ac5f35dcf4f239ad25eede2da985cf2e4c036013fc7eec3832ce2a924f&ipo=images"},
    { id: 3, name: "Product C", description: "This is product C", price: 30, longdescription: "This is a long description for product C", inCart: false},

    // Add more products...
  ];

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
export { products, handleAddProduct };
