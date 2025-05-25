import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import type { Product } from "@/dto/dtos";

// Pages & Components
import ProductDetailPage from "@/pages/ProductDetailPage";
import ProductListingPage from "@/pages/ProductListingPage";
import AboutPage from "@/pages/AboutPage";
import CartPage from "@/pages/CartPage";
import NotFoundPage from "@/pages/NotFoundPage";
import PageWrapper from "@/components/context/PageWrapper";
import HomePage from "./pages/HomePage";

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageWrapper title="Home">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <HomePage />
              </motion.div>
            </PageWrapper>
          }
        />
        <Route
          path="/products/:product_id"
          element={
            <PageWrapper title="Product Detail">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <ProductDetailPage />
              </motion.div>
            </PageWrapper>
          }
        />
        <Route
          path="/products"
          element={
            <PageWrapper title="Product Listing">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <ProductListingPage />
              </motion.div>
            </PageWrapper>
          }
        />
        <Route
          path="/about"
          element={
            <PageWrapper title="About">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <AboutPage />
              </motion.div>
            </PageWrapper>
          }
        />
        <Route
          path="/cart"
          element={
            <PageWrapper title="Cart">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <CartPage />
              </motion.div>
            </PageWrapper>
          }
        />
        <Route
          path="*"
          element={
            <PageWrapper title="404 - Not Found">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <NotFoundPage />
              </motion.div>
            </PageWrapper>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
