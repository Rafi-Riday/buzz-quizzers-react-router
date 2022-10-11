import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Header from '../Header/Header';

const Topics = () => {
    const quizList = useLoaderData().data;
    let logoDetailsList = [];
    quizList.forEach(quiz => logoDetailsList.push({ logo: quiz.logo, name: quiz.name }));
    return (
        <div>
            <Header logoDetailsList={logoDetailsList} />
            <h3>Topics</h3>
        </div>
    );
};

export default Topics;