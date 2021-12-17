import { NavLink } from "react-router-dom";
const LineManagerSideBar = () => {
  return (
    <ul>
      <li>
        <NavLink to="/connect/linemanager/employees">Employees</NavLink>
      </li>
      <li>
        <NavLink to="/connect/linemanager/message-employees">
          Message Employees
        </NavLink>
      </li>
      <li>
        <NavLink to="/connect/linemanager/change-passward">
          change Password
        </NavLink>
      </li>
      <li>
        <NavLink to="/connect/linemanager/message-employee">
          Message Employee
        </NavLink>
      </li>
    </ul>
  );
};
export default LineManagerSideBar;
