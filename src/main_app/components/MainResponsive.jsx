import { css } from "styled-components";


export const minimobile = (props) => {
    return css`
            @media only screen and (max-width:380px){
                ${props}
            }
    `;
}
export const mobile = (props) => {
    return css`
            @media only screen and (max-width:450px){
                ${props}
            }
    `;
}
export const bmobile = (props) => {
    return css`
            @media only screen and (max-width:750px){
                ${props}
            }
    `;
}

export const tabMob = (props) => {
    return css`
            @media only screen and (max-width:960px){
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