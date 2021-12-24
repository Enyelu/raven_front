import { NavLink } from "react-router-dom";
import Logo from "../images/logo.png.png";
import "./Header.scss";
const Header = () => {
  return (
    <nav className="navHeader">
      <ul className="ulHeader">
        <li className="liHeader">
          <NavLink to="/" className="link">
            <img
              src={Logo}
              alt="Logo"
              title="Logo"
              width="40"
              height="40"
              className="logo"
            />
          </NavLink>
        </li>
        <li className="liHeader">
          <NavLink to="/about" className="link" activeClassName="ac">
            about
          </NavLink>
        </li>
        <li className="liHeader">
          <NavLink to="/login" className="link" activeClassName="ac">
            login
          </NavLink>
        </li>
        <li className="liHeader">
          <NavLink to="/logout" className="link" activeClassName="ac">
            logout
          </NavLink>
        </li>
        <li className="liHeader">
          <NavLink to="/policy" className="link" activeClassName="ac">
            policy
          </NavLink>
        </li>
        <li className="liHeader">
          <NavLink to="/connect" className="link" activeClassName="ac">
            connect
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default Header;
