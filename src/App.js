import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Profile from "./pages/profile/Profile"
import Onboarding from './pages/onboarding/Onboarding';
import Sidebar from "./components/hrComponent/sidebar/Sidebar";
import Topbar from "./components/hrComponent/topbar/Topbar"

function App() {
  return (
        <Router>
        <Topbar />
        <div className="container">

          <Sidebar />

          <Switch>

          <Route exact path="/profile">
          <Profile />
          </Route>
          
          <Route path="/onboarding">
          <Onboarding />
          </Route>
         
          </Switch>
        </div>
        </Router>
  );
}

export default App;
