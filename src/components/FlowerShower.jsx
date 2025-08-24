import { useEffect, useState } from "react";
import flower1 from "../assets/flower1.jpeg";
import flower2 from "../assets/flower2.jpeg";
import flower3 from "../assets/flower3.jpeg";
import flower4 from "../assets/flower.jpeg";
const FlowerShower = () => {
  const [flowers, setFlowers] = useState([]);

  // List of flower images
  const flowerImages = [flower1, flower2, flower3, flower4];

  useEffect(() => {
    const interval = setInterval(() => {
      setFlowers((f) => [
        ...f,
        {
          id: Date.now(),
          left: Math.random() * 100 + "%",
          src: flowerImages[Math.floor(Math.random() * flowerImages.length)], // pick random flower
        },
      ]);
    }, 300); // add a new flower every 300ms

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flower-container">
      {flowers.map((f) => (
        <img
          key={f.id}
          src={f.src}
          className="flower"
          style={{ left: f.left }}
        />
      ))}
    </div>
  );
};

export default FlowerShower;

