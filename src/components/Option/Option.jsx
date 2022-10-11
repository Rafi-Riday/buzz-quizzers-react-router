import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquare, faCheckSquare } from '@fortawesome/free-solid-svg-icons';
import { successToast } from '../../utilities/Toasts';

const Option = ({ optionInfo }) => {
    const { option, id, idx, isActiveOption, setIsActiveOption } = optionInfo;
    const optionId = `${id.toString()}---${idx.toString()}`;
    return (
        <label onClick={() => { setIsActiveOption(optionId); successToast('Added!', 300) }} htmlFor={optionId} className={`${isActiveOption === optionId && 'bg-info text-black'} transition-all duration-150 border border-info rounded-xl text-sm font-extrabold p-3 pr-4 cursor-pointer flex items-center gap-2`}>
            <input className='cursor-pointer hidden' style={{ appearance: 'none', }} type="radio" name={id} id={optionId} value={option} />
            {
                isActiveOption === optionId ? <FontAwesomeIcon className='text-xl text-slate-800' icon={faCheckSquare} /> : <FontAwesomeIcon className='text-xl' icon={faSquare} />
            }
            <span>{option}</span>
        </label>
    );
};

export default Option;