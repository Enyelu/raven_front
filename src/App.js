import React from "react"
import { Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import Login from "./components/login/Login";
import error404 from "./components/shared/error/error404"
import Hrdashboard from "./components/dashboard/hrDashboard/HrDashboard";


function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/not-found" component={error404} />
        <Route path="/hr-dashboard" component={Hrdashboard} />
        <Redirect to="/not-found" />
        <Redirect to="/login" />
      </Switch>
    </div>
  );
}

export default App;