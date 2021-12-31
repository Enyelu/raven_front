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
        <div className="box">
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
            <NavLink to="/policy" className="link" activeClassName="ac">
              policy
            </NavLink>
          </li>
        </div>
      </ul>
    </nav>
  );
};
export default Header;
