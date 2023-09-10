import React from "react";
import Navbar from "./Navbar/Navbar";
import Footer from "../Footer/Footer";
import CenterContent from "./CenterContent/CenterContent";

export default function BlogPage() {
  return (
    <div className="total-blog-page">
      <Navbar />
      <CenterContent />
      <Footer />
    </div>
  );
}
