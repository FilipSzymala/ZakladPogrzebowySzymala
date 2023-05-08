import { Link } from "react-router-dom";
import logo from "../../../../assets/ZSP-logo.svg";
import "./TopBar.css";
import { React, useState } from "react";
import { useRef } from "react";

const TopBar = () => {
  const topBarRef = useRef(null);
  const topBarNavRef = useRef(null);
  const topBarHeaderWrapperRef = useRef(null);
  const [hamburger, setHamburger] = useState(false);
  const openHamburger = () => {
    setHamburger(!hamburger);
    if (hamburger) {
      setTimeout(() => {
        topBarRef.current.style.height = "102px";
      }, 1000);
    } else {
      topBarRef.current.style.height = "unset";
    }
  };

  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 0) {
      topBarNavRef.current.style.transform = "translateY(-200px)";
      topBarHeaderWrapperRef.current.style.height = "90px";
    } else {
      topBarNavRef.current.style.transform = "translateY(102px)";
      topBarHeaderWrapperRef.current.style.height = "unset";
    }
  });

  return (
    <div className="top-bar" ref={topBarRef}>
      <header className="top-bar__header-wrapper" ref={topBarHeaderWrapperRef}>
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
        ref={topBarNavRef}
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
