import { useState } from "react";
import logo from "../assets/images/LOGO.svg";
import busket from "../assets/images/Busket.svg";
import burgerOpen from "../assets/images/menu close.svg";
import burgerClosed from "../assets/images/menu.svg";

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="logo-container">
        <div className="logo-container__logo">
          <img src={logo} alt="Logo" />
        </div>
        <span className="logo-container__text">GO</span>
      </div>
      <nav className={`nav ${isMenuOpen ? "nav--open" : ""}`}>
        <a href="" className="nav__link">
          Home
        </a>
        <a href="" className="nav__link">
          Products
        </a>
        <a href="" className="cart">
          <img src={busket} alt="Cart" className="cart__img" />
        </a>
      </nav>
      <div className="burger-menu" onClick={toggleMenu}>
        <img src={isMenuOpen ? burgerOpen : burgerClosed} alt="Burger Menu" />
      </div>
    </header>
  );
};

export default Header;
