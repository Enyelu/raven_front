import { NavLink } from "react-router-dom";
const LineManagerSideBar = () => {
  return (
    <ul>
      <li>
        <NavLink to="/profile">Profile</NavLink>
      </li>
      <li>
        <NavLink to="/employees">Employees</NavLink>
      </li>
      <li>
        <NavLink to="/message-employees">Message Employees</NavLink>
      </li>

      <li>
        <NavLink to="/message-employee">Message Employee</NavLink>
      </li>
    </ul>
  );
};
export default LineManagerSideBar;
