import FocusFlow from "../assets/FocusFlow.jpg";
import "./Footer.css";


export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-content">

        <div className="footer-logo">
          <img src={FocusFlow} alt="FocusFlow-logo" />
        </div>

        <div className="footer-links">
          <a href="/">Home</a>
          <a href="/features">Features</a>
          <a href="/about">About</a>
          <a href="/login">Login</a>
        </div>

        <div className="footer-copy">
          © 2026 FocusFlow. All rights reserved.
        </div>
        
      </div>

    </footer>
  );
}