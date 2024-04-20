// Dummy product data (replace with your actual product data)

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

var productsData = [
  { id: 1, category: "shoes", name: "Product 1", brand: "Nike", size: "small", description: "This is a description of product 1.", price: 100.00 },

  // Add more products...
];

export {productsData};