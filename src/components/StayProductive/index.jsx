/* eslint-disable */
import React from "react";

import './styles.css'
import IlustrarionP from '../../assets/illustration-stay-productive.png';

export function StayProductive() {
  return(
    <div className="StayProductive-container">
      <img src={IlustrarionP} alt="image" />
      <div className="description">
        <h2>Stay productive, wherever you are</h2>
        <p>
          Never let location be an issue when accessing
          your files. Fylo has you covered for all of your file
          storafe needs
        </p>
        <p>
          Securrely share files and folder with friends,
          family and colleagues for live collaboration. No
          emial attachments required.
        </p>

        <a href="#">See how Fylo works <i className="fas fa-arrow-circle-right"/></a>
      </div>
    </div>
  );
}