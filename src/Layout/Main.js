import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import Navbar from '../Pages/Shared/NavBar/Navbar';

const Main = () => {
    return (
        <React.Fragment>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </React.Fragment>
    );
};

export default Main;