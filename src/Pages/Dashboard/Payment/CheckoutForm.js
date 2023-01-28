import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useState } from 'react';

const CheckoutForm = ({ booking }) => {
    const [cardError, setCardError] = useState('');
    const stripe = useStripe();
    const elements = useElements();
    const { price } = booking;

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        });

        if (error) {
            setCardError(error.message)
        } else {
            setCardError('')
        }
    }

    return (
        <>
            <form className='flex flex-col justify-center' onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn btn-success btn-xs mt-[20px] w-3/12 mx-auto' type="submit" disabled={!stripe}>
                    Pay
                </button>
            </form>
            <p className='text-error font-semibold text-center mt-[15px]'>{cardError}</p>
        </>
    );
};

export default CheckoutForm;