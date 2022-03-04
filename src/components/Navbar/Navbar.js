import React, { useState, useContext } from 'react';
import { Button } from './Button';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import Dropdown from './Dropdown';
import { signOut } from "firebase/auth"
import { AuthContext } from "../../context/auth";
import { auth } from "../../firebase";
import SearchBar from "./Searchbar";

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const closeMobileMenu = () => setClick(false);

  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = "../../login"; 
    navigate(path);
  }

  const { user } = useContext(AuthContext);
  const handleSignout = async () => {
    await signOut(auth);
  };

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <>
      <nav className='navbar'>

        <Link to='/' className='navbar-logo' onClick={closeMobileMenu} style={{fontSize: "1.5rem"}} >NJoy</Link>
        
        <SearchBar />

        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            <Link to='#' className='nav-links' onClick={closeMobileMenu}>Attractions</Link>
            {dropdown && <Dropdown />}
          </li>
          
          <li className='nav-item'>
            <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>Contact</Link>
          </li>
        </ul>
        
        {user ? (
          <>
            <Link to="" style={{ marginLeft: "-30px" }} >Welcome back, User</Link>
            <button style={{ margin: "10px", marginLeft: "30px" }} className="btn" onClick={handleSignout}>Logout</button>
          </> ) : (
          <>
            <button style={{ margin: "10px" }} className="btn" onClick={routeChange} >Login</button>
          </> )
        }

      </nav>
    </>
  );
}

export default Navbar;
