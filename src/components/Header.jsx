import { Link } from "react-router-dom";
import Logo from "./Logo.jsx";
import Navigation from "./Navigation.jsx";

export default function Header() {
  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <Link to="/directory" className="brand" aria-label="DOH NIR CHD, go to home">
          <span className="brand__mark">
            <Logo size={38} />
          </span>
          <span className="divider" aria-hidden="true"></span>
          <span className="brand__text">
            <span className="brand__sub">
              Department of Health
            </span>
            <span className="brand__name">NEGROS ISLAND REGION</span>
            <span className="brand__subb">
              Republic of the Philippines
            </span>
          </span>
        </Link>

        <Navigation />
      </div>
    </header>
  );
}
