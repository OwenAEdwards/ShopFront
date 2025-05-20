import { Button } from "@/components/ui/button"
import { ShoppingCart } from "lucide-react"
import { useNavigate } from "react-router-dom"

const Navbar = () => {
  const navigate = useNavigate()

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-background border-b p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold" onClick={() => navigate("/")}>ShopFront</h1>
        <Button variant="outline" onClick={() => navigate("/cart")}>
          <ShoppingCart className="w-4 h-4 mr-2" />
          Cart
        </Button>
      </div>
    </header>
  )
}

export default Navbar
