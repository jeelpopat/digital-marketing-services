import React from 'react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import heroImage from '../assets/ImageWithFallback.png';
import ServiceCTA from '../components/ServiceCTA.jsx';

const AIChatbotsAutomation = () => {
  return (
    <div className="min-h-screen bg-[#FDFDFD] flex flex-col relative overflow-hidden">
      
      {/* Background ambient glow */}
      <div className="absolute top-40 -left-40 w-96 h-96 bg-[#7C3AED]/10 blur-[120px] rounded-full pointer-events-none z-0"></div>

      <main className="flex-grow w-full py-4 md:py-8 px-4 relative z-10">
        <div className="max-w-[1200px] mx-4 md:mx-12 lg:mx-30 space-y-16 md:space-y-24">
          
          {/* PART 1: Hero Section */}
          <div className="flex flex-col lg:flex-row items-center mb-12 px-2 md:px-12 lg:px-16 gap-10 lg:gap-16">
            
            {/* Left Content */}
            <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left flex flex-col items-center lg:items-start">
              {/* Service Icon */}
              <div className="w-14 h-14 rounded-2xl bg-[#EDE9FE] text-[#7C3AED] flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2zm0 2c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8zm1 4v5l4.25 2.52-.75 1.23-5-3V8h1.5z" />
                </svg>
              </div>

              <h1 className="text-2xl md:text-3xl lg:text-[40px] font-normal text-black leading-tight tracking-tight m-0">
                AI Chatbots & Automation
              </h1>
              <h3 className="text-lg md:text-xl font-normal text-[#7C3AED] my-2">
                24/7 Customer Engagement & Workflows
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed font-medium max-w-xl">
                Multi-platform AI chatbot design for WhatsApp, Facebook, and your website. We build intelligent workflows driven by GPT-based NLP for personalized 24/7 customer interactions.
              </p>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2 w-full sm:w-auto">
                {/* <button className="w-full sm:w-auto bg-[#A8EB59] text-black px-8 py-3.5 rounded-lg font-bold shadow-[0_0_2px] hover:bg-[#96dc4a] transition-colors">
                  Automate Now →
                </button> */}
                <button className="w-full sm:w-auto bg-white border border-gray-200 text-black px-8 py-3.5 rounded-lg font-semibold hover:bg-gray-50 transition-colors shadow-xl">
                  Watch Demo
                </button>
              </div>
            </div>

            {/* Right Image */}
            <div className="w-full lg:w-1/2">
              <div className="rounded-[2rem] overflow-hidden shadow-2xl border border-gray-100 transform hover:scale-[1.02] transition-transform duration-500">
                <img src={heroImage} alt="AI Chatbot Interface" className="w-full h-auto object-cover" />
              </div>
            </div>
          </div>

          {/* PART 2: What's Included */}
          <div className="space-y-10 mb-12">
            <h2 className="text-3xl md:text-5xl font-normal text-black text-center">What's Included</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "Multi-Platform Deployment (WhatsApp, Web)",
                "Automated FAQs & Lead Qualification",
                "Appointment Scheduling Integrations",
                "GPT-Powered NLP Training",
                "Seamless Handoff to Human Agents",
                "Customer Journey Automation"
              ].map((item, index) => (
                <div key={index} className="bg-white border border-gray-100 rounded-xl px-4 py-4 flex items-center gap-4 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-6 h-6 rounded-full bg-[#EDE9FE] text-[#7C3AED] flex items-center justify-center shrink-0">
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
                  "Reduce customer support response times to near zero",
                  "Qualify leads automatically 24 hours a day, 7 days a week",
                  "Lower operational costs by automating routine queries",
                  "Provide consistent, personalized user experiences at scale"
                ].map((benefit, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <div className="w-7 h-7 rounded-md bg-[#7C3AED] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <span className="text-gray-600 font-medium text-base md:text-lg leading-relaxed">{benefit}</span>
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
                    "Fully Trained Custom AI Chatbot",
                    "Omnichannel Integration Setup",
                    "Detailed Conversation Flow Maps",
                    "Analytics & Performance Dashboard",
                    "Knowledge Base Document Integration",
                    "Weekly Performance Tuning (Month 1)"
                  ].map((deliverable, index) => (
                    <li key={index} className={`flex items-center border-b border-gray-300 py-2 ${index === 0 ? 'border-t' : ''} gap-4`}>
                      <div className="w-2 h-2 rounded-sm bg-[#7C3AED] shrink-0"></div>
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
              subtitle="Start capturing leads and serving customers instantly with our smart chatbot solutions."
              defaultService="AI Chatbots & Automation" 
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default AIChatbotsAutomation;