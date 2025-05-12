import React from "react";
import "./BoxCard.css";

export default function BoxCard({
  boxImage,
  altName,
  foodStallName,
  foodItemInfo,
  ratings,
  prices,
  duration,
}) {
  const BoxDefaultImage =
    "https://cdn.pixabay.com/photo/2016/04/02/09/43/apple-1302430_1280.jpg";

  return (
    <>
      {/* Box-Card-Section */}

      <div className="card-container-box col-30">
        <div>
          <img
            className="card-container-img"
            src={boxImage || BoxDefaultImage}
            alt={altName}
          />
        </div>
        <div className="card-text flex jc-sb">
          <div className="card-left-text">
            <div>
              <h3>{foodStallName}</h3>
            </div>
            <div>
              <p>{foodItemInfo}</p>
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
              <p>{duration}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
