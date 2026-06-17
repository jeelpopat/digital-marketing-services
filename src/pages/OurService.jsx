import React from 'react';

import img1 from '../assets/service-1.png';
import img2 from '../assets/service-2.png';
import img3 from '../assets/service-3.png';

const OurService = () => {
  const servicesList = [
    {
      title: 'Data-Driven Digital Marketing',
      desc: 'Using the power of analytics and AI, we tailor campaigns that deliver measurable results and reach your target audience effectively.',
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0v3.75C20.25 20.153 16.556 22 12 22s-8.25-1.847-8.25-4.125v-3.75" />
        </svg>
      )
    },
    {
      title: 'Creative Content Creation',
      desc: 'From video production to compelling copy, our creative team ensures that your brand message resonates across all platforms.',
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.82 1.508-2.316a7.5 7.5 0 10-7.516 0c.85.496 1.508 1.333 1.508 2.316V18" />
        </svg>
      )
    },
    {
      title: 'SEO & SEM Optimization',
      desc: 'Boost your visibility with search engine strategies that put your business in front of the right people, at the right time.',
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
        </svg>
      )
    },
    {
      title: 'Social Media Management',
      desc: 'Engage your audience with targeted social media campaigns designed to grow your brand\'s community and influence.',
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
        </svg>
      )
    }
  ];

  return (
    <main className="w-full bg-[#FDFBF7] py-20 px-6 md:px-12 lg:px-16 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        
        {/* Title & Image Grid */}
        <div className="w-full lg:w-1/2 flex flex-col space-y-10">
          
          {/* Header Text */}
          <div className="space-y-4">
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-black">ILLUMINATE</span>
            <h1 className="text-5xl md:text-6xl font-extrabold text-[#111827] tracking-tight">
              Our Services<span className="text-[#3DE073]">.</span>
            </h1>
            <p className="text-gray-600 text-base md:text-lg font-medium leading-relaxed max-w-lg mt-4">
              At Sunstream Digital, we harness innovative strategies tailored to your unique needs. Our targeted marketing solutions ensure that your message reaches the right audience effectively.
            </p>
          </div>

          {/* Image Collage/Grid */}
          <div className="relative w-full max-w-md">
            <div className="absolute top-5 right-6 md:-right-8 w-full h-[102%] bg-[#3DE073] transform rotate-3 rounded-lg z-0"></div>
            
            <div className="relative z-10 grid grid-cols-3 gap-3">
              {/* Image 1 Top Left */}
              <div className="row-span-2 rounded-xl overflow-hidden shadow-md">
                <img src={img1} alt="Team meeting" className="w-full h-full object-cover" />
              </div>
              {/* Image 2 Top Right */}
              <div className="row-span-2 rounded-xl overflow-hidden shadow-md">
                <img src={img2} alt="Working on laptop" className="w-full h-full object-cover" />
              </div>
              {/* Image 3 (Bottom Right) */}
              <div className="row-span-2 rounded-xl overflow-hidden shadow-md">
                <img src={img3} alt="Collaborating" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Services List */}
        <div className="w-full lg:w-1/2 flex flex-col space-y-10">
          {servicesList.map((service, index) => (
            <div key={index} className="flex gap-6 items-start">
              <div className="w-14 h-14 shrink-0 rounded-2xl bg-[#3DE073] flex items-center justify-center shadow-md">
                {service.icon}
              </div>
              
              {/* Text */}
              <div className="space-y-2 mt-1">
                <h3 className="text-xl font-bold text-[#111827]">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default OurService;