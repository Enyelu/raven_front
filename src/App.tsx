import { Switch, Route, Redirect } from "react-router-dom";
import Header from "./components/navigations/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Connect from "./components/connect/Connect";
import Login from "./components/login/Login";
import Logout from "./components/logout/Logout";
import NotFound from "./components/notFound/NotFound";
import Policy from "./components/policy/Policy";
import "./App.scss";
import Registration from "./components/registration/Registration";
import EmployeeInvite from "./components/employeeInvite/EmployeeInvite"

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/connect" component={Connect} />
        <Route path="/logout" component={Logout} />
        <Route path="/login" component={Login} />
        <Route path="/policy" component={Policy} />
        <Route path="/" exact component={Home} />
        <Route path="/registration" component={Registration} />
        <Route path="/invite" component={EmployeeInvite} />
        <Route component={NotFound} />
        <Redirect to="/about" />
        <Redirect to="/logout" />
        <Redirect to="/login" />
        <Redirect to="/policy" />
        <Redirect to="/registration" />
        <Redirect to="/connect" />
        <Redirect to="/invite" />
      </Switch>
    </div>
  );
}

export default App;
