import React from "react";
import Image from "next/image";
import emptyStar from "../Images/empty-star-rating.png";
import halfStar from "../Images/half-star-rating.png";
import fullStar from "../Images/full-star-rating.png";
let ratingElem;

export default function RatingCards(props) {
  function checkStars() {
    if (props.rating === 5) {
      ratingElem = (
        <div className="rating-stars">
          <Image src={fullStar} />
          <Image src={fullStar} />
          <Image src={fullStar} />
          <Image src={fullStar} />
          <Image src={fullStar} />
        </div>
      );
    } else if (props.rating === 4.5) {
      ratingElem = (
        <div className="rating-stars">
          <Image src={fullStar} />
          <Image src={fullStar} />
          <Image src={fullStar} />
          <Image src={fullStar} />
          <Image src={halfStar} />
        </div>
      );
    } else if (props.rating === 4) {
      ratingElem = (
        <div className="rating-stars">
          <Image src={fullStar} />
          <Image src={fullStar} />
          <Image src={fullStar} />
          <Image src={fullStar} />
          <Image src={emptyStar} />
        </div>
      );
    } else if (props.rating === 3.5) {
      ratingElem = (
        <div className="rating-stars">
          <Image src={fullStar} />
          <Image src={fullStar} />
          <Image src={fullStar} />
          <Image src={halfStar} />
          <Image src={emptyStar} />
        </div>
      );
    } else if (props.rating === 3) {
      ratingElem = (
        <div className="rating-stars">
          <Image src={fullStar} />
          <Image src={fullStar} />
          <Image src={fullStar} />
          <Image src={emptyStar} />
          <Image src={emptyStar} />
        </div>
      );
    } else if (props.rating === 2.5) {
      ratingElem = (
        <div className="rating-stars">
          <Image src={fullStar} />
          <Image src={fullStar} />
          <Image src={halfStar} />
          <Image src={emptyStar} />
          <Image src={emptyStar} />
        </div>
      );
    } else if (props.rating === 2) {
      ratingElem = (
        <div className="rating-stars">
          <Image src={fullStar} />
          <Image src={fullStar} />
          <Image src={emptyStar} />
          <Image src={emptyStar} />
          <Image src={emptyStar} />
        </div>
      );
    } else if (props.rating === 1.5) {
      ratingElem = (
        <div className="rating-stars">
          <Image src={fullStar} />
          <Image src={halfStar} />
          <Image src={emptyStar} />
          <Image src={emptyStar} />
          <Image src={emptyStar} />
        </div>
      );
    } else if (props.rating === 1) {
      ratingElem = (
        <div className="rating-stars">
          <Image src={fullStar} />
          <Image src={emptyStar} />
          <Image src={emptyStar} />
          <Image src={emptyStar} />
          <Image src={emptyStar} />
        </div>
      );
    } else if (props.rating === 0.5) {
      ratingElem = (
        <div className="rating-stars">
          <Image src={halfStar} />
          <Image src={emptyStar} />
          <Image src={emptyStar} />
          <Image src={emptyStar} />
          <Image src={emptyStar} />
        </div>
      );
    } else {
      ratingElem = (
        <div className="rating-stars">
          <Image src={emptyStar} />
          <Image src={emptyStar} />
          <Image src={emptyStar} />
          <Image src={emptyStar} />
          <Image src={emptyStar} />
        </div>
      );
    }
  }
  checkStars();
  return (
    <div className="rating-card-container">
      {ratingElem}
      <p>{props.para}</p>
      <div className="rating-user-section">
        <div className="rating-user-avatar">
          <Image src={props.img} width="56" height="56" />
        </div>
        <div className="rating-user-text">
          <h4>{props.name}</h4>
          <p>{props.designation}</p>
        </div>
      </div>
    </div>
  );
}
