import { Switch, Route, Redirect } from "react-router-dom";
import ConnectBar from "./navigations/ConnectBar";
import Employee from "./Employee";
import LineManager from "./LineManager";

import Hr from "./Hr";

const Connect = () => {
  return (
    <div>
      <h3>I am connect component</h3>
      <ConnectBar />
      <Switch>
        <Route path="/connect/hr" component={Hr} />
        <Route path="/connect/linemanager" component={LineManager} />
        <Route path="/connect/employee" component={Employee} />
        <Redirect path="/connect/hr" />
        <Redirect path="/connect/linemanager" />
        <Redirect path="/connect/employee" />
      </Switch>
    </div>
  );
};
export default Connect;
