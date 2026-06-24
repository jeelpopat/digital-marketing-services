import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import ServiceCTA from '../components/ServiceCTA.jsx';

import uxUiIcon from '../assets/ServicesOverview.png';        
import aiIcon from '../assets/ServicesOverview (1).png';      
import buildIcon from '../assets/ServicesOverview (2).png';   
import performanceIcon from '../assets/ServicesOverview (3).png'; 

const ServicePage = () => {
  // 6 Main Services 
  const servicesData = [
    {
      title: "Website & UI/UX Design",
      desc: "Custom website design aligned with your brand identity. User-centered, responsive interfaces with research-led UX including heatmaps, journey mapping, and SEO optimization.",
      iconBg: "bg-[#E2F5D6]",
      iconText: "text-[#1D4ED8]",
      points: ["User Research & Journey Mapping", "High-Fidelity Mockups & Wireframes", "Design Systems & Style Guides", "Dark/Light Theme Flexibility"],
      path: "/service/website-design",
      icon: (
        <svg className="w-7 h-7 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="9" />
          <circle cx="12" cy="12" r="5" />
          <circle cx="12" cy="12" r="1.5" />
        </svg>
      )
    },
    {
      title: "Web Development",
      desc: "Clean, fast-loading custom websites built on flexible platforms. CMS integration for easy content updates with optimized performance for improved SEO and web vitals.",
      iconBg: "bg-[#D1FAE5]",
      iconText: "text-[#059669]",
      points: ["Responsive & Mobile-Optimized", "CMS Integration", "Scalable Architecture", "A/B Testing & Analytics"],
      path: "/service/web-development",
      icon: (
        <svg className="w-7 h-7 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="m10 17-5-5 5-5" />
          <path d="m14 17 5-5-5-5" />
        </svg>
      )
    },
    {
      title: "AI Chatbots & Automation",
      desc: "Multi-platform AI chatbot design for WhatsApp, Facebook, and websites with 24/7 engagement. Intelligent workflows driven by GPT-based NLP for personalized interactions.",
      iconBg: "bg-[#EDE9FE]",
      iconText: "text-[#7C3AED]",
      points: ["Multi-Platform Deployment", "Automated FAQs & Lead Qualification", "Appointment Scheduling", "Customer Journey Automation"],
      path: "/service/ai-chatbots",
      icon: (
        <svg className="w-7 h-7 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="5" y="9" width="14" height="10" rx="3" />
          <path d="M12 9V5h3" />
          <path d="M3 14h2" />
          <path d="M19 14h2" />
          <path d="M9 13v2" />
          <path d="M15 13v2" />
        </svg>
      )
    },
    {
      title: "AI-Powered Creative Services",
      desc: "AI-enhanced product photography with stylized, consistent visuals. Marketing video creation using AI visual generators for promo reels, product ads, and testimonial videos.",
      iconBg: "bg-[#FFEDD5]",
      iconText: "text-[#EA580C]",
      points: ["AI Product Photography", "Marketing Video Creation", "Automated Content Generation", "Brand-Consistent Visuals"],
      path: "/service/ai-creative",
      icon: (
        <svg className="w-7 h-7 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3.5 20.5 17 7a2.12 2.12 0 1 0-3-3L.5 17.5Z" />
          <path d="m17.5 6.5-3-3" />
          <path d="M9 3v2M8 4h2" />
          <path d="M17 14v2M16 15h2" />
          <path d="M13 1v2M12 2h2" />
        </svg>
      )
    },
    {
      title: "Mobile App UI/UX Design",
      desc: "Intuitive, cross-platform mobile UI/UX for iOS and Android. Complete app screen design including splash, login, profile, onboarding, and dashboard flows with interactive prototypes.",
      iconBg: "bg-[#DCFCE7]",
      iconText: "text-[#16A34A]",
      points: ["iOS & Android Design", "Interactive Prototypes (Figma)", "Complete User Flows", "Design System Setup"],
      path: "/service/mobile-app-design",
      icon: (
        <svg className="w-7 h-7 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="6" y="2" width="12" height="20" rx="3" />
          <circle cx="12" cy="16" r="1.5" fill="currentColor" stroke="none" />
        </svg>
      )
    },
    {
      title: "Ongoing Optimization & Support",
      desc: "Regular performance audits, conversion tracking, and UX tuning. Content updates, design revisions, and maintenance packages post-launch with monthly reporting for ROI.",
      iconBg: "bg-[#DBEAFE]",
      iconText: "text-[#2563EB]",
      points: ["Performance Audits", "Conversion Tracking", "Content Updates & Revisions", "Monthly Insights & Reporting"],
      path: "/service/optimization-support",
      icon: (
        <svg className="w-7 h-7 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <path d="M7 17v-4" />
          <path d="M12 17v-8" />
          <path d="M17 17V5" />
        </svg>
      )
    }
  ];

  const features = [
    { title: "Seamless UX & UI", desc: "Research-backed design that boosts engagement and trust", iconSrc: uxUiIcon },
    { title: "AI Integration", desc: "24/7 automation, support, and marketing efficiency", iconSrc: aiIcon },
    { title: "Scalable Build", desc: "Built for future growth—sites/apps adapt over time", iconSrc: buildIcon },
    { title: "Performance-Driven", desc: "Ongoing insights & optimization yield measurable results", iconSrc: performanceIcon }
  ];

  return (
    <div className="min-h-screen bg-[#F8F8F8] flex flex-col">
      <main className="flex-grow w-full py-16 md:py-12 px-6 md:px-12 lg:px-16">
        <div className="max-w-[1400px] mx-4">
          
          {/* Header Section  */}
          <div className="flex flex-col items-center text-center mb-8 space-y-4">
            <span className="px-4 py-1 border border-gray-200 text-gray-600 rounded-full text-xs font-semibold tracking-wider uppercase bg-white shadow-sm">
              ✨ Premium Digital Services
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-black tracking-tight">
              Premium Digital Solutions
            </h1>
            <p className="text-gray-500 text-lg mt-2 md:text-base max-w-3xl leading-relaxed">
              From branding and UI/UX design to AI-powered automation and marketing, we transform brands with creative and result-driven solutions.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {servicesData.map((service, index) => (
              <div key={index} className="bg-[#F0F7E6] rounded-[2rem] p-8 md:p-10 shadow-xl hover:shadow-2xl transition-shadow duration-300 flex flex-col h-full">
                <div className={`w-14 h-14 rounded-2xl ${service.iconBg} ${service.iconText} flex items-center justify-center mb-8 relative`}>
                  <div className="w-6 h-6 bg-current rounded-full opacity-20 absolute blur-md"></div>
                  {service.icon}
                </div>
                <h3 className="text-2xl font-semibold text-black mb-4">{service.title}</h3>
                <p className="text-gray-600 font-medium leading-relaxed mb-8 flex-grow">
                  {service.desc}
                </p>
                <ul className="space-y-3 mb-8">
                  {service.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-700 font-medium">
                      <svg className="w-6 h-6 text-black shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {point}
                    </li>
                  ))}
                </ul>
                <Link to={service.path} className="flex items-center gap-2 text-black font-semibold hover:text-blue-600 transition-colors mt-auto">
                  Learn More 
                  <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </Link>
              </div>
            ))}
          </div>

          {/* Why Choose Us */}
          <div className="mb-12">
            <div className="text-center mb-12 space-y-3">
              <h2 className="text-4xl md:text-4xl font-normal text-black">Why Choose Graphikrafts</h2>
              <p className="text-gray-500 font-normal text-lg">Our expertise delivers measurable results</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="bg-[#EDF5ED] rounded-[24px] p-8 text-center flex flex-col items-center shadow-sm hover:-translate-y-1 transition-transform duration-300">
                  <img src={feature.iconSrc} alt={`${feature.title} icon`} className="w-14 h-14 object-contain shadow-md rounded-2xl mb-6" />
                  <h3 className="text-xl font-bold text-black mb-3">{feature.title}</h3>
                  <p className="text-gray-500 font-medium leading-relaxed max-w-[240px]">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* DYNAMIC CTA SECTION (Now imported as a reusable component!) */}
          <ServiceCTA />

        </div>
      </main>
    </div>
  );
};

export default ServicePage;