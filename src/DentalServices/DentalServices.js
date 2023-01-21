import React, { useState } from 'react';
import AppointmentBanner from './AppointmentBanner/AppointmentBanner';
import AvailableAppointments from './AvailableAppointments/AvailableAppointments';

const DentalServices = () => {

    const [selectedDate, setSelectedDate] = useState(new Date());

    return (
        <React.Fragment>
            <div>
                <AppointmentBanner selectedDate={selectedDate} setSelectedDate={setSelectedDate}></AppointmentBanner>
                <AvailableAppointments selectedDate={selectedDate} ></AvailableAppointments>
            </div>
        </React.Fragment>
    );
};

export default DentalServices;