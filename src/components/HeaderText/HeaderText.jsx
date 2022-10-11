import React from 'react';

const HeaderText = ({ text }) => {
    return (
        <h3 className='text-3xl font-semibold'><span className='border-b-2 border-b-orange-300'>{text}</span></h3>
    );
};

export default HeaderText;