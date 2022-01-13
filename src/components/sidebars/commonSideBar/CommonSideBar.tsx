import { ReactChild, ReactFragment, ReactPortal, Key } from "react";
import { LocationDescriptor, Location } from "history";
import { NavLink, useHistory } from "react-router-dom";
import TimeDate from "../../timeDate/TimeDate";
import "./CommonSideBar.scss";

type Item = {
  cName: any;
  path:
    | LocationDescriptor<unknown>
    | ((location: Location<unknown>) => LocationDescriptor<unknown>);
  icon: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined;
  title: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined;
};
type Index = Key | null | undefined;

const CommonSideBar = (props: any) => {
  const history = useHistory();
  return (
    <div style={{ height: "100%" }}>
      <div className="top-bar">
        <li >
          <NavLink className="nav-link" to="">
            <TimeDate />
          </NavLink>
        </li>
        <li >
          <button
            className="top-div-button"
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
        {props.sideData.map((item: Item, index: Index) => {
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

export default CommonSideBar;
