/* eslint-disable */
import React, { useState } from "react";

import "./style.css";

export function GetEarly() {

  return (
    <div className="input-container">
      <form className="input">
        <h2>Get early access today</h2>
        <p>
          It only takes a minute to sign up and our free starter tier is
          extremely generous. If you have any questions, our support team would
          be happy to help you.
        </p>
        <div className="buttons">
          <input type="email" placeholder="email@example.com"/>
          <button type="button">
            <h2>Get Started For Free</h2>
          </button>
        </div>
      </form>
    </div>
  );
}
