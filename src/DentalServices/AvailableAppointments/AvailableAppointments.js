import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from '../BookingModal/BookingModal';
import AvailableOption from './AvailableOption';

const AvailableAppointments = ({ selectedDate }) => {

    const [appointmentOptions, setAppointmentOptions] = useState([]);
    const [treatment, setTreatment] = useState(null);

    useEffect(() => {
        fetch('services.json')
            .then((res) => res.json())
            .then((data) => setAppointmentOptions(data))
    }, []);

    return (
        <React.Fragment>
            <section>
                <p className='font-pacifico text-[26px] text-center text-primary mb-[55px]'>Available Appointments on {format(selectedDate, 'PP')}</p>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[65px] mb-[85px]'>
                    {
                        appointmentOptions.map((option) => <AvailableOption
                        key={option._id}
                        appointmentOption={option}
                        setTreatment={setTreatment}
                        />)
                    }
                </div>
                {
                    treatment && <BookingModal
                    treatment={treatment}
                    selectedDate={selectedDate}
                    setTreatment={setTreatment}
                    ></BookingModal>
                }
            </section>
        </React.Fragment>
    );
};

export default AvailableAppointments;