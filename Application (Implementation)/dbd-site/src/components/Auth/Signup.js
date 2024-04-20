import { Grid, Switch } from '@mui/material';
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Signup = () => {
    const [userType, setUserType] = useState('admin');
    const [isAdmin, setIsAdmin] = useState(false);

    const handleToggleChange = () => {
        setIsAdmin(!isAdmin);
    }

    const handleCreateUser = (event) => {
        event.preventDefault();
        console.log('Creating user...');
    }

    return (
        <Grid container spacing={2} width={'page'}>
            <form>
                <Box
                    width={500}
                    height={'page'}
                    my={4}
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    justifyContent="center"
                    gap={2}
                >
                    <h1>Sign Up</h1>
                    <label>
                        Admin?
                    </label>
                    <Switch 
                        id="userType"
                        checked={isAdmin}
                        onChange={handleToggleChange}
                    />
                    <TextField
                        id="username"
                        label="Username"
                        variant="outlined"
                    />
                    <TextField
                        id = "Street Address"
                        label = "Street Address"
                        variant = "outlined"
                    />
                    <TextField
                        id = "City"
                        label = "City"
                        variant = "outlined"
                    />
                    <TextField
                        id = "State"
                        label = "State"
                        variant = "outlined"
                    />
                    <textField
                        id = "Zip Code"
                        label = "Zip Code"
                        variant = "outlined"
                    />
                    {isAdmin ? (
                        <>
                        <TextField 
                            id = "salary"
                            label = "Salary"
                            variant = "outlined"
                        />
                        <TextField 
                            id = 'jobTitle'
                            label = 'Job Title'
                            variant = 'outlined'
                        />
                        </>
                    ) : (
                        <>
                        <TextField
                            id="creditCard"
                            label="Credit Card Number"
                            variant="outlined"
                        />
                        <TextField
                        id="expirationDate"
                        label="Expiration Date"
                        variant="outlined"
                        />
                        </>
                    )}

                    <Button onSubmit={handleCreateUser} type="submit" variant="contained">
                        Submit
                    </Button>
                </Box>
            </form>
        </Grid>
    );
}

export default Signup;
