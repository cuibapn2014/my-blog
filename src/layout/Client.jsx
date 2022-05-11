import React from 'react';
import { Outlet } from "react-router-dom";
import Header from '../component/common/Header';
import Footer from '../component/common/Footer';

const Client = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}
export default Client;