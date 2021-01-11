import logo from "../../assets/logo.svg";
import headerButtons from "../../assets/header-button.svg";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo-box">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="lang-switch">
            <span className="selected">
              UA
            </span>
            <span>RU</span>
            <span>ENG</span>
          </div>
        </div>
        <div className="header-button">
          <img src={headerButtons} alt="header-button" />
        </div>
      </div>
    </header>
  );
};

export default Header;
