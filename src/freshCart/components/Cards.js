import React from "react";

import mangoImg from "../images/Mango.png";
import bananaImg from "../images/Banana.png";
import veggyImg from "../images/Veggies.png";

import bannerStyles from "../styles/banner.module.css";

const Cards = () => {
  return (
    <div className={bannerStyles.cardsContainer}>
      <div className={`${bannerStyles.card} ${bannerStyles.pink}`}>
        <div className={bannerStyles.caption}>
          Season's fresh & crispy, always!
        </div>
        <img src={mangoImg} alt={"Mango"} className={bannerStyles.mango} />
      </div>

      <div className={`${bannerStyles.card} ${bannerStyles.orange}`}>
        <div className={bannerStyles.caption}>Your daily dose of goodness</div>
        <img src={veggyImg} alt={"Veggy"} className={bannerStyles.veg} />
      </div>

      <div className={`${bannerStyles.card} ${bannerStyles.blue}`}>
        <div className={bannerStyles.caption}>Deals on bananas </div>
        <img src={bananaImg} alt={"Banana"} className={bannerStyles.banana} />
      </div>
    </div>
  );
};

export default Cards;
