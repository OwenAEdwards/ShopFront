import * as React from 'react';
import Stack from '@mui/material/Stack';
import AppCard from './AppCard';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

const ProductList = ({ products, onProductClick }) => {
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
        {products.map((product, index) => (
          <AppCard key={index} product={product} onClick={() => handleOpen(product)} />
        ))}
      </Stack>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{selectedProduct && selectedProduct.name}</DialogTitle>
        <DialogContent>
          {selectedProduct && (
            <div>
              <p>Description: {selectedProduct.longdescription}</p>
              <p>Price: ${selectedProduct.price}</p>
              {/* Add more details as needed */}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ProductList;
