import { Switch, Route } from "react-router-dom";
import ContactHr from "./ContactHr";
import ChangePassword from "./ChangePassword";
import EmployeeSideBar from "./sidebars/EmployeeSideBar";
import ContactLineManager from "./ContactLineManager";

const Employee = () => {
  return (
    <div>
      <h3>Employee</h3>
      <EmployeeSideBar />
      <Switch>
        <Route path="/connect/employee/hiring-manager" component={ContactHr} />
        <Route
          path="/connect/employee/line-manager"
          component={ContactLineManager}
        />
        <Route
          path="/connect/employee/change-passward"
          component={ChangePassword}
        />
      </Switch>
    </div>
  );
};
export default Employee;
