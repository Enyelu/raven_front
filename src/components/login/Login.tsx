/* eslint-disable jsx-a11y/alt-text */
import "./login.scss";
import profile from "../images/a.png";
import email from "../images/email.jpg";
import pass from "../images/pass.png";
const Login = () => {
  return (
    <div className="login-main">
      <div className="sub-login">
        <div>
          <div className="login-img">
            <div className="container-img">
              <img />
            </div>
          </div>
          <div>
            <h1>Login Page</h1>
            <div>
              <img src={email} alt="email" className="email" />
              <input type="text" placeholder="user name" className="name" />
            </div>
            <div className="second-input">
              <img src={pass} alt="pass" className="email" />
              <input type="password" placeholder="user name" className="name" />
            </div>
            <div className="login-button">
              <button>Login</button>
            </div>

            <p className="link">
              <a href="#">Forgot password ?</a> Or<a href="#">Sign Up</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
