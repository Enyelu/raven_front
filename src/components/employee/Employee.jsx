import { Switch, Route } from "react-router-dom";
import ContactHr from "../contacthr/ContactHr";
import ChangePassword from "../changePassword/ChangePassword";
import ContactLineManager from "../contactLineManage/ContactLineManager";
import Profile from "../profile/Profile";
import EmployeeSideBar from "../sidebars/employeeSideBar/EmployeeSideBar";
import { data } from "./data.js";

const Employee = () => {
  const employeeData = data();
  return (
    <div>
      <EmployeeSideBar />
      <Switch>
        <Route path="/employee" exact component={Profile} />
        <Route
          path="/employee/profile"
          render={(props) => <Profile {...props} hrData={employeeData} />}
        />
        cd
        <Route path="/employee/hiring-manager" component={ContactHr} />
        <Route path="/employee/line-manager" component={ContactLineManager} />
        <Route path="/employee/change-passward" component={ChangePassword} />
      </Switch>
    </div>
  );
};
export default Employee;
