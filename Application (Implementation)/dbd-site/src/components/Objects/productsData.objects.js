// Dummy product data (replace with your actual product data)

import { getProductCookies } from "../Helpers/products";
import { addProductCookie } from "../Helpers/products";

/*
CREATE TABLE IF NOT EXISTS Products (
    product_id SERIAL PRIMARY KEY,
    category VARCHAR(50) NOT NULL,
    product_name VARCHAR(100) NOT NULL,
    brand VARCHAR(50),
    size VARCHAR(20),
    description TEXT,
    price DECIMAL(10, 2) NOT NULL
);
*/

// Dummy product data (replace with your actual product data)
const initialProduct = {
    id: 1,
    category: 'shoes',
    name: 'Product 1',
    brand: 'Brand X',
    size: 'Big',
    description: 'This is product 1',
    price: 10.00
};

// Add the initial product to the products cookie
addProductCookie(initialProduct);
if (!getProductCookies().some(product => product.id === initialProduct.id)) {
  addProductCookie(initialProduct);
}

var productsData = getProductCookies();

export {productsData};