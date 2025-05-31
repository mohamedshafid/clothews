// package import.
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";

// local import.
import { allProducts } from "../assets/assets.js";
import { useAppContext } from "../contexts/AppContext.jsx";

// ProductDetails component to display the details of a selected product.
const ProductDetails = () => {
  // Using useParams to get the product ID from the URL.
  const { id } = useParams();

  //   useAppContext to access the application state and functions.
  const { currentUser } = useAppContext();
  const { cart, setCart } = useAppContext();

  // Finding the product based on the ID from the URL.
  const product = allProducts.find((product) => product.id == id);

  // State to manage the selected size and quantity of the product.
  const [size, setSize] = useState("S");
  const [quantity, setQuantity] = useState(1);

  // If the product is not found, return a message indicating that the product is not available.
  if (!product) {
    return <div>Product not found</div>;
  }
  //   Rendering the product details section with product image, name, description, price, size selection, quantity control, and add to cart button.
  const { name, image, description, price } = product;
  return (
    <section>
      <div className="flex xl:flex-row flex-col gap-10  mt-20 mb-10">
        <div className="relative md:w-80 h-96 w-full">
          <img
            src={image}
            alt=""
            className="w-full h-full object-contain rounded-xl shadow-lg cursor-pointer hover:shadow-xl shadow-gray-200 transition duration-300 ease-in-out"
          />
          <span className="px-4 py-2 rounded-full mt-5 items-center absolute bottom-5 right-5 flex flex-row gap-3 bg-white shadow-lg shadow-gray-200 border border-white">
            <button
              className="bg-white rounded-full p-2 text-black cursor-pointer font-bold text-xl"
              onClick={() => setQuantity(quantity - 1)}
              disabled={quantity === 0}
            >
              -
            </button>
            <span className="font-bold text-xl">{quantity}</span>
            <button
              className="bg-white rounded-full p-2 text-black cursor-pointer font-bold text-xl"
              onClick={() => setQuantity(quantity + 1)}
              disabled={quantity === 10}
            >
              +
            </button>
          </span>
        </div>
        <div>
          <h1 className="text-5xl font-extrabold">{name}</h1>
          <p className="text-2xl font-semibold mt-1">{description}</p>
          <p className="max-w-[800px] text-gray-500 mt-5">
            Clothes are more than just fabric stitched together—they’re an
            extension of personality and a form of silent expression. From the
            crisp elegance of a tailored suit to the relaxed comfort of a soft
            cotton tee, every piece tells a story.
          </p>
          <p className="text-2xl font-semibold mt-2 text-gray-800">${price}</p>
          <div>
            <div className="flex gap-5 mt-5">
              <button
                className={`${
                  size === "S" && "bg-gray-200"
                } border border-gray-300 rounded-full px-4 py-2 hover:bg-gray-200 cusor-pointer`}
                onClick={() => setSize("S")}
              >
                S
              </button>
              <button
                className={`${
                  size === "M" && "bg-gray-200"
                } border border-gray-300 rounded-full px-4 py-2 hover:bg-gray-200 cusor-pointer`}
                onClick={() => setSize("M")}
              >
                M
              </button>
              <button
                className={`${
                  size === "L" && "bg-gray-200"
                } border border-gray-300 rounded-full px-4 py-2 hover:bg-gray-200 cusor-pointer`}
                onClick={() => setSize("L")}
              >
                L
              </button>
              <button
                className={`${
                  size === "XL" && "bg-gray-200"
                } border border-gray-300 rounded-full px-4 py-2 hover:bg-gray-200 cusor-pointer`}
                onClick={() => setSize("XL")}
              >
                XL
              </button>
            </div>
          </div>
          <button
            className="text-white px-6 py-4 rounded-xl mt-10 w-full bg-gradient-to-r from-black to-gray-800 cursor-pointer"
            onClick={() => {
              console.log(currentUser);
              if (currentUser == null) {
                toast.error("Please login to add product to cart");
                return;
              }

              if (cart.some((item) => item.id === product.id)) {
                toast.error("Product already in cart");
                return;
              }

              setCart((prev) => [...prev, { ...product, quantity, size }]);
              toast.success("Product added to cart");
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
      <div>
        <h1 className="text-4xl font-bold text-center mt-30 bg-gradient-to-r from-black to-gray-200 bg-clip-text text-transparent">
          Related Products
        </h1>
        <div className="flex flex-wrap justify-center gap-10 mt-10">
          {allProducts
            .filter(
              (item) => item.category === product.category && item.id !== id
            )
            .map((item, index) => (
              <div key={index} className="flex flex-col items-center mb-10">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-64 h-64 object-contain rounded-xl shadow-lg cursor-pointer hover:shadow-xl shadow-gray-200 transition duration-300 ease-in-out"
                />
                <h2 className="text-xl font-semibold mt-2">{item.name}</h2>
                <p className="text-gray-600">${item.price}</p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

// Exporting the ProductDetails component as default.
export default ProductDetails;
