import React from 'react';
// Import your icons
import icon1 from '../assets/process 1.png'; // Discover & Analyze
import icon2 from '../assets/process2.png'; // Strategy & Plan
import icon3 from '../assets/process3.png'; // Implement & Execute
import icon4 from '../assets/process4.png'; // Monitor & Optimize
import icon5 from '../assets/process5.png'; // Deliver Results
// Import your photos
import visionImg from '../assets/Man with yellow shirt.png';

const AboutSection = () => {
  const processSteps = [
    {
      num: '01',
      title: 'Discover & Analyze',
      desc: 'Research business goals and audience insights',
      icon: icon1,
      isEven: false,
    },
    {
      num: '02',
      title: 'Strategy & Plan',
      desc: 'Build customized digital marketing strategies',
      icon: icon2,
      isEven: true,
    },
    {
      num: '03',
      title: 'Implement & Execute',
      desc: 'Launch campaigns across multiple channels',
      icon: icon3,
      isEven: false,
    },
    {
      num: '04',
      title: 'Monitor & Optimize',
      desc: 'Track analytics and improve performance',
      icon: icon4,
      isEven: true,
    },
    {
      num: '05',
      title: 'Deliver Results',
      desc: 'Drive measurable growth and business success',
      icon: icon5,
      isEven: false,
    },
  ];

  return (
    <section className="w-full bg-[#F8F8F8] py-10 px-6 md:px-12 lg:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col space-y-32">

        {/*Our Working Process */}
        <div className="flex flex-col items-center">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4 flex flex-col items-center">
            <span className="px-4 py-1 border border-[#8AE66D] text-[#6cb556] rounded-md text-xs md:text-sm font-bold tracking-widest uppercase bg-white">
              Our Process
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0B0F17] tracking-tight">
              Our Working Process
            </h2>
            <p className="text-gray-500 text-base md:text-lg font-medium leading-relaxed">
              We follow a proven process to deliver effective digital marketing
              solutions that drive real results for your business.
            </p>
          </div>

          {/* Timeline Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-10 lg:gap-6 w-full relative">
            {processSteps.map((step, index) => (
              <div 
                key={index} 
                className={`flex flex-col items-center text-center relative ${step.isEven ? 'lg:mt-20' : ''}`}
              >
                {/* Number Badge */}
                <div className="w-10 h-10 rounded-full bg-[#8AE66D] text-white font-bold flex items-center justify-center mb-6 shadow-md z-10">
                  {step.num}
                </div>

                {index < 4 && (
                  <div className="hidden lg:block absolute top-5 left-[60%] w-[80%] h-px border-t-2 border-dashed border-[#8AE66D]/50 z-0 pointer-events-none transform origin-left"
                       style={{ transform: step.isEven ? 'rotate(-18deg)' : 'rotate(18deg)' }}>
                    <svg className="absolute -right-2 -top-[11px] w-6 h-6 text-[#8AE66D]/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}

                {/* Icon */}
                <div className="mb-6 w-16 h-16 flex items-center justify-center transition-transform hover:scale-110 duration-300">
                  <img src={step.icon} alt={step.title} className="w-full h-full object-contain" />
                </div>

                {/* Text Content */}
                <h3 className="text-xl font-bold text-[#0B0F17] mb-3 leading-tight">
                  {step.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed px-2">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="flex flex-col space-y-24">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
            <div className="w-full ml-12 lg:w-1/2 space-y-6 pr-0 lg:pr-8">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#0B0F17]">
                Our Vision
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed font-medium max-w-lg">
                To become a globally trusted digital marketing partner known for
                innovation, creativity, and result-driven marketing solutions that
                empower brands in the digital era.
              </p>
            </div>

            {/* Image with Green Offset Background */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end relative px-4">
              <div className="absolute top-4 -left-4 md:-left-8 lg:left-4 w-[90%] h-full bg-[#3DE073] transform -rotate-4 z-0"></div>
              <img 
                src={visionImg} 
                alt="Our Vision" 
                className="relative z-10 w-full max-w-[500px] h-auto object-cover shadow-xl rounded-sm"
              />
            </div>
          </div>

          {/* Mission Block */}
          <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-16">
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-start relative px-4 mt-12 lg:mt-0">
              <div className="absolute top-4 -right-4 md:-right-8 lg:right-12 w-[90%] h-full bg-[#3DE073] transform rotate-3 z-0"></div>
              <img 
                src={visionImg}
                alt="Our Mission" 
                className="relative z-10 w-full max-w-[500px] h-auto object-cover shadow-xl rounded-sm"
              />
            </div>

            <div className="w-full lg:w-1/2 space-y-8 pl-0 lg:pl-12">
              <h2 className="text-4xl md:text-5xl font-bold text-[#0B0F17]">
                Our Mission
              </h2>
              <ul className="space-y-4 text-gray-600 text-base md:text-lg font-medium">
                <li className="flex items-start gap-3">
                  <span className="text-[#8AE66D] text-xl mt-0.5">•</span>
                  Deliver measurable marketing results
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#8AE66D] text-xl mt-0.5">•</span>
                  Build strong and lasting client relationships
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#8AE66D] text-xl mt-0.5">•</span>
                  Create engaging digital experiences
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#8AE66D] text-xl mt-0.5">•</span>
                  Help businesses scale with modern technology and marketing strategies
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#8AE66D] text-xl mt-0.5">•</span>
                  Stay ahead with innovation and industry trends
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutSection;