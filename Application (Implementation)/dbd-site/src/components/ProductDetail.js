// ProductDetail.js
import * as React from 'react';

const ProductDetail = ({ product }) => {
  return (
    <div>
      <h2>{product.name}</h2>
      <p>Description: {product.description}</p>
      <p>Price: ${product.price}</p>
      <p>Long Description: {product.longdescription}</p>
      {/* Add any other details you want to display */}
    </div>
  );
};

export default ProductDetail;
