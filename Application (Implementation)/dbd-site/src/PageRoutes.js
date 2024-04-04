// Routes.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import ProductDetail from './components/ProductList';
import Cart from './components/Cart';
import Login from './components/Auth/Login';

const PageRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" component={Home} />
        <Route path="/product/" component={ProductDetail} />
        <Route path="/cart" component={Cart} />
        <Route path="/login" element={Login} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
};

export default PageRoutes;
