// package import.
import React from "react";

// NewsLetter component to display a newsletter subscription section.
const NewsLetter = () => {
  // Render the NewsLetter component.
  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 p-10 rounded-lg shadow-lg mt-2 mb-10">
      <h1 className="text-4xl font-bold text-center mt-5 mb-10 bg-gradient-to-r from-black to-gray-200 bg-clip-text text-transparent">
        Subscribe to our Newsletter
      </h1>

      <p className="max-w-[600px] text-center">
        Stay updated with the latest news, offers, and exclusive deals.
        Subscribe to our newsletter and be the first to know about our new
        arrivals and special promotions.
      </p>
      <div className="flex flex-row items-center mt-2 relative w-[450px]">
        <input
          type="text"
          placeholder="Enter your email"
          className="border-2 border-gray-300 rounded-lg p-3 mt-5 w-full"
        />
        <br />
        <button className="bg-gradient-to-r from-black to-gray-800 text-white px-6 py-2 rounded-lg mt-5 absolute right-2  cursor-pointer">
          Subscribe
        </button>
      </div>
    </div>
  );
};

// Exporting the NewsLetter component as default.
export default NewsLetter;
