import { Outlet } from "react-router-dom"
import styled from "styled-components"
import Header from "../components/HeaderNav"

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 64rem;
    margin: 0 auto;
    padding: 1rem;
    gap: 2rem;
`;


export default function Layout() {
    return (
        <Wrapper>
            <Header />
            <Outlet />
        </Wrapper>
    )
}
