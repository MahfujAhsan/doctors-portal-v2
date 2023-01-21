import { format } from 'date-fns';
import { GiTireIronCross } from 'react-icons/gi';
import React from 'react';
import { toast } from 'react-toastify';

const BookingModal = ({ treatment, selectedDate, setTreatment }) => {
    const { name, slots } = treatment;

    const date = format(selectedDate, 'PP');

    const handleBooking = (e) => {
        e.preventDefault();
        const form = e.target;
        const slot = form.slot.value;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;

        const booking = {
            selectedDate: date,
            treatmentName: name,
            patientName:name,
            slot,
            email,
            phone
        }

        setTreatment(null);
        toast("Successfully Booked")
    }

    return (
        <React.Fragment>
            {/* Put this part before </body> tag */}
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle btn-error absolute right-2 top-2"><GiTireIronCross size={18}/></label>
                    <h3 className="text-lg font-bold text-center font-pacifico text-[22px] text-primary">{name}</h3>
                    <form onSubmit={handleBooking} className='flex flex-col items-center mt-[25px] gap-y-[35px]'>
                        <input disabled value={date} type="text" placeholder="Type here" className="input w-10/12 shadow-md shadow-accent font-pacifico text-error focus:outline-none focus:font-pacifico" />
                        <select name='slot' className="input w-10/12 shadow-md shadow-accent font-pacifico text-error focus:outline-none focus:font-pacifico hover:cursor-pointer">
                            {/* <option disabled selected>Select Your Slot</option> */}
                            {
                                slots.map((slot, index) => <option className='text-primary font-bold' key={index} value={slot}>
                                    {slot}
                                </option>)
                            }
                        </select>
                        <input name='name' type="text" placeholder="Your Name" className="input w-10/12 shadow-md shadow-accent font-pacifico text-error focus:outline-none focus:font-pacifico" />
                        <input name='email' type="email" placeholder="Email Address" className="input w-10/12 shadow-md shadow-accent font-pacifico text-error focus:outline-none focus:font-pacifico" />
                        <input name='phone' type="tel" placeholder="Phone Number" className="input w-10/12 shadow-md shadow-accent font-pacifico text-error focus:outline-none focus:font-pacifico" />
                        <input className='btn bg-gradient-to-r from-neutral to-primary w-10/12 font-caveat font-bold text-[22px] text-white' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </React.Fragment>
    );
};

export default BookingModal;