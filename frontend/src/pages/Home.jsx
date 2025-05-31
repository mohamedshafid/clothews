// package import.
import React from "react";
// local import.
import { Category, Hero, NewsLetter, Popular, Products } from "../components";

// Home component to render the main page of the application.
const Home = () => {
  return (
    <>
      <Hero />
      <Products />
      <Popular />
      <Category />
      <NewsLetter />
    </>
  );
};

// Exporting the Home component as default.
export default Home;
