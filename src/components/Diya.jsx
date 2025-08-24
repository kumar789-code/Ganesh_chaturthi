import { useState } from "react";
import Diya from "/assets/diya.svg"

const Diya = () => {
  const [lit, setLit] = useState(false);

  return (
    <div className="diya" onClick={() => setLit(!lit)}>
      <img src={Diya} alt="Diya" className="diya-base" />
      {lit && <div className="flame"></div>}
    </div>
  );
};

export default Diya;
