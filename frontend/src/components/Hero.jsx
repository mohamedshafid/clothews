// package import.
import React from "react";
import { Link } from "react-router-dom";

// local import.
import { hero } from "../assets/assets.js";

// Hero component to display the hero section of the application.
const Hero = () => {
  // Render the Hero component.
  return (
    <section className="mt-10 flex justify-between px-10 flex-col-reverse items-center lg:flex-row">
      <div className="max-w-[700px] w-full mt-10">
        <h1 className="font-extrabold text-7xl bg-gradient-to-r from-black to-gray-100 bg-clip-text text-transparent">
          Manage Clothes
        </h1>
        <h2 className="font-bold text-3xl mt-5 ml-5">
          Clothes aren’t just worn—they’re spoken
        </h2>
        <p className="text-gray-500 mt-5">
          Clothes are more than just fabric stitched together—they’re an
          extension of personality and a form of silent expression. From the
          crisp elegance of a tailored suit to the relaxed comfort of a soft
          cotton tee, every piece tells a story. Whether it’s the vibrant hues
          of traditional attire or the sleek lines of modern streetwear,
          clothing reflects our moods, cultures, and identities. They protect
          us, empower us, and often serve as our first impression to the world.
          In every thread, style meets function, and fashion becomes a language
          without words.
        </p>
        <a href="#Products">
          <button className="text-white px-6 py-4 rounded-xl mt-10 w-full bg-gradient-to-r from-black to-gray-800">
            View More
          </button>
        </a>
      </div>
      <div className=" max-w-[500px] h-[500px] w-full  rounded-xl justify-center items-center relative xl:flex hidden bg-gradient-to-r from-black to-gray-800">
        <img
          src={hero}
          alt="hero"
          className="max-w-[500px] h-[450px] w-full rounded-xl absolute right-1/8"
        />
      </div>
    </section>
  );
};

// Exporting the Hero component as default.
export default Hero;
