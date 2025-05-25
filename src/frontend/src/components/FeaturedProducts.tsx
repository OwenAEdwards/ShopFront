import type { ProductDTO } from "@/dto/dtos";
import ProductCard from "./ui-custom/ProductCard";

interface FeaturedProductsProps {
  products: ProductDTO[];
}

export default function FeaturedProducts({ products }: FeaturedProductsProps) {
  return (
    <section className="container mx-auto py-10">
      <h3 className="text-2xl font-semibold mb-6">Featured Products</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.product_id}
            id={product.product_id}
            name={product.name}
            price={product.price}
            image={undefined}
          />
        ))}
      </div>
    </section>
  );
}