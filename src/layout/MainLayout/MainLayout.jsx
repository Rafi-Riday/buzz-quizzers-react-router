import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import Toast from '../../components/Toast/Toast';
import { ResultContext } from '../../contexts/Contexts';

const MainLayout = () => {
    const [scrollingY, setScrollingY] = useState({ count: window.scrollY, direction: null });
    const [navBarY, setNavBarY] = useState('top-0');
    const [navLink, setNavLink] = useState(false);
    useEffect(() => {
        scrollingY.direction && (setNavBarY(scrollingY.direction), setNavLink(false));
    }, [scrollingY]);
    window.onscroll = () => {
        scrollingY.count > window.scrollY ? setScrollingY({ count: window.scrollY, direction: 'top-0', }) : setScrollingY({ count: window.scrollY, direction: '-top-24', });
    };
    return (
        <div>
            <NavBar navBarEffects={{ navBarY, navLink, setNavLink }} />
            <div className='h-20'></div>
            <ResultContext.Provider value='asd'>
                <Outlet />
            </ResultContext.Provider>
            <Toast />
        </div>
    );
};

export default MainLayout;