import { Container } from "./styles";
import FoodImg1 from "../../assets/menu-1.jpg";
import FoodImg2 from "../../assets/menu-2.jpg";
import FoodImg3 from "../../assets/menu-3.jpg";
import FoodImg4 from "../../assets/menu-4.jpg";
import FoodImg5 from "../../assets/menu-5.jpg";
import FoodImg6 from "../../assets/menu-6.jpg";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export function Menu() {
  // Lista dos itens do menu
  const menuItems = [
    { src: FoodImg1, alt: "Italian Pizza", name: "Italian Pizza", price: "7.49" },
    { src: FoodImg2, alt: "Burrito Wrap", name: "Burrito Wrap", price: "4.49" },
    { src: FoodImg3, alt: "Red Sauce Pasta", name: "Red Sauce Pasta", price: "5.99" },
    { src: FoodImg4, alt: "Fresh Pan Pizza", name: "Fresh Pan Pizza", price: "6.49" },
    { src: FoodImg5, alt: "Chicken Nuggets", name: "Chicken Nuggets", price: "4.99" },
    { src: FoodImg6, alt: "Dum Biryani", name: "Dum Biryani", price: "8.49" }
  ];

  return (
    <Container className="section__container menu__container" id="menu">
      <p className="section__subheader">OUR MENU</p>
      <h2 className="section__header">Menu That Always Makes You Fall In Love</h2>
      
      {/* Swiper principal */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          540: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
        }}
        onSlideChange={() => console.log('Slide changed')}
        onSwiper={(swiper) => console.log('Swiper instance:', swiper)}
      >
        {menuItems.map(({ src, alt, name, price }, index) => (
          <SwiperSlide key={index}>
            <div className="menu__card">
              <img src={src} alt={alt} />
              <div className="menu__card__details">
                <h4>{name}</h4>
                <h5><span>$</span>{price}</h5>
                <a href="#">
                  Order Now
                  <span><i className="ri-arrow-right-line"></i></span>
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
}