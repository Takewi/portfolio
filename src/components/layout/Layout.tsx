import { Link, Outlet } from "react-router-dom"
import "./Layout.css"
export const Layout = () => {
    return (
        <>
            <div className="d-flex align-items-start">
                <nav style={{ width: "100%" }} className="navbar navbar-expand-lg navbar-dark bg-primary order-2">
                    <div className="container-fluid">
                        <div className="navbar-collapse">
                            <ul className="navbar-nav">
                                <li>
                                    <Link id="neon" style={{fontSize: "25px"}} className="nav-link text-white" to="home">Home</Link>
                                </li>
                                <li>
                                    <Link id="neon" style={{fontSize: "25px"}} className="nav-link text-white" to="about">About</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className="vh-100 flex-shrink-0 p-3 text-white bg-primary order-1" style={{ width: "250px" }}>
                    <Link to="/" className="text-center text-white text-decoration-none">
                        <h1 id="neon">Gawi_</h1>
                    </Link>
                    <hr />
                </div>
            </div>
            <Outlet />
        </>
    )
}