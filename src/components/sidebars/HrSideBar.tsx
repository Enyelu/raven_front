import { NavLink } from "react-router-dom";
const HrSideBar = () => {
  return (
    <ul>
      <li>
        <NavLink to="/connect/hr/employees">Employees</NavLink>
      </li>
      <li>
        <NavLink to="/connect/hr/message-employees">Message Employees</NavLink>
      </li>
      <li>
        <NavLink to="/connect/hr/change-password">change Password</NavLink>
      </li>
      <li>
        <NavLink to="/connect/hr/message-employee">Message Employee</NavLink>
      </li>
    </ul>
  );
};
export default HrSideBar;
