import './Navbar.css';
import {useState} from 'react';

const Navbar = () => {
    const [username, setUsername] = useState ('Trisha');
    return (
        <nav id='navbar'>
        <ul>
          <a href="#"><li>Home</li></a>
          <a href="#"><li>Contact</li></a>
          <a href="#"><li>About</li></a>
        </ul>
        <div className="nav-details">
          <p className="nav-username"> {username} </p>
        </div>
        </nav>
    )
}
export default Navbar;