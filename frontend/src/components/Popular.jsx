// package import.
import React from "react";
// local import.
import { popular } from "../assets/assets";

// Popular component to display popular products.
const Popular = () => {
  // render the component.
  return (
    <div>
      <h1 className="text-4xl font-bold text-center mt-20 bg-gradient-to-r from-black to-gray-200 bg-clip-text text-transparent">
        Popular Products
      </h1>
      <p className="text-center mb-10">
        Discover the most popular products among our customers. These items are
        highly rated and frequently purchased, making them a must-see for anyone
        looking to shop smart.
      </p>
      <div className="flex flex-wrap justify-center gap-10">
        {popular.map((item, index) => (
          <div key={index} className="flex flex-col items-center mb-10">
            <img
              src={item.image}
              alt={item.name}
              className="w-64 h-64 object-contain rounded-xl shadow-lg cursor-pointer hover:shadow-2xl"
            />
            <h2 className="text-xl font-semibold mt-2">{item.name}</h2>
            <p className="text-gray-600">${item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// Exporting the Popular component as default.
export default Popular;
