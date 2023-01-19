import React from 'react';
import AppointDoctor from "../../../assets/images/doctor.png";

const Appointment = () => {
    return (
        <React.Fragment>
            <section className="mt-[210px] mb-[85px]">
                <div className="bg-[url('/src/assets/images/appointment.png')] bg-no-repeat bg-cover bg-center">
                    <div className="hero-content p-0 flex-col lg:flex-row gap-x-[65px]">
                        <img src={AppointDoctor} className="rounded-lg w-full mt-[-200px] pt-[70px]" alt='DoctorImage' />
                        <div>
                            <h5 className='font-caveat text-[22px] font-bold text-neutral'>APPOINTMENT</h5>
                            <h1 className='font-pacifico text-[38px] font-bold my-[10px] text-secondary'>Make an appointment Today</h1>
                            <p className="pb-[45px] pt-[15px] font-caveat text-[22px] font-semibold text-neutral">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque magnam voluptas nesciunt officia velit sed labore doloribus magni? Eligendi aliquid fuga ad consequatur ea officiis at vero voluptatibus.</p>
                            <button className="bg-gradient-to-r from-neutral to-secondary font-bold font-pacifico text-[22px] px-[45px] py-[15px] text-primary border-none rounded-[8px]">Learn More</button>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
};

export default Appointment;