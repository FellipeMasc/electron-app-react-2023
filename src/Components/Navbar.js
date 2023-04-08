import ggdlogo from "../ggdlogo.jpg"
import "../App.css"

const Navbar = () => {
    return (
        <nav className="App">
            <h2>Xsuco dos Gringos</h2>
            <img src={ggdlogo} className="App-logo" alt="logo" />
        </nav>
    )
}
export default Navbar
