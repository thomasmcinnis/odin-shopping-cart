import { NavLink } from "react-router-dom"
import styled from "styled-components";

const menuItems = [
    {
        path: '/',
        title: 'Home'
    },
    {
        path: 'store',
        title: 'Store'
    },
    {
        path: 'cart',
        title: 'Cart'
    },
]

const Nav = styled.nav`
    display: flex;
    gap: 2rem;
`;

const NavList = styled.ul`
    display: flex;
    flex-grow: 1;
    gap: 1rem;
    list-style: none;
    padding-inline-start: 0;

    li {
        &:last-child {
            margin-left: auto;
        }

        &>.active {
            color: hsl(var(--accent));
        }
    }
`;

export default function Header() {
    return (
        <Nav>
            The Croc Shop
            <NavList>
                {menuItems.map((link) => (
                    <li key={link.title}>
                        <NavLink
                            to={link.path}
                            className={({ isActive, isPending }) =>
                                isActive
                                    ? 'active'
                                    : isPending
                                        ? 'pending'
                                        : ''
                            }
                        >{link.title}</NavLink>
                    </li>
                ))}
            </NavList>
        </Nav>
    )

}
