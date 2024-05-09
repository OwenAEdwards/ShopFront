// This is a simple example of how to make an API call using the Fetch API. This example fetches data from an API endpoint and logs the retrieved data to the console.

// This is the data object that will be sent to the API endpoint
const productObject = {
    category: 'shoes',
    productName: 'Product 1',
    brand: 'Brand X',
    size: 'Big',
    description: 'This is product 1',
    price: 10.00
};

// TODO: make function calls be performed asynchronously
// TODO: add exception handling for HTTP statuses

function testCreateProduct(productObject) {
    const url = 'http://localhost:8080/api/products';
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(productObject) // Body expects JSON string
    })
    .then(response => console.log(response))
    .then(data => console.log(data))
    .catch(error => console.error(error));
}

function testGetAllProducts() {
    const url = 'http://localhost:8080/api/products';
    fetch(url, {
        method: 'GET'
    })
    .then(response => response.json()) // Parse the response as JSON
    .then(data => console.log(data))
    .catch(error => console.error(error));
}

function testGetProductById(productId) {
    // Construct the URL with the productId variable
    const url = `http://localhost:8080/api/products/${productId}`;
    fetch(url, {
        method: 'GET'
    })
    .then(response => response.json()) // Parse the response as JSON
    .then(data => console.log(data))
    .catch(error => console.error(error));
}

function testGetProductByName(productName) {
    // Construct the URL with the productName variable
    const url = `http://localhost:8080/api/products/search?name=${productName}`;
    fetch(url, {
        method: 'GET'
    })
    .then(response => response.json()) // Parse the response as JSON
    .then(data => console.log(data))
    .catch(error => console.error(error));
}

// Parameters on testUpdateProduct() explained:
// productId: the productId we're updating with new data (via PUT request)
// productObject: the JavaScript object representing new data we're putting in place of the old data
function testUpdateProduct(productId, productObject) {
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
    fetch(url, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json' // Set content type to JSON
          },
        body: JSON.stringify(productObject) // Body expects JSON string
    })
    .then(response => response.json()) // Parse the response as JSON
    .then(data => console.log(data))
    .catch(error => console.error(error));
}

function testDeleteProduct(productId) {
    // Construct the URL with the productId variable
    const url = `http://localhost:8080/api/products/${productId}`;
    fetch(url, {
        method: 'DELETE'
    })
    //.then(response => response.json()) // Parse the response as JSON
    .then(data => console.log(data))
    .catch(error => console.error(error));
}

//testCreateProduct(productObject);
//testGetAllProducts();
//testGetProductById(1);
//testGetProductByName("Product 1");
//testUpdateProduct(1, productObject);
//testDeleteProduct(1);