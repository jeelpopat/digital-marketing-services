import React from 'react';

// Import your global components 
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

// Import your team member images 
import sarahImg from '../assets/member1.png';
import marcusImg from '../assets/member2.png';
import emilyImg from '../assets/member3.png';
import davidImg from '../assets/member4.png';
  
const OurTeam = () => {
  const teamMembers = [
    { id: 1, name: 'Sarah Chen', role: 'Creative Director', image: sarahImg },
    { id: 2, name: 'Marcus Johnson', role: 'Lead Developer', image: marcusImg },
    { id: 3, name: 'Emily Rodriguez', role: 'UX Researcher', image: emilyImg },
    { id: 4, name: 'David Park', role: 'Brand Strategist', image: davidImg },
    
    { id: 5, name: 'Sarah Chen', role: 'Creative Director', image: sarahImg },
    { id: 6, name: 'Marcus Johnson', role: 'Lead Developer', image: marcusImg },
    { id: 7, name: 'Emily Rodriguez', role: 'UX Researcher', image: emilyImg },
    { id: 8, name: 'David Park', role: 'Brand Strategist', image: davidImg },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#F8F8F8]">

      {/* Main Page */}
      <main className="flex-grow w-full py-6 md:py-8 px-8 md:px-16">
        <div className="max-w-7xl mx-auto">
          
          {/* Title Section */}
          <div className="text-center mb-16 md:mb-20 space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-[56px] font-normal text-black tracking-tight">
              Meet the Team
            </h1>
            <p className="text-lg md:text-xl text-gray-500 font-midam">
              The talented individuals behind our success
            </p>
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-6">
            {teamMembers.map((member) => (
              <div key={member.id} className="flex flex-col items-center group cursor-pointer">
                
                {/* Image Container */}
                <div className="w-full aspect-square rounded-[1rem] overflow-hidden bg-gray-200 mb-4 shadow-sm group-hover:shadow-md transition-shadow duration-300">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Text Content */}
                <h3 className="text-xl font-normal text-black mb-1">
                  {member.name}
                </h3>
                <p className="text-black-500 font-normal text-sm mt-2 md:text-base">
                  {member.role}
                </p> 
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default OurTeam;