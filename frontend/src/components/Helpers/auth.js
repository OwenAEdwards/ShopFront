// File: auth.js
// This file contains helper functions for authentication

import { getCustomerAccount } from "../Objects/customerAccounts.objects";
import { verifyCustomerByCredentials } from "./customerApiCalls";

// global declare these functions here to allow for export

// check if the user is logged in
function checkIfLoggedIn() {
    var customer = getCustomerAccount();
    
    if (customer.length > 0) {
      var customer_auth_username = customer[0].username;
      var customer_auth_password = customer[0].password;
    } else {
      customer = [];
    }

    var user = verifyCustomerByCredentials(customer_auth_username, customer_auth_password);
    
    
}
  
// check if the user is an admin or a user
function checkAuth() {
    if (checkIfLoggedIn == true) {
      return 'User';
    }else{
      return 'Admin';
    }
  }

// check if the user has a name stored in the cookie
function checkName() {
    if (checkIfLoggedIn == true) {
      if (document.cookie.includes('userName=')) {
        return document.cookie.split('userName=')[1].split(';')[0];
      } else {
        return 'User';
      }
    }
}

// export these functions to be used in other components
export { checkIfLoggedIn, checkAuth, checkName };

