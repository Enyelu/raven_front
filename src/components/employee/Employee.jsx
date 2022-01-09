import { Switch, Route } from "react-router-dom";
import ContactHr from "../contacthr/ContactHr";
import CommonSideBar from "../sidebars/commonSideBar/CommonSideBar";
import ChangePassword from "../changePassword/ChangePassword";
import ContactLineManager from "../contactLineManage/ContactLineManager";
import Profile from "../profile/Profile";
import { sideBarData } from "./sideBarData";
import { data } from "./data.js";
import "./Employee.scss";

const Employee = () => {
  const employeeData = data();
  return (
    <div>
      <CommonSideBar sideData={sideBarData} />
      <Switch>
        <Route
          path="/employee/profile"
          exact
          render={(props) => <Profile {...props} hrData={employeeData} />}
        />
        <Route path="/employee/hiring-manager" component={ContactHr} />
        <Route path="/employee/line-manager" component={ContactLineManager} />

        <Route path="/employee/change-password" component={ChangePassword} />
      </Switch>
    </div>
  );
};
export default Employee;
