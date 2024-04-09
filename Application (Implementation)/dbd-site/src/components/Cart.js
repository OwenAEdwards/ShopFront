// shopping cart page

import React from 'react';
import Grid from '@mui/material/Grid';
import Item from '@mui/material/Grid';
import Box from '@mui/material/Box';
import ProductList from './ProductList';
import ProcessCart from './Auth/ProcessCart';
import { useState } from 'react';

const Cart = (products, isLoggedIn) => {
    //dereference each object here till array of products
    products = products.products.products;

    console.log(isLoggedIn.isLoggedIn);
    
    const filterProducts = (products) => {
        return products.filter((product) => product.inCart === true);
    }

    // Handle display and opening of the product detail dialog
    const [selectedProduct, setSelectedProduct] = useState(null);
    const handleProductClick = (product) => {
    setSelectedProduct(product);
    };

    // Handle purchase
    const handlePurchase = () => {
        ProcessCart();
        alert('Purchase successful');
    };

    // return component here
    return (
        <Box height={500}
            width={500}
            my={4}
            display="flex"
            alignItems="top"
            gap={4}
            p={2}
        >
            {/* Below is the shopping cart page*/}
            <Grid
                container
                spacing={0}
                direction="column"
            >
                <Grid item xs={4}>
                    <Item> <h1>Shopping Cart:</h1> </Item>
                </Grid>
                {isLoggedIn ? (
                    <Grid item xs={4}>
                        <Item> {filterProducts(products).length === 0 ? <p>Shopping cart is empty</p> : <ProductList products={filterProducts(products)} showCartButton={false} />} </Item>
                    </Grid>
                ) : (
                    <Grid item xs={4}>
                        <Item> <p>Please login first!</p> </Item>
                    </Grid>
                )}
                {isLoggedIn && filterProducts(products).length !== 0 && (
                    <Grid item xs={4}>
                        <Item>
                            <button onClick={handlePurchase}>Purchase</button>
                        </Item>
                    </Grid>
                )}
            </Grid>
        </Box>
    );
}

export default Cart;
