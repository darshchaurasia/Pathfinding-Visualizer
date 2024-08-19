import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="w-full py-4 bg-black text-purple-500 flex justify-between items-center px-8">
      <h1 className="text-2xl font-bold">Pathfinding Visualizer</h1>
      <nav>
        <ul className="flex space-x-6">
          <li>
            <Link href="/" className="hover:text-white">Home</Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-white">About</Link>
          </li>
          <li>
            <Link href="/algorithms" className="hover:text-white">Algorithms</Link>
          </li>
          <li>
            <a href="mailto:darshchaurasia@gmail.com" className="hover:text-white">Email</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
