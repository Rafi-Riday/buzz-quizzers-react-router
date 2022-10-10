import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

const NavBar = () => {
    const [navLink, setNavLink] = useState(false);
    return (
        <div className='bg-slate-600 px-6 py-4 flex items-center justify-between'>
            <div className='flex items-center justify-center gap-5'>
                <img className='w-11 h-11' src="/logo.png" alt="logo" />
                <h3 className='text-lg font-bold'>Buzz Quizzers</h3>
            </div>
            <div className={`bg-slate-700 sm:bg-slate-600 p-6 pt-9 sm:p-0 flex flex-col sm:flex-row justify-center gap-5 absolute sm:relative ${navLink ? 'top-16' : '-top-40'} sm:top-0 right-4 sm:right-0 rounded-b-xl transition-all duration-300 -z-10 sm:z-0`}>
                <NavLink className={({ isActive }) => `btn btn-info btn-sm rounded text-sm ${isActive || 'btn-outline'}`} to='/topics'>Topics</NavLink>
                <NavLink className={({ isActive }) => `btn btn-info btn-sm rounded text-sm ${isActive || 'btn-outline'}`} to='/statistics'>Statistics</NavLink>
                <NavLink className={({ isActive }) => `btn btn-info btn-sm rounded text-sm ${isActive || 'btn-outline'}`} to='/blogs'>Blogs</NavLink>
            </div>
            {
                navLink ? <XMarkIcon onClick={() => setNavLink(!navLink)} className='w-8 h-8 sm:hidden' /> : <Bars3Icon onClick={() => setNavLink(!navLink)} className='w-8 h-8 sm:hidden' />
            }
        </div>
    );
};

export default NavBar;