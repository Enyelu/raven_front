import { NavLink } from "react-router-dom";
const EmployeeSideBar = () => {
  return (
    <ul>
      <li>
        <NavLink to="/connect/employee/line-manager">
          Contact LineManager
        </NavLink>
      </li>
      <li>
        <NavLink to="/connect/employee/hiring-manager">
          Contact Hiring Manager
        </NavLink>
      </li>
      <li>
        <NavLink to="/connect/employee/change-passward">
          change Password
        </NavLink>
      </li>
    </ul>
  );
};
export default EmployeeSideBar;
