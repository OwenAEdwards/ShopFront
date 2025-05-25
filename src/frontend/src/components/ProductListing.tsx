import ProductCard from "./ui-custom/ProductCard";
import { useUniversal } from "./context/UniversalContext";

function ProductListing(props: any) {
  const searchParams = props.searchParams;
  const category = props.category || searchParams.get("category");
  const { products: { value: mockProducts } } = useUniversal();

  const filteredProducts = category
    ? mockProducts.filter((product) => product.product_category_id === category)
    : mockProducts;

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">
        {category ? `${category} Products` : "All Products"}
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.product_id}
            id={product.product_id}
            name={product.name}
            price={product.price}
            image={undefined} // Ensure image is optional
          />
        ))}
      </div>
      {filteredProducts.length === 0 && (
        <p className="mt-8 text-center text-muted-foreground">
          No products found for this category.
        </p>
      )}
    </div>
  );
}

export default ProductListing;
