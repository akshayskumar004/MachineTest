import { useState } from "react";
import "./Caurosal.scss";

export default function Carousel({ countries }) {
  const [current, setCurrent] = useState(0);

  const limitedCountries = countries.slice(0, 4);

  const goNext = () => {
    setCurrent((prev) => (prev + 1) % limitedCountries.length);
  };

  const goPrev = () => {
    setCurrent(
      (prev) => (prev - 1 + limitedCountries.length) % limitedCountries.length
    );
  };

  return (
    <div className="carousel">
      <div className="carousel-wrapper">
        <div
          className="carousel-track"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {limitedCountries.map((country, idx) => (
            <div className="carousel-slide" key={idx}>
              <div className="image-placeholder">
                <img src={country.flag} alt={country.name} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="carousel-controls">
        <button className="nav" onClick={goPrev}>
          ←
        </button>
        <div className="carousel-dots">
          {limitedCountries.map((_, idx) => (
            <span
              key={idx}
              className={`dot ${current === idx ? "active" : ""}`}
              onClick={() => setCurrent(idx)}
            />
          ))}
        </div>
        <button className="nav" onClick={goNext}>
          →
        </button>
      </div>
    </div>
  );
}
