// File: cart.js
// This file contains helper functions for the cart

import { productsData } from "../Objects/productsData.objects";

function isCartEmpty() {
    var products = productsData;
    return products.filter((product) => product.inCart === true).length === 0;
}

export { isCartEmpty };