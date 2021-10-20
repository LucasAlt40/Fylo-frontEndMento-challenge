/* eslint-disable */
import React from "react";

import "./styles.css";

export function Comments(props) {
  return (
    <div className="card-container">
      <div className="card">
        <div className="comment">
          <p>
            Fylo has improved our team productivity by an order of magnitude.
            Since making the switch our team has become a well-oiled
            collaboration machine.
          </p>
        </div>
        <div className="profile-container">
          <div className="profile-img">
            <img src={props.profileImg} alt="Profile" />
          </div>
          <div className="profile-name">
            <h2>{props.profileName}</h2>
            <p>Founder &amp; CEO, Huddle</p>
          </div>
        </div>
      </div>
    </div>
  );
}
