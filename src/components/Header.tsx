import React from 'react';

const Header = () => {
  return (
    <header className="w-full py-4 bg-black text-purple-500 flex justify-between items-center px-8">
      <h1 className="text-2xl font-bold">Pathfinding Visualizer</h1>
      <nav>
        <ul className="flex space-x-6">
          <li>
            <a href="#" className="hover:text-white">Home</a>
          </li>
          <li>
            <a href="#" className="hover:text-white">About</a>
          </li>
          <li>
            <a href="#" className="hover:text-white">Algorithms</a>
          </li>
          <li>
            <a href="#" className="hover:text-white">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
