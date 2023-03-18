import heroSeperator from "../../../../assets/seperator.svg";
import "./Hero.css";

const Hero = () => (
  <section className="section-hero">
    <div className="hero-text">
      <p className="hero-title">"Nie umiera ten, kto trwa w pamięci żywych"</p>
      <img src={heroSeperator} className="hero-seperator"></img>
      <span className="hero-author">Ks. Jan Twardowski</span>
    </div>
  </section>
);

export default Hero;
