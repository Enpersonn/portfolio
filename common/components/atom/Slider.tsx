import { useState, useRef, useEffect } from "react";
import styled from "styled-components";

type SliderProps = {
	value?: number;
	min?: number;
	max?: number;
	step?: number;
};

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
    align-items: center;

    margin-top: 20px;

    .point {
        cursor: pointer;
        position: absolute;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 20px;
        height: 20px;
        border: 2px solid #fff;
        border-radius: 50%;
        background-color: #000;
        transition: all 0.2s ease;

        &::after {
            content: attr(data-value);
            opacity: var(--opacity);
            position: absolute;
            top: -30px;
            left: 50%;
            transform: translateX(-50%);
            width: auto;
            height: auto;
            padding: 2px 5px;
            background-color: #000;
            color: #fff;
            border: 1px solid #fff;
            border-radius: 5px;
            font-size: 0.75rem;
            white-space: nowrap;
            transition: opacity 0.2s ease;
        }

    }

    .step {
        cursor: pointer;
        width: 15px;
        height: 10px;
        display: flex;
        justify-content: center;
        align-items: center;

        .mark {
            width: 2px;
            height: 100%;
            background-color: #fff;
        }
    }
`;

const Slider = ({
	value = 5,
	min = 0,
	max = 10,
	step = 10,
	...props
}: SliderProps) => {
	const [currentValue, setCurrentValue] = useState(value);
	const [opacity, setOpacity] = useState(0);

	const sliderRef = useRef<HTMLDivElement>(null);
	const pointRef = useRef<HTMLButtonElement>(null);

	const handleMouseDown = (e: React.MouseEvent) => {
		document.addEventListener("mousemove", handleMouseMove);
		document.addEventListener("mouseup", handleMouseUp);
		setOpacity(1);
	};

	const handleMouseMove = (e: MouseEvent) => {
		if (sliderRef.current && pointRef.current) {
			const rect = sliderRef.current.getBoundingClientRect();
			const offsetX = e.clientX - rect.left;
			const percentage = Math.max(
				0,
				Math.min(100, (offsetX / rect.width) * 100),
			);

			const newValue = Math.round((percentage / 100) * (max - min) + min);
			console.log(newValue);
			setCurrentValue(newValue);
		}
	};

	const handleMouseUp = () => {
		document.removeEventListener("mousemove", handleMouseMove);
		document.removeEventListener("mouseup", handleMouseUp);
		setOpacity(0);
	};

	useEffect(() => {
		if (pointRef.current && sliderRef.current) {
			const percentage = ((currentValue - min) / (max - min)) * 100;
			pointRef.current.style.left = `${percentage}%`;
			pointRef.current.setAttribute("data-value", currentValue.toString());
		}
	}, [currentValue, min, max]);

	return (
		<StyledSlider ref={sliderRef} {...props}>
			<button
				data-value={currentValue}
				style={{ "--opacity": opacity } as React.CSSProperties}
				type="button"
				className="point"
				ref={pointRef}
				onMouseDown={handleMouseDown}
			/>
		</StyledSlider>
	);
};

export default Slider;
