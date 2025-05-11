import React from "react";
import "./DinningBoxCard.css";

export default function DinningBoxCard({
  dinningBoxImage,
  imgAltName,
  dinningPlace,
  foodItems,
  dinningArea,
  ratings,
  prices,
  distance,
}) {
  return (
    <>
      {/* Box-Card-Section */}

      <div className="card-container-box col-30">
        <div>
          <img
            className="card-container-img"
            src={dinningBoxImage}
            alt={imgAltName}
          />
        </div>
        <div className="card-text flex jc-sb">
          <div className="card-left-text">
            <div>
              <h3>{dinningPlace}</h3>
            </div>
            <div>
              <p>{foodItems}</p>
            </div>
            <div>
              <p>{dinningArea}</p>
            </div>
          </div>
          <div className="card-right-text">
            <div>
              <h4>{ratings}</h4>
            </div>
            <div>
              <p>{prices}</p>
            </div>
            <div>
              <p>{distance}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
