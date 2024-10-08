import React from 'react'
import { ButtonStyle } from './ButtonStyle';

const Button = ({children, width, height, backgroundColor, color}) => {
    return (
        <button className={ButtonStyle(width, height, backgroundColor, color)} 
        >
            {children}
        </button>
    );
};

export default Button;
