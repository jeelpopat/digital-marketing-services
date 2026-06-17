import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'; 

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServiceOpen, setIsMobileServiceOpen] = useState(false);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsMobileServiceOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 flex flex-col lg:flex-row items-center justify-between py-3 px-8 md:px-16 bg-[#F8F8F8] backdrop-blur-md w-full border-b border-gray-100">
      
      <div className="flex items-center justify-between w-full lg:w-auto">
        <Link to="/" onClick={closeMobileMenu} className="flex items-center space-x-2">
          <img src={logo} alt="MAC Logo" className="w-8 h-8 object-contain" />
          <span className="text-2xl font-bold text-black tracking-wide">MAC</span>
        </Link>

        <div className="lg:hidden flex items-center">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
            className="text-black focus:outline-none p-2"
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      <nav className="hidden lg:flex items-center space-x-8">
        <Link to="/" className="text-black font-medium hover:text-gray-600 transition-colors">
          Home
        </Link>
    
        <div className="relative group py-4">
          <Link to="/service" className="text-black font-medium hover:text-gray-600 transition-colors flex items-center gap-1">
            Service
            <svg className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </Link>

          <div className="absolute top-full left-0 mt-0 w-72 bg-white border border-gray-100 shadow-xl rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 flex flex-col py-3 z-50">
            <Link to="/service/website-design" className="px-5 py-2.5 text-sm text-gray-700 hover:bg-[#F0F7E6] hover:text-black font-medium transition-colors">Website & UI/UX Design</Link>
            <Link to="/service/web-development" className="px-5 py-2.5 text-sm text-gray-700 hover:bg-[#F0F7E6] hover:text-black font-medium transition-colors">Web Development</Link>
            <Link to="/service/ai-chatbots" className="px-5 py-2.5 text-sm text-gray-700 hover:bg-[#F0F7E6] hover:text-black font-medium transition-colors">AI Chatbots & Automation</Link>
            <Link to="/service/ai-creative" className="px-5 py-2.5 text-sm text-gray-700 hover:bg-[#F0F7E6] hover:text-black font-medium transition-colors">AI-Powered Creative Services</Link>
            <Link to="/service/mobile-app-design" className="px-5 py-2.5 text-sm text-gray-700 hover:bg-[#F0F7E6] hover:text-black font-medium transition-colors">Mobile App UI/UX Design</Link>
            <Link to="/service/optimization-support" className="px-5 py-2.5 text-sm text-gray-700 hover:bg-[#F0F7E6] hover:text-black font-medium transition-colors">Ongoing Optimization & Support</Link>
          </div>
        </div>

        <Link to="/about" className="text-black font-medium hover:text-gray-600 transition-colors">About Us</Link>
        <Link to="/team" className="text-black font-medium hover:text-gray-600 transition-colors">Our Team</Link>
        <Link to="/blog" className="text-black font-medium hover:text-gray-600 transition-colors">Blog</Link>
        <Link to="/contact" className="text-black font-medium hover:text-gray-600 transition-colors">Contact</Link>
      </nav>

      {/* Get Started Button */}
      <div className="hidden lg:block">
        <Link to="/contact" className="inline-block px-6 py-2.5 border border-black rounded-full text-black font-medium hover:bg-black hover:text-white transition-all duration-300">
          Get started
        </Link>
      </div>

      <div 
        className={`lg:hidden w-full absolute top-full left-0 bg-white border-b border-gray-100 shadow-xl transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-[600px] opacity-100 visible' : 'max-h-0 opacity-0 invisible'
        }`}
      >
        <nav className="flex flex-col px-8 py-6 space-y-4">
          <Link to="/" onClick={closeMobileMenu} className="text-lg font-medium text-black border-b border-gray-50 pb-3">Home</Link>
          
          <div className="flex flex-col border-b border-gray-50 pb-3">
            <div className="flex items-center justify-between w-full">
              <Link to="/service" onClick={closeMobileMenu} className="text-lg font-medium text-black">
                Service
              </Link>
              <button 
                onClick={() => setIsMobileServiceOpen(!isMobileServiceOpen)}
                className="p-2 text-black focus:outline-none flex items-center justify-center"
              >
                <svg className={`w-5 h-5 transition-transform duration-300 ${isMobileServiceOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
            
            {/* Dropdown Items */}
            <div className={`flex flex-col pl-4 space-y-3 overflow-hidden transition-all duration-300 ${isMobileServiceOpen ? 'max-h-96 opacity-100 mt-3' : 'max-h-0 opacity-0'}`}>
              <Link to="/service/website-design" onClick={closeMobileMenu} className="text-gray-600 text-sm font-medium">Website & UI/UX Design</Link>
              <Link to="/service/web-development" onClick={closeMobileMenu} className="text-gray-600 text-sm font-medium">Web Development</Link>
              <Link to="/service/ai-chatbots" onClick={closeMobileMenu} className="text-gray-600 text-sm font-medium">AI Chatbots & Automation</Link>
              <Link to="/service/ai-creative" onClick={closeMobileMenu} className="text-gray-600 text-sm font-medium">AI-Powered Creative Services</Link>
              <Link to="/service/mobile-app-design" onClick={closeMobileMenu} className="text-gray-600 text-sm font-medium">Mobile App UI/UX Design</Link>
              <Link to="/service/optimization-support" onClick={closeMobileMenu} className="text-gray-600 text-sm font-medium">Ongoing Optimization & Support</Link>
            </div>
          </div>

          <Link to="/about" onClick={closeMobileMenu} className="text-lg font-medium text-black border-b border-gray-50 pb-3">About Us</Link>
          <Link to="/team" onClick={closeMobileMenu} className="text-lg font-medium text-black border-b border-gray-50 pb-3">Our Team</Link>
          <Link to="/blog" onClick={closeMobileMenu} className="text-lg font-medium text-black border-b border-gray-50 pb-3">Blog</Link>
          <Link to="/contact" onClick={closeMobileMenu} className="text-lg font-medium text-black border-b border-gray-50 pb-3">Contact</Link>
          
          {/* Linked Mobile Get Started Button */}
          <Link to="/contact" onClick={closeMobileMenu} className="mt-4 px-6 py-3 bg-black text-white text-center rounded-full font-medium w-full hover:bg-gray-800 transition-colors block">
            Get started
          </Link>
        </nav>
      </div>
    </header>
  );
};
export default Header;