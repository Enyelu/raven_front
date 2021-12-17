import { NavLink } from "react-router-dom";
const MainPage = () => {
  return (
    <ul>
      <li>
        <NavLink to="/">home</NavLink>
      </li>
      <li>
        <NavLink to="/about">about</NavLink>
      </li>
      <li>
        <NavLink to="/login">login</NavLink>
      </li>
      <li>
        <NavLink to="/logout">logout</NavLink>
      </li>
      <li>
        <NavLink to="/policy">policy</NavLink>
      </li>
      <li>
        <NavLink to="/connect">connect</NavLink>
      </li>
    </ul>
  );
};
export default MainPage;
