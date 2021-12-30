import { Switch, Route } from "react-router-dom";
import ContactHr from "../contacthr/ContactHr";
import ChangePassword from "../changePassword/ChangePassword";
import ContactLineManager from "../contactLineManage/ContactLineManager";
import Profile from "../profile/Profile";
import EmployeeSideBar from "../sidebars/employeeSideBar/EmployeeSideBar";

const Employee = () => {
  return (
    <div>
      <EmployeeSideBar />
      <Switch>
        <Route path="/employee/Profile" component={Profile} />
        <Route path="/employee/hiring-manager" component={ContactHr} />
        <Route path="/employee/line-manager" component={ContactLineManager} />
        <Route path="/employee/change-passward" component={ChangePassword} />
      </Switch>
    </div>
  );
};
export default Employee;
