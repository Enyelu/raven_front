import { Switch, Route } from "react-router-dom";
import ChangePassword from "../changePassword/ChangePassword";
import Employees from "../employees/Employees";
import MessageEmployees from "../messageEmployees/MessageEmployees";
import MessageEmployee from "../messageEmployee/MessageEmployee";
import LineManagerSideBar from "../sidebars/LineManagerSideBar";

const LineManager = () => {
  return (
    <div>
      <h3>Line Manager</h3>
      <LineManagerSideBar />
      <Switch>
        <Route path="/connect/linemanager/employees" component={Employees} />
        <Route
          path="/connect/linemanager/message-employees"
          component={MessageEmployees}
        />
        <Route
          path="/connect/linemanager/change-passward"
          component={ChangePassword}
        />
        <Route
          path="/connect/linemanager/message-employee"
          component={MessageEmployee}
        />
      </Switch>
    </div>
  );
};
export default LineManager;
