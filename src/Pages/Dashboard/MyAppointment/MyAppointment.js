import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const MyAppointment = () => {

    const { user } = useContext(AuthContext);

    const url = `https://doctors-portal-v2-server.vercel.app/bookings?email=${user?.email}`;

    const { data: bookings = [] } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data;
        }
    })

    return (
        <div>
            <h3 className="text-3xl">My Appointments</h3>
            <div className="overflow-x-auto">
                <table className="table w-full mt-[35px]">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Treatment</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings && bookings?.map((booking, index) => {
                                return (
                                    <tr key={booking._id}>
                                        <th>{index + 1}</th>
                                        <td>{booking.patientName}</td>
                                        <td>{booking.treatmentName}</td>
                                        <td>{booking.selectedDate}</td>
                                        <td>{booking.slot}</td>
                                        <td>
                                            {
                                                booking.price && !booking.paid && <Link to={`/dashboard/payment/${booking._id}`}>
                                                    <button className='btn btn-error btn-xs'>Pay</button>
                                                </Link>
                                            }
                                            {
                                                booking.price && booking.paid && <button disabled className='btn btn-success btn-xs'>Paid</button>
                                            }
                                        </td>
                                    </tr>)
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppointment;