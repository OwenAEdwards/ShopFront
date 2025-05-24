import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"
import { User, Settings, ShoppingCart, PackageIcon, LogOutIcon } from "lucide-react"
import SimplePopover from "./ui-custom/SimplePopover"

const Navbar = () => {
  const navigate = useNavigate()

  const options = [
    { label: "Profile", icon: <User />, onClick: () => navigate("/profile") },
    { label: "Orders",  icon: <PackageIcon/>, onClick: () => navigate("/orders") },
    { label: "Settings", icon: <Settings />, onClick: () => navigate("/settings") },
    { label: "Logout", icon: <LogOutIcon />, onClick: () => navigate("/logout") },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-background border-b p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1
          className="text-xl font-bold cursor-pointer"
          onClick={() => navigate("/")}
        >
          ShopFront
        </h1>
        <div className="flex items-center gap-4">
          <Button
            className="p-2 rounded-full cursor-pointer"
            variant="outline"
            onClick={() => navigate("/cart")}
          >
            <ShoppingCart className="w-5 h-5" />
          </Button>

          <SimplePopover
            trigger={
              <img
                src="https://i.pravatar.cc/150?img=3"
                alt="User Avatar"
                className="w-8 h-8 rounded-full cursor-pointer"
              />
            }
            options={options}
          />
        </div>
      </div>
    </header>
  )
}

export default Navbar
