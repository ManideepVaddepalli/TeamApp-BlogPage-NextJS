import React from "react";
import data from "../blog/CenterContent/Blogdata";
import data1 from "../blog/CenterContent/Blogdata2";
import Image from "next/image";
import "./individualblog.css";
const totalData = data.concat(data1);

export default function IndividualBlog(props) {
  let filteredData = totalData.filter((Elem) => Elem.id == props.id);
  console.log(filteredData);
  return (
    <div className="individual-blog-total-content">
      <div className="blog-top-text-content">
        <h1>{filteredData[0].heading}</h1>
        <div className="blog-avatar-container">
          <div className="avatar-image-container">
            <Image
              src={filteredData[0].userAvatar}
              alt={filteredData[0].userID}
            />
          </div>
          <h5>{filteredData[0].userID}</h5>
          <h4>|</h4>
          <p>{filteredData[0].userDate}</p>
        </div>
      </div>
      <div className="center-blog-image">
        <Image src={filteredData[0].rectImage} alt={filteredData[0].heading} />
      </div>
      <div className="blog-bottom-text-container">
        <p>{filteredData[0].longpara}</p>
        <div className="blog-avatar-container bottoms">
          <div className="avatar-image-container">
            <Image
              src={filteredData[0].userAvatar}
              alt={filteredData[0].userID}
            />
          </div>
          <div className="avatar-text-container">
            <h2>Written By</h2>
            <h3>{filteredData[0].userID}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
