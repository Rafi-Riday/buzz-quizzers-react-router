import React from 'react';
import { ArrowRightIcon } from '@heroicons/react/24/solid'
import { NavLink } from 'react-router-dom';

const TopicsQuestion = ({ quiz }) => {
    const { id, name, logo, total } = quiz;
    return (
        <div className="card card-compact w-full bg-slate-800 shadow-xl border">
            <figure className='px-20 pb-0 pt-5'>
                <img className='w-full' src={logo} alt="logo" />
            </figure>
            <div className="card-body">
                <h2 className="card-title justify-center">{name}</h2>
                <div className="card-actions flex items-center justify-between">
                    <p className='grow-0 font-semibold'>Total Questions : <span className='text-orange-300'>{total}</span></p>
                    <NavLink to={`/topics/${id}`} className="btn btn-sm bg-[#ffbc8f] hover:bg-[#ff9a56] text-black text-xs rounded">Start Quiz&nbsp;&nbsp;<ArrowRightIcon className='mb-[2px] w-4 h-4' /></NavLink>
                </div>
            </div>
        </div>
    );
};

export default TopicsQuestion;