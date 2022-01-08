import "./ChangePassword.scss";
const ChangePassword = () => {
  return (
    <div className="form-floating change-password">
      <h4 className="password-header">Change Password</h4>
      <form className="form-change-ps">
        <label>Old Password:</label>
        <input
          type="text"
          className="form-control"
          placeholder="Old password"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <label>new password:</label>
        <input
          type="text"
          className="form-control"
          placeholder="new password"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <label>confirm password:</label>
        <input
          type="text"
          className="form-control"
          placeholder="confirm password"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <button className="password-button">Submit</button>
      </form>
    </div>
  );
};
export default ChangePassword;
