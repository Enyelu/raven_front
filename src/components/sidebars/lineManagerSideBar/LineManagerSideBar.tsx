import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { sidebardata } from "./sidebardata";
import { IconContext } from "react-icons";
import "./LineManagerSideBar.scss";

const LineManagerSideBar = () => {
  const [sidebar, setSideBar] = useState(true);
  const showSideBar = () => setSideBar(!sidebar);
  const history = useHistory();
  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="navbar">
          <Link to="/connect/linemanager/profile" className="menu-bars">
            <FaIcons.FaBars onClick={showSideBar} />
          </Link>
          <div className="lm-bar-input">
            <button
              onClick={() => {
                history.push("/logout");
              }}
            >
              logout
            </button>
          </div>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSideBar}>
            <li className="navbar-toggle">
              <Link to="/connect/linemanager/profile" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {sidebardata.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
};
export default LineManagerSideBar;
