import Hero from "@/components/Hero"
import FeaturedProducts from "@/components/FeaturedProducts"
import Categories from "@/components/Categories"
import Newsletter from "@/components/Newsletter"

function HomePage() {

    return (
    <div className="container mx-auto px-4">
        <Hero />
        <FeaturedProducts products={ProductMock} />
        <Categories />
        <Newsletter />
    </div>
    )
}

export default HomePage
