// Login.js
// Login Page for both users and staff members

import React from 'react';
import Grid from '@mui/material/Grid';
import Item from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

const Login = () => {
    console.log('Login Page Ran');
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
            <Grid 
            container
            spacing={2}
            direction="column"
            >
                <Grid item xs={4}>
                    <Item> <h1>Login:</h1> </Item>
                </Grid>
                <Grid item xs={4}>
                    <Item> <TextField id="outlined-basic" label="Username" variant="outlined" /> </Item>
                </Grid>
                <Grid item xs={4}>
                    <Item> <TextField id="outlined-basic" label="Password" variant="outlined" /> </Item>
                </Grid>
                <Grid item xs={8}>
                    <Item><Button variant='contained'>Sign-in</Button></Item>
                <Grid item xs={8}>
                    <Item> <br/> <br/> <h3><u>Need an account?</u></h3></Item>
                </Grid>
                <Grid item xs={8}>
                    <Item><Button variant='outlined'>Sign-up</Button></Item>
                </Grid>
            </Grid>
            </Grid>
        </Box>
    );
}

export default Login;
