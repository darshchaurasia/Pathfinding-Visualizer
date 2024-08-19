import React from 'react';
import { FaDiscord, FaLinkedin, FaYoutube, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        {/* Darsh Chaurasia Text on the Left */}
        <div className="text-left md:text-left order-1 md:order-1">
        <a href="https://www.darshchaurasia.com" target="_blank"  rel="noopener noreferrer" className="hover:underline">
            Darsh Chaurasia
          </a>
        </div>

        {/* Social Media Icons Centered Above Copyright */}
        <div className="flex flex-col items-center order-2 md:order-2">
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
          </div>

          {/* Footer Copyright */}
          <div className="text-center mt-2">
            <p>Copyright &copy; 2024 Pathfinding Visualizer. All rights reserved.</p>
          </div>
        </div>

        {/* Footer Links on the Right */}
        <div className="flex space-x-4 order-3 md:order-3">
        <a href="mailto:darshchaurasia@gmail.com?subject=Pathfinding%20Visualizer" className="hover:underline">
  Contact Us
</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
