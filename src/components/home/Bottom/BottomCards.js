"use client";

import React from "react";
import ArrowImg from "../Images/cardsArrow.png";
import RatingCards from "./RatingCards";
import "./bottomcards.css";
import ratingData from "./ratingData";

export default function BottomCards() {
  let ratingCardElems = ratingData.map((Elem) => {
    return (
      <RatingCards
        key={Elem.name}
        rating={Elem.rating}
        para={Elem.para}
        img={Elem.img}
        name={Elem.name}
        designation={Elem.designation}
      />
    );
  });
  function scrollLeft() {
    let cardContainer = document.querySelector(".bottom-cards-container");
    let ratingCard = document.querySelector(".rating-card-container");
    cardContainer.scrollLeft -= ratingCard.getBoundingClientRect().width + 30;
  }
  function scrollRight() {
    let cardContainer = document.querySelector(".bottom-cards-container");
    let ratingCard = document.querySelector(".rating-card-container");
    cardContainer.scrollLeft += ratingCard.getBoundingClientRect().width + 30;
  }
  console.log(ratingData);
  return (
    <div className="total-bottom-cards-section">
      <div className="bottom-cards-container">{ratingCardElems}</div>
      <button
        onClick={scrollLeft}
        className="cards-arrow-button-left"
        type="button"
      ></button>
      <button
        onClick={scrollRight}
        className="cards-arrow-button-right"
        type="button"
      ></button>
    </div>
  );
}
