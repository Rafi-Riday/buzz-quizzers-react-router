import React from 'react';
import HeaderText from '../HeaderText/HeaderText';
import SadLogo from '../../img/sad.png';

const PageNotFound = () => {
    document.title = 'Buzz Quizzers | 404';
    return (
        <div className='w-full h-[85vh] flex flex-col items-center justify-center gap-6'>
            <img className='w-20' src={SadLogo} alt="Sad Logo" />
            <div className='text-center'>
                <HeaderText text={<b className='text-3xl font-extrabold'>404</b>} />
                <br />
                <b>Sorry, path not found</b>
                <p>
                    <i className='text-slate-300'>Path error</i>
                </p>
            </div>
        </div>
    );
};

export default PageNotFound;