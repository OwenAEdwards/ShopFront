// MakePayments.js
// MakePayments is a page that allows users to make payments.
import React, { useState } from 'react';
import Chip from '@mui/material/Chip';
import { totalCartPrice } from '../Helpers/cart';

const MakePayments = (products) => {
    const [amount, setAmount] = useState(0);
    const [paymentMethod, setPaymentMethod] = useState('');

    const handleAmountChange = (e) => {
        setAmount(e.target.value);
    };

    const handlePaymentMethodChange = (e) => {
        setPaymentMethod(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your payment processing logic here
    };

    return (
        <div>
            <h1>Total amount owed:</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    <Chip label={'$'+totalCartPrice()} variant="outlined" />
                </label>
                <br /> <br />
                <label>
                    Payment Method:
                </label>
                <br />
                <label>
                    <input type="radio" name="paymentMethod" value="creditCard" checked={paymentMethod === "creditCard"} onChange={handlePaymentMethodChange} />
                    Credit Card
                </label>
                <br />
                <label>
                    <input type="radio" name="paymentMethod" value="accountBalance" checked={paymentMethod === "accountBalance"} onChange={handlePaymentMethodChange} />
                    Account Balance
                </label>
                <br /> <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default MakePayments;