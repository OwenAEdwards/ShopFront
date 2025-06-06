import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"

function NotFoundPage() {
    const navigate = useNavigate()

    return (
    <div className="flex flex-col items-center justify-center h-screen text-red-500">
        <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
        <p className="mb-8">Sorry, the page you are looking for does not exist.</p>
        <Button className="cursor-pointer" variant="default" onClick={() => navigate("/")}>
        Go to Home
        </Button>
    </div>
    )
}

export default NotFoundPage
