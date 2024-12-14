import { Grid, Input, Switch } from '@mui/material';
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { addAddressToCustomer, addCreditCardToCustomer, createCustomer } from '../Helpers/customerApiCalls';

const Signup = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [addressObject, setAddressObject] = useState({
        addressType: '',
        streetAddress: '',
        city: '',
        state: '',
        zipCode: ''
    });

    const [creditCardObject, setCreditCardObject] = useState({
        cardNumber: '',
        expirationDate: ''
    });
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
                password: password,
            };

            try {
                createCustomer(customerObject);
                addAddressToCustomer(1, addressObject);
                addCreditCardToCustomer(1, creditCardObject);

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
                <Input 
                    type="password"
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    placeholder="Enter password"
                />
                <br />
                <h2>Address</h2>
                <Input 
                    value={addressObject.addressType} 
                    onChange={(e) => setAddressObject({...addressObject, addressType: e.target.value})} 
                    placeholder="Enter address type"
                />
                <br />
                <Input 
                    value={addressObject.streetAddress} 
                    onChange={(e) => setAddressObject({...addressObject, streetAddress: e.target.value})} 
                    placeholder="Enter street address"
                />
                <br />
                <Input 
                    value={addressObject.city} 
                    onChange={(e) => setAddressObject({...addressObject, city: e.target.value})} 
                    placeholder="Enter city"
                />
                <br />
                <Input 
                    value={addressObject.state} 
                    onChange={(e) => setAddressObject({...addressObject, state: e.target.value})} 
                    placeholder="Enter state"
                />
                <br />
                <Input 
                    value={addressObject.zipCode} 
                    onChange={(e) => setAddressObject({...addressObject, zipCode: e.target.value})} 
                    placeholder="Enter zip code"
                />
                <br />
                <br />
                <h2>Credit Card</h2>
                <Input 
                    value={creditCardObject.cardNumber} 
                    onChange={(e) => setCreditCardObject({...creditCardObject, cardNumber: e.target.value})} 
                    placeholder="Enter card number"
                />
                <br />
                <Input 
                    value={creditCardObject.expirationDate} 
                    onChange={(e) => setCreditCardObject({...creditCardObject, expirationDate: e.target.value})} 
                    placeholder="Enter expiration date (YYYY-MM-DD)"
                />
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
