import React, { useContext } from 'react';
import HeaderText from '../HeaderText/HeaderText';
import { ResultContext } from '../../contexts/Contexts';
import { handleOptionAnswer } from '../../utilities/handleOptionAnswer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRetweet } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

const ResultAside = ({ quizData }) => {
    const { results, setResults } = useContext(ResultContext);
    const topic = results.find(result => result.id === quizData.id);
    const answeredList = topic?.result?.filter(t => Object.values(t)[0] !== null);
    const correctList = topic?.result?.filter(t => Object.values(t)[0] === true);
    return (
        <div className='sm:sticky sm:top-6 p-6 bg-slate-700 rounded-xl flex flex-col items-center gap-4'>
            <progress className="progress progress-info bg-slate-900 w-full" value={answeredList?.length || 0} max={quizData.total}></progress>
            <HeaderText text={<span className='text-xl'>Latest Result</span>} />
            <div className='p-3 pb-0'>
                <div><span className='font-semibold'>Total :</span> <span className='text-orange-300'>{quizData.total}</span></div>
                <div><span className='font-semibold'>Answered :</span> <span className='text-orange-300'>{answeredList?.length || 0}</span></div>
                <div><span className='font-semibold'>Correct :</span> <span className='text-orange-300'>{correctList?.length || 0}</span></div>
            </div>
            <button onClick={() => handleOptionAnswer({ results, setResults, topicId: quizData.id, command: ['clearResult',], })} className='btn btn-error btn-xs text-xs rounded'>Reset&nbsp;&nbsp;<FontAwesomeIcon icon={faRetweet} /></button>
            <div className='text-xs'>
                * After you complete a quiz, result information wil be saved automatically
                * To check your exam statistics, go to our <NavLink className='border-b border-info px-1 hover:bg-info hover:text-slate-900 hover:rounded transition-all font-extrabold' to='/statistics'>Statistics</NavLink> page
            </div>
        </div >
    );
};

export default ResultAside;