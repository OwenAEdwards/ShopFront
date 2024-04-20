// Dummy product data (replace with your actual product data)

import { getProductCookies, setProductCookies } from "../Helpers/products";


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

// Here is an example of a product object
const initialProduct = {
    id: 1,
    category: 'shoes',
    name: 'Product 1',
    brand: 'Brand X',
    size: 'Big',
    description: 'This is product 1',
    price: 10.00
};

// Set the initial product data
var productsData = getProductCookies();

export {productsData};