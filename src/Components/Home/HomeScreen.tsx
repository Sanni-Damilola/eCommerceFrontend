import React from "react";
import Categories from "../Categories/Categories";
import Discover from "../Discover/Discover";
import Hero from "../Hero/Hero";
import NewArrival from "../NewArrival/NewArrival";
import Ship from "../Ship/Ship";

const HomeScreen = () => {
  return (
    <div
      style={{
        overflow: "hidden",
      }}
    >
      <Hero />
      <Discover />
      <NewArrival />
      <Ship />
      <Categories />
    </div>
  );
};

export default HomeScreen;
