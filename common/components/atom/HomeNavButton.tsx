"use client";

import { MoveRight } from "lucide-react";
import NextLink from "next/link";
import styled, { css } from "styled-components";

const HomeNavButtonStyle = css`
display: flex;
align-items: center;
justify-content: center;
font-size: 6rem;
line-height: 1;
color: white;
position: relative; 
background: transparent;
border: none;
cursor: pointer;
padding: 10px;
outline: none;



.arrow {
    display: flex;
    font-weight: 100;
    justify-content: start;
    position: absolute;
    left: -1000px; 
    opacity: 0;
    transition: left 0.3s ease, opacity 0.3s ease;
    outline: none;

    @media (max-width: 768px){
        display: none;
    }
}

&:hover {

    .arrow {
        left: -250px; 
        opacity: 1;
    }
}

&:focus-visible {
    .arrow {
        left: -250px; 
        opacity: 1;
    }
}

&::before {
    content: '';
    position: absolute;
    bottom: 0; 
    left: 0;
    width: 100%;
    height: 2px; 
    background-color: white; 
    transform: scaleX(0); 
    transform-origin: bottom left;
    transition: transform 0.3s ease;
}

&:hover::before {
    transform: scaleX(1);
}

&:focus::before {
    transform: scaleX(1);
}

@media (max-width: 768px){
    font-size: 3rem;
}
`;

const HomeNavButtonLink = styled(NextLink)`${HomeNavButtonStyle}`;
const HomeNavButtonAction = styled.button`${HomeNavButtonStyle}`;

const HomeNavButton = ({
	href,
	onClick,
	children,
}: { href?: string; onClick?: () => void; children: React.ReactNode }) => {
	if (href) {
		return (
			<HomeNavButtonLink href={href}>
				<div className="arrow">
					<MoveRight size={200} strokeWidth={0.3} />
				</div>
				{children}
			</HomeNavButtonLink>
		);
	}
	return (
		<HomeNavButtonAction onClick={onClick}>
			<div className="arrow">
				<MoveRight size={200} strokeWidth={0.3} />
			</div>
			{children}
		</HomeNavButtonAction>
	);
};
export default HomeNavButton;
