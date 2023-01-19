import React from 'react';

const Contact = () => {
    return (
        <React.Fragment>
            <section className="text-center mb-[85px] bg-[url('/src/assets/images/appointment.png')] bg-no-repeat bg-cover bg-center py-[50px]">
                <div>
                    <p className='text-error font-caveat font-bold text-[24px]'>CONTACT US</p>
                    <h4 className='text-neutral font-pacifico font-bold text-[36px]'>Always Connect With Us</h4>
                </div>
                <form className='flex flex-col w-6/12 mx-auto mt-[35px]'>
                    <input className='bg-accent border-none rounded-[8px] text-[17px] text-error placeholder:text-neutral placeholder:text-[17px] placeholder:font-pacifico focus:font-pacifico outline-none py-[15px] px-[12px]' type="email" placeholder='Email Address*' required />
                    <input className='bg-neutral border-none rounded-[8px] text-[17px] text-error  placeholder:text-accent placeholder:text-[17px] placeholder:font-pacifico focus:font-pacifico outline-none py-[15px] px-[12px] my-[25px]' type="text" placeholder='Subject*' required />
                    <textarea className='bg-primary border-none rounded-[8px] text-[17px] text-error placeholder:text-neutral placeholder:text-[17px] placeholder:font-pacifico focus:font-pacifico outline-none py-[15px] px-[12px]' rows={6} placeholder='Your Message*' required/>
                    <button className="bg-gradient-to-r from-accent to-primary font-bold font-pacifico text-[22px] py-[15px] text-neutral border-none rounded-[8px] w-4/12 mx-auto mt-[40px]">SUBMIT</button>
                </form>
            </section>
        </React.Fragment>
    );
};

export default Contact;