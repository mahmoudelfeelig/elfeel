import { FiGithub, FiLinkedin } from 'react-icons/fi';

export const Footer = () => (
  <footer className="bg-dark-800 py-8 mt-20">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="text-gray-400 text-sm mb-4 md:mb-0">
          © {new Date().getFullYear()} Mahmoud Elfil. All rights reserved.
        </div>
        <div className="flex space-x-6">
          <a 
            href="https://github.com/mahmoudelfeelig" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-purple-400 transition-colors"
          >
            <FiGithub size={28} />
          </a>
          <a 
            href="https://www.linkedin.com/in/elephanto" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-purple-400 transition-colors"
          >
            <FiLinkedin size={28} />
          </a>
        </div>
      </div>
    </div>
  </footer>
);
