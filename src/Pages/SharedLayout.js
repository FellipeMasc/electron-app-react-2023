import { Outlet } from "react-router-dom"
import Navbar from "../Components/Navbar.js"
const SharedLayout = () => {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    )
}
export default SharedLayout
