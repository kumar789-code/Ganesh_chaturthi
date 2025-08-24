// App.jsx

import { useState } from "react";
import Ganesha from "./components/Ganesha";
import Diya from "./components/Diya";
import FlowerShower from "./components/FlowerShower";
import MandalaBackground from "./components/MandalaBackground";
import Greeting from "./components/Greeting";
import AartiTray from "./components/AartiTray";
import Rat from "./components/Rat";
import "./App.css";

function App() {
  const [showFlowers, setShowFlowers] = useState(false);
  const [chantPlaying, setChantPlaying] = useState(false);

  const toggleFlowers = () => setShowFlowers(!showFlowers);
  const toggleChant = () => {
    const audio = document.getElementById("chantAudio");
    if (chantPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setChantPlaying(!chantPlaying);
  };

  return (
    <div className="app-container">
      <MandalaBackground />
      <Greeting />

      <div className="ganesha-container">
        <Ganesha />
        <Rat isChantPlaying={chantPlaying} />
      </div>
      {/* 👇 PASS THE STATE AS A PROP HERE 👇 */}
      <AartiTray isChantPlaying={chantPlaying} />
      {/* <Rat /> */}

      {showFlowers && <FlowerShower />}

      <div className="controls">
        <button onClick={toggleFlowers} className="btn">
          {showFlowers ? "Stop Flowers 🌸" : "Offer Flowers 🌸"}
        </button>
        <button onClick={toggleChant} className="btn">
          {chantPlaying ? "Pause Chant 🔇" : "Play Chant 🎶"}
        </button>
      </div>

      <div className="diyas">
        <Diya />
        <Diya />
        <Diya />
      </div>
      <p className="creator">by Kumar</p>

      <audio id="chantAudio" loop>
        <source src="/assets/chant.mp3" type="audio/mpeg" />
      </audio>
    </div>
  );
}

export default App;
