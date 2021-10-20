/* eslint-disable */
import React from "react";

import ilustration from "../../assets/illustration-intro.png";
import "./style.css";

export function Started() {
  return (
    <div className="container">
      <img src={ilustration} className="ilustration" />

      <div className="container-texts">
        <h2>
          All your files in one secure {"\n"}
          location, acessible {"\n"}
          anywhere
        </h2>
        <p>
          Fylo stores all your most important files in one secure location.
          Acces them wherever you need, share and collaborate with friends
          family, and co-workers.
        </p>
      </div>
      <button>Get Started</button>
    </div>
  );
}
