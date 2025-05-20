import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

//Styles
import "./styles/globals.css"

// Components
import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import FeaturedProducts from "@/components/FeaturedProducts"
import Categories from "@/components/Categories"
import Newsletter from "@/components/Newsletter"
import Footer from "@/components/Footer"

// Pages 
import ProductPage from "@/pages/ProductPage"
import AboutPage from "@/pages/AboutPage"
import NotFoundPage from "@/pages/NotFoundPage"
import CartPage from "./pages/CartPage"

function App() {
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

  return (
    <Router>
      <div className="flex flex-col min-h-svh">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <FeaturedProducts products={ProductMock} />
                  <Categories />
                  <Newsletter />
                </>
              }
            />
            <Route path="/products/:id" element={<ProductPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="*" element={<NotFoundPage />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
