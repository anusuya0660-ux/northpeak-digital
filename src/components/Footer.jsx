import "../styles/Footer.css";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <h2 className="footer-logo">
          North<span>Peak</span>
        </h2>

        <p>
          Building modern websites and digital experiences that help businesses
          grow online.
        </p>

        <div className="social-icons">

          <a href="#" aria-label="Facebook">
            <FaFacebookF />
          </a>

          <a href="#" aria-label="Instagram">
            <FaInstagram />
          </a>

          <a href="#" aria-label="LinkedIn">
            <FaLinkedinIn />
          </a>

          <a href="#" aria-label="GitHub">
            <FaGithub />
          </a>

        </div>

        <hr />

        <p className="copyright">
          © {new Date().getFullYear()} NorthPeak Digital. All Rights Reserved.
        </p>

      </div>

    </footer>
  );
}

export default Footer;