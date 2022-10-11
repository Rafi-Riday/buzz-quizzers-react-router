import React from 'react';
import HeaderText from '../HeaderText/HeaderText';
import Question from '../Question/Question';

const QuizQuestionsContainer = ({ quizData }) => {
    return (
        <div className='flex flex-col items-center mt-6'>
            <HeaderText text={'Questions'} />
            <div className='w-full p-6 grid grid-cols-3 sm:grid-cols-4 gap-6'>
                <div className='col-span-3 flex flex-col gap-6'>
                    {
                        quizData.questions.map((questionData, count) => <Question key={questionData.id} count={parseInt(count) + 1} questionData={questionData} />)
                    }
                </div>
                <aside className='sm:relative col-span-3 sm:col-span-1'>
                    <div className='sm:sticky sm:top-24'>asd</div>
                </aside>
            </div>
        </div>
    );
};

export default QuizQuestionsContainer;