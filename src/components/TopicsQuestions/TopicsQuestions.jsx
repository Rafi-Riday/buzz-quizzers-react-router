import React from 'react';
import HeaderText from '../HeaderText/HeaderText';
import TopicsQuestion from '../TopicsQuestion/TopicsQuestion';

const TopicsQuestions = ({ quizList }) => {
    return (
        <div className='flex flex-col items-center mt-6'>
            <HeaderText text={'Topics'} />
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-6 p-6'>
                {
                    quizList.map(quiz => <TopicsQuestion key={quiz.id} quiz={quiz} />)
                }
            </div>
        </div>
    );
};

export default TopicsQuestions;