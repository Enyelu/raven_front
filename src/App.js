import { Switch, Route, Redirect } from "react-router-dom";
import "./App.scss";
import Login from "./components/login/Login";
import error404 from "./components/shared/error/error404"


function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/not-found" component={error404} />

        <Redirect to="/not-found" />
        <Redirect to="/login" />
      </Switch>
    </div>
  );
}

export default App;