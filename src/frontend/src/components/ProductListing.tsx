import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const mockProducts = [
  { id: 1, name: "T-Shirt", price: "$29.99", image: "https://source.unsplash.com/400x400/?tshirt", category: "Clothing" },
  { id: 2, name: "Headphones", price: "$199.99", image: "https://source.unsplash.com/400x400/?headphones", category: "Electronics" },
  { id: 3, name: "Sofa", price: "$899.99", image: "https://source.unsplash.com/400x400/?sofa", category: "Home" },
  { id: 4, name: "Novel", price: "$14.99", image: "https://source.unsplash.com/400x400/?book", category: "Books" },
  { id: 5, name: "Sneakers", price: "$79.99", image: "https://source.unsplash.com/400x400/?sneakers", category: "Clothing" },
];

function ProductListing(props: any) {
  const searchParams = props.searchParams;
  const category = props.category || searchParams.get("category");

  const filteredProducts = category
    ? mockProducts.filter((product) => product.category === category)
    : mockProducts;

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">
        {category ? `${category} Products` : "All Products"}
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <Card key={product.id} className="flex flex-col">
            <CardHeader>
              <img
                src={product.image}
                alt={product.name}
                className="rounded-lg object-cover w-full h-40"
              />
            </CardHeader>
            <CardContent className="flex-1 flex flex-col justify-between">
              <div>
                <CardTitle>{product.name}</CardTitle>
                <p className="text-muted-foreground">{product.price}</p>
              </div>
              <Button className="mt-4 w-full">Add to Cart</Button>
            </CardContent>
          </Card>
        ))}
      </div>
      {filteredProducts.length === 0 && (
        <p className="mt-8 text-center text-muted-foreground">No products found for this category.</p>
      )}
    </div>
  );
}

export default ProductListing;
