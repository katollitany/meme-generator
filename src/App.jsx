import "./test.scss";
import React from "react";
import Header from "./components/Header";
//import MainContent from "./components/MainContent";

export default function App() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemes, setAllMemes] = React.useState([]);

  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMemes(data.data.memes));
  }, []);

  function getMemeImage(event) {
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    const url = allMemes[randomNumber].url;

    event.preventDefault();

    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }

  return (
    <div className="page-container">
      <Header />
      <div className="mainContent">
        <form className="form">
          <div className="inputBoxes">
            <div className="inputContainer">
              <input className="fBox" type="text" placeholder="Top text" />
              <input className="lBox" type="text" placeholder="Bottom text" />
            </div>
          </div>
          <button onClick={getMemeImage} className="button-text">
            Get a new meme image
          </button>
          <img className="meme-img" src={meme.randomImage} />
        </form>
      </div>
    </div>
  );
}
