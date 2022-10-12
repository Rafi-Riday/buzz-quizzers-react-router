import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import Toast from '../../components/Toast/Toast';
import { ResultContext, NavBarOpenContext } from '../../contexts/Contexts';
import { handleOptionAnswer } from '../../utilities/handleOptionAnswer';

const MainLayout = () => {
    // NavBar scrolling effect
    const [navBarY, setNavBarY] = useState('top-0');
    // localStorage
    const resultsLocalStorage = localStorage.getItem('results');
    const [results, setResults] = useState([]);
    useState(() => {
        resultsLocalStorage ? setResults(JSON.parse(resultsLocalStorage)) : handleOptionAnswer({ setResults, command: ['setEmptyResults',], });
    }, []);
    return (
        <div>
            <NavBar navBarY={navBarY} setNavBarY={setNavBarY} />
            <div className='h-20'></div>
            <ResultContext.Provider value={{ results, setResults }}>
                <NavBarOpenContext.Provider value={{ navBarY }}>
                    <Outlet />
                </NavBarOpenContext.Provider>
            </ResultContext.Provider>
            <Toast />
        </div>
    );
};

export default MainLayout;