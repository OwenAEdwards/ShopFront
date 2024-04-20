// Routes.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import ProductDetail from './components/ProductList';
import Cart from './components/Cart';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';

const PageRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" component={Home} />
        <Route path="/product/" component={ProductDetail} />
        <Route path="/cart" component={Cart} />
        <Route path="/login" element={Login} />
        <Route path="/signup" element={Signup} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
};

export default PageRoutes;
