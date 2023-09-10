import React from "react";
import "./centertopcard.css";
import Image from "next/image";
import centertopImage from "../Images/centerTopMockup.png";

function CenterTopSection() {
  return (
    <div className="center-top-card">
      <Image src={centertopImage} />
      <div className="center-top-card-text-content">
        <h1 className="center-top-card-heading">
          Chats for your distributed teams
        </h1>
        <p className="center-top-card-para">
          Team combines the immediacy of real-time chat with an email threading
          model. With Team, you can catch up on important conversations while
          ignoring irrelevent ones.
        </p>
        <p className="center-top-card-learnmore">
          Learn more <span></span>
        </p>
      </div>
    </div>
  );
}
export { CenterTopSection };
