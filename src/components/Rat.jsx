// src/components/Rat.jsx
import ratImg from "/assets/rat.png";

export default function Rat({ isChantPlaying }) {
  return (
    <div className={`rat-wrapper ${isChantPlaying ? "orbit" : ""}`}>
      <img src={ratImg} alt="Mushak Raj" className="rat" />
    </div>
  );
}
