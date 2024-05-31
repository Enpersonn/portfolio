import styled from "styled-components"

const SearchBar = styled.input`
    width: 50vw;
    border: 1px solid #86868663;
    font-size: 1.5rem;
    border-radius: 5px;
    background-color: transparent;
    padding: 5px 10px;
    outline: none;
    transition: all 0.3s ease;


    &:focus {
        padding: 5px 20px;


        border-radius: 0px;
        border: 1px solid transparent;
        border-bottom: 1px solid white;
    }

    @media (max-width: 768px){
        width: 80vw;
        font-size: 1rem;
    }

`;

export default SearchBar;