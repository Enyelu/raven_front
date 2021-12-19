import { Switch, Route } from "react-router-dom";
import ContactHr from "../contacthr/ContactHr";
import ChangePassword from "../changePassword/ChangePassword";
import EmployeeSideBar from "../sidebars/EmployeeSideBar";
import ContactLineManager from "../contactLineManage/ContactLineManager";

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
