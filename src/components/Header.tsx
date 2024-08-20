import React, { useState } from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  const [activeLink, setActiveLink] = useState<string>('');

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
  };

  return (
    <header className="w-full py-4 flex justify-between items-center px-8">
      <h1 className="text-2xl font-bold">Pathfinding Visualizer</h1>
      <nav>
        <ul className="flex space-x-6">
          <li>
            <Link href="/" className={`hover:underline ${activeLink === '/' ? 'underline' : ''}`} onClick={() => handleLinkClick('/')}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className={`hover:underline ${activeLink === '/about' ? 'underline' : ''}`} onClick={() => handleLinkClick('/about')}>
              About
            </Link>
          </li>
          <li>
            <Link href="/algorithms" className={`hover:underline ${activeLink === '/algorithms' ? 'underline' : ''}`} onClick={() => handleLinkClick('/algorithms')}>
              Algorithms
            </Link>
          </li>
          <li>
            <Link href="/visualizer" className={`hover:underline ${activeLink === '/visualizer' ? 'underline' : ''}`} onClick={() => handleLinkClick('/visualizer')}>
              Visualizer
            </Link>
          </li>
          {/* Uncomment if you want to include the Contact link */}
          {/* <li>
            <Link href="https://www.darshchaurasia.com" target="_blank" className={`hover:underline ${activeLink === 'contact' ? 'underline' : ''}`} onClick={() => handleLinkClick('contact')}>
              Contact
            </Link>
          </li> */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
