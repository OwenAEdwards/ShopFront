import React from 'react';
import { checkName, checkAuth, checkCookie } from '../Helpers/auth';

const UserProfile = () => {
    const name = checkName();

    return (
        <div>
            <h1>Hello {name}</h1>
            <p>This is the user profile page</p>
            <p>You are currently logged in as a {checkAuth()}</p>
            <p>Is the user logged in? {checkCookie() ? 'Yes' : 'No'}</p>
            <p>Balance: NEEDS IMPLEMENTED</p>
        </div>
    );
};

export default UserProfile;