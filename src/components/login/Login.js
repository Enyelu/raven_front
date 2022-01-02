/* eslint-disable jsx-a11y/alt-text */
import { NavLink } from "react-router-dom";
import profile from "../images/a.png";
import email from "../images/email.jpg";
import pass from "../images/pass.png";
import "./login.scss";
import React, {useState,useEffect} from 'react'
import agent from "../../app/api/Agent"
import { useHistory } from 'react-router-dom';
import jwt from "jwt-decode"
import jwtDecode from "jwt-decode";

const Login = () => {

  const [loginCredentials, setLoginCredentials] = useState({email:'', password:''});
  let history = useHistory();
  
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await agent.RavenAccess.Login(loginCredentials.email, loginCredentials.password);
    console.log(response);
    console.log(response.data.token);

    const decodedToken = jwtDecode(response.data.token, 'iuyhj-356tre-8uyt5644311-rtyu7');
    console.log(decodedToken);

    localStorage.setItem('LoginResponse', JSON.stringify(response.data)); 

    if(response.data !== null)
    {
      history.push('/hr');
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
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
              <div className="first-class">
                <img src={email} alt="email" className="email" />
                <input type="text" placeholder="email" className="name" onChange={e => setLoginCredentials({...loginCredentials, email: e.target.value})} value ={loginCredentials.email} required />
              </div>
              <div className="second-input">
                <img src={pass} alt="pass" className="email" />
                <input type="password" placeholder="password" className="name" onChange={e => setLoginCredentials({...loginCredentials, password: e.target.value})} value ={loginCredentials.password} required/>
              </div>
              <div className="login-button">
                <button className="inner-button" type='submit'>Login</button>
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
