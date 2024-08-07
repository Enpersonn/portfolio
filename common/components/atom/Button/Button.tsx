import styled from "styled-components";
import menuButtonStyle, { type MenuButtonProps } from "./MenuButton.style";
import radioButtonStyle, { type RadioButtonProps } from "./RadioButton.style";

export type ButtonProps =
	| DefaultButtonProps
	| RadioButtonProps
	| MenuButtonProps;

export type DefaultButtonProps = {
	type: "button";
	size?: "sm" | "md" | "lg";
	onClick?: () => void;
	href?: string;
};

const Button = styled.button<ButtonProps>`
    color: #fff;
    padding: 10px 20px;
    border: 1px solid #fff;
    border-radius: 5px;
    cursor: pointer;

    ${(props) => props.type === "radio" && radioButtonStyle(props)}
    ${(props) => props.type === "menu" && menuButtonStyle(props)}
`;

export default Button;
