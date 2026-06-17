import React from 'react';
import whoWeAreImg from '../assets/Man with yellow shirt.png';

const WhoWeAre = () => {
  return (
    <section className="w-full py-12 px-8 md:px-24 bg-[#FDFBF7]">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-16 lg:gap-24">
        
        {/* Left Side: Text Content */}
        <div className="w-full lg:w-1/2 space-y-6">
          <div>
            <span className="text-xs font-bold tracking-widest uppercase text-black mb-3 block">About Us</span>
            <h2 className="text-5xl md:text-5xl font-extrabold text-black tracking-tight">
              Who We Are<span className="text-[#3DE073]">.</span>
            </h2>
          </div>
          
          <div className="space-y-6 text-gray-500 text-lg leading-relaxed font-medium">
            <p>
              At Sunstream Digital, we’re all about illuminating your brand with bold,
              innovative marketing strategies. Our team combines creativity with
              cutting-edge technology to craft digital campaigns that captivate and
              convert. Whether you’re looking to grow your online presence or launch a
              new product, we’re here to help you shine.
            </p>
            <p>
              At Sunstream Digital, our success is defined by the results we deliver.
              From innovative campaigns to record-breaking growth, we’ve partnered
              with brands to help them reach new height.
            </p>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="w-full lg:w-1/2 relative px-4 md:px-8">
          <div className="absolute top-4 -left-4 md:-left-8 lg:left-12 w-[90%] h-full bg-[#3DE073] transform rotate-3 z-0"></div>
          
          {/* Main Image */}
          <img 
            src={whoWeAreImg} 
            alt="Sunstream Digital Team Member" 
            className="relative z-10 w-full h-auto object-cover shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;