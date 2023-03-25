import defaultCeremonyImg from "../../../../assets/ceremony-default.png";
import "./IncomingCeremonies.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
const IncomingCeremonies = () => (
  <section className="section-incoming-ceremonies section-primary">
    <div className="container">
      <h1>Najbliższe ceremonie</h1>
      <div className="ceremonies-container">
        <div className="ceremony-item">
          <div className="dead-info">
            <img src={defaultCeremonyImg} className="dead-photo" />
            <h2 className="dead-name">Adam Nowak</h2>
            <small className="dead-date">zm. 19-02-2012</small>
          </div>
          <div className="ceremony-info">
            <span className="ceremony-date">data ceremonii: nieznana</span>
            <span className="ceremony-hour">godzina: nieznana</span>
            <span className="ceremony-date">kościół: NSPJ w Bierach</span>
          </div>
        </div>
        {/* <div className="ceremony-item">
          <div className="dead-info">
            <img src={defaultCeremonyImg} className="dead-photo" />
            <h2 className="dead-name">Adam2 Nowak2</h2>
            <small className="dead-date">zm. 19-02-2012</small>
          </div>
          <div className="ceremony-info">
            <span className="ceremony-date">data ceremonii: nieznana</span>
            <span className="ceremony-hour">godzina: nieznana</span>
            <span className="ceremony-date">kościół: NSPJ w Bierach</span>
          </div>
        </div>
        <div className="ceremony-item">
          <div className="dead-info">
            <img src={defaultCeremonyImg} className="dead-photo" />
            <h2 className="dead-name">Adam Nowak</h2>
            <small className="dead-date">zm. 19-02-2012</small>
          </div>
          <div className="ceremony-info">
            <span className="ceremony-date">data ceremonii: nieznana</span>
            <span className="ceremony-hour">godzina: nieznana</span>
            <span className="ceremony-date">kościół: NSPJ w Bierach</span>
          </div>
        </div>
        <div className="ceremony-item">
          <div className="dead-info">
            <img src={defaultCeremonyImg} className="dead-photo" />
            <h2 className="dead-name">Adam Nowak</h2>
            <small className="dead-date">zm. 19-02-2012</small>
          </div>
          <div className="ceremony-info">
            <span className="ceremony-date">data ceremonii: nieznana</span>
            <span className="ceremony-hour">godzina: nieznana</span>
            <span className="ceremony-date">kościół: NSPJ w Bierach</span>
          </div>
        </div>
        <div className="ceremony-item">
          <div className="dead-info">
            <img src={defaultCeremonyImg} className="dead-photo" />
            <h2 className="dead-name">Adam Nowak</h2>
            <small className="dead-date">zm. 19-02-2012</small>
          </div>
          <div className="ceremony-info">
            <span className="ceremony-date">data ceremonii: nieznana</span>
            <span className="ceremony-hour">godzina: nieznana</span>
            <span className="ceremony-date">kościół: NSPJ w Bierach</span>
          </div>
        </div>
        <div className="ceremony-item">
          <div className="dead-info">
            <img src={defaultCeremonyImg} className="dead-photo" />
            <h2 className="dead-name">Adam Nowak</h2>
            <small className="dead-date">zm. 19-02-2012</small>
          </div>
          <div className="ceremony-info">
            <span className="ceremony-date">data ceremonii: nieznana</span>
            <span className="ceremony-hour">godzina: nieznana</span>
            <span className="ceremony-date">kościół: NSPJ w Bierach</span>
          </div>
        </div> */}
      </div>
      <div className="ceremonies-controls">
        <FontAwesomeIcon
          icon={faChevronLeft}
          style={{ color: "#ffffff" }}
          className="control-arrow"
          id="last-arrow"
        />
        <FontAwesomeIcon
          icon={faChevronRight}
          style={{ color: "#ffffff" }}
          className="control-arrow"
          id="next-arrow"
        />
      </div>
    </div>
  </section>
);

export default IncomingCeremonies;
