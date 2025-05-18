import { Button } from "@/components/ui/button"
import { ShoppingCart } from "lucide-react";

const Navbar = () => (
  <header className="border-b p-4">
    <div className="container mx-auto flex justify-between items-center">
      <h1 className="text-xl font-bold">ShopFront</h1>
      <Button variant="outline">
      <ShoppingCart className="w-4 h-4 mr-2" />
      Cart
    </Button>
    </div>
  </header>
)

export default Navbar
