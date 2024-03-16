import { useState, Children } from "react";

import arrowLeft from "../../assets/arrow-left.svg";
import arrowRight from "../../assets/arrow-right.svg";

const MAX_VISIBILITY = 2;

const Carousel = ({ children }) => {
  const [active, setActive] = useState(2);
  const count = children.length;

  return (
    <div className="carousel">
      {Children.map(children, (child, i) => (
        <div
          className="carousel-container"
          style={{
            "--active": i === active ? 1 : 0,
            "--offset": (active - i) / 3,
            "--direction": Math.sign(active - i),
            "--abs-offset": Math.abs(active - i) / 3,
            pointerEvents: active === i ? "auto" : "none",
            opacity: Math.abs(active - i) >= MAX_VISIBILITY ? "0" : "1",
            display: Math.abs(active - i) > MAX_VISIBILITY ? "none" : "block",
          }}
        >
          {child}
        </div>
      ))}

      {active > 0 && (
        <button className="nav left" onClick={() => setActive((i) => i - 1)}>
          <img className="arrow" src={arrowLeft} alt="Arrow left" />
        </button>
      )}

      {active < count - 1 && (
        <button className="nav right" onClick={() => setActive((i) => i + 1)}>
          <img className="arrow" src={arrowRight} alt="Arrow right" />
        </button>
      )}
    </div>
  );
};

export default Carousel;
