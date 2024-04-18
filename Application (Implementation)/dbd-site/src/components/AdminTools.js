import AddIcon from '@mui/icons-material/Add';
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { Grid } from '@mui/material';
import { handleAddProduct } from './Home';
import ProductDetail from './ProductDetail';
import ProductListEdit from './ProductList';
import Container from '@mui/material/Container';
import Dialog from '@mui/material/Dialog';

const AdminTools = () => {

    console.log("Admin tools: ", products);

    const [selectedProduct, setSelectedProduct] = useState(null);
    const [showAddProductForm, setShowAddProductForm] = useState(false);

    const handleProductClick = (product) => {
        setSelectedProduct(product);
    };

    const handlePushProduct = (event) => {
        products.push({
            id: (products.length + 1),
            name: document.getElementById('name').value,
            description: document.getElementById('description').value,
            longdescription: document.getElementById('longdescription').value,
            price: document.getElementById('price').value,
        });

        alert('Product added! Total products: ' + products.length);
        event.preventDefault();
        console.log("Product to be added: ", products[products.length - 1]);
        handleAddProduct(products[products.length - 1]);
        
        setShowAddProductForm(false);
    };

    const handleAddShowProduct = () => {
        setShowAddProductForm(true);
    };

    const handleCloseForm = () => {
        setShowAddProductForm(false);
    };

    return (
        <div>
            <Box
                height={500}
                width={500}
                my={0}
                display="ho"
                alignItems="top"
                gap={4}
                p={2}
            >
                <h1>Admin Tools</h1>
                <br />
                <h2>Product Management</h2>
                <p>Click a product to edit</p>
                <br />

                <Grid container spacing={2}>
                    <Container maxWidth="page">
                        {/* Wrap the content in a Container component */}
                        <Grid container spacing={2}>
                            {products.map((product) => (
                                <Grid item xs={12} md={2} key={product.id}>
                                    <div
                                        className="product-list-wrapper"
                                        style={{ overflowWrap: 'break-word' }}
                                    >
                                        <ProductListEdit
                                            products={[product]}
                                            onProductClick={handleProductClick}
                                            showCartButton={false}
                                        />
                                    </div>
                                </Grid>
                            ))}
                            <Grid item xs={12} md={6}>
                                {selectedProduct && <ProductDetail product={selectedProduct} />}
                            </Grid>
                        </Grid>
                    </Container>

                    <Grid item xs={12}>
                        {!showAddProductForm && (
                            <button onClick={handleAddShowProduct}>
                                <AddIcon />
                                Add Product
                            </button>
                        )}
                    </Grid>

                    {showAddProductForm && (
                        <Dialog open={true} onClose={handleCloseForm}>
                            <container maxWidth="page">
                            <h2>Add Product</h2>
                            <form>
                                <input type="text" id="name" placeholder="Name" />
                                <input type="text" id="description" placeholder="Description" />
                                <input type="text" id="longdescription" placeholder="Long Description" />
                                <input type="number" id="price" placeholder="Price" />
                                <br />
                                <br />
                                <button onClick={handlePushProduct}>Add Product</button>
                            </form>
                            </container>
                        </Dialog>
                    )}
                </Grid>
            </Box>
        </div>
    );
};

export default AdminTools;
