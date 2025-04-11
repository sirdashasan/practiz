import { useState } from "react";
import "./styles.css";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

  return (
    <nav className="navbar">
      <div className="logo">🧠 Praktiz</div>

      <div className="dropdown">
        <div className="dropdown-toggle" onClick={toggleDropdown}>
          Kategoriler ↓
        </div>

        {showDropdown && (
          <ul className="dropdown-menu">
            <li className="dropdown-item">Yazılım</li>
            <li className="dropdown-item-sub">Java</li>
            <li className="dropdown-item-sub">Frontend</li>
            <li className="dropdown-item-sub">SQL</li>
            <li className="dropdown-item">Sınav</li>
            <li className="dropdown-item-sub">KPSS</li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
