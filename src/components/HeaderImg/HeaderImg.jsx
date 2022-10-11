import React from 'react';

const HeaderImg = ({ logoDetails }) => {
    const { logo, name } = logoDetails;
    return (
        <div className='grow flex flex-col items-center'>
            <img className='w-full max-w-[100px]' src={logo} alt="" />
            <h3 className='text-center'>{name}</h3>
        </div>
    );
};

export default HeaderImg;