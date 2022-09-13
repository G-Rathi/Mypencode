import { css } from "styled-components"

export const mobile = (props) => {
    return css`
        @media only screen and (max-width:380px){
            ${props};
        }`;
};

export const bmobile = (props) => {
    return css`
                @media only screen and (max-width:680px){
                    ${props}
                }`;

}

export const tablet = (props) => {
    return css`
            @media only screen and (max-width: 1008px){
                ${props}
            }`;
}

export const laptop = (props) => {
    return css`
            @media only screen and (max-width: 1450px){
                ${props}
            }`;
}

export const laptop3 = (props) => {
    return css`
            @media only screen and (max-width: 1600px){
                ${props}
            }
    `;
}
export const blaptop3 = (props) => {
    return css`
            @media only screen and (min-width: 1600px){
                ${props}
            }
    `;
}
