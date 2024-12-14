import * as React from 'react';
import Stack from '@mui/material/Stack';
import AppCard from './AppCard';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import ProductDetail from './ProductDetail';

const ProductList = ({ products, onProductClick, showCartButton }) => {
  const [open, setOpen] = React.useState(false);
  const [selectedProduct, setSelectedProduct] = React.useState(null);

  const handleOpen = (product) => {
    setSelectedProduct(product);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Stack spacing={2} direction="row">
        {products.map((product) => (
          <AppCard
            key={product.id} // Use a unique identifier as the key (assuming 'id' exists on product)
            product={product}
            onClick={() => handleOpen(product)}
          />
        ))}
      </Stack>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          {selectedProduct && (
            <div>
              {/* Display the product details in the dialog, pass in selectedProduct */}
              <ProductDetail product={selectedProduct} showCartButton={showCartButton} />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ProductList;
