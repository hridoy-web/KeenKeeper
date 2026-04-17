import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet, useNavigation } from 'react-router';
import Footer from '../components/Footer';
import Loading from '../components/Loading';

const MainLayout = () => {

    const navigation = useNavigation() 

    return (
        <div>
            <Navbar />
            {navigation.state === "loading" ? <Loading /> : <Outlet />}
            <Footer />
        </div>
    );
};

export default MainLayout;