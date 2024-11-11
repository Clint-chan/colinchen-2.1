import React, { useState, useEffect } from 'react';
import { Menu, X, Home, User, Code2, Briefcase, GraduationCap, Trophy, Mail, MessageCircle } from 'lucide-react';

interface NavbarProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (value: boolean) => void;
  scrollToChatAssistant: () => void;
}

interface NavItem {
  name: string;
  href: string;
  icon: React.ReactNode;
}

export default function Navbar({ isMenuOpen, setIsMenuOpen, scrollToChatAssistant }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems: NavItem[] = [
    { name: '首页', href: '#home', icon: <Home className="w-4 h-4" /> },
    { name: '关于', href: '#about', icon: <User className="w-4 h-4" /> },
    { name: '技能', href: '#skills', icon: <Code2 className="w-4 h-4" /> },
    { name: '经验', href: '#experience', icon: <Briefcase className="w-4 h-4" /> },
    { name: '项目', href: '#projects', icon: <Briefcase className="w-4 h-4" /> },
    { name: '教育', href: '#education', icon: <GraduationCap className="w-4 h-4" /> },
    { name: '获奖', href: '#awards', icon: <Trophy className="w-4 h-4" /> },
    { name: '联系', href: '#contact', icon: <Mail className="w-4 h-4" /> },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      
      const current = navItems.find(item => {
        const element = document.querySelector(item.href);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom > 100;
        }
        return false;
      });
      
      if (current) {
        setActiveSection(current.href.substring(1));
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full backdrop-blur-md z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 shadow-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a 
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#home');
              }}
              className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 transition-all duration-300"
            >
              CDG
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className={`flex items-center px-3 py-2 rounded-md text-sm font-medium ${
                  activeSection === item.href.substring(1)
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                } transition-all duration-300`}
              >
                {item.icon}
                <span className="ml-1">{item.name}</span>
              </a>
            ))}
            {/* Chat Button */}
            <button
              onClick={scrollToChatAssistant}
              className="flex items-center px-3 py-2 ml-2 rounded-md text-sm font-medium bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300"
            >
              <MessageCircle className="w-4 h-4" />
              <span className="ml-1">聊天</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={scrollToChatAssistant}
              className="flex items-center px-3 py-2 rounded-md text-sm font-medium bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300"
            >
              <MessageCircle className="w-4 h-4" />
              <span className="ml-1">聊天</span>
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 transition-colors duration-300 focus:outline-none"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu - 水平滚动菜单 */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 shadow-lg">
          <div className="px-4 py-2 overflow-x-auto">
            <div className="flex space-x-4 min-w-max">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`flex items-center px-4 py-2 rounded-full text-sm font-medium ${
                    activeSection === item.href.substring(1)
                      ? 'text-white bg-blue-600'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-100'
                  } transition-all duration-300 whitespace-nowrap`}
                >
                  {item.icon}
                  <span className="ml-2">{item.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}