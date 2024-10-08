import { useState, useRef, useEffect } from "react";
import "./Topbar.css";

export default function Topbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const popupRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleClickOutside = (event) => {
    if (popupRef.current && !popupRef.current.contains(event.target)) {
      setMenuOpen(false);
    }
  };

  const handleResize = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("resize", handleResize);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleItemClick = () => {
    setMenuOpen(false);
  };

  return (
    <div className="top">
      <div className="topLeft">
       <a href="/home" ><i className="topIcon fa-solid fa-braille"></i></a>
      </div>
      <div className={`topCenter ${menuOpen ? "active" : ""}`}>
        <ul className={`topList ${menuOpen ? "open" : ""}`}>
          <li className="topListItem"><a href="/home">HOME</a></li>
          <li className="topListItem"><a href="/about">ABOUT</a></li>
          <li className="topListItem"><a href="/contact">CONTACT US</a></li>
        </ul>
      </div>
      <div className="topRight">
        <div className="hamburger" onClick={toggleMenu}>
          <i className="fa-solid fa-bars"></i>
        </div>
      </div>

      {menuOpen && (
        <div className="popupMenu" ref={popupRef}>
          <ul className="popupList">
            <li className="popupListItem" onClick={handleItemClick}><a href="/home">HOME</a></li>
            <li className="popupListItem" onClick={handleItemClick}><a href="/about">ABOUT</a></li>
            <li className="popupListItem" onClick={handleItemClick}><a href="/contact">CONTACT US</a></li>
          </ul>
        </div>
      )}
    </div>
  );
}
