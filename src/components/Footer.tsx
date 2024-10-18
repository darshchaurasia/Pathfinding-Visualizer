import React from 'react';
import { FaDiscord, FaLinkedin, FaYoutube, FaInstagram, FaGithub } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white py-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-center space-y-4 md:space-y-0 px-4">
        {/* Darsh Chaurasia Text on the Left */}
        <div className="flex-1 text-center md:text-left">
          <a href="https://www.darshchaurasia.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
            Darsh Chaurasia
          </a>
        </div>

        {/* Social Media Icons and Copyright in the Center */}
        <div className="flex-1 flex flex-col items-center text-center">
          <div className="flex space-x-4 mb-2">
            <a href="https://discord.gg/ury9rRMwk8" target="_blank" rel="noopener noreferrer">
              <FaDiscord size={24} />
            </a>
            <a href="https://x.com/darshchaurasia" target="_blank" rel="noopener noreferrer">
              <FaXTwitter size={24} />
            </a>
            <a href="https://www.linkedin.com/in/darshchaurasia/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={24} />
            </a>
            <a href="https://www.youtube.com/@darshchaurasia" target="_blank" rel="noopener noreferrer">
              <FaYoutube size={24} />
            </a>
            <a href="https://www.instagram.com/darshchaurasiaa/" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={24} />
            </a>
            <a href="https://github.com/darshchaurasia/Pathfinding-Visualizer" target="_blank" rel="noopener noreferrer">
              <FaGithub size={24} />
            </a>
          </div>
          <div className="mt-2">
            <p>Copyright &copy; 2024 Pathfinding Visualizer. All rights reserved.</p>
          </div>
        </div>

        {/* Footer Links on the Right */}
        <div className="flex-1 text-center md:text-right">
          <a href="mailto:darshchaurasia@gmail.com?subject=Pathfinding%20Visualizer" className="hover:underline">
            Contact Us
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
