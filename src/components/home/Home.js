import React from "react";
import Header from "../header/Header";
import ThreeColumns from "../threeColumns/threeColumns";
import FourSteps from "../fourSteps/FourSteps";
import AboutUs from "../aboutUs/AboutUs";
import WhoWeHelp from "../whoWeHelp/WhoWeHelp";
import ContactAndFooter from "../contactAndFooter/ContactAndFooter";

const Home = () => {
  return (
    <div>
      <Header />
      <ThreeColumns />
      <FourSteps />
      <AboutUs />
      <WhoWeHelp />
      <ContactAndFooter />
    </div>
  );
};
export default Home;
