import React from 'react';
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="w-full bg-[#FAFAFA] py-2 px-8 md:px-16 border-t border-gray-100">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
        
        {/* 1. Brand Section */}
        <div className="lg:col-span-5 flex flex-col space-y-6">
          <div className="flex items-center space-x-3">
            <img src={logo} alt="MAC Logo" className="w-12 h-12 object-contain" />
            <span className="text-4xl font-bold text-black tracking-wide">MAC</span>
          </div>
          
          <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-xl">
            We offers a comprehensive suite of digital marketing services that cover all aspects of our online presence. From SEO and social media marketing to content creation and PPC advertising, they have the expertise and resources to handle our diverse marketing needs.
          </p>
          
          {/* Social Icons */}
          <div className="flex items-center space-x-4 pt-4">
            <a href="#" className="w-10 h-10 rounded-full bg-white shadow-sm border border-gray-100 flex items-center justify-center text-black hover:text-[#3DE073] transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white shadow-sm border border-gray-100 flex items-center justify-center text-black hover:text-[#3DE073] transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white shadow-sm border border-gray-100 flex items-center justify-center text-black hover:text-[#3DE073] transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white shadow-sm border border-gray-100 flex items-center justify-center text-black hover:text-[#3DE073] transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
          </div>
        </div>

        {/* 2. Navigation Section */}
        <div className="lg:col-span-2 lg:pl-4 flex flex-col space-y-6">
          <h3 className="text-lg font-bold text-black tracking-wide">Navigation</h3>
          <ul className="flex flex-col space-y-4 text-sm md:text-base">
            <li><a href="/ourservice" className="text-gray-400 hover:text-black transition-colors">Service</a></li>
            <li><a href="/agency" className="text-gray-400 hover:text-black transition-colors">Agency</a></li>
            <li><a href="/casestudy" className="text-gray-400 hover:text-black transition-colors">Case Study</a></li>
            <li><a href="/resource" className="text-gray-400 hover:text-black transition-colors">Resource</a></li>
            <li><a href="/contact" className="text-gray-400 hover:text-black transition-colors">Contact</a></li>
          </ul>
        </div>

        {/* 3. Licence Section */}
        <div className="lg:col-span-2 flex flex-col space-y-6">
          <h3 className="text-lg font-bold text-black tracking-wide">Licence</h3>
          <ul className="flex flex-col space-y-4 text-sm md:text-base">
            <li><a href="#" className="text-gray-400 hover:text-black transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="text-gray-400 hover:text-black transition-colors">Copyright</a></li>
            <li><a href="#" className="text-gray-400 hover:text-black transition-colors">Email Address</a></li>
          </ul>
        </div>

        {/* 4. Contact Section */}
        <div className="lg:col-span-3 flex flex-col space-y-6">
          <h3 className="text-lg font-bold text-black tracking-wide">Contact</h3>
          <ul className="flex flex-col space-y-5 text-sm md:text-base">
            <li className="flex items-center space-x-4">
              <svg className="w-5 h-5 text-black shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.59l2.2-2.21c.28-.26.36-.65.25-1C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1z" />
              </svg>
              <span className="text-gray-400 leading-relaxed">(406) 555-0120</span>
            </li>
            
            <li className="flex items-center space-x-4">
              <svg className="w-5 h-5 text-black shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
              <span className="text-gray-400 leading-relaxed">Hey@boostim.com</span>
            </li>
            
            <li className="flex items-start space-x-4">
              <svg className="w-5 h-5 text-black mt-1 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
              <span className="text-gray-400 leading-relaxed">
                2972 Westheimer Rd. Santa Ana, Illinois 85486
              </span>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
export default Footer;