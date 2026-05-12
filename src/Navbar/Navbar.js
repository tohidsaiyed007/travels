import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { MdFlight } from "react-icons/md";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">

      <div className="logo">saiyed-Travel <MdFlight  className="fl"/></div>

      {/* Hamburger */}
      <div 
        className={`menu-toggle ${menuOpen ? "active" : ""}`} 
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </div>

      {/* Links */}
      <div className={`nav-links ${menuOpen ? "show" : ""}`}>
        <Link to="/">Home</Link>
        {/* <Link to="/flights">Flights</Link> */}
        <Link to="/about">About</Link>
        <Link to="/bank">Bank</Link>
        <Link to="/privacy">Privacy</Link>
        <Link to="/terms">Terms</Link>
        <Link to="/customer">Contact</Link>
        <Link to="/login" className="btn">Login</Link>
        <Link to="/signup" className="btn signup">Signup</Link>
      </div>

    </nav>
  );
}

export default Navbar;