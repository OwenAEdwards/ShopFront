import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import type { Product } from "@/dto/Product";

// Pages & Components
import Hero from "@/components/Hero";
import FeaturedProducts from "@/components/FeaturedProducts";
import Categories from "@/components/Categories";
import Newsletter from "@/components/Newsletter";
import ProductDetailPage from "@/pages/ProductDetailPage";
import ProductListingPage from "@/pages/ProductListingPage";
import AboutPage from "@/pages/AboutPage";
import CartPage from "@/pages/CartPage";
import NotFoundPage from "@/pages/NotFoundPage";
import PageWrapper from "@/components/context/PageWrapper";

const ProductMock: Product[] = [
  {
    product_id: "1",
    f_product_category_id: "1",
    f_created_by: "1",
    name: "Product 1",
    description: "Description for Product 1",
    price: "$10.00",
    stock_quantity: "100",
    image_url: "https://via.placeholder.com/150",
    created_at: new Date().toISOString(),
  },
  {
    product_id: "2",
    f_product_category_id: "1",
    f_created_by: "1",
    name: "Product 2",
    description: "Description for Product 2",
    price: "$20.00",
    stock_quantity: "50",
    image_url: "https://via.placeholder.com/150",
    created_at: new Date().toISOString(),
  },
  {
    product_id: "3",
    f_product_category_id: "1",
    f_created_by: "1",
    name: "Product 3",
    description: "Description for Product 3",
    price: "$30.00",
    stock_quantity: "25",
    image_url: "https://via.placeholder.com/150",
    created_at: new Date().toISOString(),
  },
];

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
                <Hero />
                <FeaturedProducts products={ProductMock} />
                <Categories />
                <Newsletter />
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
