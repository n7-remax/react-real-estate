import { useState } from "react";
import logo from "../../assets/logo.svg";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="header">
      <div className="container">
        <div className="logo-box">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="lang-switch">
            <span className="selected">UA</span>
            <span>RU</span>
            <span>ENG</span>
          </div>
        </div>
        <div className="header-button">
          <a href="#" class={isOpen ? "menu active" : "menu"} onClick={()=> setIsOpen(!isOpen)}>
            <div class="pix"></div>
            <div class="pix"></div>
            <div class="pix"></div>
            <div class="pix"></div>
            <div class="pix"></div>
            <div class="pix"></div>
            <div class="pix"></div>
            <div class="pix"></div>
            <div class="pix"></div>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
