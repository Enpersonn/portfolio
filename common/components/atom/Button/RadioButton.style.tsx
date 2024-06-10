import { css } from "styled-components";

export type RadioButtonProps = {
    type: "radio";
    active?: boolean;
    value?: string;
    setValue?: () => void;

}

const radioButtonStyle = (props : RadioButtonProps) => css`
font-size: 0.8rem;
padding: 2px 5px;
border: 1px solid #86868663;
background-image:   linear-gradient(to top right, #fffdfc44 0%, #ffffff00 100%);
background-repeat: no-repeat;
background-position: -100rem;

transition: all 0.2s ease;

&:hover{   
    border-color: #ffffffba;
}

&:focus-visible{
    border-color: #ffffffba;
    outline: none;
}
    
${props.active && css`
    cursor: default;
    border-color: #fff;
    background-position: 0rem;
    color: #fff;


`}
`


export default radioButtonStyle;