import React from 'react';

const Review = ({ reviewInfo }) => {

    const { name, review, location, image } = reviewInfo;

    return (
        <React.Fragment>
            <div className="w-96 mx-auto shadow-2xl rounded-[8px] py-[55px] px-[35px]">
                <p className='font-pacifico text-[17px]'>{review}</p>
                <div className='flex justify-center items-center mt-[55px] gap-x-[50px]'>
                    <figure><img className='w-[65px] h-[65px]' src={image} alt="ClientImage" /></figure>
                    <div>
                        <h5 className='text-primary font-pacifico font-bold text-[22px]'>{name}</h5>
                        <p className='text-accent font-caveat font-semibold text-[20px]'>{location}</p>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Review;