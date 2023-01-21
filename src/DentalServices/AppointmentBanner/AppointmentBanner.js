import React from 'react';
import { DayPicker } from 'react-day-picker';
import ChairImage from "../../assets/images/chair.png";

const AppointmentBanner = ({selectedDate, setSelectedDate}) => {
    return (
        <React.Fragment>
            <section className='mb-[70px]'>
                <div className="hero bg-[url('/src/assets/images/bg.png')] bg-cover bg-no-repeat bg-left-bottom">
                    <div className="flex flex-row-reverse lg:gap-[50px]">
                        <img src={ChairImage} className="w-6/12 h-[450px] ml-auto rounded-lg shadow-2xl" alt='chairImage' />
                        <div className='w-6/12 mx-auto'>
                            <h1 className="text-[38px] font-pacifico font-bold text-error text-center">Appointment</h1>
                            <DayPicker mode='single'
                                selected={selectedDate}
                                onSelect={setSelectedDate}
                            />
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
};

export default AppointmentBanner;