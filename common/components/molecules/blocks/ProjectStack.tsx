import styled from "styled-components";


const Stack = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 1rem;
`;

const Section = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`;


const ProjectStack = ({list} : {list : any[]}) => {

    return (
        <Stack>
            {list.map((item, index) => (
                <Section key={index}>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                </Section>
            ))}
        </Stack>
    )
}

export default ProjectStack;