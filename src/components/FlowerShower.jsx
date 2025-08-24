import { useEffect, useState } from "react";

const FlowerShower = () => {
  const [flowers, setFlowers] = useState([]);

  // List of flower images
  const flowerImages = [
    "/assets/flower1.jpeg",
    "/assets/flower.jpeg",
    "/assets/flower3.jpeg",
    "/assets/flower2.jpeg",
  ];

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

