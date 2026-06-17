import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ctaImage from '../assets/pexels-ketut-subiyanto-4623297 1.png'; 

const InsightsAndCTA = () => {
  const navigate = useNavigate();

  // Helper function( card to navigate )
  const handleCardClick = () => {
    navigate('/blog');
  };

  return (
    <section className="w-full bg-[#F8F8F8] py-6 px-4 md:px-8 lg:px-12">
      <div className="max-w-[1400px] mx-auto flex flex-col space-y-32">
        
        {/* Blog & Insights Section*/}
        <div>
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-8">
            <h2 className="text-xl md:text-3xl lg:text-5xl font-semibold text-black leading-[1.1] tracking-tight max-w-2xl">
              Digital Marketing & SEO Services That Grow Traffic & Increase Revenue
            </h2>
            
            <div className="max-w-lg flex flex-col items-start space-y-6">
              <p className="text-gray-400 text-sm md:text-base leading-relaxed text-left font-medium">
                We are the top digital marketing agency for branding corp. We offer a full range of services to help clients improve their search engine rankings and drive more traffic to their websites.
              </p>
              <Link to="/blog" className="px-8 py-3 rounded-full border border-gray-300 text-black font-semibold hover:border-black transition-all duration-300">
                See more
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Card 1 */}
            <div onClick={handleCardClick} className="bg-white rounded-[2rem] p-8 lg:p-10 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col justify-between group hover:-translate-y-2 transition-transform duration-300 cursor-pointer">
              <div>
                <div className="flex justify-between items-center mb-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#3B82F6]"></span>
                  <span className="text-sm font-medium text-gray-400">5 min read</span>
                </div>
                <h3 className="text-2xl lg:text-[28px] font-semibold text-black leading-tight mb-6 pr-4">
                  How a Digital Marketing Agency Can Boost Your Business
                </h3>
              </div>

              <div className="flex items-center justify-between gap-4 mt-2">
                <p className="text-gray-400 text-sm md:text-base leading-relaxed line-clamp-3">
                  We are the top digital marketing agency for branding corp. We offer a full rang engine.....
                </p>
                <button className="w-14 h-14 flex-shrink-0 rounded-full border border-gray-200 flex items-center justify-center group-hover:bg-black group-hover:text-white group-hover:border-black text-black transition-all">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </button>
              </div>
            </div>

            {/* Card 2 */}
            <div onClick={handleCardClick} className="bg-white rounded-[2rem] p-8 lg:p-10 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col justify-between group hover:-translate-y-2 transition-transform duration-300 cursor-pointer">
              <div>
                <div className="flex justify-between items-center mb-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#F97316]"></span> 
                  <span className="text-sm font-medium text-gray-400">5 min read</span>
                </div>
                <h3 className="text-2xl lg:text-[28px] font-semibold text-black leading-tight mb-6 pr-4">
                  The Latest Trends and Strategies with a Digital Marketing Agency
                </h3>
              </div>
              
              <div className="flex items-center justify-between gap-4 mt-2">
                <p className="text-gray-400 text-sm md:text-base leading-relaxed line-clamp-3">
                  Working with this digital marketing agency has been a true partnership. They have tak.....
                </p>
                <button className="w-14 h-14 flex-shrink-0 rounded-full border border-gray-200 flex items-center justify-center group-hover:bg-black group-hover:text-white group-hover:border-black text-black transition-all">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </button>
              </div>
            </div>

            {/* Card 3 */}
            <div onClick={handleCardClick} className="bg-white rounded-[2rem] p-8 lg:p-10 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col justify-between group hover:-translate-y-2 transition-transform duration-300 cursor-pointer">
              <div>
                <div className="flex justify-between items-center mb-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#8B5CF6]"></span> 
                  <span className="text-sm font-medium text-gray-400">5 min read</span>
                </div>
                <h3 className="text-2xl lg:text-[28px] font-semibold text-black leading-tight mb-6 pr-4">
                  Maximizing ROI with the Expertise of a Digital Marketing Agency
                </h3>
              </div>
              
              <div className="flex items-center justify-between gap-4 mt-2">
                <p className="text-gray-400 text-sm md:text-base leading-relaxed line-clamp-3">
                  What sets this digital marketing agency apart is their commitment to transparency a.....
                </p>
                <button className="w-14 h-14 flex-shrink-0 rounded-full border border-gray-200 flex items-center justify-center group-hover:bg-black group-hover:text-white group-hover:border-black text-black transition-all">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* CTA Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-8 w-full max-w-6xl mx-auto">
          <div className="w-full lg:w-1/2 flex flex-col items-start pl-16 lg:pr-12">
            <span className="text-[10px] sm:text-xs font-bold tracking-[0.2em] text-black uppercase mb-1 block">
              Bright
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-black leading-[1.05] tracking-tight mb-6">
              Ready to Light Up Your Marketing<span className="text-[#3DE073]">?</span>
            </h2>
            <p className="text-gray-500 text-base md:text-base font-extrabold leading-relaxed mb-10 max-w-md font-medium">
              We're here to help you take your brand to the next level. Let's craft a strategy that's as bright as your future.
            </p>
            {/* Added Link to Contact */}
            <Link to="/contact" className="inline-block bg-[#3DE073] hover:bg-[#32c965] text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 shadow-[0_10px_30px_rgba(61,224,115,0.3)] hover:shadow-[0_10px_30px_rgba(61,224,115,0.5)] hover:-translate-y-1">
              Book a Free Consultation
            </Link>
          </div>

          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <div className="w-full max-w-[450px] max-h-[500px] aspect-[1/1] overflow-hidden rounded-sm shadow-2xl">
              <img src={ctaImage} alt="Woman working on laptop" className="w-full object-scale-down object-cover object-center" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsightsAndCTA;