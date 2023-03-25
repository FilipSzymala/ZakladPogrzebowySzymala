import { Link } from "react-router-dom";
import logo from "../../../../assets/ZSP-logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faAt, faClock } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faWhatsapp,
  faYoutube,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";
import { React } from "react";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-columns">
          <div className="column-wrapper">
            <img src={logo} className="footer-logo"></img>
            <p className="company-motto">
              Motto firmy Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Nulla in ipsum maximus, faucibus lorem ut, sollicitudin
              mauris. Nunc semper libero et laoreet vulp
            </p>
          </div>
          <div className="column-wrapper">
            <h2>Kontakt</h2>
            <ul className="contact-list">
              <li>
                <Link
                  to="tel:+48333222111"
                  rel="noreferrer"
                  className="contact-list__link"
                >
                  <FontAwesomeIcon
                    icon={faPhone}
                    style={{ color: "#ffffff" }}
                    className="link__icon"
                  />
                  333-222-111
                </Link>
              </li>
              <li>
                <Link
                  to="tel:+48333222111"
                  rel="noreferrer"
                  className="contact-list__link"
                >
                  <FontAwesomeIcon
                    icon={faPhone}
                    style={{ color: "#ffffff" }}
                    className="link__icon"
                  />
                  333-222-111
                </Link>
              </li>
              <li>
                <Link
                  to="mailto:nazwafirmy@gmail.com"
                  rel="noreferrer"
                  className="contact-list__link"
                >
                  <FontAwesomeIcon
                    icon={faAt}
                    style={{ color: "#ffffff" }}
                    className="link__icon"
                  />
                  nazwafirmy@gmail.com
                </Link>
              </li>
            </ul>
          </div>
          <div className="column-wrapper">
            <h2>Godziny otwarcia biura</h2>

            <ul className="working-hours-list">
              <li>pon-pt: 0:00 - 0:00</li>
              <li>sob: 0:00 - 0:00</li>
              <li>niedziela i święta: 0:00 - 0:00</li>
            </ul>
          </div>
          <div className="column-wrapper socials-links">
            <Link to="#" rel="noreferrer" className="socials-links__link">
              <FontAwesomeIcon icon={faFacebook} style={{ color: "#ffffff" }} />
            </Link>
            <Link to="#" rel="noreferrer" className="socials-links__link">
              <FontAwesomeIcon icon={faTwitter} style={{ color: "#ffffff" }} />
            </Link>
            <Link to="#" rel="noreferrer" className="socials-links__link">
              <FontAwesomeIcon icon={faWhatsapp} style={{ color: "#ffffff" }} />
            </Link>
            <Link to="#" rel="noreferrer" className="socials-links__link">
              <FontAwesomeIcon icon={faYoutube} style={{ color: "#ffffff" }} />
            </Link>
          </div>
        </div>
        <hr />
        <small className="copyright-info">
          Filip Szymala &copy;2023 All Rights Reserved
        </small>
      </div>
    </footer>
  );
};

export default Footer;
