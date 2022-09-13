import { css } from "styled-components";


export const mobile = (props) => {
    return css`
            @media only screen and (max-width:500px){
                ${props}
            }
    `;
}

export const mini_tablet = (props) => {
    return css`
            @media only screen and (max-width:800px){
                ${props}
            }
    `;
}

export const miniLaptop = (props) => {
    return css`
            @media only screen and (max-width:1300px){
                ${props}
            }
    `;
}