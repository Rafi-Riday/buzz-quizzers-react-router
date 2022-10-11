import React from 'react';
import HeaderImg from '../HeaderImg/HeaderImg';

const Header = ({ logoDetailsList }) => {
    return (
        <div className='px-0 py-4'>
            <h3 className='text-center text-xl font-extrabold pt-4 pb-8'><span className='border-y-white border-y-2'>Be a Quizzer <span className='text-orange-300'>!!</span></span></h3>
            <div className='flex justify-center items-center'>
                <div className={`grid grid-cols-${logoDetailsList.length} justify-between items-center w-full`}>
                    {
                        logoDetailsList.map((logoDetails, idx) => <HeaderImg key={idx} logoDetails={logoDetails} />)
                    }
                </div>
            </div>
            <div className='w-full pt-6 px-6'>
                <div className='border-t-orange-300 border-t-2'></div>
            </div>
        </div>
    );
};

export default Header;