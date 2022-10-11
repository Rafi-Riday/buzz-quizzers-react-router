import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Header from '../Header/Header';

const Topic = () => {
    const quizData = useLoaderData().data;
    const logoDetailsList = [{ logo: quizData.logo, name: quizData.name }];
    return (
        <div>
            <Header logoDetailsList={logoDetailsList} />
        </div>
    );
};

export default Topic;