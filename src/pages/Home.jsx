import styled from "styled-components"

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    justify-content: center;
    align-items: center;
    text-align: center;
`;

export default function Home() {
    return (
        <Wrapper>
            <h1>Welcome to the homepage</h1>
            <button>Shop now</button>
        </Wrapper>
    )
}
