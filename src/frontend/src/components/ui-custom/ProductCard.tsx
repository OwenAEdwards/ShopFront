import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ProductCardProps {
  id: string | number;
  name: string;
  price: number | string;
  image: string | undefined;
}

const ProductCard: React.FC<ProductCardProps> = ({ id, name, price, image }) => {
  return (
    <Card key={id} className="flex flex-col">
      <CardHeader>
        <img
          src={image}
          alt={name}
          className="rounded-lg object-cover w-full h-40"
        />
      </CardHeader>
      <CardContent className="flex-1 flex flex-col justify-between">
        <div>
          <CardTitle>{name}</CardTitle>
          <p className="text-muted-foreground">{price}</p>
        </div>
        <Button className="mt-4 w-full">Add to Cart</Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
