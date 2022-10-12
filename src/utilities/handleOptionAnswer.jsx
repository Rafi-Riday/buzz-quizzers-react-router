import React from 'react';
import { infoToast, errorToast } from './toasts';

const handleOptionAnswer = ({ option, correctAnswer }) => {
    if (option === correctAnswer) {
        infoToast(<b>Correct Answer</b>, 500);
    } else {
        errorToast(<div>Wrong Answer!<br />Correct : <b className='font-extrabold'>{correctAnswer}</b></div>);
    }
}

export { handleOptionAnswer };