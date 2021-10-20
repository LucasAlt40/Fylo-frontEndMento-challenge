/* eslint-disable */
import React from "react";
import Logo from "../../assets/logo.svg";
import "./styles.css";

export function Header() {
  return (
    <header>
      <img src={Logo} className="logo" />
      <nav>
        <ul>
          <li>
            <a href="#">Features</a>
          </li>
          <li>
            <a href="#">Team</a>
          </li>
          <li>
            <a href="#">Sign In</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
