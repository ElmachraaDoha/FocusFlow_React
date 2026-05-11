import { Link, useLocation } from "react-router-dom";
import FocusFlow from "../assets/FocusFlow.jpg";
import "./Header.css";

export default function Header() {
  const location = useLocation();

  return (
    <header className="header">
      
      <div className="header-logo">
        <img src={FocusFlow} alt="FocusFlow-logo" />
      </div>
      
      <nav className="header-nav">
      <Link to="/" className={location.pathname === "/" ? "active" : ""}>
        Home
      </Link>

      <Link to="/features" className={location.pathname === "/features" ? "active" : ""}>
        Features
      </Link>

      <Link to="/about" className={location.pathname === "/about" ? "active" : ""}>
        About
      </Link>

      <Link to="/login" className={location.pathname === "/login" ? "active" : ""}>
        Login
      </Link>
    </nav>
    </header>
  );
}