import { Switch, Route } from "react-router-dom";
import ChangePassword from "../changePassword/ChangePassword";
import Employees from "../employees/Employees";
import MessageEmployees from "../messageEmployees/MessageEmployees";
import MessageEmployee from "../messageEmployee/MessageEmployee";
import LineManagerSideBar from "../sidebars/lineManagerSideBar/LineManagerSideBar";
import Profile from "../profile/Profile";

const LineManager = () => {
  return (
    <div>
      <LineManagerSideBar />
      <Switch>
        <Route path="/linemanager" exact component={Profile} />

        <Route path="/linemanager/employees" component={Employees} />
        <Route path="/linemanager/profile" component={Profile} />

        <Route
          path="/linemanager/message-employees"
          component={MessageEmployees}
        />
        <Route path="/linemanager/change-passward" component={ChangePassword} />
        <Route
          path="/linemanager/message-employee"
          component={MessageEmployee}
        />
      </Switch>
    </div>
  );
};
export default LineManager;
