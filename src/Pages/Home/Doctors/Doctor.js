import React from 'react';
import { FcTwoSmartphones } from 'react-icons/fc';

const Doctor = ({ doctorInfo }) => {

    const { name, specialistic, phone, avatar } = doctorInfo;

    return (
        <div className='text-center'>
            <figure className='mb-[15px]'>
                <img className='w-[95px] h-[95px] mx-auto rounded-full' src={avatar} alt="doctorAvatar" />
            </figure>
            <h4 className='text-accent font-pacifico font-bold text-[22px]'>{name}</h4>
            <p className='text-primary font-caveat font-bold text-[20px]'>{specialistic}</p>
            <div className='flex justify-center items-center gap-x-[10px]'>
                <FcTwoSmartphones size={28}/>
                <p className='font-pacifico text-error font-bold'>{phone}</p>
            </div>
        </div>
    );
};

export default Doctor;