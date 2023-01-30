import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import Spinner from '../../Shared/Spinner/Spinner';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);



const Payment = () => {
    const booking = useLoaderData();
    const navigation = useNavigation();
    const { treatmentName, price, selectedDate, slot } = booking;
    if(navigation.state === "loading") {
        return <Spinner />
    };
    return (
        <>
            <div className='flex justify-center items-center h-screen flex-col'>
                <h2 className='text-4xl font-bold'>Payment For: {treatmentName}</h2>
                <p className='text-2xl mt-[10px]'>Please Pay: <span className='text-primary font-semibold'>${price}</span> For Your Appointment on <span className='text-error'>{selectedDate}</span> at <span className='text-error'>{slot}</span></p>

                <div className='w-5/12 my-6 shadow-lg mt-[55px] py-[50px] px-[40px] rounded-lg'>
                    <Elements stripe={stripePromise}>
                        <CheckoutForm booking={booking} />
                    </Elements>
                </div>
            </div>
        </>
    );
};

export default Payment;