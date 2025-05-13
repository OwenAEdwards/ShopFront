import { Skeleton } from "@/components/ui/skeleton"

const FeaturedProducts = () => (
  <section className="container mx-auto py-10">
    <h3 className="text-2xl font-semibold mb-6">Featured Products</h3>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {Array.from({ length: 4 }).map((_, i) => (
        <div key={i} className="p-4 border rounded-lg">
          <Skeleton className="h-40 w-full mb-4" />
          <Skeleton className="h-4 w-3/4 mb-2" />
          <Skeleton className="h-4 w-1/2" />
        </div>
      ))}
    </div>
  </section>
)

export default FeaturedProducts
