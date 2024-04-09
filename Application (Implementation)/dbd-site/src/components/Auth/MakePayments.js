// MakePayments.js
// MakePayments is a page that allows users to make payments.
import React, { useState } from 'react';

const MakePayments = () => {
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
            <h1>Make Payments</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Amount:
                    <input type="number" value={amount} onChange={handleAmountChange} />
                </label>
                <br />
                <label>
                    Payment Method:
                    <input type="text" value={paymentMethod} onChange={handlePaymentMethodChange} />
                </label>
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default MakePayments;