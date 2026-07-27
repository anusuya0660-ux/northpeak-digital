import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../styles/Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={sticky ? "navbar active" : "navbar"}>
      <div className="container nav-container">


        <h2 className="logo">
          North<span>Peak</span>
        </h2>


        {/* Mobile Menu */}
        <nav className={menuOpen ? "nav-menu open" : "nav-menu"}>

          {/* Close Button */}
          <button
            className="close-btn"
            onClick={() => setMenuOpen(false)}
            aria-label="Open navigation menu"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

          <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
          <a href="#results" onClick={() => setMenuOpen(false)}>Results</a>
          <a href="#pricing" onClick={() => setMenuOpen(false)}>Pricing</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>



        </nav>

        {/* Hamburger */}
        {!menuOpen && (
          <button
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            className="menu-btn"
            onClick={() => setMenuOpen(true)}
          >
            <FaBars />
          </button>
        )}

      </div>
    </header>
  );
}

export default Navbar;