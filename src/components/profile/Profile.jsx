import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as FcIcons from "react-icons/fc";
import "./profile.scss";
const Profile = () => {
  return (
    <div className="profile-container">
      <div className="profile-1 profile-item">
        <div className="profile-status">
          <h4>Jone Anas</h4>
          <span>{<FaIcons.FaUserCheck />} Status:Active</span>
          <img src="../images/pass1.jpg" alt="" />
          <p>{<FaIcons.FaPhoneAlt />} 224-667-4566</p>
          <p>{<FaIcons.FaShuttleVan />} 23-456-678</p>
          <p>{<FaIcons.FaMoneyBillWaveAlt />} 9900</p>
          <ul className="profile-icons">
            <li>
              <Link to="">
                <FaIcons.FaFacebookF />
              </Link>
            </li>
            <li>
              <Link to="">
                <FaIcons.FaLinkedinIn />
              </Link>
            </li>
            <li>
              <Link to="">
                <FaIcons.FaTwitter />
              </Link>
            </li>
            <li>
              <Link to="">
                <FaIcons.FaMediumM />
              </Link>
            </li>
          </ul>
        </div>
        <hr className="horizontal" />
        <div className="profile-info">
          <h5>{<FcIcons.FcConferenceCall />}Hire Information</h5>
          <p>
            Started on:<span>02/01/2020</span>
          </p>
          <p>
            Worked here for:<span>2 years</span>{" "}
          </p>
        </div>
        <hr className="horizontal" />
        <div className="profile-occupation">
          <span>{<FaIcons.FaUserCog />} IT</span>
          <span>{<FcIcons.FcClock />} Full-Time</span>
          <span>{<FcIcons.FcHome />} Lagos, Nigeria</span>
        </div>
      </div>
      <div className="profile-2 profile-item">
        <div className="profile-personal">
          <h2>personal</h2>
        </div>
        <hr />
        <div></div>
      </div>
    </div>
  );
};
export default Profile;
