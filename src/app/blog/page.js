"use client";

import React from "react";
import BlogPage from "../../../components/home/blog/BlogPage";
import data from "../../../components/home/blog/CenterContent/Blogdata";
import data1 from "../../../components/home/blog/CenterContent/Blogdata2";
const allData = data.concat(data1);

export default function About() {
  return <BlogPage />;
}

export async function getStaticPath() {
  let allPaths = allData.map((Elem) => {
    return {
      params: {
        id: Elem.id.toString(),
      },
    };
  });
  console.log(allPaths);
  return {
    paths: allPaths,
    fallback: false,
  };
}
