// shopping cart page

import React from 'react';
import Grid from '@mui/material/Grid';
import Item from '@mui/material/Grid';
import Box from '@mui/material/Box';
import ProductList from './ProductList';
import ProcessCart from './Auth/ProcessCart';
import { checkCookie } from './Helpers/auth';
import { productsData } from './Objects/productsData.objects';
import { itemsInCartCookie } from './Helpers/cart';

const Cart = () => {

    const [showProcessCart, setShowProcessCart] = React.useState(false);

    //dereference each object here till array of products
    var products = productsData;

    var isLoggedIn = checkCookie();
    
    const filterProducts = (products) => {
        //TODO: IMPLEMENT PERSISTENT CART COOKIE HERE
        itemsInCartCookie();
        return products.filter(product => product.inCart === true);
    }

    // Handle display and opening of the product detail dialog
    const handleProductClick = (product) => {
        setSelectedProduct(product);
    };

    const handlePurchase = () => {
        setShowProcessCart(true);
    }

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
                        <Item> <p>Please login or signup to access the shopping cart.</p> </Item>
                    </Grid>
                )}
                {isLoggedIn && filterProducts(products).length !== 0 && (
                    <Grid item xs={4}>
                        <Item>
                            <p>Total items: {filterProducts(products).length}</p>
                            <p>Total price: ${filterProducts(products).reduce((acc, product) => acc + product.price, 0)}</p>
                        </Item>
                        <Item>
                            <button onClick={handlePurchase}>Purchase</button>
                        </Item>
                    </Grid>
                )}
            </Grid>
            {showProcessCart && (
                <ProcessCart products={filterProducts(products)} />
            )}
        </Box>
    );
}

export default Cart;
