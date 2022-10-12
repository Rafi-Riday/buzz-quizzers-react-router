import React from 'react';
import HeaderText from '../HeaderText/HeaderText';
import Question from '../Question/Question';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRetweet } from '@fortawesome/free-solid-svg-icons';

const QuizQuestionsContainer = ({ quizData }) => {
    return (
        <div className='flex flex-col items-center mt-6'>
            <HeaderText text={'Questions'} />
            <div className='w-full p-6 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6'>
                <div className='sm:col-span-2 lg:col-span-3 flex flex-col gap-6'>
                    {
                        quizData.questions.map((questionData, count) => <Question key={questionData.id} count={parseInt(count) + 1} questionData={questionData} />)
                    }
                </div>
                <aside className='sm:relative'>
                    <div className='sm:sticky sm:top-24 p-6 bg-slate-700 rounded-xl'>
                    </div>
                </aside>
            </div>
        </div>
    );
};

export default QuizQuestionsContainer;