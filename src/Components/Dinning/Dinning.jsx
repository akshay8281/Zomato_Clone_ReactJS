import React from "react";
import { Link } from "react-router-dom";
import RectangleBox from "../RectangleBox/RectangleBox";
import "./Dinning.css";
import DinningBoxCard from "../DinningBox/DinningBoxCard";

export default function Dinning() {
  // Rectangle Box
  const rectBoxItem = [
    {
      foodPlace: "Winners of Zomato Restaurant",
      numPlaces: "8",
    },
    {
      foodPlace: "8 Newly Opened Restaurant...",
      numPlaces: "5",
    },
    {
      foodPlace: "7 Great Buffets",
      numPlaces: "7",
    },
    {
      foodPlace: "10 Best Luxury Dining Places...",
      numPlaces: "10",
    },
  ];

  // Dinning Box card
  const dinningBoxData = [
    {
      dinningBoxImage: "Assets_2/Three Qurter Indian.avif",
      imgAltName: "Three Quarter Indian",
      dinningPlace: "Three Quarter Indian",
      foodItems: "North Indian, Continental, Italia...",
      dinningArea: "Satellite, Ahmedabad",
      ratings: "4.0 +",
      prices: "Rs. 1200 for Two",
      distance: "10 Km",
    },
    {
      dinningBoxImage: "Assets_2/Ishara.avif",
      imgAltName: "Ishaara",
      dinningPlace: "Ishaara",
      foodItems: "North Indian, Mughlai, Kebab....",
      dinningArea: "Thaltej, Ahmedabad",
      ratings: "3.0 +",
      prices: "Rs. 2200 for Two",
      distance: "4 Km",
    },
    {
      dinningBoxImage: "Assets_2/Bellasen.avif",
      imgAltName: "Bellasen Bistro",
      dinningPlace: "Bellasen Bistro",
      foodItems: "North Indian, Chinese, Conti....",
      dinningArea: "Bodakdev, Ahmedabad",
      ratings: "4.2 +",
      prices: "Rs. 1900 for Two",
      distance: "5.5 Km",
    },
    {
      dinningBoxImage: "Assets_2/Pink Pallete.avif",
      imgAltName: "Pink Palette",
      dinningPlace: "Pink Palette",
      foodItems: "North Indian, Chinese, Pizzaa...",
      dinningArea: "Bodakdev, Ahmedabad",
      ratings: "3.0 +",
      prices: "Rs. 1800 for One",
      distance: "10 Km",
    },
    {
      dinningBoxImage: "Assets_2/Cha.avif",
      imgAltName: "Cha",
      dinningPlace: "Cha",
      foodItems: "Asian, Chinese",
      dinningArea: "Thaltej, Ahmedabad",
      ratings: "4.0 +",
      prices: "Rs. 1000 for Two",
      distance: "7.7 Km",
    },
    {
      dinningBoxImage: "Assets_2/Topspin.avif",
      imgAltName: "Topspin",
      dinningPlace: "Topspin",
      foodItems: "Cafe, Coffee, Tea, Shake,....",
      dinningArea: "Bodakdev, Ahmedabad",
      ratings: "4.4 +",
      prices: "Rs. 1200 for Two",
      distance: "8 Km",
    },
  ];

  return (
    <>
      {/* Rectangle Box */}

      <section className="dinning-out-collection">
        <div className="container">
          <div className="rect-header">
            <h2>Collections</h2>
          </div>
          <div className="rect-sub-header flex jc-sb">
            <div>
              <h3>
                Explore curated lists of top restaurants, cafes, pubs, and bars
                in Ahmedabad, based on trends
              </h3>
            </div>

            <div>
              <Link to="#" className="all-collection">
                All collections in Ahmedabad
                <i className="fa-solid fa-caret-right"></i>
              </Link>
            </div>
          </div>

          {/* Box */}

          <div className="rectangle-box-container flex jc-sb">
            {rectBoxItem.map((card, index) => (
              <div key={index} className="rectangle-slot col-23 flex">
                <RectangleBox
                  foodPlace={card.foodPlace}
                  numPlaces={card.numPlaces}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dinning Nav-button */}

      <section className="header-btn">
        <div className="container nav-buttons flex">
          <div>
            <button className="sub-nav-btn flex">
              <i className="fa-solid fa-list-ul"></i>
              Filter
            </button>
          </div>
          <div>
            <button className="sub-nav-btn">
              <i className="crownGold fa-solid fa-crown"></i> Gold
            </button>
          </div>
          <div>
            <button className="sub-nav-btn">Ratings 4.0+</button>
          </div>
          <div>
            <button className="sub-nav-btn">Outdoor Seating</button>
          </div>
          <div>
            <button className="sub-nav-btn">Open Now</button>
          </div>
        </div>
      </section>

      {/* Dinning-Hero-Section */}

      <section className="dinning-hero-section">
        <div className="container col-95">
          <Link to="#">
            <img
              className="dinning-hero-img"
              src="Assets_2/asset 17.avif"
              alt="Hero Image"
            />
          </Link>
        </div>
      </section>

      {/* Box-Card-Section */}

      <section className="boxcards-section">
        <div className="container">
          <div className="box-cards-main">
            <div>
              <h2>Trending Dining Restaurants in Ahmedabad</h2>
            </div>
            <div className="boxcards-slabs flex jc-sb">
              {dinningBoxData.map((boxCard, index) => (
                <DinningBoxCard
                  key={index}
                  dinningBoxImage={boxCard.dinningBoxImage}
                  imgAltName={boxCard.imgAltName}
                  dinningPlace={boxCard.dinningPlace}
                  foodItems={boxCard.foodItems}
                  dinningArea={boxCard.dinningArea}
                  ratings={boxCard.ratings}
                  prices={boxCard.prices}
                  distance={boxCard.distance}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
