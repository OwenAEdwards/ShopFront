import React, { useState } from 'react';
import Login from './Auth/Login';
import Signup from './Auth/Signup';
import Cart from './Cart';
import ProductDetail from './ProductDetail';
import ProductList from './ProductList';

const Home = () => {
    const [selectedProduct, setSelectedProduct] = useState(null);

    const handleProductClick = (product) => {
        setSelectedProduct(product);
    };

    return (
        <div>
            <h1>Welcome to Our E-commerce Site</h1>
            <Login />
            <Signup />
            <Cart />
            <ProductList onProductClick={handleProductClick} />
            {selectedProduct && <ProductDetail product={selectedProduct} />}
        </div>
    );
}

export default Home;
