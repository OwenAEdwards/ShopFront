import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import FeaturedProducts from "@/components/FeaturedProducts"
import Categories from "@/components/Categories"
import Newsletter from "@/components/Newsletter"
import Footer from "@/components/Footer"

function App() {
  return (
    <div className="flex flex-col min-h-svh">
      <Navbar />
      <Hero />
      <FeaturedProducts />
      <Categories />
      <Newsletter />
      <Footer />
    </div>
  )
}

export default App
