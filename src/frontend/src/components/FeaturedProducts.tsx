import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import type { Product } from "@/dto/Product";

interface FeaturedProductsProps {
  products: Product[];
}

export default function FeaturedProducts({ products }: FeaturedProductsProps) {
  return (
    <section className="container mx-auto py-10">
      <h3 className="text-2xl font-semibold mb-6">Featured Products</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <Card key={product.product_id} className="p-4">
            <CardHeader>
              <div className="relative h-40 w-full">
                
              </div>
            </CardHeader>
            <CardContent>
              <h4 className="text-lg font-medium truncate">{product.name}</h4>
              {product.description && (
                <p className="text-sm text-muted-foreground mt-1">
                  {product.description}
                </p>
              )}
            </CardContent>
            <CardFooter className="flex items-center justify-between">
              <span className="text-xl font-semibold">{product.price}</span>
              <button className="btn btn-primary">Buy Now</button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}