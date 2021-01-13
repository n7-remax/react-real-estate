import SwiperCore, {
  Navigation,
  Pagination,
  A11y,
  Autoplay,
  EffectFade,
} from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import sliderImg from "../../assets/slider-img.png";

// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import { useState } from "react";

// install Swiper components
SwiperCore.use([Navigation, Pagination, A11y, Autoplay, EffectFade]);

const Hero = () => {
  const [currentSlide, setCurrentSlider] = useState(0);
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
            <p>
              - це 7 років успішної роботи на українському ринку. Понад 700
              квартир вже продано, а в планах компанії побудувати 120 тис.
              Метрів житлової площі.
            </p>
          </div>
        </div>
        <div className="slider">
          <div className="slider-nav">
            <div
              className={
                currentSlide !== 0
                  ? "swiper-button-prev-unique button-slanted active-slider-button"
                  : "swiper-button-prev-unique button-slanted"
              }
            ></div>
            <div
              className={
                currentSlide !== 3
                  ? "swiper-button-next-unique button-slanted active-slider-button"
                  : "swiper-button-next-unique button-slanted"
              }
            ></div>
          </div>
          <div className="slider-main">
            <div className="slider-desc">
              <div className="swiper-pagination"></div>
              <h3>Акційна пропозиція №{currentSlide + 1}</h3>
              <p>
                Забудовник - це 5 років успішної роботи на українському ринку.
                Успішної роботи на українському ринку.
              </p>
            </div>
            <Swiper
              spaceBetween={50}
              slidesPerView={1}
              autoplay={true}
              fadeEffect={true}
              navigation={{
                nextEl: ".swiper-button-next-unique",
                prevEl: ".swiper-button-prev-unique",
              }}
              pagination={{
                el: ".swiper-pagination",
                clickable: true,
                renderBullet: (index, className) => {
                  return (
                    '<div class="' +
                    className +
                    '">' +
                    ("0" + (index + 1)) +
                    "</div>"
                  );
                },
              }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={(swiper) => setCurrentSlider(swiper.activeIndex)}
            >
              <SwiperSlide virtualIndex={1}>
                <img src={sliderImg} alt="img" />
              </SwiperSlide>
              <SwiperSlide virtualIndex={2}>
                <img src={sliderImg} alt="img" />
              </SwiperSlide>
              <SwiperSlide virtualIndex={3}>
                <img src={sliderImg} alt="img" />
              </SwiperSlide>
              <SwiperSlide virtualIndex={4}>
                <img src={sliderImg} alt="img" />
              </SwiperSlide>
              ...
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
