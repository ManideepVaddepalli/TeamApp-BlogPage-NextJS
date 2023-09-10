import React from "react";
import { Hero } from "./Hero/Hero";
import BottomCards from "./Bottom/BottomCards";
import Footer from "./Footer/Footer";
import CenterLast from "./Center/CenterLast";
import CenterCardsSection from "./Center/CenterCardsSection";
import { CenterTopSection } from "./Center/CenterTopCard";
import "./index.css";

export default function Homepage() {
  return (
    <div className="total-content">
      <Hero />
      <CenterTopSection />
      <CenterCardsSection />
      <CenterLast />
      <BottomCards />
      <Footer />
    </div>
  );
}
