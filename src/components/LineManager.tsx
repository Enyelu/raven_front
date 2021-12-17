import { Switch, Route } from "react-router-dom";
import ChangePassword from "./ChangePassword";
import Employees from "./Employees";
import MessageEmployees from "./MessageEmployees";
import Employee from "./Employee";
import LineManagerSideBar from "./sidebars/LineManagerSideBar";

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
          component={Employee}
        />
      </Switch>
    </div>
  );
};
export default LineManager;
