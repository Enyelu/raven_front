import "./profile.scss";
const Profile = () => {
  return (
    <div className="profile-container">
      <div className="profile-1 profile-item">
        <div className="profile-status">
          <span>Status:Active</span>
          <img src="../images/pass1.jpg" alt="" />
          <p>224-667-4566</p>
          <p>23-456-678</p>
          <p>+469900</p>
          <div>
            <span>twitter</span>
            <span>facebook</span>
            <span>linkedin</span>
            <span>teams</span>
          </div>
        </div>
        <hr className="horizontal" />
        <div className="profile-info">
          <h5>Hire Information</h5>
          <p>
            Started on:<span>12/03/2020</span>
          </p>
          <p>
            Worked here for:<span>10years</span>{" "}
          </p>
        </div>
        <hr className="horizontal" />
        <div className="profile-occupation">
          <span>IT</span>
          <span>Full-Time</span>
          <span>Lagos, Nigeria</span>
        </div>
      </div>
      <div className="profile-2 profile-item">Profile</div>
    </div>
  );
};
export default Profile;
