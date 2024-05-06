
// This is a simple example of how to make an API call using the Fetch API. This example fetches data from an API endpoint and logs the retrieved data to the console.

function testFetch() {

    // This is the data object that will be sent to the API endpoint
    const dataObject = {
        category: 'shoes',
        productName: 'Product 1',
        brand: 'Brand X',
        size: 'Big',
        description: 'This is product 1',
        price: 10.00
    };

    const jsonData = JSON.stringify(dataObject);

    fetch('http://localhost:8080/api/products', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: jsonData
    })
    .then(response => console.log(response))
    .then(data => console.log(data))
    .catch(error => console.error(error));
}

testFetch();