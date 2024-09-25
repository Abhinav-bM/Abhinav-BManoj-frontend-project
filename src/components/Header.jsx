import { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/components/header.css";

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive((prevState) => !prevState);
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
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/service"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/service"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/service"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <button className="cta1">Start a project</button>

      {/* Mobile Nav */}
      <div className={`mobileNav ${menuActive ? "menu-active" : ""}`}>
        <ul>
          <li>
            <NavLink
              to="/"
              onClick={toggleMenu}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/service"
              onClick={toggleMenu}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/service"
              onClick={toggleMenu}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/service"
              onClick={toggleMenu}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Contact
            </NavLink>
          </li>
        </ul>
        <button className="cta2">Start a project</button>
      </div>
    </header>
  );
};

export default Header;
