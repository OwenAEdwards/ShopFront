// ProductDetail.js
// Handles the specific details of a product and allows the user to add the product to the cart
import * as React from 'react';
import Button from '@mui/material/Button';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { addToCartCookie, removeFromCartCookie } from './Helpers/cart';

// Product Detail Component
// product: The product object to display details for
// showCartButton: A blank (undefined) value to indicate whether or not to display the add to cart button
const ProductDetail = ({ product, showCartButton }) => {

  const [cartButton, setCartButton] = React.useState(undefined);
 
  // Function to handle adding (or removing product) to the cart
  const handleAddToCart = (product) => { 
    // Add / Remove the product to the cart
    // Update the product to indicate it is in the cart
    if (product.inCart === true){
      product.inCart = false;
      removeFromCartCookie(product);
      setCartButton(!cartButton);
    }else{
      product.inCart = true;
      addToCartCookie(product);
      setCartButton(true);
    }
  }

  // Set the cart button based on the product's inCart status initially 
  React.useEffect(() => {
    setCartButton(product.inCart);
  }, []);

  // Return the product details component
  return (
    <div>
      {/* Add any details you want to display in the popup*/}
      <h1><u>Product Details:</u></h1>
      <h2>{product.name}</h2>
      <p><u>Description: </u> <br/> {product.description}</p>
      <p>Price: ${product.price}</p>
      <p>id:<i>{product.id}</i> Brand: <i>{product.brand}</i>, Size: <i>{product.size}</i>, Category: <i>{product.category}</i></p>

        {/*<img src={product.image} alt={" "} style={{ width: '100px', height: '100px' }} />*/}
      
      {/* Added to cart button */}
      
      <br/>
      <br/> 
      {cartButton && showCartButton===undefined && (
        <Button variant="outlined" onClick={() => { handleAddToCart(product) }}>Remove from Cart</Button>
      )}
      {/* Add to cart button */}
      {!cartButton && showCartButton===undefined && (
        <Button variant="contained" endIcon={<AddCircleOutlineIcon/>} onClick={() => { handleAddToCart(product) }}>Add to Cart</Button>
      )}
    </div>
  );
};

export default ProductDetail;
