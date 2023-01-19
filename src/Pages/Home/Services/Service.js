import React from 'react';

const Service = ({ serviceInfo }) => {
    const { icon, name, description } = serviceInfo;
    return (
        <React.Fragment>
            <div className='mt-[45px]'>
                <img className='w-[70px] h-auto mx-auto' src={icon} alt="serviceIcon" />
                <div className='text-center mt-[45px]'>
                    <h3 className='font-pacifico text-[28px]'>{name}</h3>
                    <p className='font-caveat text-[22px]'>{description}</p>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Service;