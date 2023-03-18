import { Link } from "react-router-dom";
import "./CallToAction.css";

const CallToAction = () => (
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
);

export default CallToAction;
