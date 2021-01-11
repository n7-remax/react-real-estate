const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        <div className="about-company">
          <div className="button-default button-company">
            <span>ПРО КОМПАНІЮ</span>
          </div>
          <div className="button-default arrow-right">
            <span></span>
          </div>
        </div>
        <div className="promotion">
          <div className="promotion-info-box">
            <h1>Надійний забудовник</h1>
            <p>- це 7 років успішної роботи на українському ринку. Понад 700 квартир вже продано, а в планах компанії побудувати 120 тис. Метрів житлової площі.</p>
          </div>
        </div>
        <div className="slider"></div>
      </div>
    </div>
  );
};
export default Hero;
