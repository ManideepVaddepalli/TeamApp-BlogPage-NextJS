import React from "react";
import data from "@/components/home/blog/CenterContent/Blogdata";
import data1 from "@/components/home/blog/CenterContent/Blogdata2";
import { notFound } from "next/navigation";
import Navbar from "@/components/home/blog/Navbar/Navbar";
import IndividualBlog from "@/components/home/IndividualBlog/IndividualBlog";
import Footer from "@/components/home/Footer/Footer";
const totalData = data.concat(data1);

export default function BlogIndividual({ params }) {
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
    <h1>Not found</h1>;
  }
}
export async function getStaticPath() {
  let paths = allData.map((Elem) => {
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

export async function generateStaticParams() {
  let mappedData = totalData.map((Elem) => {
    return { slug: Elem.toString() };
  });
  return mappedData;
}
