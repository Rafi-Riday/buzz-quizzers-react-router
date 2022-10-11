import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
    const [navLink, setNavLink] = useState(false);
    return (
        <div className='z-50 fixed top-0 w-full'>
            <div className='bg-slate-600 px-6 py-4 flex items-center justify-between'>
                <div className='flex items-center justify-center gap-5'>
                    <img className='w-11 h-11' src="/logo.png" alt="logo" />
                    <h3 className='text-lg font-bold'>Buzz Quizzers</h3>
                </div>
                <div className={`bg-slate-500 sm:bg-slate-600 p-6 pt-9 sm:p-0 flex flex-col sm:flex-row justify-center gap-5 absolute sm:relative ${navLink ? 'top-16' : '-top-40'} sm:top-0 right-4 sm:right-0 rounded-b-xl transition-all duration-300 -z-10 sm:z-0`}>
                    <NavLink className={({ isActive }) => `btn btn-info btn-sm rounded text-sm ${isActive || 'btn-outline bg-slate-700'}`} to='/topics'>Topics</NavLink>
                    <NavLink className={({ isActive }) => `btn btn-info btn-sm rounded text-sm ${isActive || 'btn-outline bg-slate-700'}`} to='/statistics'>Statistics</NavLink>
                    <NavLink className={({ isActive }) => `btn btn-info btn-sm rounded text-sm ${isActive || 'btn-outline bg-slate-700'}`} to='/blogs'>Blogs</NavLink>
                </div>
                {
                    navLink ? <FontAwesomeIcon onClick={() => setNavLink(!navLink)} className='text-2xl text-white sm:hidden' icon={faXmark} /> : <FontAwesomeIcon onClick={() => setNavLink(!navLink)} className='text-2xl text-white sm:hidden' icon={faBars} />
                }
            </div>
        </div>
    );
};

export default NavBar;