// ProductList.js
import React from "react";
import {Button} from "@nextui-org/react";

const ProductList = ({ products, onProductClick }) => {
  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Button onClick={() => onProductClick(product)}>
              {product.name}
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
