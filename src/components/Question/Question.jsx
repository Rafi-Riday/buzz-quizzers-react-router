import React, { useState } from 'react';
import Option from '../Option/Option';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const Question = ({ questionData, count, quizData }) => {
    const [isActiveOption, setIsActiveOption] = useState(-1);
    const { id, question, options, correctAnswer } = questionData;
    const [showCorrectOption, setShowCorrectOption] = useState(false);
    return (
        <div className='p-6 bg-slate-700 rounded-xl flex flex-col justify-center items-start'>
            <div className='flex gap-3'>
                {
                    [count].map(() => <div key={count} className='font-bold py-2'><span className='hidden sm:inline'>Quiz</span>&nbsp;{count < 10 ? '0' + count : count}&nbsp;&nbsp;:</div>)
                }
                <div>
                    <h3 className='text-black bg-orange-100 px-3 py-2 rounded-lg' dangerouslySetInnerHTML={{ __html: question }} />
                    <div className='p-4 pb-0 flex flex-col items-start'>
                        <div className='flex flex-col gap-4'>
                            {
                                options.map((option, idx) => <Option key={idx} optionInfo={{ option, correctAnswer, id, idx, isActiveOption, setIsActiveOption, showCorrectOption }} quizData={quizData} />)
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full text-right text-xl mt-6 sm:mt-4 lg:mt-2'>
                <FontAwesomeIcon onClick={() => setShowCorrectOption(!showCorrectOption)} className='cursor-pointer' icon={showCorrectOption ? faEyeSlash : faEye} />
            </div>
        </div>
    );
};

export default Question;