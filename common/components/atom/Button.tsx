import styled, { css } from "styled-components";

export type ButtonProps = DefaultButtonProps | RadioButtonProps | MenuButtonProps;

export type DefaultButtonProps = {
    type: "button";
    size?: "sm" | "md" | "lg";
    onClick?: () => void;
}

export type MenuButtonProps = {
    type: "menu";
    active?: boolean;
    onClick?: () => void;
}

export type RadioButtonProps = {
    type: "radio";
    active?: boolean;
    value?: string;
    setValue?: () => void;

}

const Button = styled.button.attrs<ButtonProps>((props) => ({
    ...props,
    onClick: props.type === "radio" ? props.setValue :props.onClick
}))<ButtonProps>`
    color: #fff;
    padding: 10px 20px;
    border: 1px solid #fff;
    border-radius: 5px;
    cursor: pointer;

    ${(props) => props.type === "radio" && css`
        font-size: 0.8rem;
        padding: 2px 5px;
        border: 1px solid #86868663;
        background-image: linear-gradient(to top right, #2F846F81, #ffffff00);
        background-repeat: no-repeat;
        background-position: -100px;

        transition: all 0.2s ease;

        &:hover, &:focus {
                color: #a3e7d6da;
                border-color: #A3E7D663;
                background-position: -20px;
                outline: none;

            }
            
        ${props.active && css`
            cursor: default;
            background-position: 0px;

            border-color: #2F846F;
            color: #47cfad;

            &:hover, &:focus{
                color: #47cfad;
                border-color: #47cfad;
                background-position: 0px;

            }
        `}
    `}

    ${(props) => props.type === "menu" && css`
        font-size: 1.5rem;
        padding: 5px 10px;
        border: 0px solid #86868663;
        background-color: transparent;
        border-radius: 5px;
        transition: all 0.3s ease;

        position: relative;
        
        
        &::before {
            content: '';
            position: absolute;
            bottom: 0; 
            left: 50%;
            width: 0%;
            height: 2px; 
            background-color: white; 
            transition: all 0.2s ease;
        }

        &:hover::before {
            width: 100%;
            left: 0;
        }
        
        
        &:hover {
            color: #ffffffae;
        }


        ${props.active && css`
            cursor: default;
            &::before {
                width: 100%;
                left: 0;
            }

            &:hover {
                color: #ffffff;
            }
            
        `}
    `}
`;

export default Button;