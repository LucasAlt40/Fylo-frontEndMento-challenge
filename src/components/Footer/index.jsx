/* eslint-disable */
import React from "react";

import "./styles.css";

import logo from "../../assets/logo.svg";
import locationIcon from "../../assets/icon-location.svg";
import phoneIcon from "../../assets/icon-phone.svg";
import emailIcon from "../../assets/icon-email.svg";

export function Footer() {
  return (
    <footer>
      <div className="contact">
        <img src={logo} alt="logo" />
        <div className="container-contacts">
          <div className="contact-division variant1">
            <img src={locationIcon} alt="location-icon" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
          </div>
          <div className="phone-email">
            <div className="contact-division">
              <img src={phoneIcon} alt="phone" />
              <p>+1-543-123-4567</p>
            </div>
            <div className="contact-division">
              <img src={emailIcon} alt="email" />
              <p>example@fylo.com</p>
            </div>
          </div>
        </div>
      </div>

      <div className="options-container">
        <ul className="options">
          <ul>
            <li>About Us</li>
            <li>Jobs</li>
            <li>Press</li>
            <li>Blog</li>
          </ul>
          <ul>
            <li>Contact Us</li>
            <li>Terms</li>
            <li>Privacy</li>
          </ul>
        </ul>
      </div>

      <div className="social-medias">
        <a href="https://www.facebook.com" target="_blank">
          <i className="fab fa-facebook" />
        </a>
        <a href="https://www.twitter.com" target="_blank">
          <i className="fab fa-twitter" />
        </a>
        <a href="https://www.instagram.com" target="_blank">
          <i className="fab fa-instagram" />
        </a>
      </div>
    </footer>
  );
}
