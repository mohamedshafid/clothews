// package import.
import React from "react";
// local import.
import { allProducts } from "../assets/assets.js";

// Products component to display a scrollable list of product images.
const Products = () => {
  // Duplicate images for the looping effect
  const duplicatedImages = [...allProducts, ...allProducts];

  // Render the Products component.
  return (
    <div className="mt-20" id="Products">
      <h1 className="text-4xl font-bold bg-gradient-to-r from-black to-gray-100 bg-clip-text text-transparent">
        Products
      </h1>
      <p className="text-gray-600 mt-2">
        View all the products here. You can add them to your cart and view the
        details of each product.
      </p>
      <div className="relative overflow-x-hidden mt-10 mb-10">
        <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
        <div className="flex gap-4 scroll">
          {duplicatedImages.map((product, index) => (
            <img
              key={index}
              src={product.image}
              alt={`Product ${index + 1}`}
              className="w-60 h-60 object-contain flex-shrink-0 rounded-xl shadow-lg cursor-pointer"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

// exporting the Products component as default.
export default Products;
