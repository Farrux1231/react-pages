import "./style.scss";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
// Icons
import facebook from "../../assets/icons/facebook.svg";
import twitter from "../../assets/icons/twitter.svg";
import instagram from "../../assets/icons/instagram.svg";
import linkedin from "../../assets/icons/linkedin.svg";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="top">
          <div className="left">
            <Link to="/" className="logo">
              <img src={logo} alt="Finsweet" />
            </Link>
            <div className="description">
              We are always open to discuss your project and improve your online
              presence.
            </div>
          </div>
          <div className="right">
            <div className="title">Lets Talk!</div>
            <div className="description">
              We are always open to discuss your project, improve your online
              presence and help with your UX/UI design challenges.
            </div>
            <div className="icons">
              <a href="https://www.facebook.com" target="_blank">
                <img src={facebook} alt="Facebook" />
              </a>
              <a href="https://www.twitter.com" target="_blank">
                <img src={twitter} alt="Twitter" />
              </a>
              <a href="https://www.instagram.com" target="_blank">
                <img src={instagram} alt="Instagram" />
              </a>
              <a href="https://www.linkedin.com" target="_blank">
                <img src={linkedin} alt="Linkedin" />
              </a>
            </div>
          </div>
        </div>
        <div className="bottom"></div>
      </div>
    </footer>
  );
};

export default Footer;
