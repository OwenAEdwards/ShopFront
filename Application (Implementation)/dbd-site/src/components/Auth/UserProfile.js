import React from 'react';
import { checkName, checkAuth, checkCookie } from '../Helpers/auth';
import { Container } from '@mui/material';

const UserProfile = () => {
    const name = checkName();

    return (
        <div>
            <Container>
            <h1>Hello {name}</h1>
            <p>This is the user profile page</p>
            <p>You are currently logged in as a {checkAuth()}</p>
            <p>Is the user logged in? {checkCookie() ? 'Yes' : 'No'}</p>
            </Container>
        </div>
    );
};

export default UserProfile;