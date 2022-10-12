import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import Toast from '../../components/Toast/Toast';
import { ResultContext } from '../../contexts/Contexts';
import { handleOptionAnswer } from '../../utilities/handleOptionAnswer';

const MainLayout = () => {
    // localStorage
    const resultsLocalStorage = localStorage.getItem('results');
    const [results, setResults] = useState([]);
    useState(() => {
        resultsLocalStorage ? setResults(JSON.parse(resultsLocalStorage)) : handleOptionAnswer({ setResults, command: ['setEmptyResults',], });
    }, []);
    return (
        <div>
            <NavBar />
            <div className='h-20'></div>
            <ResultContext.Provider value={{ results, setResults }}>
                <Outlet />
            </ResultContext.Provider>
            <Toast />
        </div>
    );
};

export default MainLayout;