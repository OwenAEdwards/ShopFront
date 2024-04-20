// File: cart.js
// This file contains helper functions for the cart

import { productsData } from "../Objects/productsData.objects";

function isCartEmpty() {
    var products = productsData;
    return products.filter((product) => product.inCart === true).length === 0;
}

// beta function to get the number of items in the cart
function itemsInCartCookie() {
    var products = document.cookie.split(';').find(cookie => cookie.includes('cart'));
    if (products) {
        return products.split('=')[1].split(',').length;
    } else {
        return 0;
    }
}

// beta function to add a product to the cart
function addToCartCookie(product) {
    product.inCart = true;
    // Create a cookie with a list of product ids in the cart
    document.cookie = `cart=${productsData.filter(product => product.inCart).map(product => product.id).join(',')}`;
}

// beta funtion to remove a product from the cart
function removeFromCartCookie(product) {
    product.inCart = false;
    // Create a cookie with a list of product ids in the cart
    document.cookie = `cart=${productsData.filter(product => product.inCart).map(product => product.id).join(',')}`;
}

    
function totalCartPrice() {
    var products = productsData;
    var total = 0;
    products.forEach((product) => {
        if (product.inCart) {
            total += product.price;
        }
    });
    return total;
}

export { isCartEmpty, totalCartPrice, itemsInCartCookie, addToCartCookie, removeFromCartCookie};