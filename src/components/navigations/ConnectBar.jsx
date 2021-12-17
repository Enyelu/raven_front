import { NavLink } from "react-router-dom";
const ConnectBar = () => {
  return (
    <ul>
      <li>
        <NavLink to="/connect/hr">hr</NavLink>
      </li>
      <li>
        <NavLink to="/connect/linemanager">linemanager</NavLink>
      </li>
      <li>
        <NavLink to="/connect/employee">employee</NavLink>
      </li>
    </ul>
  );
};
export default ConnectBar;
