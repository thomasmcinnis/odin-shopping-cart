import { NavLink } from "react-router-dom"

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

export default function Header() {
    return (
        <nav>
            This is where the nav will be
            <ul>
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
            </ul>
        </nav>
    )

}
