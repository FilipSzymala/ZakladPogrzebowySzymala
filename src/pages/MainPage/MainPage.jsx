import React from "react";
import "./MainPage.css";
import { CallToAction, Hero, IncomingCeremonies } from "./components";

const MainPage = () => {
  return (
    <main>
      <Hero />
      <CallToAction />
      <IncomingCeremonies />
    </main>
  );
};

export default MainPage;
