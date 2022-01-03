/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import "./ContactUs.scss";
import ContactUsImage from "../images/contactUs.png";

export default function ContactUs() {
  return (
    <div className="contact-us-main-div">
      <div className="contact-us-image-div">
        <img
          src={ContactUsImage}
          className="contact-us-image"
          alt="contact us image"
        />
      </div>
      <form className="contact-us-form">
        <h3 className="contact-us-block-title">Contact Us</h3>
        <div className="contact-us-input-div">
          <input
            className="contact-us-input"
            type="text"
            placeholder="Email"
            required
          />
        </div>
        <div className="contact-us-input-div">
          <textarea
            className="contact-us-textarea"
            placeholder="Type here"
            required
          ></textarea>
        </div>
        <button className="contact-us-button" type="submit">
          Send
        </button>
        <div className="contact-us-phone">
          Want to call? Dial: 07062926449 or 07062926449
        </div>
      </form>
    </div>
  );
}
