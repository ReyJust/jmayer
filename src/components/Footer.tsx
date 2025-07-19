import React from "react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <div className="w-3/4 mx-auto border-t border-gray-700 mb-6"></div>
        <p className="text-gray-400">
          © {currentYear} Justin Mayer. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
