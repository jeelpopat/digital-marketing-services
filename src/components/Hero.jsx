import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="w-full px-4 md:px-16 py-8 lg:py-12 bg-[#F8F8F8]">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-8">
        
        {/*Typography & CTA */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center space-y-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-[1.1] tracking-tight">
            Stay ahead of the curve with our forward-thinking
          </h1>
          <p className="text-gray-500 text-lg max-w-md leading-relaxed">
            An award-winning SEO agency with disciplines in digital marketing, design, and website development, focused on understanding you.
          </p>
          
          <div className="flex flex-wrap items-center gap-6">
            <Link to="/contact" className="bg-black text-white px-8 py-3.5 rounded-full font-medium flex items-center gap-2 hover:bg-gray-800 transition-colors">
              Schedule Call
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
            <Link to="/service" className="text-black font-semibold underline decoration-2 underline-offset-4 hover:text-gray-600 transition-colors">
              View Case Study
            </Link>
          </div>

          <div className="pt-6 flex flex-wrap items-center gap-8">
            <span className="text-xs font-bold uppercase text-BLACK-400 max-w-[200px]">Trusted by the world's biggest brands</span>
            <span className="text-gray-400 font-bold text-xl">afterpay</span>
            <span className="text-gray-400 font-bold text-xl">Basecamp</span>
            <span className="text-gray-400 font-bold text-xl">maze</span>
          </div>
        </div>

        {/* Right Side: Bento Grid */}
        <div className="w-full lg:w-1/2 flex flex-col gap-4">
          <div className="flex flex-col md:flex-row gap-4 h-auto md:h-64">
            <div className="relative w-full md:w-1/2 bg-gray-200 rounded-[2rem] rounded-tl-[26rem] overflow-hidden">
               <img src="src\assets\Rectangle 23805.png" alt="Work" className="w-full h-full object-cover" />
               <div className="absolute top-4 right-4 w-12 h-12 bg-black rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#3DE073]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                  </svg>
               </div>
            </div>
            
            <div className="w-full md:w-1/2 bg-white rounded-[2rem] p-8 flex flex-col justify-center shadow-sm border border-gray-100">
              <h2 className="text-6xl font-bold text-black mb-2">230+</h2>
              <p className="text-sm text-gray-500 mb-6">some big companies that we work with, and trust us very much</p>
              <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="w-3/4 h-full bg-black rounded-full"></div>
              </div>
            </div>
          </div>

          <div className="w-full bg-black rounded-[2rem] p-8 flex items-center justify-between overflow-hidden relative">
            <div className="z-10 w-1/2">
              <span className="text-[#3DE073] font-bold text-xl flex items-center gap-1 mb-2">
                300+ <span className="text-sm text-gray-400 font-normal">Campaigns</span>
              </span>
              <h3 className="text-white text-3xl font-bold leading-tight">Drive more traffic and product sales</h3>
            </div>
            <div className="w-1/2 flex items-end justify-end gap-2 h-32 z-10">
              <div className="w-8 md:w-12 bg-[#8AE66D] h-1/2 rounded-t-md"></div>
              <div className="w-8 md:w-12 bg-[#8AE66D] h-3/4 rounded-t-md"></div>
              <div className="w-8 md:w-12 bg-[#3DE073] h-full rounded-t-md"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;