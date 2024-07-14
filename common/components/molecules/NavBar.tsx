import { ArrowLeft, House } from "lucide-react";
import Link from "next/link";
import styled from "styled-components";

const NavButton = styled(Link)`
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 28px;
    height: 28px;
    border: 1px solid #86868663;
    `;

const NavBar = () => (
	<nav className="  w-full h-[48px] grid grid-cols-12 items-center  border-b-[1px] border-[#86868663]">
		<div className=" col-start-3 flex gap-3 ">
			<NavButton href={"../"}>
				<House size={18} />
			</NavButton>
		</div>
	</nav>
);

export default NavBar;
