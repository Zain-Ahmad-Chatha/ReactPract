import React from "react";
import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import bannerStyles from "../styles/banner.module.css";

import vegImg from "../images/Vegetables.png";
import appleImg from "../images/Apple.png";
import fruitImg from "../images/Fruits.png";
import beansImg from "../images/Beans.png";

const carousel_images = [
  {
    id: 1,
    name: "Orange",
    price: 87,
    was: 115,
    weight: "1 kg",
    pic: vegImg,
    popular: 1,
    type: "fruits",
  },
  {
    id: 2,
    name: "Apple",
    price: 143,
    was: 150,
    weight: "1 kg",
    pic: appleImg,
    popular: 1,
    type: "vegetables",
  },
  {
    id: 3,
    name: "Grapes",
    price: 90,
    was: 90,
    weight: "1 kg",
    pic: fruitImg,
    popular: 0,
    type: "fruits",
  },
  {
    id: 4,
    name: "Pomegranate",
    price: 127,
    was: 135,
    weight: "1 kg",
    pic: beansImg,
    popular: 1,
    type: "vegetables",
  },
];

const CarouselPics = () => {
  return (
    <div>
      <Carousel
        autoPlay={true}
        interval={2000}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        showArrows={false}
      >
        {!!carousel_images &&
          carousel_images.length > 0 &&
          carousel_images.map((pic, index) => {
            return (
              <div className={bannerStyles.width} key={index}>
                <img src={pic.pic} alt={pic.name} />
                <div className={bannerStyles.heading}>Get {pic.name} free</div>
                <div className={bannerStyles.desc}>
                  Buy vegetables and get fruits free. Conditions apply
                </div>
                <div className={bannerStyles.cta}>
                  <Link to={`/freshCart/${pic.type}`}>Shop Now</Link>
                </div>
              </div>
            );
          })}
      </Carousel>
    </div>
  );
};

export default CarouselPics;
