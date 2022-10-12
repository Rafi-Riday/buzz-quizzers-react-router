import React from 'react';
import { infoToast, errorToast, successToast } from './toasts';

const handleOptionAnswer = ({ total, option, correctAnswer, results, setResults, topicId, questionId, command }) => {
    if (command.includes('toast')) {
        if (option === correctAnswer) {
            infoToast(<b>Correct Answer</b>, 500);
        } else {
            errorToast(<div>Wrong Answer!<br />Correct : <b className='font-extrabold'>{correctAnswer}</b></div>);
        }
    }

    if (command.includes('setEmptyResults')) {
        let results = [];
        fetch(`https://openapi.programming-hero.com/api/quiz`)
            .then(res => res.json())
            .then(data => {
                data.data.forEach(topic => {
                    delete topic.logo;
                    topic.result = [];
                    fetch(`https://openapi.programming-hero.com/api/quiz/${topic.id}`)
                        .then(res => res.json())
                        .then(topicData => {
                            topicData.data.questions.forEach(question => {
                                topic.result.push(JSON.parse(`{"${question.id}":null}`));
                            })
                            results.push(topic);
                            setResults(results);
                            localStorage.setItem('results', JSON.stringify(results));
                        })
                });
            });
    }

    if (command.includes('checkAnswer')) {
        const newResults = [...results];
        const topic = newResults.find(result => result?.id === topicId);
        const question = topic?.result?.find(q => Object.keys(q)[0] === questionId);
        question[questionId] = option === correctAnswer;
        setResults(newResults);
        const answeredCount = topic?.result?.filter(t => Object.values(t)[0] !== null)?.length || 0;
        answeredCount === total && (localStorage.setItem('results', JSON.stringify(results)), setTimeout(() => { successToast(<b>Congratulations !!<br />Quiz Completed</b>, 2000) }, 1500));
    }

    if (command.includes('clearResult')) {
        const newResults = [...results];
        const topic = newResults.find(result => result?.id === topicId);
        topic?.result.forEach(r => {
            for (const newQuestionId in r) {
                r[newQuestionId] = null;
            }
        });
        setResults(newResults);
        localStorage.setItem('results', JSON.stringify(results));
        errorToast(<b>Previous Result Cleared</b>, 1000);
    }

}

export { handleOptionAnswer };