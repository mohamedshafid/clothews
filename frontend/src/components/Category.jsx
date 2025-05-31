// package import.
import React, { use, useState } from "react";
import { useNavigate } from "react-router-dom";

// local import.
import { allProducts } from "../assets/assets.js";

// Categroy component to display products based on selected category.
const Category = () => {
  // Using useNavigate hook from react-router-dom to navigate to product details.
  const navigate = useNavigate();

  // Categories array to filter products.
  const categories = ["All", "Men", "Women", "Children"];

  // State to manage the selected category.
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Function to handle category click and update the selected category.
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  // Render the component.
  return (
    <div className="flex flex-col items-center mt-10 mb-5">
      <h1 className="text-4xl font-bold text-center mt-10 bg-gradient-to-r from-black to-gray-200 bg-clip-text text-transparent">
        Category
      </h1>
      <p className="text-center mb-10">
        Explore our diverse range of categories. Each category is designed to
        help you find exactly what you're looking for, whether it's fashion,
        electronics, home goods, or more.
      </p>
      <div className="flex rounded-xl mb-10 bg-gradient-to-r from-black to-gray-800 w-max text-white">
        {categories.map((category, index) => (
          <div key={index}>
            <button
              key={index}
              className="text-gray-00 font-semibold py-2 px-4 cursor-pointer"
              onClick={() => handleCategoryClick(category)}
            >
              {category}
            </button>
            {index === categories.length - 1 ? null : <span>|</span>}
          </div>
        ))}
      </div>
      <div className="flex flex-wrap justify-center gap-10">
        {allProducts
          .filter((product) =>
            selectedCategory === "All"
              ? true
              : product.category === selectedCategory
          )
          .map((product, index) => (
            <div key={index} className="flex flex-col items-center mb-10">
              <img
                src={product.image}
                alt={product.name}
                className="w-64 h-64 object-contain rounded-xl shadow-lg cursor-pointer hover:shadow-xl shadow-gray-200 transition duration-300 ease-in-out"
                onClick={() => navigate(`/products/${product.id}`)}
              />
              <h2 className="text-xl font-semibold mt-2">{product.name}</h2>
              <p className="text-gray-600">${product.price}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

// Exporting the Category component as default.
export default Category;
