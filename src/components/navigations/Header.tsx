import { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../images/logo.png.png";
import "./Header.scss";
const Header = () => {
  const [showCollapsedMenu, setShow] = useState(false);
  const toggleMenu = () => {
    setShow(!showCollapsedMenu);
  };
  const show = showCollapsedMenu ? "show" : "";
  return (
    <header>
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark headerClass">
        <NavLink className="navbar-brand" to="/">
          <img
            src={Logo}
            alt="Logo"
            title="Logo"
            width="40"
            height="40"
            className="logo"
          />
        </NavLink>
        <button
          className="navbar-toggler toggleHeader"
          type="button"
          data-toggle="collapse"
          data-target="#navbarCollapse"
          onClick={toggleMenu}
          aria-controls="navbarCollapse"
          aria-expanded="true"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={"collapse navbar-collapse " + show}
          id="navbarCollapse"
          style={{ height: "2vh" }}
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink
                className="nav-link link"
                to="/about"
                activeClassName="ac"
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link link"
                to="/policy"
                activeClassName="ac"
              >
                policy
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                className="nav-link link"
                to="/login"
                activeClassName="ac"
              >
                Login
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
export default Header;
