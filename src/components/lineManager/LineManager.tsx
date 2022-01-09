import { Switch, Route } from "react-router-dom";
import ChangePassword from "../changePassword/ChangePassword";
import Employees from "../employees/Employees";
import MessageEmployees from "../messageEmployees/MessageEmployees";
import GetEmployee from "../getEmployee/GetEmployee";
import Profile from "../profile/Profile";
import { sideBarData } from "../hr/sideBarData";
import CommonSideBar from "../sidebars/commonSideBar/CommonSideBar";
import { data } from "./data";

const LineManager = () => {
  const lineManagerData = data();
  return (
    <div>
      <CommonSideBar sideData={sideBarData} />
      <Switch>
        <Route
          path="/linemanager/profile"
          exact
          render={(props) => <Profile {...props} hrData={lineManagerData} />}
        />
        <Route path="/linemanager/employees" component={Employees} />
        <Route
          path="/linemanager/message-employees"
          component={MessageEmployees}
        />

        <Route path="/linemanager/change-password" component={ChangePassword} />

        <Route path="/linemanager/employee" component={GetEmployee} />
      </Switch>
    </div>
  );
};
export default LineManager;
