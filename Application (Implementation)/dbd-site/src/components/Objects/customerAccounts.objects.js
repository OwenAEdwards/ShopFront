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

var userAccounts = [];

function setCustomerAccount(username, password) {
    userAccounts = [
        {
            username: username,
            password: password,
        },
    ];
    console.log("User accounts:", userAccounts);
}

function getCustomerAccount() {
    console.log("User accounts:", userAccounts);
    return userAccounts;
}

function clearCustomerAccount() {
    userAccounts = [];
}

// Export the user accounts object
export { setCustomerAccount as userAccounts, clearCustomerAccount, getCustomerAccount, setCustomerAccount}