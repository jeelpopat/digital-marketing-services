import React from 'react';
import { Link } from 'react-router-dom';

import avatar1 from '../assets/avatar1.jpg';
import avatar2 from '../assets/avatar2.jpg';
import avatar3 from '../assets/avatar3.jpg';
import avatar4 from '../assets/avatar4.png';
import teamWorking from '../assets/team-working.png';
import darkCurveBg from '../assets/dark-curve-bg.png';
import project1 from '../assets/How we work 1.png'; 
import project2 from '../assets/How we work 2.png'; 
import project3 from '../assets/How we work 3.png'; 

const HowWeWork = () => {
  return (
    <section className="w-full px-8 md:px-16 py-12 bg-[#F8F8F8]">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-6">
        
        <div className="relative w-full lg:w-[35%] bg-[#050505] rounded-[2.5rem] p-10 flex flex-col justify-between overflow-hidden min-h-[320px] shadow-lg">
          <div className="absolute inset-0 opacity-40 pointer-events-none">
             <img src={darkCurveBg} alt="Background pattern" className="w-full h-full object-cover mix-blend-lighten" />
          </div>

          <div className="relative z-10">
            <h2 className="text-6xl md:text-7xl font-bold text-white flex items-center mb-2">
              920<span className="text-[#3DE073] ml-1">+</span>
            </h2>
            <p className="text-gray-400 text-lg font-medium">
              Project finish with superbly
            </p>
          </div>

          <div className="relative z-10 flex items-center mt-12">
            <div className="flex">
              <img src={avatar1} alt="Team member" className="w-14 h-14 rounded-full border-4 border-[#050505] object-cover relative z-40" />
              <img src={avatar2} alt="Team member" className="w-14 h-14 rounded-full border-4 border-[#050505] object-cover -ml-4 relative z-30" />
              <img src={avatar3} alt="Team member" className="w-14 h-14 rounded-full border-4 border-[#050505] object-cover -ml-4 relative z-20" />
              <img src={avatar4} alt="Team member" className="w-14 h-14 rounded-full border-4 border-[#050505] object-cover -ml-4 relative z-10" />
            </div>
            <span className="text-[#3DE073] text-3xl font-bold ml-4">+</span>
          </div>
        </div>

        <div className="relative w-full lg:w-[65%] rounded-[2.5rem] overflow-hidden min-h-[320px] shadow-lg flex items-center justify-center group cursor-pointer">
          <img 
            src={teamWorking} 
            alt="Team collaborating" 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
          />
          <div className="absolute inset-0 bg-black/30 transition-opacity duration-300 group-hover:bg-black/40"></div>
          <h2 className="relative z-10 text-white text-4xl md:text-5xl lg:text-6xl font-bold tracking-[0.15em] uppercase text-center px-4">
            How We Work
          </h2>
        </div>

      </div>

      <section className ="w-full pt-16 bg-[#F8F8F8]">
      <div className="max-w-[1400px] mx-auto bg-[#0A0D14] rounded-[2.5rem] md:rounded-[3rem] py-16 px-6 lg:px-16 relative overflow-hidden shadow-2xl">
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-full max-w-3xl h-[400px] bg-white/10 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="relative z-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white text-center leading-[1.2] mb-10 max-w-4xl mx-auto tracking-tight">
            Real-world examples of how we have helped companies achieve their marketing objectives.
          </h2>

          {/* Links */}
          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 mb-16">
            <Link to="/service" className="px-6 py-2.5 rounded-full border border-gray-600/60 text-gray-300 hover:text-white hover:border-gray-400 transition-all text-sm">
              All Work [20]
            </Link>
            <Link to="/service/website-design" className="px-6 py-2.5 rounded-full bg-[#A8EB59] text-black font-semibold shadow-[0_0_20px_rgba(168,235,89,0.2)] transition-all text-sm">
              UI/UX Design [10]
            </Link>
            <Link to="/service/optimization-support" className="px-6 py-2.5 rounded-full border border-gray-600/60 text-gray-300 hover:text-white hover:border-gray-400 transition-all text-sm">
              Digital Marketing [5]
            </Link>
            <Link to="/service/ai-creative" className="px-6 py-2.5 rounded-full border border-gray-600/60 text-gray-300 hover:text-white hover:border-gray-400 transition-all text-sm">
              Branding [5]
            </Link>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-10 w-full">
            <div className="w-full max-w-[350px] lg:max-w-none lg:w-[30%] shrink-0 transform transition-transform duration-500 hover:scale-105 cursor-pointer">
              <img src={project1} alt="Let's Find Jobs Opportunity" className="w-full h-auto object-contain drop-shadow-2xl" />
            </div>
            <div className="w-full max-w-[350px] lg:max-w-none lg:w-[33%] shrink-0 transform transition-transform duration-500 hover:-translate-y-3 cursor-pointer">
              <img src={project2} alt="Ai Wave Chatbot" className="w-full h-auto object-contain rounded-[2rem] shadow-2xl" />
            </div>
            <div className="w-full max-w-[450px] lg:max-w-none lg:w-[38%] shrink-0 transform transition-transform duration-500 hover:-translate-y-3 cursor-pointer lg:translate-x-12">
              <img src={project3} alt="App Lancer Freelance" className="w-full max-h-[400px] h-auto object-contain rounded-[2rem] shadow-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
    </section>
  );
};
export default HowWeWork;