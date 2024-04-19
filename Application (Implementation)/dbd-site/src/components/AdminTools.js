import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { Grid} from '@mui/material';
import ProductDetail from './ProductDetail';
import ProductList from './ProductList';
import Container from '@mui/material/Container';
import Dialog from '@mui/material/Dialog';
import { productsData } from './Objects/productsData.objects';

const AdminTools = () => {

    var products = productsData;

    const [selectedProduct, setSelectedProduct] = useState(null);
    const [showAddProductForm, setShowAddProductForm] = useState(false);
    const [showRemoveProductForm, setShowRemoveProductForm] = useState(false);

    const handleProductClick = (product) => {
        setSelectedProduct(product);
    };

    const handleRemoveProduct = (event) => {
        event.preventDefault();
        
        var id = document.getElementById('id').value;
        
        // Check if the ID is empty or invalid
        if (id === '') {
            alert('Please enter a product ID');
            return;
        }else if (id < 1 || id > products.length) {
            alert('Invalid product ID');
            return;
        }

        // Remove the product with the specified ID
        products = products.filter(product => product.id !== parseInt(id));
        
        alert('Product removed! Total products: ' + products.length);

        setShowRemoveProductForm(false);
    };

    const handleAddProduct = (event) => {
        products.push({
            id: (products.length + 1),
            name: document.getElementById('name').value,
            description: document.getElementById('description').value,
            longdescription: document.getElementById('longdescription').value,
            price: document.getElementById('price').value,
        });

        alert('Product added! Total products: ' + products.length);
        event.preventDefault();
        
        setShowAddProductForm(false);
    };

    const handleAddShowProduct = () => {
        setShowAddProductForm(true);
    };

    const handleCloseForm = () => {
        setShowAddProductForm(false);
        setShowRemoveProductForm(false);
    };

    const handleShowRemoveProduct = () => {
        setShowRemoveProductForm(true);
    }

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
                <p> <b>DEBUG NOTE: Products do not currently update on homepage (rendering issue) but it does take effect still </b></p>
                <br />

                <Grid container spacing={2}>
                <Container maxWidth="lg"> {/* Wrap the content in a Container component */}
                    <Grid container spacing={2}>
                        {products.map((product) => (
                        <Grid item xs={12} md={4} key={product.id}>
                            <div className="product-list-wrapper" style={{ overflowWrap: 'break-word' }}>
                            {/* Include the ProductList component */}
                            <ProductList showCartButton={false} products={[product]} onProductClick={handleProductClick} />
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
                    <Grid item xs={12}>
                        {!showRemoveProductForm && (
                            <button onClick={handleShowRemoveProduct}>
                                <RemoveIcon />
                                Remove Product
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
                                <button onClick={handleAddProduct}>Add Product</button>
                            </form>
                            </container>
                        </Dialog>
                    )}
                    {showRemoveProductForm && (
                        <Dialog open={true} onClose={handleCloseForm}>
                            <container maxWidth="page">
                            <h2>Remove Product</h2>
                            <form>
                                <input type="number" id="id" placeholder="Product ID" />
                                <br />
                                <br />
                                <button onClick={handleRemoveProduct}>Remove Product</button>
                            </form>
                            </container>
                        </Dialog>
                    )}

                    {/* blank space */}
                    <Grid item xs={12}/>
                </Grid>
            </Box>
        </div>
    );
};

export default AdminTools;

