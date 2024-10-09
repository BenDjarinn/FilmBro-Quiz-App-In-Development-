import { css } from '@emotion/css';

export const ButtonStyle = (width, height, backgroundColor, color) => css`
    width: ${width};
    height: ${height};
    background-color: ${backgroundColor};
    color: ${color};
    border-radius: 12px;
    padding: 8px 14px;
    border-color: #31426E;
    font-size: 20px;
    font-weight: 600;
    border-color: none;
    border-width: 0;
    cursor: pointer;

    &:active, :hover {
        transform: translateY(1.0px) translateX(1.0px);
    }

` 