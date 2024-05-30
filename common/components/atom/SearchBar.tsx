import styled from "styled-components"

const SearchBar = styled.input`
    width: 50%;
    border: 1px solid #86868663;
    font-size: 1.5rem;
    border-radius: 5px;
    background-color: transparent;
    padding: 5px 10px;
    outline: none;
    transition: all 0.3s ease;


    &:focus {
        padding: 5px 30px;


        border-radius: 0px;
        border: 1px solid transparent;
        border-bottom: 1px solid white;
    }

`;

export default SearchBar;