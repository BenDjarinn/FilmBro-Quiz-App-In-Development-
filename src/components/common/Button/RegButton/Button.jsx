import React from 'react'
import { ButtonStyle } from './ButtonStyle';

const Button = ({children, width, height, backgroundColor, color, onClick}) => {
    return (
        <button 
            className={ButtonStyle(width, height, backgroundColor, color)} 
            onClick={onClick}
            type = 'button'
        >
            {children}
        </button>
    );
};

export default Button;
