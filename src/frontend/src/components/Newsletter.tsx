import { Button } from "@/components/ui/button"

const Newsletter = () => (
  <section className="bg-gray-50 dark:bg-gray-800 py-16">
    <div className="container mx-auto text-center">
      <h4 className="text-xl font-bold mb-2">Stay Updated</h4>
      <p className="mb-4 text-gray-600 dark:text-gray-300">
        Get the latest deals and updates right in your inbox.
      </p>
      <div className="flex justify-center gap-2 flex-wrap">
        <input
          type="email"
          placeholder="you@example.com"
          className="px-4 py-2 rounded-md border focus:outline-none w-72"
        />
        <Button>Subscribe</Button>
      </div>
    </div>
  </section>
)

export default Newsletter
