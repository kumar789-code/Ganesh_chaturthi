import { useState } from "react";
import diya from "../assets/diya.svg"
const Diya = () => {
  const [lit, setLit] = useState(false);

  return (
    <div className="diya" onClick={() => setLit(!lit)}>
      <img src={diya} alt="Diya" className="diya-base" />
      {lit && <div className="flame"></div>}
    </div>
  );
};

export default Diya;
