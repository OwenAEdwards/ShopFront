import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Categories = () => {
  const navigate = useNavigate();
  const categories = ["Clothing", "Electronics", "Home", "Books"];

  const handleCategoryClick = (category: string) => {
    navigate(`/products?category=${encodeURIComponent(category)}`);
  };

  return (
    <section className="container mx-auto py-10">
      <h3 className="text-2xl font-semibold mb-6">Shop by Category</h3>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {categories.map((cat) => (
          <Button
            variant="outline"
            key={cat}
            className="py-8 text-lg"
            onClick={() => handleCategoryClick(cat)}
          >
            {cat}
          </Button>
        ))}
      </div>
    </section>
  );
};

export default Categories;
