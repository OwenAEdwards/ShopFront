// Dummy product data (replace with your actual product data)
import { getAllProducts } from "../Helpers/productApiCalls";


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

// Set the initial product data

// Get all products from the API and store them in the productsData variable (use await)

try{
    var productsData = await getAllProducts();
}catch(error){
    console.error(error);
    productsData = [];
}

export {productsData};