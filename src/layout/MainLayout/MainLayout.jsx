import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import Toast from '../../components/Toast/Toast';
import { ResultContext } from '../../contexts/Contexts';

const MainLayout = () => {
    return (
        <div>
            <NavBar />
            <div className='h-20'></div>
            <ResultContext.Provider value='asd'>
                <Outlet />
            </ResultContext.Provider>
            <Toast />
        </div>
    );
};

export default MainLayout;