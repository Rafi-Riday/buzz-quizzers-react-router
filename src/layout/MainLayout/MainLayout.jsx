import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';

const MainLayout = () => {
    return (
        <div>
            <div className='z-50 relative'>
                <NavBar />
            </div>
            <div className='-z-50 relative'>
                <Outlet />
            </div>
        </div>
    );
};

export default MainLayout;