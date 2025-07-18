import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Home, Zap, Code, Calendar, FolderOpen, Award, Mail } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navigationItems = [
    { path: '/', anchor: 'landing', name: 'Home', icon: Home },
    { path: '/superpowers', anchor: 'superpowers', name: 'Superpowers', icon: Zap },
    { path: '/tech-arsenal', anchor: 'tech-arsenal', name: 'Tech Arsenal', icon: Code },
    { path: '/internships', anchor: 'internships', name: 'Internship Calendar', icon: Calendar },
    { path: '/projects', anchor: 'projects', name: 'Projects', icon: FolderOpen },
    { path: '/achievements', anchor: 'achievements', name: 'Achievements', icon: Award },
    { path: '/contact', anchor: 'contact', name: 'Contact', icon: Mail },
  ];

  const handleNavClick = (item) => {
    if (location.pathname === '/') {
      // On main page, scroll to section
      const section = document.getElementById(item.anchor);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Navigate to standalone page
      navigate(item.path);
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-red-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold gradient-text">
              Purwanshi Mishra
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navigationItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.path}
                    onClick={() => handleNavClick(item)}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 flex items-center space-x-1 ${
                      (location.pathname === '/' && item.anchor === 'landing') ||
                      (location.pathname !== '/' && location.pathname === item.path)
                        ? 'bg-red-600 text-white glow-border'
                        : 'text-gray-300 hover:bg-red-700 hover:text-white'
                    }`}
                    style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                  >
                    <Icon size={16} />
                    <span>{item.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-900/95 backdrop-blur-sm">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.path}
                  onClick={() => handleNavClick(item)}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 flex items-center space-x-2 ${
                    (location.pathname === '/' && item.anchor === 'landing') ||
                    (location.pathname !== '/' && location.pathname === item.path)
                      ? 'bg-red-600 text-white'
                      : 'text-gray-300 hover:bg-red-700 hover:text-white'
                  }`}
                  style={{ background: 'none', border: 'none', cursor: 'pointer', width: '100%', textAlign: 'left' }}
                >
                  <Icon size={18} />
                  <span>{item.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;