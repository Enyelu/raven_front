import { Switch, Route, Redirect } from "react-router-dom";
import MainPage from "./components/navigations/MainPage";
import Home from "./components/Home";
import About from "./components/About";
import Connect from "./components/Connect";
import Login from "./components/Login";
import Logout from "./components/Logout";
import NotFound from "./components/NotFound";
import Policy from "./components/Policy";
import "./App.css";

function App() {
  return (
    <div>
      <h1>Raven Access</h1>
      <MainPage />
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/connect" component={Connect} />
        <Route path="/logout" component={Logout} />
        <Route path="/login" component={Login} />
        <Route path="/policy" component={Policy} />
        <Route path="/" exact component={Home} />
        <Route component={NotFound} />
        <Redirect to="/about" />
        <Redirect to="/logout" />
        <Redirect to="/login" />
        <Redirect to="/policy" />
        <Redirect to="/connect" />
      </Switch>
    </div>
  );
}

export default App;
