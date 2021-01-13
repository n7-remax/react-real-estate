import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.svg";

const Header = () => {
  const [isOpen, setIsOpen] = useState(true);

  // toggle scroll on header menu open/close
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);
  return (
    <header className="header">
      <div className="container">
        <div className="logo-box">
            <img src={logo} alt="logo" />
          <div className="lang-switch">
            <span className="selected">UA</span>
            <span>RU</span>
            <span>ENG</span>
          </div>
        </div>
        <div className="header-button">
          <a
            href="#"
            className={isOpen ? "menu active" : "menu"}
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="pix"></div>
            <div className="pix"></div>
            <div className="pix"></div>
            <div className="pix"></div>
            <div className="pix"></div>
            <div className="pix"></div>
            <div className="pix"></div>
            <div className="pix"></div>
            <div className="pix"></div>
          </a>
        </div>
      </div>
      {isOpen ? (
        <div className="nav-menu slide-fade-enter-active">
          <nav>
            <a href="#">Головна</a>
            <a href="#">Про компанію</a>
            <a href="#">Варіанти придбання</a>
            <a href="#">Варіанти інвестування</a>
            <a href="#">Новини</a>
            <a href="#">Документи</a>
            <a href="#">Контакти</a>
            <a href="#">Співробітництво</a>
          </nav>
          <div className="copyright">
            <p>
              Дизайн та розробка - <span>Svitsoft</span>
            </p>
          </div>
        </div>
      ) : null}
    </header>
  );
};

export default Header;
