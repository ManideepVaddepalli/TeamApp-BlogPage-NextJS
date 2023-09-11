"use client";
import React from "react";
import "./navbar.css";
import Link from "next/link";

export default function Navbar() {
  let [dynamicCheck, setDynamicCheck] = React.useState(false);
  function navClicked() {
    setDynamicCheck((prevElem) => !prevElem);
  }
  React.useEffect(() => {
    let navMenu = document.querySelector(".navigation-bar");
    if (dynamicCheck) {
      navMenu.style.transform = "translate(0)";
    } else {
      navMenu.style.transform = "translate(60vw)";
    }
  });
  let [accessFormData, setAccessFormData] = React.useState({
    name: "",
    email: "",
  });
  function accessFormInput(e) {
    setAccessFormData((Elem) => {
      return {
        ...Elem,
        [e.target.name]: e.target.value,
      };
    });
  }
  function accessFromSubmit(e) {
    let formInput = document.querySelectorAll(".access-section-form input");
    e.preventDefault();
    if (
      /^[A-Za-z]+[ ]*[a-zA-Z]*$/.test(accessFormData.name) &&
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        accessFormData.email
      )
    ) {
      const earlyAccessBtnClicked = ReactDOM.createRoot(
        document.getElementById("formEarlyAccess")
      );
      earlyAccessBtnClicked.render(
        <p className="submit-early-access">
          Thank You! Your submission has been recieved!
        </p>
      );
    } else {
      if (!/^[A-Za-z]+[ ]*[a-zA-Z]*$/.test(accessFormData.name)) {
        formInput[0].style.border = "1px solid #ff3b6c";
      } else {
        formInput[1].style.border = "0px";
      }
      if (
        !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
          accessFormData.email
        )
      ) {
        formInput[1].style.border = "1px solid #ff3b6c";
      } else {
        formInput[1].style.border = "0px";
      }
    }
  }
  let [accessClickedcheck, setAccessClickedcheck] = React.useState(false);
  function clickedGetAccess() {
    setAccessClickedcheck(true);
  }
  function closeGetEarlyAccess() {
    console.log("clicked");
    setAccessClickedcheck(false);
  }

  return (
    <div className="hero" id="Hero">
      <header className="hero-header">
        <Link href="/" passHref>
          <h1 className="hero-logo">team</h1>
        </Link>
        <div className="header-nav-menu">
          <ul>
            <li>
              <a>Product</a>
            </li>
            <li>
              <a href="./blog">Blog</a>
            </li>
            <li>
              <a>Support</a>
            </li>
            <li>
              <a>Log In</a>
            </li>
            <li>
              <button
                onClick={clickedGetAccess}
                className="nav-menu-getaccess-button"
                type="button"
              >
                Get Access
              </button>
            </li>
          </ul>
        </div>
        <div className="nav-button">
          <input
            checked={dynamicCheck}
            onChange={navClicked}
            className="nav-checkbox"
            type="checkbox"
          ></input>
          <span className="first-line"></span>
          <span className="second-line"></span>
          <span className="third-line"></span>
        </div>
      </header>
      <div className="navigation-bar">
        <ul>
          <li>
            <a>Product</a>
          </li>
          <li>
            <a href="./blog">Blog</a>
          </li>
          <li>
            <a>Support</a>
          </li>
          <li>
            <a>Log In</a>
          </li>
          <li>
            <button
              onClick={clickedGetAccess}
              className="nav-menu-getaccess-button"
              type="button"
            >
              Get Access
            </button>
          </li>
        </ul>
      </div>
      {accessClickedcheck && (
        <div className="hero-getaccess-section">
          <div className="hero-getaccess-card">
            <div onClick={closeGetEarlyAccess} className="access-section-close">
              <span></span>
              <span></span>
            </div>
            <h2>Get Early Access</h2>
            <p>
              Submit the form, and we will notify you once the app is launced.
            </p>
            <form id="formEarlyAccess" className="access-section-form">
              <input
                name="name"
                onChange={accessFormInput}
                value={accessFormData.name}
                type="text"
                required
                placeholder="Name"
              ></input>
              <input
                name="email"
                onChange={accessFormInput}
                value={accessFormData.email}
                type="email"
                required
                placeholder="Email"
              ></input>
              <button onClick={accessFromSubmit} type="submit">
                Get Early Access
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
