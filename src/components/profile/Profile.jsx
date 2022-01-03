/* eslint-disable jsx-a11y/alt-text */
import { useState } from "react";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as FcIcons from "react-icons/fc";
import "./profile.scss";
const Profile = () => {
  const [profileImg, setProfileImg] = useState({ image: null });
  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setProfileImg({
        image: URL.createObjectURL(img)
      });
    }
  };
  return (
    <div className="profile-container">
      <div className="profile-1 profile-item">
        <div className="profile-status">
          <h4>Jone Anas</h4>
          <span>{<FaIcons.FaUserCheck />} Status:Active</span>
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
        <div className="profile-imgdiv">
          <img src={profileImg.image} alt className="profile-img" />
          <p>Select Image</p>
          <input
            type="file"
            name="myImage"
            onChange={onImageChange}
            className="profile-input"
          />
        </div>
        <hr />
        <div className="profile-basic">
          <h4>Basic Information</h4>
          <div className="employeeStatus">
            <div>
              <strong>Employee ID</strong>
              <div className="profile-common">1233</div>
            </div>
            <div className="status-1">
              <strong>Status</strong>
              <div className="profile-common">Active</div>
            </div>
          </div>
          <div className="employeeStatus">
            <div>
              <strong>Name</strong>
              <div className="profile-common">Jonas Anas</div>
            </div>
            <div className="status-1">
              <strong>Gender</strong>
              <div className="profile-common">Male</div>
            </div>
            <div className="status-1">
              <strong>Social status</strong>
              <div className="profile-common">Married</div>
            </div>
          </div>
          <div className="employeeStatus">
            <div>
              <strong>Date of birth</strong>
              <div className="profile-common">
                10/10/1986{<FcIcons.FcCalendar />}
              </div>
            </div>
            <div className="status-1">
              <strong>Age</strong>
              <div className="profile-common">35</div>
            </div>
            <div className="status-1">
              <strong>Hobby</strong>
              <div className="profile-common">Playing Chess</div>
            </div>
          </div>
          <div className="employeeStatus">
            <div>
              <strong>House Number</strong>
              <div className="profile-common">No. 10</div>
            </div>
            <div className="status-1">
              <strong>Street</strong>
              <div className="profile-common">Murtala Rabo street</div>
            </div>
            <div className="status-1">
              <strong>State</strong>
              <div className="profile-common">Lagos</div>
            </div>
          </div>
          <div className="employeeStatus">
            <div>
              <strong>Specialization</strong>
              <div className="profile-common">Hiring Developers</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Profile;
