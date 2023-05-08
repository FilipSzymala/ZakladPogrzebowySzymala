import defaultCeremonyImg from "../../../../assets/ceremony-default.png";
import "./IncomingCeremonies.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useRef } from "react";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
const IncomingCeremonies = () => {
  const carouselFirstRef = useRef(null);
  const carouselContainerRef = useRef(null);

  const [carouselContainerLength, setCarouselContainerLength] = useState(null);
  const [itemsInRow, setItemsInRow] = useState(0);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [itemMargin, setItemMargin] = useState(0);
  const [addedPercentMargin, setAddedPercentMargin] = useState(0);

  const [itemCounter, setItemCounter] = useState(0);

  const checkAddedMargin = () => {
    if (windowWidth < 950) {
      // 1 carousel card in the row
      setAddedPercentMargin(100);
      setItemsInRow(1);
    } else if (windowWidth < 1234) {
      // 2 carousel cards in the row
      setAddedPercentMargin(50);
      setItemsInRow(2);
    } else if (windowWidth < 1550) {
      // 3 carousel cards in the row
      setAddedPercentMargin(34);
      setItemsInRow(3);
    } else {
      // 4 carousel cards in the row
      setAddedPercentMargin(25);
      setItemsInRow(4);
    }
  };

  const handleLastItem = () => {
    if (itemCounter > 0) {
      setItemMargin((itemMargin) => itemMargin + addedPercentMargin);
      setItemCounter(itemCounter - 1);
    }
  };

  const handleNextItem = () => {
    if (carouselContainerLength - itemsInRow > itemCounter) {
      setItemMargin((itemMargin) => itemMargin - addedPercentMargin);
      setItemCounter(itemCounter + 1);
    }
  };

  useEffect(() => {
    checkAddedMargin();
    setCarouselContainerLength(carouselContainerRef.current.children.length);

    const watchWidthChange = () => {
      setWindowWidth(window.innerWidth);

      setItemMargin(0);
      carouselFirstRef.current.style.marginLeft = 0;
      setItemCounter(0);

      checkAddedMargin();
    };
    window.addEventListener("resize", watchWidthChange);

    carouselFirstRef.current.style.marginLeft = `${itemMargin}%`;

    return () => {
      window.removeEventListener("resize", watchWidthChange);
    };
  }, [[windowWidth, itemMargin, itemCounter]]);

  return (
    <section className="section-incoming-ceremonies section-primary">
      <div className="container">
        <h1>Najbliższe ceremonie</h1>
        <div className="ceremonies-container" ref={carouselContainerRef}>
          <div className="ceremony-item" ref={carouselFirstRef}>
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
          </div>
        </div>
        <div className="ceremonies-controls">
          <FontAwesomeIcon
            icon={faChevronLeft}
            style={{ color: "#ffffff" }}
            className="control-arrow"
            id="last-arrow"
            onClick={handleLastItem}
          />
          <FontAwesomeIcon
            icon={faChevronRight}
            style={{ color: "#ffffff" }}
            className="control-arrow"
            id="next-arrow"
            onClick={handleNextItem}
          />
        </div>
      </div>
    </section>
  );
};

export default IncomingCeremonies;
