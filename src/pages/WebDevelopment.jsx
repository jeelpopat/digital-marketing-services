import React from 'react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import heroImage from '../assets/ImageWithFallback.png'; 

const WebDevelopment = () => {
  return (
    <div className="min-h-screen bg-[#FDFDFD] flex flex-col relative overflow-hidden">
      
      <div className="absolute top-40 -left-40 w-96 h-96 bg-[#059669]/10 blur-[120px] rounded-full pointer-events-none z-0"></div>

      <main className="flex-grow w-full py-4 md:py-8 px-4 relative z-10">
        <div className="max-w-[1200px] mx-4 md:mx-12 lg:mx-30 space-y-16 md:space-y-24">
          
          {/* Hero Section */}
          <div className="flex flex-col lg:flex-row items-center mb-12 px-2 md:px-12 lg:px-16 gap-10 lg:gap-16">
            
            {/* Left Content */}
            <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left flex flex-col items-center lg:items-start">
              {/* Service Icon */}
              <div className="w-14 h-14 rounded-2xl bg-[#D1FAE5] text-[#059669] flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>

              <h1 className="text-2xl md:text-3xl lg:text-[40px] font-normal text-black leading-tight tracking-tight m-0">
                Web Development
              </h1>
              <h3 className="text-lg md:text-xl font-normal text-[#059669] my-2">
                Scalable, Fast, and SEO-Optimized Platforms
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed font-medium max-w-xl">
                Clean, fast-loading custom websites built on flexible platforms. We integrate CMS for easy content updates with optimized performance for improved SEO and web vitals.
              </p>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2 w-full sm:w-auto">
                <button className="w-full sm:w-auto bg-[#A8EB59] text-black px-8 py-3.5 rounded-lg font-bold shadow-[0_0_2px] hover:bg-[#96dc4a] transition-colors">
                  Get Started →
                </button>
                <button className="w-full sm:w-auto bg-white border border-gray-200 text-black px-8 py-3.5 rounded-lg font-semibold hover:bg-gray-50 transition-colors shadow-xl">
                  View Examples
                </button>
              </div>
            </div>

            {/* Right Image */}
            <div className="w-full lg:w-1/2">
              <div className="rounded-[2rem] overflow-hidden shadow-2xl border border-gray-100 transform hover:scale-[1.02] transition-transform duration-500">
                <img src={heroImage} alt="Web Development Code on Screen" className="w-full h-auto object-cover" />
              </div>
            </div>
          </div>

          {/* What's Included */}
          <div className="space-y-10 mb-12">
            <h2 className="text-3xl md:text-5xl font-normal text-black text-center">What's Included</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "Responsive & Mobile-Optimized Layouts",
                "CMS Integration (WordPress/Custom)",
                "Scalable Architecture Build",
                "Custom API Integrations",
                "Web Vitals & Page Speed Optimization",
                "Advanced Security & SSL Setup"
              ].map((item, index) => (
                <div key={index} className="bg-white border border-gray-100 rounded-xl px-4 py-4 flex items-center gap-4 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-6 h-6 rounded-full bg-[#D1FAE5] text-[#059669] flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <span className="text-gray-700 font-semibold text-sm md:text-base">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits & Deliverables */}
          <div className="flex flex-col lg:flex-row mb-12 gap-12 lg:gap-16">
            
            {/* Key Benefits */}
            <div className="w-full lg:w-1/2 space-y-8">
              <h2 className="text-3xl md:text-5xl font-normal text-black text-center lg:text-left">Key Benefits</h2>
              <ul className="space-y-6">
                {[
                  "Lightning-fast load times that reduce bounce rates",
                  "Easy content management without needing technical skills",
                  "A highly scalable codebase that grows alongside your business",
                  "Robust security protocols protecting your user data"
                ].map((benefit, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <div className="w-7 h-7 rounded-md bg-[#059669] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <span className="text-gray-600 font-medium text-lg leading-relaxed">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Deliverables Card */}
            <div className="w-full lg:w-1/2 space-y-8">
              <h2 className="text-3xl md:text-5xl font-normal text-black text-center lg:text-left">Deliverables</h2>
              <div className="bg-[#F0F7E6] rounded-[2rem] p-6 md:p-10 shadow-sm border border-[#e5f0d8]">
                <ul className="space-y-5">
                  {[
                    "Fully Functional Responsive Website",
                    "Custom CMS Setup & Video Training",
                    "Technical SEO Implementation",
                    "Site Speed & Web Vitals Audit Report",
                    "Comprehensive Code Documentation",
                    "30-Day Post-Launch Support & Bug Fixes"
                  ].map((deliverable, index) => (
                    <li key={index} className={`flex items-center border-b border-gray-300 py-2 ${index === 0 ? 'border-t' : ''} gap-4`}>
                      <div className="w-2 h-2 rounded-sm bg-[#059669] shrink-0"></div>
                      <span className="text-gray-700 font-semibold text-sm md:text-base">{deliverable}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mx-0 md:mx-10 lg:mx-40 bg-gradient-to-r from-[#EAF5DF] to-[#F4F9EE] rounded-[1rem] p-8 md:p-16 text-center shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#A8EB59]/10 rounded blur-3xl -translate-y-1/2 translate-x-1/3"></div>
            <div className="relative z-10 max-w-2xl mx-auto space-y-6">
              <h2 className="text-2xl md:text-4xl font-medium text-black">Ready to Build Your Platform?</h2>
              <p className="text-gray-500 font-normal text-base md:text-lg leading-relaxed">
                Let's discuss your project and how our custom web development services can scale your digital presence.
              </p>
              <div className="pt-4">
                <button className="w-full sm:w-auto bg-[#A8EB59] text-black px-8 py-3.5 rounded-lg font-normal shadow-[0_0_14px] hover:bg-[#96dc4a] transition-colors inline-flex items-center justify-center text-lg md:text-xl gap-2">
                  Start Your Project <span>→</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default WebDevelopment;