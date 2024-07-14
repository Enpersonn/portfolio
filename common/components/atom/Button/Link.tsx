import styled from "styled-components";
import menuButtonStyle, { type MenuButtonProps } from "./MenuButton.style";
import radioButtonStyle, { type RadioButtonProps } from "./RadioButton.style";
import Link from "next/link";

export type LinkProps = DefaultLinkProps | RadioButtonProps | MenuButtonProps;

export type DefaultLinkProps = {
	type: "button";
	size?: "sm" | "md" | "lg";
	href?: string;
};

const StyledLink = styled(Link)<LinkProps>`
    color: #fff;
    padding: 10px 20px;
    border: 1px solid #fff;
    border-radius: 5px;
    cursor: pointer;

    ${(props) => props.type === "radio" && radioButtonStyle(props)}
    ${(props) => props.type === "menu" && menuButtonStyle(props)}
`;

export default StyledLink;
