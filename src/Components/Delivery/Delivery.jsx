import React from "react";
import "./Delivery.css";
import Card from "../Cards/Card";
import BoxCard from "../BoxCard/BoxCard";

export default function Delivery() {
  // Round Card Item 1
  const roundCardItem_1 = [
    { image: "/public/assets/asset 3.avif", item: "Pizza", altName: "Pizza" },
    { image: "/public/assets/asset 4.avif", item: "Burger", altName: "Burger" },
    {
      image: "/public/assets/asset 5.avif",
      item: "Sandwich",
      altName: "Sandwich",
    },
    {
      image: "/public/assets/asset 6.avif",
      item: "Biryani",
      altName: "Biryani",
    },
    { image: "/public/assets/asset 8.avif", item: "Thali", altName: "Thali" },
    { image: "/public/assets/asset 7.avif", item: "Cake", altName: "Cake" },
  ];

  // Round Card Item 2

  const roundCardItem_2 = [
    {
      image: "/public/assets/asset 10.avif",
      item: "McDonald's",
      altName: "McDonald's",
    },
    {
      image: "/public/assets/asset 11.avif",
      item: "La Pino'z Pizza",
      altName: "La Pino'z Pizza",
    },
    {
      image: "/public/assets/asset 12.avif",
      item: "Subway",
      altName: "Subway",
    },
    {
      image: "/public/assets/asset 13.avif",
      item: "Jay Bhavani Vadapav",
      altName: "Jay Bhavani Vadapav",
    },
    {
      image: "/public/assets/asset 14.avif",
      item: "Burger King",
      altName: "Burger King",
    },
    {
      image: "/public/assets/asset 15.avif",
      item: "La Milano Pizzeria",
      altName: "La Milano Pizzeria",
    },
  ];

  const boxCardItem = [
    {
      boxImage: "/public/assets/asset 18.avif",
      altName: "",
      foodStall: "",
      Name: "",
      foodItemInfo: "",
      ratings: "",
      prices: "",
      duration: "",
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

              {/* <div class="card-container-box col-30">
                <div>
                  <img
                    class="card-container-img"
                    // src="./assets/asset 18.avif"
                    src={BoxImage || BoxDefaultImage}
                    alt={altName}
                  />
                </div>
                <div class="card-text flex jc-sb">
                  <div class="card-left-text">
                    <div>
                      <h3>{foodStallName}</h3>
                    </div>
                    <div>
                      <p>{foodItemInfo}</p>
                    </div>
                  </div>

                  <div class="card-right-text">
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
              </div> */}

              {/* <div class="card-container-box col-30">
                <div>
                  <img
                    class="card-container-img"
                    src="./assets/asset 17.avif"
                    alt=""
                  />
                </div>
                <div class="card-text flex jc-sb">
                  <div class="card-left-text">
                    <div>
                      <h3>La Pinos's Pizza</h3>
                    </div>
                    <div>
                      <p>Pizza, Pasta, Italian, Frency....</p>
                    </div>
                  </div>
                  <div class="card-right-text">
                    <div>
                      <h4>3.0 +</h4>
                    </div>
                    <div>
                      <p>Rs. 200 for one</p>
                    </div>
                    <div>
                      <p>20 min.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="card-container-box col-30">
                <div>
                  <img
                    class="card-container-img"
                    src="./assets/Bablu Shree Farali Center.avif"
                    alt=""
                  />
                </div>
                <div class="card-text flex jc-sb">
                  <div class="card-left-text">
                    <div>
                      <h3>
                        Bablu Shree <br />
                        Farali Center
                      </h3>
                    </div>
                    <div>
                      <p>Fast Food, South Indian</p>
                    </div>
                  </div>
                  <div class="card-right-text">
                    <div>
                      <h4>4.1 +</h4>
                    </div>
                    <div>
                      <p>Rs. 200 for one</p>
                    </div>
                    <div>
                      <p>25 min.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="card-container-box col-30">
                <div>
                  <img
                    class="card-container-img"
                    src="./assets/Poult.avif"
                    alt=""
                  />
                </div>
                <div class="card-text flex jc-sb">
                  <div class="card-left-text">
                    <div>
                      <h3>Poult</h3>
                    </div>
                    <div>
                      <p>Fast Food,Burger, Bever...</p>
                    </div>
                  </div>

                  <div class="card-right-text">
                    <div>
                      <h4>4.0 +</h4>
                    </div>
                    <div>
                      <p>Rs. 230 for one</p>
                    </div>
                    <div>
                      <p>20 min.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="card-container-box col-30">
                <div>
                  <img
                    class="card-container-img"
                    src="./assets/McDonald's.avif"
                    alt=""
                  />
                </div>
                <div class="card-text flex jc-sb">
                  <div class="card-left-text">
                    <div>
                      <h3>Mc Donald's</h3>
                    </div>
                    <div>
                      <p>Burger, Fast Food, Desser...</p>
                    </div>
                  </div>
                  <div class="card-right-text">
                    <div>
                      <h4>4.0 +</h4>
                    </div>
                    <div>
                      <p>Rs. 300 for one</p>
                    </div>
                    <div>
                      <p>30 min.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="card-container-box col-30">
                <div>
                  <img
                    class="card-container-img"
                    src="./assets/Jay Bhavani Vadapav.avif"
                    alt=""
                  />
                </div>
                <div class="card-text flex jc-sb">
                  <div class="card-left-text">
                    <div>
                      <h3>Jay Bhavani</h3>
                    </div>
                    <div>
                      <p>Street Food, Fast Food and More</p>
                    </div>
                  </div>
                  <div class="card-right-text">
                    <div>
                      <h4>4.0 +</h4>
                    </div>
                    <div>
                      <p>Rs. 150 for one</p>
                    </div>
                    <div>
                      <p>8 min.</p>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
