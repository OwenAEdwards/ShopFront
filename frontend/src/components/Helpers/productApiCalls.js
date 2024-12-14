// This is a simple example of how to make an API call using the Fetch API. This example fetches data from an API endpoint and logs the retrieved data to the console.

// This is the product data object that will be sent to the API endpoint
const productObject = {
    category: 'shoes',
    productName: 'Product 1',
    brand: 'Brand X',
    size: 'Big',
    description: 'This is product 1',
    price: 10.00
};

async function createProduct(productObject) {
    const url = 'http://localhost:8080/api/products';
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(productObject) // Body expects JSON string
        });

        if (!response.ok) {
            throw new Error(`API call failed with status ${response.status}`);
        }

        const data = await response.json();
        console.log("Product created successfully:", data);
    }
    catch(error) {
        console.error("Error creating product:", error);
    }
}

async function getAllProducts() {
    const url = 'http://localhost:8080/api/products';
    try {
        const response = await fetch(url, {
            method: 'GET'
        });

        if (!response.ok) {
            throw new Error(`API call failed with status ${response.status}`);
        }

        const data = await response.json();
        console.log("Products:", data);
        return data;
    }
    catch(error) {
        console.error("Error retrieving products:", error);
    }
}

async function getProductById(productId) {
    // Construct the URL with the productId variable
    const url = `http://localhost:8080/api/products/${productId}`;
    try {
        const response = await fetch(url, {
            method: 'GET'
        });

        if (!response.ok) {
            throw new Error(`API call failed with status ${response.status}`);
        }

        const data = await response.json();
        console.log("Product:", data);
    }
    catch(error) {
        console.error("Error retrieving product:", error);
    }
}

async function getProductByName(productName) {
    // Construct the URL with the productName variable
    const url = `http://localhost:8080/api/products/search?name=${productName}`;
    try {
        const response = await fetch(url, {
        method: 'GET'
        });

        if (!response.ok) {
            throw new Error(`API call failed with status ${response.status}`);
        }

        const data = await response.json();
        console.log("Product:", data);
    }
    catch(error) {
        console.error("Error retrieving product:", error);
    }
}

// Parameters on updateProduct() explained:
// productId: the productId we're updating with new data (via PUT request)
// productObject: the JavaScript object representing new data we're putting in place of the old data
async function updateProductById(productId, productObject) {
    // Changing the productObject being PUT/updated
    productObject = {
        category: 'shirt',
        productName: 'Product 2',
        brand: 'Brand Y',
        size: 'Medium',
        description: 'This is product 2',
        price: 40.00
    }
    // Construct the URL with the productId variable
    const url = `http://localhost:8080/api/products/${productId}`;
    try {
        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json' // Set content type to JSON
            },
            body: JSON.stringify(productObject) // Body expects JSON string
        });

        if (!response.ok) {
            throw new Error(`API call failed with status ${response.status}`);
        }

        const data = await response.json();
        console.log("Product updated successfully:", data);
    }
    catch(error) {
        console.error("Error updating product:", error);
    }
}

async function deleteProductById(productId) {
    // Construct the URL with the productId variable
    const url = `http://localhost:8080/api/products/${productId}`;
    try {
        const response = await fetch(url, {
            method: 'DELETE'
        });

        if (!response.ok) {
            throw new Error(`API call failed with status ${response.status}`);
        }

        console.log("Product deleted successfully"); // Assuming successful deletion doesn't require a response body
    }
    catch(error) {
        console.error("Error deleting product:", error);
    }
}

// TODO: validate with a non-null Stock (requires call to updateInventory() to update quantity on Stock)
async function getProductAvailability(productId, quantity) {
    // Construct the URL with the productId and quantity variables
    const url = `http://localhost:8080/api/products/${productId}/availability?quantity=${quantity}`;
    try {
        const response = await fetch(url, {
        method: 'GET'
        });

        if (!response.ok) {
            throw new Error(`API call failed with status ${response.status}`);
        }

        const data = await response.json();
        console.log("Availability:", data);
    }
    catch(error) {
        console.error("Error retrieving availability:", error);
    }
}

// TODO: make a way to create a Warehouse entity in the database (probably through staffMemberApiCalls.js)
// TODO: then use this Warehouse entity to update the quantity changed
// QUESTION: do we blow away Warehouse???
async function updateInventory(productId, warehouseId, quantityChange) {
    
}

// Export the functions to be used in other files
export { createProduct, getAllProducts, getProductById, getProductByName, updateProductById, deleteProductById};


// Usage examples

//createProduct(productObject);
//getAllProducts();
//getProductById(1);
//getProductByName("Product 1");
//updateProductById(1, productObject);
//deleteProductById(1);
//getProductAvailability(1, 0);
//updateInventory(1, 1, 5);