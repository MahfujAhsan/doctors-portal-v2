import React from 'react';
import Appointment from '../Appointment/Appointment';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Doctors from '../Doctors/Doctors';
import InfoCards from '../InfoCards/InfoCards';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <React.Fragment>
            <div className='mx-5'>
                <Banner></Banner>
                <InfoCards></InfoCards>
                <Services></Services>
                <Appointment></Appointment>
                <Testimonial></Testimonial>
                <Doctors></Doctors>
                <Contact></Contact>
            </div>
        </React.Fragment>
    );
};

export default Home;