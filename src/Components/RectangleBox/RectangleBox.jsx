import React from "react";
import "./RectangleBox.css";

export default function RectangleBox({ foodPlace, numPlaces }) {
  return (
    <>
      {/* Box */}
          <div>
            <h4>{foodPlace}</h4>
            <h5>
              {numPlaces} Places <i className="fa-solid fa-caret-right"></i>
            </h5>
          </div>
    
    </>
  );
}
