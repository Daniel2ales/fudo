import { Container } from "./styles";

import Logo from "../../assets/logo.png"

export function Footer() {
  return(
    <Container>
      <div className="section__container footer__container">
        <div className="footer__col">
          <div className="footer__logo">
            <a href="#" className="logo">
              <img src={Logo} alt="logo" />
              <span>Fudo</span>
            </a>
          </div>
          <p className="section__description">
            Our job is to filling youe tummy with delicious food and with fast
            and free delivery time.
          </p>
          <ul className="footer__socials">
            <li>
              <a href="#"><i className="ri-instagram-fill"></i></a>
            </li>
            <li>
              <a href="#"><i className="ri-facebook-fill"></i></a>
            </li>
            <li>
              <a href="#"><i className="ri-twitter-fill"></i></a>
            </li>
          </ul>
        </div>
        <div className="footer__col">
          <h4>About</h4>
          <ul className="footer__links">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Features</a></li>
            <li><a href="#">News</a></li>
            <li><a href="#">Menu</a></li>
          </ul>
        </div>
        <div className="footer__col">
          <h4>Company</h4>
          <ul className="footer__links">
            <li><a href="#">Why Fudo?</a></li>
            <li><a href="#">Partner With Us</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </div>
        <div className="footer__col">
          <h4>Support</h4>
          <ul className="footer__links">
            <li><a href="#">Account</a></li>
            <li><a href="#">Support Center</a></li>
            <li><a href="#">Feedback</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Accessibility</a></li>
          </ul>
        </div>
      </div>
      <div className="footer__bar">
        Copyright © 2024 Web Design Kharvz. All rights reserved.
      </div>
    </Container>
  );
};