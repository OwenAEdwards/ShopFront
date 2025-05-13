import { Button } from "@/components/ui/button"

const Navbar = () => (
  <header className="border-b p-4">
    <div className="container mx-auto flex justify-between items-center">
      <h1 className="text-xl font-bold">Shopfront</h1>
      <Button variant="outline">Cart</Button>
    </div>
  </header>
)

export default Navbar
