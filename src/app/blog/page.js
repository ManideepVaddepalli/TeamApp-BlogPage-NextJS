import BlogPage from "@/components/home/blog/BlogPage";
import React from "react";
import data1 from "@/components/home/blog/CenterContent/Blogdata2";
import data from "@/components/home/blog/CenterContent/Blogdata";

const totalData = data.concat(data1);

export default function About() {
  return <BlogPage />;
}

export function getStaticPath() {
  let paths = totalData.map((Elem) => {
    return {
      params: {
        slug: Elem.id.toString(),
      },
    };
  });
  return {
    paths,
    fallback: true,
  };
}
