/* eslint-disable jsx-a11y/alt-text */
import { NavLink } from "react-router-dom";
import profile from "../images/a.png";
import email from "../images/email.jpg";
import pass from "../images/pass.png";
import "./login.scss";
import React, {useState} from "react"
import { useHistory } from 'react-router-dom';
import agent from "../api/Agent";
import jwtDecode from "jwt-decode";
//import jwtVerify from "jwt-verify";

const Login = () => {

let history = useHistory();
const [loginCredentials, setLoginCredentials] = useState({email: "", password:""});

const handleSubmit =  async (e:any) =>{
e.preventDefault();
localStorage.setItem('Email', loginCredentials.email)

const response = await agent.RavenAccess.Login(loginCredentials.email, loginCredentials.password);

if(response !== null)
{
  const stingifiedResponse = JSON.stringify(response.data)
  localStorage.setItem("LoginResponse", stingifiedResponse);
  localStorage.setItem("token",response.data.token)
  console.log(response.data);
  
  const jwtDecoded = jwtDecode(response.data.token);
  const stringJwtDecoded = JSON.stringify(jwtDecoded);
  localStorage.setItem('claims',stringJwtDecoded)
  console.log(jwtDecoded)
  history.push('/hr')
}

}

  return (
    <div className="login-main">
      <div className="sub-login">
        <div>
          <div className="login-img">
            <div className="container-img">
              <img src={profile} alt="profile" className="profile-img" />
            </div>
          </div>
          <div>
            <h1 className="login">Login</h1>
            <form onSubmit={handleSubmit}>
              <div className="first-class">
                <img src={email} alt="email" className="email" />
                <input type="text" 
                placeholder="email" 
                className="name" 
                required 
                onChange={e => setLoginCredentials({...loginCredentials, email: e.target.value})}
                value={loginCredentials.email}/>
              </div>
              <div className="second-input">
                <img src={pass} alt="pass" className="email" />
                <input
                  type="password"
                  placeholder="password"
                  className="name"
                  required
                  onChange={e => setLoginCredentials({...loginCredentials, password: e.target.value})}
                  value={loginCredentials.password}
                />
              </div>
              <div className="login-button">
                <button className="inner-button" type="submit">Login</button>
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
