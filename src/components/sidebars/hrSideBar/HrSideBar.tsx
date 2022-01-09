import { NavLink, useHistory } from "react-router-dom";
import { sidebardata } from "./sidebardata";
import TimeDate from "../../timeDate/TimeDate";
import "./HrSideBar.scss";

const HrSideBar = () => {
  const history = useHistory();
  return (
    <div style={{ height: "100%" }}>
      <div className="nav justify-content-end" style={{ marginTop: "80px" }}>
        <li className="nav-item">
          <NavLink className="nav-link" to="">
            <TimeDate />
          </NavLink>
        </li>
        <li className="nav-item">
          <button
            className="nav-link hr-li-button active"
            aria-current="page"
            onClick={() => {
              history.push("/logout");
            }}
          >
            logout
          </button>
        </li>
      </div>

      <ul className="list-group list-group-margin" style={{ width: "120px" }}>
        {sidebardata.map((item, index) => {
          return (
            <li
              key={index}
              className={`${item.cName} list-group-list`}
              style={{ width: "130px" }}
            >
              <NavLink
                to={item.path}
                className="nav-link-item active"
                aria-current="page"
                activeClassName="activeItemClass"
              >
                {item.icon}
                <span>{item.title}</span>
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default HrSideBar;
