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
          <NavLink to="/about" className="rem">
            about
          </NavLink>
        </li>
        <li className="item">
          <NavLink to="/login" className="rem">
            login
          </NavLink>
        </li>
        <li className="item">
          <NavLink to="/logout" className="rem">
            logout
          </NavLink>
        </li>
        <li className="item">
          <NavLink to="/policy" className="rem">
            policy
          </NavLink>
        </li>
        <li className="item">
          <NavLink to="/connect" className="rem">
            connect
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
export default MainPage;
