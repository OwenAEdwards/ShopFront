import { Button } from "@/components/ui/button"

function NotFoundPage() {
  return (
  <div className="flex flex-col items-center justify-center h-screen text-red-500">
    <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
    <p className="mb-8">Sorry, the page you are looking for does not exist.</p>
    <Button variant="default" onClick={() => window.location.href = '/'}>
      Go to Home
    </Button>
  </div>
  )
}

export default NotFoundPage
