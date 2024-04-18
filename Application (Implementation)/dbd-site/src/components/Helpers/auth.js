// global declare these functions here to allow for export
function checkCookie() {
    const isLoggedIn = document.cookie.includes('loggedIn=true');
    var loggedIn = false;
    if (isLoggedIn) {
      var loggedIn = true;
    } else {
      loggedIn = false;
    };
    console.log('loggedIn:', loggedIn)
    return loggedIn;
  }
  
  function checkAuth() {
    if (checkCookie() == true) {
      if (document.cookie.includes('userType=admin')) {
        return 'Admin';
      } else {
        return 'User';
      }
    }
  }

    export { checkCookie, checkAuth };