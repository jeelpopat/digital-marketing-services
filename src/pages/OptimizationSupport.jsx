import React from 'react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import heroImage from '../assets/ImageWithFallback.png';
import ServiceCTA from '../components/ServiceCTA.jsx';

const OptimizationSupport = () => {
  return (
    <div className="min-h-screen bg-[#FDFDFD] flex flex-col relative overflow-hidden">
      <div className="absolute top-40 -left-40 w-96 h-96 bg-[#2563EB]/10 blur-[120px] rounded-full pointer-events-none z-0"></div>

      <main className="flex-grow w-full py-4 md:py-8 px-4 relative z-10">
        <div className="max-w-[1200px] mx-4 md:mx-12 lg:mx-30 space-y-16 md:space-y-24">
          
          {/* Hero Section */}
          <div className="flex flex-col lg:flex-row items-center mb-12 px-2 md:px-12 lg:px-16 gap-10 lg:gap-16">
            
            {/* Left Content */}
            <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left flex flex-col items-center lg:items-start">
              <div className="w-14 h-14 rounded-2xl bg-[#DBEAFE] text-[#2563EB] flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.06-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22l-1.92 3.32c-.12.21-.07.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.06.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .43-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z" />
                </svg>
              </div>

              <h1 className="text-2xl md:text-3xl lg:text-[40px] font-normal text-black leading-tight tracking-tight m-0">
                Optimization & Support
              </h1>
              <h3 className="text-lg md:text-xl font-normal text-[#2563EB] my-2">
                Continuous Growth and System Maintenance
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed font-medium max-w-xl">
                Regular performance audits, conversion tracking, and UX tuning. We handle content updates, design revisions, and maintenance with monthly ROI reporting.
              </p>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2 w-full sm:w-auto">
                {/* <button className="w-full sm:w-auto bg-[#A8EB59] text-black px-8 py-3.5 rounded-lg font-bold shadow-[0_0_2px] hover:bg-[#96dc4a] transition-colors">
                  Secure Your Plan →
                </button> */}
                <button className="w-full sm:w-auto bg-white border border-gray-200 text-black px-8 py-3.5 rounded-lg font-semibold hover:bg-gray-50 transition-colors shadow-xl">
                  View Packages
                </button>
              </div>
            </div>

            {/* Right Image */}
            <div className="w-full lg:w-1/2">
              <div className="rounded-[2rem] overflow-hidden shadow-2xl border border-gray-100 transform hover:scale-[1.02] transition-transform duration-500">
                <img src={heroImage} alt="Analytics Dashboard and Maintenance" className="w-full h-auto object-cover" />
              </div>
            </div>
          </div>

          {/* What's Included */}
          <div className="space-y-10 mb-12">
            <h2 className="text-3xl md:text-5xl font-normal text-black text-center">What's Included</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "Performance Audits & Monitoring",
                "Conversion Tracking (GA4/GTM)",
                "Content Updates & Revisions",
                "Monthly Insights & ROI Reporting",
                "A/B Testing & CRO Management",
                "Security & CMS Plugin Updates"
              ].map((item, index) => (
                <div key={index} className="bg-white border border-gray-100 rounded-xl px-4 py-4 flex items-center gap-4 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-6 h-6 rounded-full bg-[#DBEAFE] text-[#2563EB] flex items-center justify-center shrink-0">
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
                  "Ensure websites and apps stay lightning-fast and highly secure",
                  "Continuously improve conversion rates over time with data",
                  "Free up your internal team from stressful technical maintenance",
                  "Make confident, data-driven decisions with our monthly insights"
                ].map((benefit, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <div className="w-7 h-7 rounded-md bg-[#2563EB] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
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
                    "Monthly Performance & ROI Reports",
                    "Weekly Security Backups & Site Updates",
                    "UX/UI Iteration Mockups for CRO",
                    "A/B Test Results & Strategic Recommendations",
                    "Active GA4 & Looker Studio Dashboards",
                    "Priority Technical Support SLA"
                  ].map((deliverable, index) => (
                    <li key={index} className={`flex items-center border-b border-gray-300 py-2 ${index === 0 ? 'border-t' : ''} gap-4`}>
                      <div className="w-2 h-2 rounded-sm bg-[#2563EB] shrink-0"></div>
                      <span className="text-gray-700 font-semibold text-sm md:text-base">{deliverable}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mx-0 md:mx-10 lg:mx-40 mb-16">
            <ServiceCTA 
              title="Ready to Build Your Platform?" 
              subtitle="Partner with us for continuous optimization to ensure your digital assets always perform at their best."
              defaultService="Ongoing Optimization & Support" 
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default OptimizationSupport;