import "../App.css";
import ganesha from "/assets/ganesha.svg";

const Ganesha = () => {
  return (
    <div className="ganesha-container">
      {/* <img src="/assets/ganesha.svg" alt="Lord Ganesha" className="ganesha-svg" /> */}
      <img src={ganesha} alt="Lord Ganesha" className="ganesha-svg" />
    </div>
  );
};

export default Ganesha;
