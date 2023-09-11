import React from "react";
import Image from "next/image";
import "./centercard.css";

export default function CenterCard(props) {
  return (
    <div className="centersection-card-container">
      <div className="centercard-image-container">
        {props.image && <Image src={props.image} alt="First-card-iamge" />}
      </div>
      <div className="centercard-text-section">
        {props.heading && (
          <h1 className="centercard-text-heading">{props.heading}</h1>
        )}
        {props.para && (
          <p className="centercard-text-paragraph">{props.para}</p>
        )}
        <p className="center-top-card-learnmore">
          Learn more <span></span>
        </p>
      </div>
    </div>
  );
}
