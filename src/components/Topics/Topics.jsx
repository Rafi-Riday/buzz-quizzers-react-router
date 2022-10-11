import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Header from '../Header/Header';
import TopicsQuestions from '../TopicsQuestions/TopicsQuestions';

const Topics = () => {
    const quizList = useLoaderData().data;
    let logoDetailsList = [];
    quizList.forEach(quiz => logoDetailsList.push({ logo: quiz.logo, name: quiz.name }));
    return (
        <div>
            <Header logoDetailsList={logoDetailsList} />
            <TopicsQuestions quizList={quizList} />
        </div>
    );
};

export default Topics;