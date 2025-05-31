// package import.
import React from "react";

// Footer component to display the footer section of the application.
const Footer = () => {
  // Render the footer component.
  return (
    <footer>
      <div className="bg-gradient-to-r from-black to-gray-800 text-white py-4 text-center">
        <p>&copy; 2023 Your Company Name. All rights reserved.</p>
        <p>Follow us on:</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="#" className="text-gray-400 hover:text-white">
            Facebook
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            Twitter
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
};

// Exporting the Footer component as default.
export default Footer;
