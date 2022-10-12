import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquare, faCheckSquare, faXmark } from '@fortawesome/free-solid-svg-icons';
import { handleOptionAnswer } from '../../utilities/handleOptionAnswer';
import { ResultContext } from '../../contexts/Contexts';

const Option = ({ optionInfo }) => {
    const ResultContextData = useContext(ResultContext);
    const { option, correctAnswer, id, idx, isActiveOption, setIsActiveOption, showCorrectOption } = optionInfo;
    const optionId = `${id.toString()}---${idx.toString()}`;
    return (
        <label onClick={() => { handleOptionAnswer({ option, correctAnswer }); setIsActiveOption(optionId) }} className={`${(isActiveOption === optionId || showCorrectOption) && (option === correctAnswer ? 'bg-info text-black' : 'bg-error text-white border-error')} transition-all duration-150 border border-info rounded-xl text-sm font-extrabold p-3 pr-4 cursor-pointer flex items-center gap-2`}>
            {
                (isActiveOption === optionId || showCorrectOption) ? <FontAwesomeIcon className={`text-xl ${option === correctAnswer ? 'text-slate-800' : 'text-white'}`} icon={option === correctAnswer ? faCheckSquare : faXmark} /> : <FontAwesomeIcon className='text-xl' icon={faSquare} />
            }
            <span>{option}</span>
        </label>
    );
};

export default Option;