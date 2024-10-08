import React from 'react'
import { FormStyle } from './FormStyle';

const Form = ({ width = '100%', height = 'auto', backgroundColor = 'white', children }) => {
    return (
      <form className={FormStyle(width, height, backgroundColor)}>
        {children}
      </form>
    );
  };
  
export default Form;


  