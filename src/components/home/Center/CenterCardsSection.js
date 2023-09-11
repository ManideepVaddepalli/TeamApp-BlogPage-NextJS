"use client";

import React from "react";
import ThirdCardImage from "../Images/third-card-image.png";
import SecondCardImage from "../Images/second-card-image.png";
import FirstCardImage from "../Images/first-card-image.png";
import CenterCard from "./CenterCard";
import "./centercard.css";

export default function CenterCardsSection() {
  React.useEffect(() => {
    let flexEnd = document.querySelectorAll(".centersection-card-container");
    flexEnd.forEach((Elem, index) => {
      if ((index + 1) % 2 == 0) {
        Elem.classList.add("reverse");
      }
    });
  }, []);
  return (
    <div className="center-cards-container">
      <CenterCard
        id="1"
        image={FirstCardImage}
        heading="Chats for your distributed teams"
        para="Team combines the immediacy of real-time with an email threading model. With Team, you can catch up on important converstaions while ignoring irrelevant ones."
      />
      <CenterCard
        id="2"
        image={SecondCardImage}
        heading="Choose how you want to work"
        para="In Team, You've got all the flexibility to woek when, where and how it's best for you. You can easily chat, send audio and video clips, or hop on a huddle to talk things out live."
      />
      <CenterCard
        id="3"
        image={ThirdCardImage}
        heading="Move faster with Team tools"
        para="With your other work apps connected to Team, you can work faster by switching tabs less. And with powerful tools like Workflow Builder, you can automate away routine tasks."
      />
    </div>
  );
}
