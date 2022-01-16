import { Switch, Route, Redirect } from "react-router-dom";
import "./App.scss";
import Login from "./components/login/Login";


function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <Switch>
        <Route path="/login" component={Login} />
        <Redirect to="/login" />
      </Switch>
    </div>
  );
}

export default App;