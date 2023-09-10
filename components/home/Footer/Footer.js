"use client";

import React from "react";
import ReactDOM from "react-dom";
import "./footer.css";

export default function Footer() {
  let [emailValue, setEmailValue] = React.useState("");

  function emailchanged(e) {
    setEmailValue(e.target.value);
  }

  function heroAccessClick() {
    let heroEmailInput = document.querySelector(".footer-stayuptodate input");
    if (
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        emailValue
      )
    ) {
      const earlyAccessBtnClicked = ReactDOM.createRoot(
        document.getElementById("footer-form")
      );
      earlyAccessBtnClicked.render(
        <p className="footer-form-submit">
          Thank You! Your submission has been recieved!
        </p>
      );
    } else {
      heroEmailInput.style.outline = "2px solid  #ff3b6c";
    }
  }

  return (
    <div className="footer-section-container">
      <div className="footer-section-container-desktop">
        <div className="footer-logo-container">
          <a href="#Hero">
            <h1 className="hero-logo-footer">team</h1>
          </a>
          <p>
            Collaboration platform
            <br />
            for mordern team
          </p>
        </div>
        <div className="footer-main-div">
          <div className="footer-stayuptodate footer-common">
            <h4>Stay up to date</h4>
            <p>Subscribe to our newseller</p>
            <div className="footer-form" id="footer-form">
              <input
                value={emailValue}
                onChange={emailchanged}
                type="email"
                placeholder="Email"
              ></input>
              <br />
              <button
                onClick={heroAccessClick}
                type="button"
                className="footer-email-button"
              >
                Get Early Access
              </button>
            </div>
          </div>
          <div className="footer-secondary-div">
            <div className="footer-company footer-common">
              <h4>Company</h4>
              <ul>
                <li>Product</li>
                <li>
                  <a href="./blog">Blog</a>
                </li>
                <li>Support</li>
              </ul>
            </div>
            <div className="footer-features footer-common">
              <h4>Features</h4>
              <ul>
                <li>Screen Sharing</li>
                <li>iOS & Android Apps</li>
                <li>File Sharing</li>
                <li>User Management</li>
              </ul>
            </div>
            <div className="footer-contactus footer-common">
              <h4>Contact Us</h4>
              <ul>
                <li>info@teamapp.com</li>
                <li>1-800-200-300</li>
                <li>
                  1010 Sunset Blv.
                  <br />
                  Palo Alto, California
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <p>
          {" "}
          &#169; Copyright Team Inc.
          <br />
          Made by Manideep Vaddepalli Clone of Team.
        </p>
      </div>
    </div>
  );
}
