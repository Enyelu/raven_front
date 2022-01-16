import React from "react"
import { useState} from "react";
import { useHistory, NavLink } from "react-router-dom";
import agent from "../api/Agent";
import loginImage from "../shared/Images/LoginImages/a.png";
import pass from "../shared/Images/LoginImages/pass.png";
import "./login.css";
// import { GlobalVariables } from "../AppContext/Provider";

const Login = () => {
  let history = useHistory();
  // const { employeeEmail, setEmployeeEmail } = useContext(GlobalVariables);
  // const { token, setToken } = useContext(GlobalVariables);
  // const { loginResponse, setLoginResponse } = useContext(GlobalVariables);

  const [loginCredentials, setLoginCredentials] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault(loginCredentials.email);
    //localStorage.setItem('token', 'hhjj');
    const response = await agent.RavenAccess.Login(
      loginCredentials.email,
      loginCredentials.password
    );

    if (response !== null) {
      // setToken(response.data.token);
      // setLoginResponse(response.data);
      // setEmployeeEmail(response.data.appUser.email);

      localStorage.setItem('token', response.data.token);
      localStorage.setItem('email', response.data.appUser.email);
      localStorage.setItem('LogimResponse', response.data);

      // console.log("gg", response.data.appUser.email)
      // console.log("Context Email", employeeEmail);
      // console.log("Context Login Response", loginResponse);
      // console.log("Context Token", token);

      if (
        response.data.roles[0] === "SuperAdmin" ||
        response.data.roles[0] === "Admin"
      ) {
        history.push("/hr");
      } else {
        history.push("/employee/profile");
      }
    }
  };

  return (
    <div className="login-main">
      <div className="sub-login">
        <div>
          <div className="login-img">
            <div className="container-img">
              <img src={loginImage} alt="profile" className="profile-img" />
            </div>
          </div>
          <div>
            <h1 className="login">Login</h1>
            <form onSubmit={handleSubmit}>
              <div className="first-class">
                <img src={loginImage} alt="email" className="email" />
                <input
                  type="text"
                  placeholder="email"
                  className="login-input"
                  required
                  onChange={(e) =>
                    setLoginCredentials({
                      ...loginCredentials,
                      email: e.target.value,
                    })
                  }
                  value={loginCredentials.email}
                />
              </div>
              <div className="second-input">
                <img src={pass} alt="pass" className="email" />
                <input
                  type="password"
                  placeholder="password"
                  className="login-input"
                  required
                  onChange={(e) =>
                    setLoginCredentials({
                      ...loginCredentials,
                      password: e.target.value,
                    })
                  }
                  value={loginCredentials.password}
                />
              </div>
              <div className="login-button">
                <button className="inner-button" type="submit">
                  Login
                </button>
              </div>
            </form>
            <p className="login-link">
              <NavLink to="#" className="NavLink">
                forgot password?
              </NavLink>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
