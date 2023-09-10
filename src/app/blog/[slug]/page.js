"use client";

import React from "react";
import data from "../../../../components/home/blog/CenterContent/Blogdata";
import data1 from "../../../../components/home/blog/CenterContent/Blogdata2";
import Navbar from "../../../../components/home/blog/Navbar/Navbar";
import Footer from "../../../../components/home/Footer/Footer";
import IndividualBlog from "../../../../components/home/IndividualBlog/IndividualBlog";
import { notFound } from "next/navigation";
const totalData = data.concat(data1);

export default function BlogIndividual({ params }) {
  console.log(params);
  let filteredData = totalData.filter((Elem) => Elem.id == params.slug);
  if (filteredData[0]) {
    return (
      <>
        <Navbar />
        <IndividualBlog id={params.slug} />
        <Footer />
      </>
    );
  } else {
    notFound();
  }
}
export async function getStaticPath() {
  let allPaths = allData.map((Elem) => {
    return {
      params: {
        slug: Elem.id.toString(),
      },
    };
  });
  return {
    paths: allPaths,
    fallback: false,
  };
}
