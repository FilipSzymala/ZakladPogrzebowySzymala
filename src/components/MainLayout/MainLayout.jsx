import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/ZSP-logo.svg";
import "./MainLayout.css";
import { Outlet } from "react-router-dom";

const TopBar = () => (
  <>
    <div className="top-bar">
      <header className="top-bar__header container">
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
      </header>
      <nav className="top-bar__navigation ">
        <div className="navigation__links container">
          <Link to="/" rel="noreferrer" className="links__link btn active-link">
            strona główna
          </Link>
          <Link to="/o_nas" rel="noreferrer" className="links__link btn">
            o nas
          </Link>
          <Link to="/oferta" rel="noreferrer" className="links__link btn">
            oferta
          </Link>
          <Link to="/akutalnosci" rel="noreferrer" className="links__link btn">
            aktualności
          </Link>
          <Link to="/kontakt" rel="noreferrer" className="links__link btn">
            kontakt
          </Link>
        </div>
      </nav>
    </div>
    <Outlet />
  </>
);

export default TopBar;
