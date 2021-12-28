/* eslint-disable jsx-a11y/alt-text */
import { NavLink } from "react-router-dom";
import profile from "../images/a.png";
import email from "../images/email.jpg";
import pass from "../images/pass.png";
import "./login.scss";
const Login = () => {
  return (
    <div className="login-main">
      <div className="sub-login">
        <div>
          <div className="login-img">
            <div className="container-img">
              <img src={profile} alt="profile" className="profile" />
            </div>
          </div>
          <div>
            <h1>Login</h1>
            <form>
              <div className="first-class">
                <img src={email} alt="email" className="email" />
                <input type="text" placeholder="user name" className="name" />
              </div>
              <div className="second-input">
                <img src={pass} alt="pass" className="email" />
                <input
                  type="password"
                  placeholder="password"
                  className="name"
                />
              </div>
              <div className="login-button">
                <button className="inner-button">Login</button>
              </div>
            </form>
            <p className="login-link">
              <NavLink to="#" className="NavLink">
                Forgot Password?
              </NavLink>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
