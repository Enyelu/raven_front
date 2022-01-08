import { Switch, Route } from "react-router-dom";
import ChangePassword from "../changePassword/ChangePassword";
import Employees from "../employees/Employees";
import GetEmployee from "../getEmployee/GetEmployee";
import MessageEmployee from "../messageEmployee/MessageEmployee";
import HrSideBar from "../sidebars/hrSideBar/HrSideBar";
import MessageEmployees from "../messageEmployees/MessageEmployees";
import Profile from "../profile/Profile";
import { data } from "./data";
import "./Hr.scss";

const Hr = (): any => {
  const hrData = data();
  return (
    <div>
      <HrSideBar />
      <Switch>
        <Route
          path="/hr/profile"
          exact
          render={(props) => <Profile {...props} hrData={hrData} />}
        />
        <Route path="/hr/employees" component={Employees} />
        <Route path="/hr/message-employees" component={MessageEmployees} />

        <Route path="/hr/change-password" component={ChangePassword} />

        <Route path="/hr/employee" component={GetEmployee} />
      </Switch>
    </div>
  );
};
export default Hr;
