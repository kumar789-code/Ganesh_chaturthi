import { useState } from "react";

const Diya = () => {
  const [lit, setLit] = useState(false);

  return (
    <div className="diya" onClick={() => setLit(!lit)}>
      <img src="/assets/diya.svg" alt="Diya" className="diya-base" />
      {lit && <div className="flame"></div>}
    </div>
  );
};

export default Diya;
