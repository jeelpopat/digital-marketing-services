import React from 'react';
import imgTopLeft from '../assets/story-top-left.png.png';
import imgTopRight from '../assets/story-top-right.png.png';
import imgBottomLeft from '../assets/story-bottom-left.png.png';
import imgBottomRight from '../assets/story-bottom-right.png.png';

const OurStory = () => {
  return (
    <section className="w-full pt-16 px-8 md:px-16 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row  gap-12 lg:gap-20">
        
        {/* Left Side: Text Content */}
        <div className="w-full lg:w-1/2 space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-12">
            Our Story
          </h2>
          <p className="text-gray-600 text-lg font-medium leading-relaxed">
            Founded with a passion for creativity and digital innovation, our agency started as a small team of marketing enthusiasts dedicated to helping brands grow online. Over the years, we have transformed into a full-service digital marketing agency delivering powerful strategies, creative campaigns, and measurable results for businesses across multiple industries.
          </p>
          <p className="text-gray-600 text-lg font-medium leading-relaxed">
            From startups to established enterprises, we believe every brand deserves a strong digital presence that connects with people and drives real business growth.
          </p>
        </div>

        {/* Right Side: Image Grid */}
        <div className="w-full lg:w-1/2">
          <div className="grid grid-cols-2 gap-4 md:gap-6">
            
            {/* Image 1: Top Left */}
            <div className="w-full h-48 md:h-48 rounded-br-4xl overflow-hidden ">
              <img src={imgTopLeft} alt="Interview" className="w-full h-full object-cover" />
            </div>

            {/* Image 2: Top Right */}
            <div className="w-full h-48 md:h-56 rounded-3xl overflow-hidden translate-y-4 md:translate-y-8">
              <img src={imgTopRight} alt="Social Media Expert" className="w-full h-full object-cover" />
            </div>

            {/* Image 3: Bottom Left */}
            <div className="w-full h-48 md:h-56 rounded-br-xl overflow-hidden -translate-y-4 md:-translate-y-8">
              <img src={imgBottomLeft} alt="Corporate Team" className="w-full h-full object-cover" />
            </div>

            {/* Image 4: Bottom Right */}
            <div className="w-full h-48 md:h-56 my-8 rounded-3xl overflow-hidden">
              <img src={imgBottomRight} alt="Team Collaborating" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;