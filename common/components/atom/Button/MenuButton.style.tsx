import { css } from "styled-components";

export type MenuButtonProps = {
	type: "menu";
	active?: boolean;
	onClick?: () => void;
	size?: "sm" | "md" | "lg";
};

const menuButtonStyle = ({ size = "md", ...props }: MenuButtonProps) => css`
font-size: ${size === "sm" ? "0.8rem" : size === "md" ? "1.5rem" : "2rem"};
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

&:hover{
    color: #ffffffae;
    &::before {
        width: 100%;
        left: 0;
    }
}

&:focus-visible {
    outline: none;

    &::before {
    width: 40%;
    left: 30%;
    }
}

&:active {
    transform: scale(0.9);
}

${
	props.active &&
	css`
    cursor: default;
    &::before {
        width: 100%;
        left: 0;
    }

    &:hover {
        color: #ffffff;
    }
    
    `
}
`;

export default menuButtonStyle;
