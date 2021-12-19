import { NavLink } from "react-router-dom";
import "./MainPage.scss";
const MainPage = () => {
  return (
    <div className="topbar">
      <ul className="nav">
        <li className="logo">
          <NavLink to="/" className="rem">
            LOGO
          </NavLink>
        </li>
        <li className="item">
          <NavLink
            to="/about"
            className="rem"
            activeStyle={{ backgroundColor: "#ead", color: "#eea" }}
          >
            about
          </NavLink>
        </li>
        <li className="item">
          <NavLink
            to="/login"
            className="rem"
            activeStyle={{ backgroundColor: "#ead", color: "#eea" }}
          >
            login
          </NavLink>
        </li>
        <li className="item">
          <NavLink
            to="/logout"
            className="rem"
            activeStyle={{ backgroundColor: "#ead", color: "#eea" }}
          >
            logout
          </NavLink>
        </li>
        <li className="item">
          <NavLink
            to="/policy"
            className="rem"
            activeStyle={{ backgroundColor: "#ead", color: "#eea" }}
          >
            policy
          </NavLink>
        </li>
        <li className="item">
          <NavLink
            to="/connect"
            className="rem"
            activeStyle={{ backgroundColor: "#ead", color: "#eea" }}
          >
            connect
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
export default MainPage;
