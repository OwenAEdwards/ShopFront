import { Grid, Input, Switch } from '@mui/material';
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { createCustomer } from '../Helpers/customerApiCalls';

const Signup = () => {
    const [userName, setUserName] = useState('');
    const [isAdmin, setIsAdmin] = useState(false);

    const handleToggleChange = () => {
        setIsAdmin(!isAdmin);
    }

    const handleCreateUser = (event) => {
        event.preventDefault(); // Prevent default form submission behavior

        const userType = isAdmin ? 'admin' : 'customer';

        if (userType === 'admin') {
            // Create admin user here
            alert(`Created admin user with username: ${userName}.`);
        } else {
            const customerObject = {
                name: userName,
            };
            
            try {
                createCustomer(customerObject);
                alert(`Created customer with username: ${userName}.`);
                window.location.reload();
            } catch (error) {
                alert(`Error creating customer: ${error}`);
            }
        }
    }

    return (
        <Grid container spacing={2} width={'page'}>
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
                <form onSubmit={handleCreateUser}>
                    <label>
                        Admin?
                        <Switch 
                            checked={isAdmin}
                            onChange={handleToggleChange}
                        />
                    </label>
                    <br />
                    <br />
                    <Input 
                        value={userName} 
                        onChange={(e) => setUserName(e.target.value)} 
                        placeholder="Enter username"
                    />
                    <br />
                    <br />
                    <br />
                    <Button type="submit" variant="contained">
                        Create User
                    </Button>    
                </form>
            </Box>
        </Grid>
    );
}

export default Signup;
