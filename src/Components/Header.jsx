import React from "react";
import "./Header.css";
import Logo from "../assets/Logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
      <header className="header">
      <Link to="/">
          <img src={Logo} alt="logo" className="Logo" />
        </Link>
        <nav className="navbar">
          {/* <a href="/"></a> */}
          <Link to="/recipe_vault">Recipe Vault</Link>
          <Link to="/">Virtual Assistant</Link>
          <Link to="/">Health Guide</Link>
          <Link to="/">Find Your Doctor</Link>
          <Link to="/our_story">Our Story</Link>
        </nav>

        {/* Resposive nav bar */}

          {/* <div className='toggle_btn'>
          <GiHamburgerMenu size='1.5rem'/>
          </div> }

          { <div className="dropdown_menu">
          <a href="/"></a>
          <li><a href="/recipe_vault">Recipe Vault</a></li>
          <li><a href="/">Virtual Assistant</a></li>
          <li><a href="/">Health Guide</a></li>
          <li><a href="/">Find Your Doctor</a></li>
          <li><a href="/">Our Story</a></li>
          </div> */}
      </header>

    </div>
  );
}

export default Header;
