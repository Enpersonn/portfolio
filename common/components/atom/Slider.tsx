import styled from "styled-components";


const StyledSlider = styled.div`

    width: 50vw;
    border: 1px solid #86868663;
    font-size: 1.5rem;
    border-radius: 5px;
    background-color: transparent;
    padding: 5px 10px;
    outline: none;
    transition: all 0.3s ease;
    position: relative;

    &::after {
        content: '';
        position: absolute;
        bottom: 0; 
        left: 50%;
        width: 0%;
        height: 2px; 
        background-color: white; 
        transition: all 0.2s ease;
    }

    `


const Slider = () => {
    return (
        <StyledSlider>
        </StyledSlider>
    );
    }


export default Slider;