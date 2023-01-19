import React from 'react';
import { Link } from 'react-router-dom';
import { ImSkype } from 'react-icons/im';
import { FaDiscord } from 'react-icons/fa';
import { BsSlack } from 'react-icons/bs';
import { MdLocationCity } from 'react-icons/md';

const Footer = () => {

    const menuItems = <React.Fragment>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/dental-services">Dental Services</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/reviews">Reviews</Link></li>
        <li><Link to="/login">Login</Link></li>
    </React.Fragment>

    return (
        <React.Fragment>
            <section className="grid grid-cols-3 place-items-center bg-[url('/src/assets/images/footer.png')] bg-no-repeat bg-cover bg-center py-[75px] mt-[125px]">
                <div>
                    <h2 className='text-success font-pacifico font-bold text-[24px]'>Navigations</h2>
                    <ul className='text-primary font-caveat font-bold text-[20px]'>
                        {menuItems}
                    </ul>
                </div>
                <div>
                    <h4 className='text-success font-pacifico font-bold text-[24px]'>Our Address</h4>
                    <div className='flex flex-col items-center gap-[10px] mt-[25px]'>
                        <MdLocationCity fill='#C53678' size={50}/>
                        <p className='text-primary font-caveat font-bold text-[20px]'>#House-14, #Road-4, <br /> #Sector-12, Uttara</p>
                    </div>
                </div>
                <div>
                    <h4 className='text-success font-pacifico font-bold text-[24px]'>Follow Us</h4>
                    <div className='flex justify-center items-center gap-x-[30px] mt-[115px]'>
                        <ImSkype size={35} fill="#1b4d89"/>
                        <FaDiscord size={35} fill="#1b4d89"/>
                        <BsSlack size={35} fill="#1b4d89"/>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
};

export default Footer;