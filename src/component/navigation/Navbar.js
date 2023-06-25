import { NavLink } from "react-router-dom"
const Navbar = () => {
    return (
        <div>
            <ul className="navbar">
                <li><NavLink className="nav-bar-link" to='/'>Home</NavLink></li>
                <li><NavLink className="nav-bar-link" to='/about'>About</NavLink></li>
                <li><NavLink className="nav-bar-link" to='/createTask'>CreateTask</NavLink></li>
                <li><NavLink className="nav-bar-link" to='/showTask'>ShowTask</NavLink></li>



            </ul>
        </div>
    )
}
export default Navbar