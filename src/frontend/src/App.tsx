import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom"
import { AnimatePresence, motion } from "framer-motion"

// Styles
import "./styles/globals.css"

// Components
import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import FeaturedProducts from "@/components/FeaturedProducts"
import Categories from "@/components/Categories"
import Newsletter from "@/components/Newsletter"
import Footer from "@/components/Footer"

// Pages 
import ProductPage from "@/pages/ProductDetailPage"
import AboutPage from "@/pages/AboutPage"
import NotFoundPage from "@/pages/NotFoundPage"
import CartPage from "./pages/CartPage"

const ProductMock = [
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
  }
]

function AnimatedRoutes() {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
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
          }
        />
        <Route
          path="/products/:id"
          element={
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <ProductPage />
            </motion.div>
          }
        />
        <Route
          path="/about"
          element={
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <AboutPage />
            </motion.div>
          }
        />
        <Route
          path="/cart"
          element={
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <CartPage />
            </motion.div>
          }
        />
        <Route
          path="*"
          element={
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <NotFoundPage />
            </motion.div>
          }
        />
      </Routes>
    </AnimatePresence>
  )
}

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-svh">
        <Navbar />
        <main className="flex-1">
          <AnimatedRoutes />
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
