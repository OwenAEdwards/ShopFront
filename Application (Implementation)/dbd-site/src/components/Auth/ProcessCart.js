// ProcessCart.js
// ProcessCart is a page that processes the cart of a user.
import React from 'react';
import Card from '@mui/material/Card';
import MakePayments from './MakePayments';


const ProcessCart = () => {
    console.log('Processing cart');
    return (
    <div>
        <Card variant="outlined">
            <CardContent>
            <Typography variant="h5" component="div">
                <h1>Cart</h1>
            </Typography>
            <Typography variant="body2" color="text.secondary">
                <MakePayments />
            </Typography>
        </CardContent>
      </Card>
    </div>
    );
}

export default ProcessCart;