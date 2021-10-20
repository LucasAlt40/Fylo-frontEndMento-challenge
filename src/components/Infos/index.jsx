/* eslint-disable */
import React from "react";

import "./styles.css";


export function Infos(props) {
  return (
    <div className="infos">
      <img  src={props.imgSrc}/>
      <div className="container-texts-infos">
        <h2>{ props.title }</h2>
        <p>
          { props.info }
        </p>
      </div>
    </div>
  );
}
