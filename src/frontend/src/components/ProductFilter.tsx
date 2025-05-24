import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { useUniversal } from "@/components/context/UniversalContext";

type ProductFilterProps = {
  searchParams: URLSearchParams;
  onCategoryChange?: (category: string | null) => void;
};

const ProductFilter = ({ searchParams, onCategoryChange }: ProductFilterProps) => {
  const { filters, categories, filters: { set: setFilters } } = useUniversal();

  // Get category from props or fallback to context filters
  const currentCategory =
    searchParams.get("category") || filters.value.category || "";

  const selected = currentCategory ? [currentCategory] : [];

  const handleCheckboxChange = (cat: string) => {
    const updatedCategory = selected.includes(cat) ? null : cat;

    // Update context filters
    setFilters({ ...filters.value, category: updatedCategory });

    // Notify parent to update URL/searchParams or refresh listing
    onCategoryChange?.(updatedCategory);
  };

  return (
    <aside className="w-64 space-y-4 p-4 border-r">
      <h2 className="text-lg font-semibold">Filter by Category</h2>
      <Separator />

      <div className="space-y-2">
        {categories.value.length > 0 ? (
          categories.value.map((cat) => (
            <div key={cat} className="flex items-center space-x-2">
              <Checkbox
                id={`category-${cat}`}
                checked={selected.includes(cat)}
                onCheckedChange={() => handleCheckboxChange(cat)}
              />
              <Label htmlFor={`category-${cat}`} className="text-sm">
                {cat}
              </Label>
            </div>
          ))
        ) : (
          <p>No categories available</p>
        )}
      </div>
    </aside>
  );
};

export default ProductFilter;
