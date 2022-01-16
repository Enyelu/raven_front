import React from 'react';
import Topbar from "./hrConponent/topbar/Topbar";
import Sidebar from "./hrConponent/sidebar/Sidebar";
import Profile from "../../pages/hrPages/profile/Profile";
import JobOffering from "../../pages/hrPages/jobOffering/JobOffering";
import AddJobOffering from "../../pages/hrPages/addJobOffering/AddJobOffering";
import Onboarding from "../../pages/hrPages/onboarding/Onboarding";
import Employees from "../../pages/hrPages/employees/Employees";
import AddEmployees from "../../pages/hrPages/addEmployees/AddEmployees";
import "./hrDashboard.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function HrDashboard() {
  return (
  
      <div>
        <Router>
        <Topbar />
        <div className="container">
          <Sidebar />
          <Switch>
          <Route exact path="/profile">
          <Profile />
          </Route>
          <Route path="/jobOffering">
          <JobOffering />
          </Route>
          <Route path="/addJobOffering">
          <AddJobOffering />
          </Route>
          <Route path="/onboarding">
          <Onboarding />
          </Route>
          <Route path="/employees">
          <Employees />
          </Route>
          <Route path="/addEmployees">
          <AddEmployees />
          </Route>
          </Switch>
        </div>
        </Router>
        </div>
  
  );
}

export default HrDashboard;
