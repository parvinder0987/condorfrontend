import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = () => {
    return (
        <>
            <Sidebar />
            <Navbar />
            <div className='main-content'>
                <Outlet /> 
            </div>
            <Footer />
        </>
    )
}

export default Layout;
