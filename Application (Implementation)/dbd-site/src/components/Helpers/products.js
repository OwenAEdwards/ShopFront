// Purpose: Helper functions for managing product cookies.
function addProductCookie(product) {
    // Get the existing products from the cookie
    let products = getProductCookies();

    // Add the new product to the array
    products.push(product);

    // Convert the array to a string
    let productsString = JSON.stringify(products);

    // Set the cookie with the updated products
    document.cookie = `products=${productsString}`;
}

// Function to get all product cookies
function getProductCookies() {
    // Get the cookie string
    let cookieString = document.cookie;

    // Split the cookie string into individual cookies
    let cookies = cookieString.split(';');

    // Find the products cookie
    let productsCookie = cookies.find(cookie => cookie.trim().startsWith('products='));

    // If the products cookie exists, extract the products array from it
    if (productsCookie) {
        let productsString = productsCookie.split('=')[1];
        return JSON.parse(productsString);
    }

    // If the products cookie doesn't exist, return an empty array
    return [];
}

// Function to delete a product cookie by product id
function deleteProductCookie(productId) {
    // Get the existing products from the cookie
    let products = getProductCookies();

    // Find the index of the product with matching id in the array
    //let index = products.findIndex(product => product.id === productId);
    let index = products.length;
    products.pop()

    // If the product is found, remove it from the array
    if (index !== -1) {
        products.splice(index, 1);

        // Convert the array to a string
        let productsString = JSON.stringify(products);

        // Set the cookie with the updated products
        document.cookie = `products=${productsString}`;
    }
}

function setProductCookies(products) {
    // Convert the array to a string
    let productsString = JSON.stringify(products);

    // Set the cookie with the updated products
    document.cookie = `products=${productsString}`
}

export { addProductCookie, getProductCookies, deleteProductCookie, setProductCookies };   