import StyledLink from "../atom/Button/Link";

const NavBar = ({ isSearchPage }: { isSearchPage?: boolean }) => {
	return (
		<div className=" w-full flex justify-center gap-5 font-extralight pt-5">
			<StyledLink href={"../articles"} type="menu" active={!isSearchPage}>
				Discover
			</StyledLink>
			<StyledLink type="menu" href="../search" active={isSearchPage}>
				Search
			</StyledLink>
		</div>
	);
};

export default NavBar;
