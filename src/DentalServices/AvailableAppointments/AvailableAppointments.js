import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, { useState } from 'react';
import Spinner from '../../Pages/Shared/Spinner/Spinner';
import BookingModal from '../BookingModal/BookingModal';
import AvailableOption from './AvailableOption';

const AvailableAppointments = ({ selectedDate }) => {
    const [treatment, setTreatment] = useState(null);

    const date = format(selectedDate, 'PP');

    const { data: appointmentOptions = [], refetch, isLoading } = useQuery({
        queryKey: ['appointmentOptions', date],
        queryFn: async () => {
            const res = await fetch(`https://doctors-portal-v2-server.vercel.app/v2/appointmentOptions?date=${date}`);
            const data = res.json();
            return data;
        }
    });

    if (isLoading) {
        return <Spinner />
    }



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
                        refetch={refetch}
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