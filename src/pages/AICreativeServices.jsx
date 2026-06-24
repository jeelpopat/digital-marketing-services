import React from 'react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import heroImage from '../assets/ImageWithFallback.png';
import ServiceCTA from '../components/ServiceCTA.jsx';

const AICreativeServices = () => {
  return (
    <div className="min-h-screen bg-[#FDFDFD] flex flex-col relative overflow-hidden">
      
      {/* Background ambient glow */}
      <div className="absolute top-40 -left-40 w-96 h-96 bg-[#EA580C]/10 blur-[120px] rounded-full pointer-events-none z-0"></div>

      <main className="flex-grow w-full py-4 md:py-8 px-4 relative z-10">
        <div className="max-w-[1200px] mx-4 md:mx-12 lg:mx-30 space-y-16 md:space-y-24">
          
          {/* PART 1: Hero Section */}
          <div className="flex flex-col lg:flex-row items-center mb-12 px-2 md:px-12 lg:px-16 gap-10 lg:gap-16">
            
            {/* Left Content */}
            <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left flex flex-col items-center lg:items-start">
              {/* Service Icon */}
              <div className="w-14 h-14 rounded-2xl bg-[#FFEDD5] text-[#EA580C] flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
                </svg>
              </div>

              <h1 className="text-2xl md:text-3xl lg:text-[40px] font-normal text-black leading-tight tracking-tight m-0">
                AI Creative Services
              </h1>
              <h3 className="text-lg md:text-xl font-normal text-[#EA580C] my-2">
                Next-Gen Visuals & Video Content Production
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed font-medium max-w-xl">
                AI-enhanced product photography with stylized, consistent visuals. We handle marketing video creation using advanced visual generators for promo reels, ads, and testimonials.
              </p>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2 w-full sm:w-auto">
                {/* <button className="w-full sm:w-auto bg-[#A8EB59] text-black px-8 py-3.5 rounded-lg font-bold shadow-[0_0_2px] hover:bg-[#96dc4a] transition-colors">
                  Create Content →
                </button> */}
                <button className="w-full sm:w-auto bg-white border border-gray-200 text-black px-8 py-3.5 rounded-lg font-semibold hover:bg-gray-50 transition-colors shadow-xl">
                  View Portfolio
                </button>
              </div>
            </div>

            {/* Right Image */}
            <div className="w-full lg:w-1/2">
              <div className="rounded-[2rem] overflow-hidden shadow-2xl border border-gray-100 transform hover:scale-[1.02] transition-transform duration-500">
                <img src={heroImage} alt="AI Generated Marketing Graphics" className="w-full h-auto object-cover" />
              </div>
            </div>
          </div>

          {/* PART 2: What's Included */}
          <div className="space-y-10 mb-12">
            <h2 className="text-3xl md:text-5xl font-normal text-black text-center">What's Included</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "AI Product Photography Enhancements",
                "Marketing Video Production",
                "Automated Multi-Format Content Gen",
                "Brand-Consistent Visual Styling",
                "AI Voiceover & Script Generation",
                "Social Media Reels & Shorts"
              ].map((item, index) => (
                <div key={index} className="bg-white border border-gray-100 rounded-xl px-4 py-4 flex items-center gap-4 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-6 h-6 rounded-full bg-[#FFEDD5] text-[#EA580C] flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <span className="text-gray-700 font-semibold text-sm md:text-base">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* PART 3: Benefits & Deliverables */}
          <div className="flex flex-col lg:flex-row mb-12 gap-12 lg:gap-16">
            
            {/* Left: Key Benefits */}
            <div className="w-full lg:w-1/2 space-y-8">
              <h2 className="text-3xl md:text-5xl font-normal text-black text-center lg:text-left">Key Benefits</h2>
              <ul className="space-y-6">
                {[
                  "Dramatically reduce photography and studio costs",
                  "Rapidly scale video content production for marketing campaigns",
                  "Maintain strict visual brand consistency across all channels",
                  "A/B test multiple ad creatives quickly without huge budgets"
                ].map((benefit, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <div className="w-7 h-7 rounded-md bg-[#EA580C] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <span className="text-gray-600 font-medium text-lg leading-relaxed">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: Deliverables Card */}
            <div className="w-full lg:w-1/2 space-y-8">
              <h2 className="text-3xl md:text-5xl font-normal text-black text-center lg:text-left">Deliverables</h2>
              <div className="bg-[#F0F7E6] rounded-[2rem] p-6 md:p-10 shadow-sm border border-[#e5f0d8]">
                <ul className="space-y-5">
                  {[
                    "High-Resolution AI-Generated Images",
                    "Short-Form Promo Video Assets",
                    "Multiple Ad Creative Variations",
                    "Royalty-Free AI Voiceover Tracks",
                    "Visual Brand Guideline Updates",
                    "Organized Social Media Asset Library"
                  ].map((deliverable, index) => (
                    <li key={index} className={`flex items-center border-b border-gray-300 py-2 ${index === 0 ? 'border-t' : ''} gap-4`}>
                      <div className="w-2 h-2 rounded-sm bg-[#EA580C] shrink-0"></div>
                      <span className="text-gray-700 font-semibold text-sm md:text-base">{deliverable}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* PART 4: Bottom CTA */}
          {/* Bottom CTA */}
          <div className="mx-0 md:mx-10 lg:mx-40 mb-16">
            <ServiceCTA 
              title="Ready to Build Your Platform?" 
              subtitle="Elevate your brand's visual identity using the power of AI-generated content."
              defaultService="AI-Powered Creative Services" 
            />
          </div>
          
        </div>
      </main>
    </div>
  );
};

export default AICreativeServices;