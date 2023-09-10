import React from "react";
import "./CenterContent.css";
import data from "./Blogdata";
import BlogCard from "./BlogCard";
import data2 from "./Blogdata2";

export default function CenterContent() {
  let [nextpage, setNextpage] = React.useState(data);
  let [nextClicked, setNextClicked] = React.useState(false);
  let blogElements = nextpage.map((Elem) => {
    return (
      <BlogCard
        id={Elem.id}
        key={Elem.id}
        rectImage={Elem.rectImage}
        para={Elem.para}
        heading={Elem.heading}
        userAvatar={Elem.userAvatar}
        userDate={Elem.userDate}
        userID={Elem.userID}
      />
    );
  });
  function handleNext() {
    setNextpage(data2);
    setNextClicked(true);
  }
  function handlePrevious() {
    setNextpage(data);
    setNextClicked(false);
  }
  return (
    <div className="blog-center-content-total">
      <h1>Blog</h1>
      <p>
        Open-source threaded team chat that helps teams stay productive and
        focused
      </p>
      <div className="blog-cards-container">{blogElements}</div>
      <div className="next-button">
        {!nextClicked && <button onClick={handleNext}>Next</button>}
        {nextClicked && <button onClick={handlePrevious}>Previous</button>}
      </div>
    </div>
  );
}
