// This is a simple example of how to make an API call using the Fetch API. This example fetches data from an API endpoint and logs the retrieved data to the console.

// This is the order data object that will be sent to the API endpoint
const orderObject = {
  orderStatus: 'Placed',
  orderDate: new Date('2010-04-20').toISOString() // YYYY-MM-DD
};

async function placeOrder(customerId, orderObject) {
  // Construct the URL with the customerId variable
  const url = `http://localhost:8080/api/orders/${customerId}`;
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(orderObject) // Body expects JSON string
        });

        if (!response.ok) {
            throw new Error(`API call failed with status ${response.status}`);
        }

        const data = await response.json();
        console.log("Order created successfully:", data);
    }
    catch(error) {
        console.error("Error creating order:", error);
    }
}

async function getOrdersByCustomer(customerId) {
  // Construct the URL with the customerId variable
  const url = `http://localhost:8080/api/orders/customer/${customerId}`;
  try {
      const response = await fetch(url, {
          method: 'GET'
      });

      if (!response.ok) {
          throw new Error(`API call failed with status ${response.status}`);
      }

      const data = await response.json();
      console.log("Orders:", data);
  }
  catch(error) {
      console.error("Error retrieving orders:", error);
  }
}

//placeOrder(1, orderObject);
//getOrdersByCustomer(1);