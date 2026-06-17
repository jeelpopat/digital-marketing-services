import React from 'react';

const ServiceIntro = () => {
  return (
    <section className="w-full bg-[#F8F8F8]">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 lg:gap-20">
        
        <h2 className="w-full px-12 lg:w-1/2 text-4xl md:text-5xl font-bold text-black leading-tight tracking-tight">
          Provide the best service with out of the box ideas
        </h2>
        
        <div className="w-full lg:w-1/2">
          <p className="text-gray-500 text-lg leading-relaxed font-medium">
            We are a passionate team of digital marketing enthusiasts dedicated to helping businesses succeed in the digital world. With years of experience and a deep understanding of the ever-evolving online landscape, we stay at the forefront of industry trends and technologies.
          </p>
        </div>

      </div>
    </section>
  );
};

export default ServiceIntro;
