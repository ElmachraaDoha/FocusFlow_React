import { Link } from "react-router-dom";
import FocusFlow from "../assets/FocusFlow.png";
import "./Footer.css";


function Footer() {

  return (

    <footer className="footer">

      <div className="footer-content">

        <div className="footer-logo">
          <img src={FocusFlow} alt="FocusFlow-logo" />
        </div>

        <div className="footer-links">
          <Link to = "/">Home</Link>
          <Link to = "/features">Features</Link>
          <Link to = "/about">About</Link>
          <Link to = "/login">Login</Link>
        </div>

        <div className="footer-copy">
          &copy; 2026 FocusFlow. All rights reserved.
        </div>
        
      </div>

    </footer>
  );
}

export default  Footer;