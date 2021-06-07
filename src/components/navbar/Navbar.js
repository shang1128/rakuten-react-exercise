import './Navbar.css';
import {useState} from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import About from '../about/About';
import Contact from '../contact/Contact';


const Navbar = () => {
    const [username, setUsername] = useState ('Trisha');
    return (
        <nav id='navbar'>
        <ul>
          <Link to="/">
            <li>Home</li>
            </Link>
          <Link to="/Contact">
            <li>Contact</li>
            </Link>
          <Link to="/About">
            <li>About</li>
            </Link>
        </ul>
        <div className="nav-details">
          <p className="nav-username"> {username} </p>
        </div>
        </nav>
    )
}
export default Navbar;