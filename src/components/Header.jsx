import React from "react";
import Troll from "../image/Troll-Face.png";
import Purple from "../image/Purple.png";

export default function header() {
  return (
    <div className="header">
      <img src={Purple} className="background" />
      <div className="textOverlay">
        <h1 className="meme-title">
          <img className="troll-face" src={Troll} />
          Meme Generator
          <span className="project3">React Course - Project 3</span>
        </h1>
      </div>
    </div>
  );
}
