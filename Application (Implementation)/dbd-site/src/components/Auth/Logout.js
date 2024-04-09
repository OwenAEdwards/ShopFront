// Login.js
// Login Page for both users and staff members
import React from 'react';

const Logout = () => {
    console.log('Logout successful')

    // Code to delete the login cookie
    document.cookie = "loggedIn=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

    return (
        <div>
            {/* Logout content */}
            <div className="logout-box">
                <br/>
                <h2>You have been successfully logged out</h2>
                <br/>
            </div>
        </div>
    );
}

export default Logout;
