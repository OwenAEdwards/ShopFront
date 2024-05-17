// This is a simple example of how to make an API call using the Fetch API. This example fetches data from an API endpoint and logs the retrieved data to the console.

// This is the customer data object that will be sent to the API endpoint
// NOTE: customer has credit cards and addresses but these are not explicitly columns in the table, balance is 0.00 by default
const customerObject = {
    name: 'Owen'
};

const addressObject = {
    addressType: 'Delivery',
    streetAddress: 'Wall Street',
    city: 'New York',
    state: 'New York',
    zipCode: '10004'
};

const creditCardObject = {
    cardNumber: '838025628908905',
    expirationDate: '2010-04-20' // YYYY-MM-DD
};

async function createCustomer(customerObject) {
    const url = 'http://localhost:8080/api/customers';
    try {
      const response = await fetch(url, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(customerObject) // Body expects JSON string
      });

      if (!response.ok) {
          throw new Error(`API call failed with status ${response.status}`);
      }

      const data = await response.json();
      console.log("Customer created successfully:", data);
  }
  catch(error) {
      console.error("Error creating customer:", error);
  }
}

async function addAddressToCustomer(customerId, addressObject) {
    const url = `http://localhost:8080/api/customers/${customerId}/addresses`;
    addressObject.customerId = customerId; // Associate specific customerId with addressObject

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(addressObject) // Body expects JSON string
        });
  
        if (!response.ok) {
            throw new Error(`API call failed with status ${response.status}`);
        }
  
        const data = await response.json();
        console.log("Address added successfully:", data); // Assuming successful addition returns the updated customer object
    }
    catch(error) {
        console.error("Error adding address:", error);
    }
}

// Parameters on updateAddress() explained:
// customerId: the customerId we're updating with new data (via PUT request)
// addressObject: the JavaScript object representing new data we're putting in place of the old data
async function updateAddress(customerId, addressObject) {
  // Changing the addressObject being PUT/updated
  addressObject = {
      addressType: 'Delivery',
      streetAddress: 'New Street',
      city: 'Los Angeles',
      state: 'California',
      zipCode: '92011',
      addressId: 1 // assuming this, this is bad practice
  }
  // Construct the URL with the customerId and addressId variables
  const url = `http://localhost:8080/api/customers/${customerId}/addresses/${addressObject.addressId}`;
  try {
      const response = await fetch(url, {
          method: 'PUT',
          headers: {
              'Content-Type': 'application/json' // Set content type to JSON
          },
          body: JSON.stringify(addressObject) // Body expects JSON string
      });

      if (!response.ok) {
          throw new Error(`API call failed with status ${response.status}`);
      }

      const data = await response.json();
      console.log("Address updated successfully:", data);
  }
  catch(error) {
      console.error("Error updating address:", error);
  }
}

async function deleteCustomerAddress(customerId, addressId) {
  // Construct the URL with the customerId and addressId variables
  const url = `http://localhost:8080/api/customers/${customerId}/addresses/${addressId}`;
  try {
      const response = await fetch(url, {
          method: 'DELETE'
      });

      if (!response.ok) {
          throw new Error(`API call failed with status ${response.status}`);
      }

      console.log("Address deleted successfully"); // Assuming successful deletion doesn't require a response body
  }
  catch(error) {
      console.error("Error deleting address:", error);
  }
}

async function addCreditCardToCustomer(customerId, creditCardObject) {
    const url = `http://localhost:8080/api/customers/${customerId}/credit-cards`;
    creditCardObject.customerId = customerId; // Associate specific customerId with addressObject

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(creditCardObject) // Body expects JSON string
        });
  
        if (!response.ok) {
            throw new Error(`API call failed with status ${response.status}`);
        }
  
        const data = await response.json();
        console.log("Credit card added successfully:", data); // Assuming successful addition returns the updated customer object
    }
    catch(error) {
        console.error("Error adding credit card:", error);
    }
}

// Parameters on updateCreditCard() explained:
// customerId: the customerId we're updating with new data (via PUT request)
// creditCardObject: the JavaScript object representing new data we're putting in place of the old data
async function updateCreditCard(customerId, creditCardObject) {
  // Changing the creditCardObject being PUT/updated
  creditCardObject = {
      cardNumber: '2946987302258922',
      expirationDate: '2024-05-13', // YYYY-MM-DD
      cardId: 1 // assuming this, this is bad practice
  }
  // Construct the URL with the productId variable
  const url = `http://localhost:8080/api/customers/${customerId}/credit-cards/${creditCardObject.customerId}`;
  try {
      const response = await fetch(url, {
          method: 'PUT',
          headers: {
              'Content-Type': 'application/json' // Set content type to JSON
          },
          body: JSON.stringify(creditCardObject) // Body expects JSON string
      });

      if (!response.ok) {
          throw new Error(`API call failed with status ${response.status}`);
      }

      const data = await response.json();
      console.log("Credit card updated successfully:", data);
  }
  catch(error) {
      console.error("Error updating credit card:", error);
  }
}

async function deleteCustomerCreditCard(customerId, cardId) {
  // Construct the URL with the customerId and cardId variables
  const url = `http://localhost:8080/api/customers/${customerId}/credit-cards/${cardId}`;
  try {
      const response = await fetch(url, {
          method: 'DELETE'
      });

      if (!response.ok) {
          throw new Error(`API call failed with status ${response.status}`);
      }

      console.log("Credit card deleted successfully"); // Assuming successful deletion doesn't require a response body
  }
  catch(error) {
      console.error("Error deleting credit card:", error);
  }
}

export { createCustomer, addAddressToCustomer, updateAddress, deleteCustomerAddress, addCreditCardToCustomer, updateCreditCard, deleteCustomerCreditCard };

// Export the functions to be used in other files

// TODO: add getCustomerById() and getAllCustomers() to staffMemberApiCalls.js probably 

// TODO: probably put some DELETE request for Customer in staffMemberApiCalls.js

//createCustomer(customerObject);

//addAddressToCustomer(1, addressObject);
//updateAddress(1, addressObject);
//deleteCustomerAddress(1, 1);

//addCreditCardToCustomer(1, creditCardObject);
//updateCreditCard(1, creditCardObject);
//deleteCustomerCreditCard(1, 1);