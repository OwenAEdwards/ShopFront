import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ProductFilter from "@/components/ProductFilter";
import ProductListing from "@/components/ProductListing";

function ProductListingPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const [category, setCategory] = useState<string | null>(searchParams.get("category"));

  // When category changes, update URL params and state
  const handleCategoryChange = (newCategory: string | null) => {
    const params = new URLSearchParams(location.search);
    if (newCategory) {
      params.set("category", newCategory);
    } else {
      params.delete("category");
    }
    navigate({ search: params.toString() });
    setCategory(newCategory);
  };

  useEffect(() => {
    // Sync local state if URL changes externally
    setCategory(searchParams.get("category"));
  }, [location.search]);

  return (
    <div className="flex">
      <ProductFilter searchParams={searchParams} onCategoryChange={handleCategoryChange} />
      <ProductListing category={category} searchParams={searchParams} />
    </div>
  );
}

export default ProductListingPage;
