import { Switch, Route } from "react-router-dom";
import ChangePassword from "../changePassword/ChangePassword";
import Employees from "../employees/Employees";
import MessageEmployee from "../messageEmployee/MessageEmployee";
import HrSideBar from "../sidebars/hrSideBar/HrSideBar";
import MessageEmployees from "../messageEmployees/MessageEmployees";
import Profile from "../profile/Profile";
import "./Hr.scss";

const Hr = () => {
  return (
    <div>
      <HrSideBar />
      <Switch>
        <Route path="/connect/hr/employees" component={Employees} />
        <Route
          path="/connect/hr/message-employees"
          component={MessageEmployees}
        />
        <Route path="/connect/hr/profile" component={Profile} />
        <Route path="/connect/hr/change-password" component={ChangePassword} />
        <Route
          path="/connect/hr/message-employee"
          component={MessageEmployee}
        />
      </Switch>
    </div>
  );
};
export default Hr;
