import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";

export default function RoundCard({ image, item, altName }) {
  const RoundDefaultImage =
    "https://cdn.pixabay.com/photo/2016/04/02/09/43/apple-1302430_1280.jpg";

  return (
    <>
      {/* Round Slider - 1 and Round Slider 2*/}

      <div className="col-15 slider-1-round slider-2-round">
        <div>
          <Link to="#">
            <img
              className="slider-1-round-img slider-2-round-img"
              src={image || RoundDefaultImage}
              alt={altName}
            />
          </Link>
        </div>
        <div className="slider-1-label slider-2-label">
          <Link to="#">{item}</Link>
        </div>
      </div>
    </>
  );
}
