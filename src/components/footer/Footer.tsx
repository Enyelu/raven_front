import * as FaIcons from "react-icons/fa";
import "./Footer.scss";
const Footer = () => {
  return (
    <footer className="footer-footer">
      <div className="footer-grid-item1">Contact us@</div>
      <div className="footer-nav footer-grid-item2">
        <ul className="profile-icons">
          <li className="footer-item">
            <a
              href="https://web.facebook.com/groups/701861163908606"
              target="_blank"
              rel="noreferrer"
            >
              <FaIcons.FaFacebookF />
            </a>
          </li>
          <li className="footer-item">
            <a
              href="https://www.linkedin.com/in/raboyusuf/"
              target="_blank"
              rel="noreferrer"
            >
              <FaIcons.FaLinkedinIn />
            </a>
          </li>
          <li className="footer-item">
            <a
              href="https://twitter.com/raboyusuf94"
              target="_blank"
              rel="noreferrer"
            >
              <FaIcons.FaTwitter />
            </a>
          </li>
          <li className="footer-item">
            <a
              href="https://github.com/rabobahago"
              target="_blank"
              rel="noreferrer"
            >
              <FaIcons.FaMediumM />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
export default Footer;
