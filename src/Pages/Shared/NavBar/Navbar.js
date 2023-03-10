import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogout = () => {
        logOut()
            .then(() => { })
            .catch((err) => console.log(err))
    }


    // Navigation Items
    const menuItems = <React.Fragment>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/dental-services">Dental Services</Link></li>
        <li><Link to="/about">About</Link></li>
        {user?.uid ? <React.Fragment>
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><button onClick={handleLogout} className='btn btn-accent' to="/login">Sign Out</button></li>
        </React.Fragment> : <li><Link to="/login">Login</Link></li>}
    </React.Fragment>

    return (
        <React.Fragment>
            <div className="navbar bg-base-100 py-[15px]">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menuItems}
                        </ul>
                    </div>
                    <Link className="btn btn-ghost normal-case text-xl font-pacifico font-bold lg:text-[32px]">Doctors Portal</Link>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 font-pacifico">
                        {menuItems}
                    </ul>
                </div>
                <label htmlFor='dashboard-drawer' tabIndex={2} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
            </div>
        </React.Fragment>
    );
};

export default Navbar;