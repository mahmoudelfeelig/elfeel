import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  HiHome, 
  HiUser, 
  HiCode, 
  HiMail, 
  HiDocumentText 
} from 'react-icons/hi';
import { GiElephant } from 'react-icons/gi';

export const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('home');

  const handleNavClick = (section) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
    }
    setActiveSection(section);
  };

  return (
    <nav className="fixed top-0 w-full bg-dark-800/80 backdrop-blur-md z-50 py-5">
      <div className="container mx-auto flex items-center justify-between px-6">
        <Link 
          to="/" 
          className="text-3xl text-purple-400 hover:text-purple-300 transition-colors"
        >
          <GiElephant className="w-12 h-12 hover:scale-110 transition-transform" />
        </Link>
        
        <div className="flex space-x-6">
          {[
            { id: 'home', icon: <HiHome className="text-2xl" />, label: 'Home' },
            { id: 'skills', icon: <HiCode className="text-2xl" />, label: 'Skills' },
            { id: 'stats', icon: <HiUser className="text-2xl" />, label: 'Stats' },
            { id: 'contact', icon: <HiMail className="text-2xl" />, label: 'Contact' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`p-3 rounded-lg hover:bg-dark-700 transition-all flex items-center gap-2 ${
                activeSection === item.id 
                  ? 'text-purple-400 bg-dark-700' 
                  : 'text-gray-300'
              }`}
            >
              {item.icon}
              <span className="text-lg hidden md:inline-block">{item.label}</span>
            </button>
          ))}
          <Link
            to="/cv"
            className="p-3 rounded-lg hover:bg-dark-700 transition-all flex items-center gap-2 text-gray-300 hover:text-purple-400"
          >
            <HiDocumentText className="text-2xl" />
            <span className="text-lg hidden md:inline-block">CV</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};