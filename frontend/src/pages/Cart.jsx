// package import.
import React from "react";
// icon import.
import { MdDelete } from "react-icons/md";

// local import.
import { useAppContext } from "../contexts/AppContext";

// Cart component to display the user's shopping cart.
const Cart = () => {
  // Using context to access the cart state.
  const { cart } = useAppContext();

  //   Conditional rendering to display a message when the cart is empty.
  if (cart.length === 0) {
    return (
      <div className="mt-20 mb-10 px-4 h-screen flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-black to-gray-100 bg-clip-text text-transparent mb-6">
          Cart is Empty
        </h1>
        <p className="text-lg text-gray-600">Add some products to your cart!</p>
      </div>
    );
  }
  // Render the Cart component with the list of products in the cart.
  return (
    <div className="mt-20 mb-10 px-4">
      <h1 className="text-4xl font-bold bg-gradient-to-r from-black to-gray-100 bg-clip-text text-transparent mb-6">
        Cart Products
      </h1>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-200 text-gray-700">
              <th className="p-4">Product</th>
              <th className="p-4">Name</th>
              <th className="p-4">Price</th>
              <th className="p-4">Quantity</th>
              <th className="p-4">Total</th>
              <th className="p-4">Remove</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, index) => (
              <tr key={index} className="border-b hover:bg-gray-50">
                <td className="p-4 align-middle">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-contain rounded"
                  />
                </td>
                <td className="p-4 align-middle font-medium">{item.name}</td>
                <td className="p-4 align-middle text-green-600 font-semibold">
                  ${item.price.toFixed(2)}
                </td>
                <td className="p-4 align-middle">{item.quantity}</td>
                <td className="p-4 align-middle font-semibold">
                  ${(item.price * item.quantity).toFixed(2)}
                </td>
                <td className="p-4 align-middle">
                  <button className="text-red-600 hover:text-red-800 transition duration-200">
                    <MdDelete />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-end">
        <div className="mt-6 bg-white p-4 rounded-lg shadow-2xl w-full max-w-md">
          <div className="flex justify-between text-lg font-semibold mb-2">
            <span>Subtotal:</span>
            <span className="text-green-600 font-semibold">
              $
              {cart
                .reduce((acc, item) => acc + item.price * item.quantity, 0)
                .toFixed(2)}
            </span>
          </div>
          <div className="flex justify-between text-lg font-semibold mb-2">
            <span>Sales Tax:</span>
            <span className="text-green-600 font-semibold">
              $
              {(
                cart.reduce(
                  (acc, item) => acc + item.price * item.quantity,
                  0
                ) * 0.07
              ).toFixed(2)}
            </span>
          </div>
          <div className="flex justify-between text-lg font-semibold mb-2">
            <span>Coupon Code:</span>
            <span className="text-green-600 font-semibold">N/A</span>
          </div>
          <div className="flex justify-between text-lg font-semibold border-t pt-2 mt-2">
            <span>Total:</span>
            <span className="text-green-600 font-semibold">
              $
              {(
                cart.reduce(
                  (acc, item) => acc + item.price * item.quantity,
                  0
                ) * 1.07
              ).toFixed(2)}
            </span>
          </div>
          <div className="mt-4">
            <button className="bg-gradient-to-r from-black to-gray-800 text-white px-4 py-2 rounded-lg  transition duration-200 w-full">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Exporting the Cart component as default.
export default Cart;
