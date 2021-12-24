import { useState } from "react";
import FormInput from "../formInput/FormInput";
// import CustomButton from "../customButton/CustomButton";
const Login = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const handleChange = () => {};
  const handleSubmit = () => {};
  return (
    <div className="sign">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          handleChange={handleChange}
          value={email}
          label="email"
          required
        />
        <FormInput
          name="password"
          type="password"
          value={password}
          handleChange={handleChange}
          label="password"
          required
        />
        <div className="buttons">
          <button>Login</button>
          {/* <CustomButton> Sign in </CustomButton> */}
        </div>
      </form>
    </div>
  );
};
export default Login;
