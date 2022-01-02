import { Switch, Route, Redirect } from "react-router-dom";
import Header from "./components/navigations/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Login from "./components/login/Login";
import NotFound from "./components/notFound/NotFound";
import Policy from "./components/policy/Policy";
import Registration from "./components/registration/Registration";
import EmployeeInvite from "./components/newEmployeeAccountSetUp/EmployeeAccountSetup";
import SlackOnboard from "./components/slackOnboard/SlackOnboard";
import ContactUs from "./components/contactUs/ContactUs";
import Hr from "./components/hr/Hr";
import Employee from "./components/employee/Employee";
import LineManager from "./components/lineManager/LineManager";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/logout" component={Login} />
        <Route path="/login" component={Login} />
        <Route path="/policy" component={Policy} />
        <Route path="/hr" component={Hr} />
        <Route path="/linemanager" component={LineManager} />
        <Route path="/employee" component={Employee} />
        <Route path="/" exact component={Home} />
        <Route path="/registration" component={Registration} />
        <Route path="/invite" component={EmployeeInvite} />
        <Route path="/slackOnboard" component={SlackOnboard} />
        <Route path="/contactUs" component={ContactUs} />
        <Route component={NotFound} />
        <Redirect to="/about" />
        <Redirect to="/login" />
        <Redirect to="/policy" />
        <Redirect to="/hr" />
        <Redirect to="/linemanager" />
        <Redirect to="/employee" />
        <Redirect to="/registration" />
        <Redirect to="/invite" />
        <Redirect to="/contactUs" />
        <Redirect to="/slackOnboard" />
      </Switch>
    </div>
  );
}

export default App;
