import { Outlet } from "react-router-dom"
import Header from "../components/HeaderNav"

export default function Layout() {
    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}
