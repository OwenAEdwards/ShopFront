// ProductList.js
import * as React from 'react';
import Stack from '@mui/material/Stack';
import AppCard from './AppCard'; // Import the AppCard component

const ProductList = ({ products, onProductClick }) => {
  return (
    <div>
      <Stack spacing={2} direction="row">
        {products.map((product, index) => (
          <AppCard key={index} product={product} onClick={onProductClick} />
        ))}
      </Stack>
    </div>
  );
};

export default ProductList;
