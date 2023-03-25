import { Link } from "react-router-dom";
import logo from "../../../../assets/ZSP-logo.svg";
import "./TopBar.css";
import { React, useState } from "react";

const TopBar = () => {
  const [hamburger, setHamburger] = useState(false);
  const openHamburger = () => {
    setHamburger(!hamburger);
  };
  return (
    <div className="top-bar">
      <header className="top-bar__header-wrapper">
        <div
          className={hamburger ? "hamburger open" : "hamburger"}
          onClick={() => openHamburger()}
        >
          <div />
          <div />
          <div />
        </div>
        <div className="top-bar__header container">
          <Link to="/" rel="noreferrer" className="logo">
            <img src={logo} />
          </Link>
          <div className="contact-info">
            <span className="contact-info__phone-label">
              skontaktuj się z nami:
            </span>
            <a href="tel:000000000" className="contact-info__phone-link">
              000-000-000
            </a>
          </div>
        </div>
      </header>
      <nav
        className={
          hamburger ? "top-bar__navigation open" : "top-bar__navigation"
        }
      >
        <div className="navigation__links container">
          <Link to="/" rel="noreferrer" className="links__link btn active-link">
            strona główna
          </Link>
          <Link
            to="/o_nas"
            rel="noreferrer"
            className="links__link btn btn--primary"
          >
            o nas
          </Link>
          <Link
            to="/oferta"
            rel="noreferrer"
            className="links__link btn btn--primary"
          >
            oferta
          </Link>
          <Link
            to="/akutalnosci"
            rel="noreferrer"
            className="links__link btn btn--primary"
          >
            aktualności
          </Link>
          <Link
            to="/kontakt"
            rel="noreferrer"
            className="links__link btn btn--primary"
          >
            kontakt
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default TopBar;
