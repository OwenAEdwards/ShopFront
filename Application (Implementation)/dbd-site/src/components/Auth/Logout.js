// Login.js
// Login Page for both users and staff members
import React from 'react';
import { clearCustomerAccount } from '../Objects/customerAccounts.objects';

const Logout = () => {
    
    // Clear the customer account
    clearCustomerAccount();
    
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
