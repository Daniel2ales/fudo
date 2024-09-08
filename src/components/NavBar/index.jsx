import React, { useState } from 'react';
import { Container } from "./styles";
import { Button } from "../Button";
import Logo from "../../assets/logo.png";

export function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  return (
    <Container>
      {/* Header Section */}
      <div className="nav__header">
        {/* Logo */}
        <div className="nav__logo">
          <a href="#" className="logo">
            <img src={Logo} alt="Fudo Logo" />
            <span>Fudo</span>
          </a>
        </div>

        {/* Menu Button for Mobile */}
        <div className="nav__menu__btn" onClick={toggleMenu}>
          <i className={isMenuOpen ? "ri-close-line" : "ri-menu-line"}></i>
        </div>
      </div>

      {/* Navigation Links */}
      <ul className={`nav__links ${isMenuOpen ? "open" : ""}`}>
        <li><a href="#home">Why Fudo</a></li>
        <li><a href="#service">Services</a></li>
        <li><a href="#menu">Menu</a></li>
        <li><a href="#contact">Contact</a></li>
        <li>
          <Button
            title="Login"
            icon="ri-login-box-line"
          />
        </li>
      </ul>

      {/* Navigation Buttons */}
      <div className="nav__btns">
        <Button
          title="Login"
          icon="ri-login-box-line"
        />
      </div>
    </Container>
  );
}