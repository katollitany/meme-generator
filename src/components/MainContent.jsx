import React from "react";
import memesData from "../memeData";

export default function MainContent() {
  const [memeImg, setMemeImg] = React.useState("");

  function getMemeImage(e) {
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    e.preventDefault();

    setMemeImg(memesArray[randomNumber].url);
  }

  return (
    <div className="mainContent">
      <form className="form">
        <div className="inputBoxes">
          <div className="inputContainer">
            <input className="fBox" type="text" placeholder="Top text" />
            <input className="lBox" type="text" placeholder="Bottom text" />
          </div>
          <button onClick={getMemeImage} className="button-text">
            Get a new meme image
          </button>
        </div>
        <img className="meme-img" src={memeImg} />
      </form>
    </div>
  );
}
