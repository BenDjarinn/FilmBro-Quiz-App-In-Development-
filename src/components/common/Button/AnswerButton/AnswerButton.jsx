import React from 'react'
import { AnswerButtonStyle } from './style';

const AnswerButton = ({children, width, height, backgroundColor, color,  onClick,
    ...props}) => {
    return (
        <button 
        className={AnswerButtonStyle(width, height, backgroundColor, color)} 
        onClick={onClick} 
        >
            {children}
        </button>
    );
};

export default AnswerButton;
