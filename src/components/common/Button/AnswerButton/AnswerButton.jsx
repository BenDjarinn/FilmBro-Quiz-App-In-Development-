import React from 'react'
import { AnswerButtonStyle } from './style';

const AnswerButton = ({children, width, height, backgroundColor, color}) => {
    return (
        <button className={AnswerButtonStyle(width, height, backgroundColor, color)} 
        >
            {children}
        </button>
    );
};

export default AnswerButton;
