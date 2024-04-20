
// This is a simple example of how to make an API call using the Fetch API. This example fetches data from an API endpoint and logs the retrieved data to the console.

function testFetch() {

    // This is the data object that will be sent to the API endpoint
    const dataObject = {
        id: 1,
        name: 'Product 1',
        description: 'This is product 1',
        price: 10.00
    };

    fetch('http://localhost:8080/api/products', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: dataObject
    })
    .then(response => console.log(response.status))
    .then(data => console.log(data))
    .catch(error => console.error(error));
}

testFetch();