import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import Toast from '../../components/Toast/Toast';

const MainLayout = () => {
    return (
        <div>
            <NavBar />
            <div className='h-20'></div>
            <Outlet />
            <Toast />
        </div>
    );
};

export default MainLayout;