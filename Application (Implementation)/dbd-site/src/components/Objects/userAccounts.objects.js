// User accounts object
// This object contains the user accounts for the application
// The user accounts are used for authentication purposes
// The user accounts contain the following fields:

/*
CREATE TABLE IF NOT EXISTS Addresses (
    address_id SERIAL PRIMARY KEY,
    address_type VARCHAR(20) NOT NULL, -- 'Delivery' or 'Payment'
    street_address VARCHAR(255) NOT NULL,
    city VARCHAR(100) NOT NULL,
    state VARCHAR(50) NOT NULL,
    zip_code VARCHAR(10) NOT NULL
);
*/

const userAccounts = [
    {
        username: "Christian",
        accountType: "admin",
    },
    {
        username: "Elias",
        accountType: "admin",
    },
    {
        username: "Owen",
        accountType: "admin",
    },
    {
        username: "user",
        creditCard: "1234",
        accountType: "user",
        streetAddress: "",
        city: "",
        state: "",
        zipCode: "",
        balance: 100
    }
];

// Export the user accounts object
export { userAccounts}