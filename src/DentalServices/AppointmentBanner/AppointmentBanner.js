import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import { format } from "date-fns";
import ChairImage from "../../assets/images/chair.png";

const AppointmentBanner = () => {

    const [selectedDate, setSelectedDate] = useState(new Date());

    return (
        <React.Fragment>
            <section className='mb-[70px]'>
                <div className="hero bg-[url('/src/assets/images/bg.png')] bg-cover bg-no-repeat bg-left-bottom py-[45px]">
                    <div className="flex flex-row-reverse lg:gap-[50px]">
                        <img src={ChairImage} className="w-6/12 ml-auto rounded-lg shadow-2xl" alt='chairImage' />
                        <div className='w-6/12 mx-auto'>
                            <h1 className="text-[38px] font-pacifico font-bold text-error text-center">Appointment</h1>
                            <DayPicker mode='single'
                                selected={selectedDate}
                                onSelect={setSelectedDate}
                            />
                            <p className='font-pacifico text-[24px] text-center text-success'>You have selected: {format(selectedDate, 'PP')}.</p>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
};

export default AppointmentBanner;