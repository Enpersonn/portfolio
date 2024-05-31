import NextLink from 'next/link';
import styled from "styled-components";

const HomeNavButton = styled(NextLink)`
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
    


    &::after {
        content: "------>";
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

    &:hover::after {
        left: -400px; 
        opacity: 1;
    }

    &:focus-visible::after {
        left: -400px; 
        opacity: 1;
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

export default HomeNavButton;
