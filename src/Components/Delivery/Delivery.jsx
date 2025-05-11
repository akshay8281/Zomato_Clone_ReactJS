import React from "react";
import "./Delivery.css";
import Card from "../Cards/Card";
import BoxCard from "../BoxCard/BoxCard";

export default function Delivery() {
  // Round Card Item 1
  const roundCardItem_1 = [
    // { image: "assets/asset 3.avif", item: "Pizza", altName: "Pizza" },
    { image: "assets/asset_3.avif", item: "Pizza", altName: "Pizza" },
    { image: "assets/asset_4.avif", item: "Burger", altName: "Burger" },
    { image: "assets/asset_5.avif", item: "Sandwich", altName: "Sandwich" },
    { image: "assets/asset_6.avif", item: "Biryani", altName: "Biryani" },
    { image: "assets/asset_8.avif", item: "Thali", altName: "Thali" },
    { image: "assets/asset_7.avif", item: "Cake", altName: "Cake" },
  ];
  // Round Card Item 2

 const roundCardItem_2 = [
  { image: "assets/asset 10.avif", item: "McDonald's", altName: "McDonald's" },
  { image: "assets/asset 11.avif", item: "La Pino'z Pizza", altName: "La Pino'z Pizza" },
  { image: "assets/asset 12.avif", item: "Subway", altName: "Subway" },
  { image: "assets/asset 13.avif", item: "Jay Bhavani Vadapav", altName: "Jay Bhavani Vadapav" },
  { image: "assets/asset 14.avif", item: "Burger King", altName: "Burger King" },
  { image: "assets/asset 15.avif", item: "La Milano Pizzeria", altName: "La Milano Pizzeria" },
];

const boxCardItem = [
  {
    boxImage: "assets/asset 18.avif",
    altName: "PVR Cafe",
    foodStallName: "PVR Cafe",
    foodItemInfo: "Fast Food,Momos, Bever...",
    ratings: "4.0 +",
    prices: "Rs. 200 for one",
    duration: "10 min.",
  },
  {
    boxImage: "assets/asset 17.avif",
    altName: "La Pinos's Pizza",
    foodStallName: "La Pinos's Pizza",
    foodItemInfo: "Pizza, Pasta, Italian, Frency....",
    ratings: "3.0 +",
    prices: "Rs. 200 for one",
    duration: "20 min.",
  },
  {
    boxImage: "assets/Bablu Shree Farali Center.avif",
    altName: "Bablu Shree Farali Center",
    foodStallName: "Bablu Shree Farali Center",
    foodItemInfo: "Fast Food, South Indian",
    ratings: "4.1 +",
    prices: "Rs. 300 for one",
    duration: "25 min.",
  },
  {
    boxImage: "assets/Poult.avif",
    altName: "Poult",
    foodStallName: "Poult",
    foodItemInfo: "Fast Food,Burger, Bever...",
    ratings: "4.0 +",
    prices: "Rs. 230 for one",
    duration: "13 min.",
  },
  {
    boxImage: "assets/McDonald's.avif",
    altName: "Mc Donald's",
    foodStallName: "Mc Donald's",
    foodItemInfo: "Burger, Fast Food, Dessert...",
    ratings: "4.0 +",
    prices: "Rs. 300 for one",
    duration: "22 min.",
  },
  {
    boxImage: "assets/Jay Bhavani Vadapav.avif",
    altName: "Jay Bhavani",
    foodStallName: "Jay Bhavani",
    foodItemInfo: "Street Food, Fast Food and More",
    ratings: "4.2 +",
    prices: "Rs. 150 for one",
    duration: "9 min.",
  },
];
  return (
    <>
      {/* <Nav-Buttons */}

      <section class="nav-header-btns">
        <ul class="container nav-btn-main flex">
          <li>
            <button class="sub-nav-btn flex">
              <i class="fa-solid fa-list-ul"></i>
              Filter
            </button>
          </li>
          <li>
            <button class="sub-nav-btn">Ratings 4.0+</button>
          </li>
          <li>
            <button class="sub-nav-btn">Pure Veg</button>
          </li>
          <li>
            <button class="sub-nav-btn">
              Cuisines <i class="fa-solid fa-angle-down"></i>
            </button>
          </li>
        </ul>
      </section>

      {/* Round Slider 1 and Round Slider 2 */}

      <section className="slider-1 slider-2">
        <div className="container">
          <div className="slider-1-cards">
            <div>
              <h2>Inspiration for your first order</h2>
            </div>

            <div className="slider-1-container flex ali jc-sb">
              {roundCardItem_1.map((card, index) => (
                <Card
                  key={index}
                  image={card.image}
                  item={card.item}
                  altName={card.altName}
                />
              ))}
            </div>
          </div>
          <div className="slider-1-cards slider-2-cards">
            <div>
              <h2>Top brands for you</h2>
            </div>

            <div className="slider-1-container slider--container flex ali jc-sb">
              {roundCardItem_2.map((card, index) => (
                <Card
                  key={index}
                  image={card.image}
                  item={card.item}
                  altName={card.altName}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Box-Card-Section */}

      <section class="boxcards-section">
        <div class="container">
          <div class="box-cards-main">
            <div>
              <h2>Order food online in Ahmedabad</h2>
            </div>
            <div class="boxcards-slabs flex jc-sb">
              {boxCardItem.map((boxCard, index) => (
                <BoxCard
                  key={index}
                  boxImage={boxCard.boxImage}
                  foodStallName={boxCard.foodStallName}
                  foodItemInfo={boxCard.foodItemInfo}
                  ratings={boxCard.ratings}
                  prices={boxCard.prices}
                  duration={boxCard.duration}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
