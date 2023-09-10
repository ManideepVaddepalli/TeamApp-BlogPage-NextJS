import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function BlogCard(props) {
  return (
    <div className="card-container-blog">
      <div className="blog-image-container">
        <Image src={props.rectImage} alt={props.heading} />
      </div>
      <div className="blog-card-text-container">
        <h2>
          <Link href={`./blog/${props.id}`}>{props.heading}</Link>
        </h2>
        <p>{props.para}</p>
        <div className="blog-user-card">
          <div className="blog-avatar-image">
            <Image src={props.userAvatar} alt={props.userID} />
          </div>
          <h5>{props.userID}</h5>
          <h6>|</h6>
          <p>{props.userDate}</p>
        </div>
      </div>
    </div>
  );
}
