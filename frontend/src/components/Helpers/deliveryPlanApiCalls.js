// This is a simple example of how to make an API call using the Fetch API. This example fetches data from an API endpoint and logs the retrieved data to the console.

async function createDeliveryPlan(orderId) {
  // Construct the URL with the orderId variable
  const url = `http://localhost:8080/api/delivery-plans/${orderId}`;
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
            // TODO: no body on createDeliveryPlan, it shouldn't be a POST request, I think it should be an internal
            // Java call to Order (after an Order is created) that automatically creates an associated Order object
            // on the spot
        });

        if (!response.ok) {
            throw new Error(`API call failed with status ${response.status}`);
        }

        const data = await response.json();
        console.log("Delivery plan created successfully:", data);
    }
    catch(error) {
        console.error("Error creating delivery plan:", error);
    }
}

createDeliveryPlan(1);