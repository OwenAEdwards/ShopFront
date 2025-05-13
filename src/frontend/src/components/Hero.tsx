import { Button } from "@/components/ui/button"

const Hero = () => (
  <section className="bg-gray-100 dark:bg-gray-900 py-20 text-center">
    <div className="container mx-auto">
      <h2 className="text-4xl font-bold mb-4">Welcome to Shopfront</h2>
      <p className="text-lg mb-6 text-gray-600 dark:text-gray-300">
        Your one-stop shop for everything awesome.
      </p>
      <Button>Shop Now</Button>
    </div>
  </section>
)

export default Hero
