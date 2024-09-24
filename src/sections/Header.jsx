import { useState } from "react";
import "../styles/sections/header.css";

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive((prevState) => !prevState); // Simplified toggle logic
  };

  return (
    <header>
      <div className="logoNav">
        <div className="logo">Wefo</div>
        <div className="hamburger" onClick={toggleMenu}>
          ☰
        </div>
        <nav className="menu">
          <ul>
            <li>Menu item</li>
            <li>Menu item</li>
            <li>Menu item</li>
            <li>Menu item</li>
          </ul>
        </nav>
      </div>
      <button className="cta1">Start a project</button>

      <div className={`mobileNav ${menuActive ? 'menu-active' : ''}`}>
        <ul>
          <li>Menu item</li>
          <li>Menu item</li>
          <li>Menu item</li>
          <li>Menu item</li>
        </ul>
        <button className="cta2">Start a project</button>
      </div>
    </header>
  );
};

export default Header;
