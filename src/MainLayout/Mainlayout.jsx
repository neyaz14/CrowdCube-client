import React from 'react';
import HomePage from '../Pages/HomePage';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router-dom';

const Mainlayout = () => {
    return (
        <div className='bg-yellow-50'>
             
            <Navbar></Navbar>

            <Outlet></Outlet>

            <Footer></Footer>
        </div>
    );
};

export default Mainlayout;