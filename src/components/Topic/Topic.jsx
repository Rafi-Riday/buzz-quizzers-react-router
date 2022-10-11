import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Header from '../Header/Header';
import QuizQuestionsContainer from '../QuizQuestionsContainer/QuizQuestionsContainer';

const Topic = () => {
    const quizData = useLoaderData().data;
    document.title = `Buzz Quizzers | ${quizData.name}`;
    const logoDetailsList = [{ logo: quizData.logo, name: quizData.name }];
    return (
        <div>
            <Header logoDetailsList={logoDetailsList} />
            <QuizQuestionsContainer quizData={quizData} />
        </div>
    );
};

export default Topic;