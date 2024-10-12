import { css } from '@emotion/css';

export const FormStyle = (width, height, backgroundColor) => css`
    width: ${width};
    height: ${height};
    background-color: ${backgroundColor};
    border-radius: 25px;
    box-shadow: 0 10px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding: 50px 72px;
   `
;