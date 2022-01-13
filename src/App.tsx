import { Switch, Route, Redirect } from "react-router-dom";
import Header from "./components/navigations/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Login from "./components/login/Login";
import NotFound from "./components/notFound/NotFound";
import Policy from "./components/policy/Policy";
import CompleteAccountSetup from "./components/newEmployeeCompleteAccountSetup/NewEmployeeCompleteAccountSetup";
import AccountSetup from "./components/newEmployeeAccountSetUp/EmployeeAccountSetup";
import SlackOnboard from "./components/slackOnboard/SlackOnboard";
import ContactUs from "./components/contactUs/ContactUs";
import Hr from "./components/hr/Hr";
import Employee from "./components/employee/Employee";
import LineManager from "./components/lineManager/LineManager";
import "./App.scss";
import Employees from "./components/employees/Employees"
import image from "./components/imageTest/Imageers.jsx"
import QualifiedApplicants from "./components/qualifiedApplicants/QualifiedApplicants"

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
        <Route path="/completeaccountsetup" component={CompleteAccountSetup} />
        <Route path="/accountsetup" component={AccountSetup} />
        <Route path="/slackOnboard" component={SlackOnboard} />
        <Route path="/contactUs" component={ContactUs} />
        <Route path="/employees" component={Employees} />
        <Route path="/qualifiedApplicants" component={QualifiedApplicants} />
        <Route path="/image" component={image} />
        <Route component={NotFound} />
        <Redirect to="/about" />
        <Redirect to="/login" />
        <Redirect to="/policy" />
        <Redirect to="/hr" />
        <Redirect to="/linemanager" />
        <Redirect to="/employee" />
        <Redirect to="/completeaccountsetup" />
        <Redirect to="/accountsetup" />
        <Redirect to="/contactUs" />
        <Redirect to="/slackOnboard" />
        <Redirect to="/employees" />
        <Redirect to="/qualifiedApplicants" />
        <Redirect to="/image" />
      </Switch>
    </div>
  );
}

export default App;