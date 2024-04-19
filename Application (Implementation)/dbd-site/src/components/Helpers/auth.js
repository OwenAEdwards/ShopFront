// File: auth.js
// This file contains helper functions for authentication

// global declare these functions here to allow for export

// check if the user is logged in
function checkCookie() {
    const isLoggedIn = document.cookie.includes('loggedIn=true');
    var loggedIn = false;
    if (isLoggedIn) {
      var loggedIn = true;
    } else {
      loggedIn = false;
    };
    return loggedIn;
  }
  
// check if the user is an admin or a user
function checkAuth() {
    if (checkCookie() == true) {
      if (document.cookie.includes('userType=admin')) {
        return 'Admin';
      } else {
        return 'User';
      }
    }
  }

// check if the user has a name stored in the cookie
function checkName() {
    if (checkCookie() == true) {
      if (document.cookie.includes('userName=')) {
        return document.cookie.split('userName=')[1].split(';')[0];
      } else {
        return 'User';
      }
    }
}

// export these functions to be used in other components
export { checkCookie, checkAuth, checkName };

