import React from 'react';
import HomePage from '../Pages/HomePage';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router-dom';
import { Fade } from 'react-awesome-reveal';

const Mainlayout = () => {
    return (
        <div className=''>
             
            <Navbar></Navbar>

            
            <Outlet></Outlet>
            
            <Fade>
            <Footer></Footer>
            </Fade>
        </div>
    );
};

export default Mainlayout;