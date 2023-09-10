"use client";

import React from "react";
import Navbar from "../../../../components/home/blog/Navbar/Navbar";
import Footer from "../../../../components/home/Footer/Footer";
import IndividualBlog from "../../../../components/home/IndividualBlog/IndividualBlog";

export default function BlogIndividual({ params }) {
  return (
    <>
      <Navbar />
      <IndividualBlog id={params.id} />
      <Footer />
    </>
  );
}
