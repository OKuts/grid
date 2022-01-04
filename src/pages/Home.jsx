import {NavLink, Outlet} from "react-router-dom";

export const Home = () => {
    return (
        <>
            <nav>
                <NavLink to="/">Page1</NavLink>
                <NavLink to="/page2">Page2</NavLink>
                <NavLink to="/page3">Page3</NavLink>
            </nav>
            <Outlet/>
        </>
    )
}