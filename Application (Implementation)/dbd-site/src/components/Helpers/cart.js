// File: cart.js
// This file contains helper functions for the cart

import { productsData } from "../Objects/productsData.objects";

function isCartEmpty() {
    var products = productsData;
    return products.filter((product) => product.inCart === true).length === 0;
}

function itemsInCart() {
    var products = productsData;
    return products.filter((product) => product.inCart === true).length;
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

export { isCartEmpty, itemsInCart, totalCartPrice};