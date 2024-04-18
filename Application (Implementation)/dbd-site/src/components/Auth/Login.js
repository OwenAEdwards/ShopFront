// Login.js
// Login Page for both users and staff members

import React from 'react';
import Grid from '@mui/material/Grid';
import Item from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

const Login = () => {

    // Handle form submission
    const handleFormSubmit = (event) => {
        event.preventDefault(); // Prevent form submission

        // Get the input values
        const username = event.target.elements.username.value;
        const password = event.target.elements.password.value;
        const userType = event.target.elements.userType.value;

        // Perform login credential check
        if (username === 'admin' && password === 'password' && userType === 'admin') {
            // Successful login
            alert('Login successful');
            // Set a cookie to indicate that the user is logged in
            document.cookie = 'loggedIn=true; path=/'; // Modify the cookie name and path as needed
            document.cookie = 'userType=admin; path=/'; // Modify the cookie name and path as needed
            // Redirect to the dashboard or perform any other action
        } else if (username === 'user' && password === 'password' && userType === 'user') {
            // Successful login
            alert('Login successful');
            // Set a cookie to indicate that the user is logged in
            document.cookie = 'loggedIn=true; path=/'; // Modify the cookie name and path as needed
            document.cookie = 'userType=user; path=/'; // Modify the cookie name and path as needed
            // Redirect to the dashboard or perform any other action
        } else {
            // Invalid credentials
            return alert('Invalid username or password');
            // Display an error message or perform any other action
        }
    };
    
    // return login form here
    return (
        <Box height={500}
            width={500}
            my={4}
            display="flex"
            alignItems="center"
            gap={4}
            p={2}
        >
            {/* Below is the login page form.*/}
            <form onSubmit={(event) => handleFormSubmit(event)}>
                <Grid
                    container
                    spacing={2}
                    direction="column"
                >
                    <Grid item xs={4}>
                        <Item> <h1>Login:</h1> </Item>
                    </Grid>
                    <Grid item xs={4}>
                        <Item> <TextField id="outlined-basic" label="Username" variant="outlined" name="username" /> </Item>
                    </Grid>
                    <Grid item xs={4}>
                        <Item> <TextField id="outlined-basic" type='password' label="Password" variant="outlined" name="password" /> </Item>
                    </Grid>
                    <Grid item xs={4}>
                        <Item>
                            <TextField
                                id="outlined-basic"
                                label="User Type"
                                variant="outlined"
                                name="userType"
                                select
                                SelectProps={{
                                    native: true,
                                }}
                            >
                                <option value="admin">Admin</option>
                                <option value="user">User</option>
                            </TextField>
                        </Item>
                    </Grid>
                    <Grid item xs={8}>
                        <Item><Button variant='contained' type="submit" >Sign-in</Button></Item>
                    </Grid>
                    <Grid item xs={8}>
                        <Item> <br /> <br /> <h3><u>Need an account?</u></h3></Item>
                    </Grid>
                    <Grid item xs={8}>
                        <Item><Button variant='outlined'>Sign-up</Button></Item>
                    </Grid>
                </Grid>
            </form>
        </Box>
    );
}

export default Login;
