import { Link, Outlet } from "react-router-dom"

export const Layout = () => {
    return (<>
        <nav>
            <ul>
                <li>
                    <Link to="/home">Home</Link>
                </li>
                <li>
                    <Link to="/about">about</Link>
                </li>
            </ul>
        </nav>
        <Outlet />
    </>
    )
}