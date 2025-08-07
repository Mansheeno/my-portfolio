import React from 'react';

function Header() {
  return (
    <header className="bg-indigo-700 text-white shadow-md sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-xl font-bold">MyPortfolio</div>
        <ul className="flex space-x-6 text-sm md:text-base">
          <li><a href="#about" className="hover:text-gray-300 transition">Home</a></li>
          <li><a href="#projects" className="hover:text-gray-300 transition">Projects</a></li>
          <li><a href="#contact" className="hover:text-gray-300 transition">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;