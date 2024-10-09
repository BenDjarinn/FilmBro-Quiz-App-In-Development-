import { css } from '@emotion/css';

export const AnswerButtonStyle = (width, height, backgroundColor, color) => css`
    width: ${width};
    height: ${height};
    background-color: ${backgroundColor};
    color: ${color};
    border-radius: 12px;
    padding: 8px 14px;
    
    font-size: 20px;
    font-weight: 600;
    border-width: 0;
    cursor: pointer;
    transition: 0.25s;

    &:hover {
        opacity: 0.8;
    }

    &:active, :focus {
        opacity: 0.8;
        border: 3.5px solid white;
    }

` 