// AartiTray.jsx

import trayImg from "../assets/aarti.jpeg";

export default function AartiTray({ isChantPlaying }) {
  // The prop `isChantPlaying` will be true or false.
  // We use it to add the 'swinging' class only when it's true.

  return (
    <div className="aarti-center">
      <img
        src={trayImg}
        alt="Aarti Tray"
        className={`aarti-tray ${isChantPlaying ? "swinging" : ""}`}
      />
    </div>
  );
}