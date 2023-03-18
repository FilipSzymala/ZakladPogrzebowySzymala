import React from "react";
import "./MainPage.css";
import { Link } from "react-router-dom";
import heroImage from "../../assets/zaklad.webp";
import heroSeperator from "../../assets/seperator.svg";
const MainPage = () => {
  return (
    <main>
      <section className="section-hero">
        <div className="hero-text">
          <p className="hero-title">
            "Nie umiera ten, kto trwa w pamięci żywych"
          </p>
          <img src={heroSeperator} className="hero-seperator"></img>
          <span className="hero-author">Ks. Jan Twardowski</span>
        </div>
      </section>
      <section className="section-call-to-action">
        <div className="container">
          <div className="call-to-action__label">
            <span className="label__years">25</span>
            <p className="label__text">
              lat tradycji przekazywanej z pokolenia na pokolenie...
            </p>
          </div>

          <Link
            to="/o_nas"
            rel="noreferrer"
            className="btn btn--accent call-to-action-link"
          >
            pokaż więcej...
          </Link>
        </div>
      </section>
    </main>
  );
};

export default MainPage;
