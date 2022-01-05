/* eslint-disable jsx-a11y/alt-text */
import { useState } from "react";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as FcIcons from "react-icons/fc";
import "./profile.scss";
// interface ProfileData {
//   firstName: string;
//   lastName: string;
//   status: string;
//   cell: number;
//   socia: string[];
//   started: string;
//   worked: number;
//   department: string;
//   time: string;
//   place: string;
//   ID: number;
//   socialStatus: string;
//   birth: string;
//   age: number;
//   hobby: string;
//   houseNo: string;
//   street: string;
//   state: string;
//   specialization: string;
// }
const Profile = (props: any): JSX.Element => {
  const {
    firstName,
    lastName,
    status,
    cell,
    taxNumber,
    cardNumber,
    MarryStatus,
    gender,
    //socia,
    started,
    worked,
    department,
    time,
    place,
    ID,
    socialStatus,
    birth,
    age,
    hobby,
    houseNo,
    street,
    state,
    specialization
  } = props.hrData;
  const [profileImg, setProfileImg] = useState<any>(null);
  const onImageChange = (event: any) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setProfileImg(URL.createObjectURL(img));
    }
  };
  return (
    <div className="profile-container">
      <div className="profile-1 profile-item">
        <div className="profile-status">
          <h4>
            {firstName} {lastName}
          </h4>
          <span>
            {<FaIcons.FaUserCheck />} Status: {status}
          </span>
          <p>
            {<FaIcons.FaPhoneAlt />} {cell}
          </p>
          <p>
            {<FaIcons.FaShuttleVan />} {taxNumber}
          </p>
          <p>
            {<FaIcons.FaMoneyBillWaveAlt />} {cardNumber}
          </p>
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
            Started on:<span>{started}</span>
          </p>
          <p>
            Worked here for:<span>{worked} years</span>{" "}
          </p>
        </div>
        <hr className="horizontal" />
        <div className="profile-occupation">
          <span>
            {<FaIcons.FaUserCog />} {department}
          </span>
          <span>
            {<FcIcons.FcClock />} {time}
          </span>
          <span>
            {<FcIcons.FcHome />} {place}
          </span>
        </div>
      </div>
      <div className="profile-2 profile-item">
        <div className="profile-personal">
          <h2>personal</h2>
        </div>
        <hr />
        <div className="profile-imgdiv">
          <img src={profileImg} alt="" className="profile-img" />
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
              <div className="profile-common">{ID}</div>
            </div>
            <div className="status-1">
              <strong>Status</strong>
              <div className="profile-common">{socialStatus}</div>
            </div>
          </div>
          <div className="employeeStatus">
            <div>
              <strong>Name</strong>
              <div className="profile-common">
                {firstName} {lastName}
              </div>
            </div>
            <div className="status-1">
              <strong>Gender</strong>
              <div className="profile-common">{gender}</div>
            </div>
            <div className="status-1">
              <strong>Social status</strong>
              <div className="profile-common">{MarryStatus}</div>
            </div>
          </div>
          <div className="employeeStatus">
            <div>
              <strong>Date of birth</strong>
              <div className="profile-common">
                {birth}
                {<FcIcons.FcCalendar />}
              </div>
            </div>
            <div className="status-1">
              <strong>Age</strong>
              <div className="profile-common">{age}</div>
            </div>
            <div className="status-1">
              <strong>Hobby</strong>
              <div className="profile-common">{hobby}</div>
            </div>
          </div>
          <div className="employeeStatus">
            <div>
              <strong>House Number</strong>
              <div className="profile-common">{houseNo}</div>
            </div>
            <div className="status-1">
              <strong>Street</strong>
              <div className="profile-common">{street}</div>
            </div>
            <div className="status-1">
              <strong>State</strong>
              <div className="profile-common">{state}</div>
            </div>
          </div>
          <div className="employeeStatus">
            <div>
              <strong>Specialization</strong>
              <div className="profile-common">{specialization}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Profile;
