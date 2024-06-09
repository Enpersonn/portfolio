import styled from "styled-components";

type SliderProps = {
    
    value?: number;
    min?: number;
    max?: number;
    step?: number;
}

const StyledSlider = styled.div`

    width: 50%;
    
    border: 1px solid #86868663;
    border-radius: 999999px;

    font-size: 1.5rem;
    background-color: transparent;
    padding: 5px 10px;
    outline: none;
    transition: all 0.3s ease;
    position: relative;


    display: flex;
    justify-content: space-between;

    .point{
        content: '';

        cursor: pointer;

        position: absolute;
        top: 0%; 
        left: 0;
        width: 20px;
        height: 20px;
        border: 2px solid #fff;
        border-radius: 50%; 
        background-color: #000; 
        transition: all 0.2s ease;

        
    }

    span {
        width: 2px;
        height: 10px;
        background-color: #fff;
        top: 50%;
    }

    `


const Slider = ({
    value = 5,
    min = 0,
    max = 10,
    step = 10,
    ...prop
}: SliderProps) => {
    return (
        <StyledSlider>
            <button type="button" className="point"  />
            {[...Array(step)].map((_, index) => (
                <span key={index} />
            ))}
        </StyledSlider>
    );
    }


export default Slider;