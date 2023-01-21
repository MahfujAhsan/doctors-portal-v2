import React from 'react';

const AvailableOption = ({ appointmentOption, setTreatment }) => {

    const { name, slots } = appointmentOption;

    return (
        <React.Fragment>
            <div className="card w-[425px] bg-neutral shadow-xl">
                <div className="card-body text-center">
                    <h2 className="card-title justify-center font-bold font-caveat text-[26px] text-error">{name}</h2>
                    <p className='mt-[5px] font-pacifico'>{slots.length > 0 ? slots[0] : 'Try Another Day'}</p>
                    <p className='font-pacifico mb-[15px] text-primary'>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} Spaces Available</p>
                    <div className="card-actions justify-center">
                        <label
                        disabled={slots.length === 0}
                        onClick={() => setTreatment(appointmentOption)}
                        htmlFor="booking-modal"
                        className="btn btn-primary font-caveat font-bold text-[18px] text-white">Book Appointment</label>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default AvailableOption;