import React from 'react';
import Service from './Service';
import Fluoride from "../../../assets/images/fluoride.png";
import Cavity from "../../../assets/images/cavity.png";
import Whitening from "../../../assets/images/whitening.png";

const Services = () => {

    const servicesData = [
        {
            id: 1,
            icon: Fluoride,
            name: "Fluoride Treatment",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia ullam dignissimos optio neque dicta molestiae?",
        },
        {
            id: 2,
            icon: Cavity,
            name: "Cavity Filling",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia ullam dignissimos optio neque dicta molestiae?",
        },
        {
            id: 3,
            icon: Whitening,
            name: "Teeth Whitening",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia ullam dignissimos optio neque dicta molestiae?",
        },
    ]

    return (
        <React.Fragment>
            <section className='mb-[85px]'>
                <div className='text-center'>
                    <p className='font-caveat text-[22px] font-bold text-primary'>OUR SERVICES</p>
                    <h3 className='font-pacifico text-[38px] font-bold my-[10px]'>Services We Provide</h3>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[55px]'>
                    {
                        servicesData.map((service) => <Service key={service.id} serviceInfo={service}></Service>)
                    }
                </div>
            </section>
        </React.Fragment>
    );
};

export default Services;