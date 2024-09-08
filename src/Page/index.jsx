import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import { Container, Header, Service, Client, Download } from "./styles";

import HeaderImg from "../assets/header.png";
import BikeImg from "../assets/delivery-bike.png";
import ServiceImg1 from "../assets/service-1.jpg";
import ServiceImg2 from "../assets/service-2.jpg";
import ServiceImg3 from "../assets/service-3.jpg";
import ClientImg from "../assets/client.png";
import UserImg from "../assets/user.jpg";
import DownloadImg from "../assets/download.png";

import { NavBar } from "../components/NavBar";
import 'remixicon/fonts/remixicon.css';
import { Button } from "../components/Button";
import { Menu } from "../components/Menu";
import { Footer } from "../components/Footer";

// Define ScrollReveal options
const scrollRevealOptions = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

// Function to initialize ScrollReveal animations
const initializeScrollReveal = () => {
  const sr = ScrollReveal();

  sr.reveal(".header__image img", {
    ...scrollRevealOptions,
    origin: "right",
  });
  sr.reveal(".header__tag", {
    ...scrollRevealOptions,
    delay: 500,
  });
  sr.reveal(".header__content h1", {
    ...scrollRevealOptions,
    delay: 1000,
  });
  sr.reveal(".header__content .section__description", {
    ...scrollRevealOptions,
    delay: 1500,
  });
  sr.reveal(".header__btns", {
    ...scrollRevealOptions,
    delay: 2000,
  });

  sr.reveal(".service__card", {
    ...scrollRevealOptions,
    interval: 500,
  });

  sr.reveal(".client__image img", {
    ...scrollRevealOptions,
    origin: "left",
  });
  sr.reveal(".client__content .section__subheader", {
    ...scrollRevealOptions,
    delay: 500,
  });
  sr.reveal(".client__content .section__header", {
    ...scrollRevealOptions,
    delay: 1000,
  });
  sr.reveal(".client__content .section__description", {
    ...scrollRevealOptions,
    delay: 1500,
  });
  sr.reveal(".client__details", {
    ...scrollRevealOptions,
    delay: 2000,
  });
  sr.reveal(".client__rating", {
    ...scrollRevealOptions,
    delay: 2500,
  });

  sr.reveal(".download__image img", {
    ...scrollRevealOptions,
    origin: "right",
  });
  sr.reveal(".download__content .section__subheader", {
    ...scrollRevealOptions,
    delay: 500,
  });
  sr.reveal(".download__content .section__header", {
    ...scrollRevealOptions,
    delay: 1000,
  });
  sr.reveal(".download__content .section__description", {
    ...scrollRevealOptions,
    delay: 1500,
  });
  sr.reveal(".download__btn", {
    ...scrollRevealOptions,
    delay: 2000,
  });
};

// Page component
export function Page() {
  // Initialize ScrollReveal when component mounts
  useEffect(() => {
    initializeScrollReveal();
  }, []);

  return (
    <Container>
      <Header>
        <NavBar />
        <section className="section__container header__container" id="home">
          <div className="header__image">
            <img src={HeaderImg} alt="Delicious food with fast delivery" />
          </div>
          <div className="header__content">
            <div className="header__tag">
              More than Faster
              <img src={BikeImg} alt="Delivery bike icon" />
            </div>
            <h1>
              Be The Fastest In Delivering Your <span>Food</span>
            </h1>
            <p className="section__description">
              Our job is to fill your tummy with delicious food and provide fast and free delivery.
            </p>
            <div className="header__btns">
              <Button title="Get Started" />
              <a href="#">
                <span><i className="ri-play-fill"></i></span>
                Watch Video
              </a>
            </div>
          </div>
        </section>
      </Header>
      <Service className="section__container service__container" id="service">
        <p className="section__subheader">WHAT WE SERVE</p>
        <h2 className="section__header">Your Favourite Food Delivery Partner</h2>
        <div className="service__grid">
          <div className="service__card">
            <img src={ServiceImg1} alt="Easy to order service" />
            <h4>Easy To Order</h4>
            <p>You only need a few steps in ordering food</p>
          </div>
          <div className="service__card">
            <img src={ServiceImg2} alt="Fastest delivery service" />
            <h4>Fastest Delivery</h4>
            <p>Delivery that is always on time even faster</p>
          </div>
          <div className="service__card">
            <img src={ServiceImg3} alt="Best quality service" />
            <h4>Best Quality</h4>
            <p>Not only fast for us, quality is also number one</p>
          </div>
        </div>
      </Service>
      <Menu />
      <Client className="section__container client__container" id="client">
        <div className="client__image">
          <img src={ClientImg} alt="Client" />
        </div>
        <div className="client__content">
          <p className="section__subheader">WHAT THEY SAY</p>
          <h2 className="section__header">What Our Customer Say About Us</h2>
          <p className="section__description">
            "Fudo is simply outstanding! The variety and deliciousness of their
            meals are unparalleled, offering something for every palate. What sets
            Fudo apart is their exceptional service. The delivery is impressively
            fast, ensuring your food arrives hot and fresh."
          </p>
          <div className="client__details">
            <img src={UserImg} alt="Theresa Jordan" />
            <div>
              <h4>Theresa Jordan</h4>
              <h5>Food Enthusiast</h5>
            </div>
          </div>
          <div className="client__rating">
            <span><i className="ri-star-fill"></i></span>
            <span><i className="ri-star-fill"></i></span>
            <span><i className="ri-star-fill"></i></span>
            <span><i className="ri-star-fill"></i></span>
            <span><i className="ri-star-line"></i></span>
            <span>4.8</span>
          </div>
        </div>
      </Client>
      <Download className="download__container" id="contact">
        <div className="section__container">
          <div className="download__image">
            <img src={DownloadImg} alt="download" />
          </div>
          <div className="download__content">
            <p className="section__subheader">DOWNLOAD APP</p>
            <h2 className="section__header">Get Started With Fudo Today!</h2>
            <p className="section__description">
              Discover food wherever and whenever you want and get your food
              delivered on time, everytime.
            </p>
            <div className="download__btn">
              <Button title="Get Started" />
            </div>
          </div>
        </div>
      </Download>
      <Footer />
    </Container>
  );
}
