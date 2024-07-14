import styled from "styled-components";

const Card = styled.div`

    border-radius: 15px;
    overflow: hidden;
    

    `;

export const CardSkeleton = () => (
	<Card>
		<div className="animate-pulse rounded-[15px] h-48 bg-[#ffffff1c]" />
		<div className=" p-4">
			<div className="animate-pulse h-4 bg-[#ffffff1c] w-3/4 mb-2" />
			<div className="animate-pulse h-4 bg-[#ffffff1c] w-1/2" />
		</div>
	</Card>
);

export default Card;
