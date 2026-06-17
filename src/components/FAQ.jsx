import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const faqsData = [
  {
    question: "Why is digital marketing important for my business?",
    answer: "Digital marketing allows businesses to reach and engage with a wider audience, generate leads, drive website traffic, and increase brand visibility. It provides measurable results, allows for targeted marketing efforts, and enables businesses to adapt and optimize their strategies based on data and insights."
  },
  {
    question: "How can digital marketing help improve my website's visibility?",
    answer: "By utilizing SEO best practices, optimizing site speed, and creating high-quality, relevant content, digital marketing ensures search engines rank your site higher, making it easier for potential customers to find you."
  },
  {
    question: "How long does it take to see results from digital marketing efforts?",
    answer: "The timeline can vary based on the strategy. Paid advertising can yield immediate traffic, while organic strategies like SEO and content marketing typically take 3 to 6 months to show significant, sustainable results."
  },
  {
    question: "How do you measure the success of digital marketing campaigns?",
    answer: "We track key performance indicators (KPIs) such as website traffic, conversion rates, cost per acquisition (CPA), and return on ad spend (ROAS) using advanced analytics tools to ensure we are meeting your objectives."
  }
];

// Added dynamic slider data
const testimonials = [
  {
    name: "Michael Kaizer",
    title: "CEO of Basecamp Corp",
    quote: "They thoroughly analyze our industry and target audience, allowing them to develop customized campaigns that effectively reach and engage our customers. Their creative ideas and cutting-edge techniques have helped us stay ahead of the competition.",
    img: "https://i.pravatar.cc/150?img=11"
  },
  {
    name: "Sarah Jenkins",
    title: "CMO at TechFlow",
    quote: "Working with this team has completely transformed our online presence. Our organic search traffic has tripled in just 6 months, and our conversion rates are at an all-time high. Highly recommended!",
    img: "https://i.pravatar.cc/150?img=5"
  },
  {
    name: "David Chen",
    title: "Founder of InnovateUX",
    quote: "The level of communication and strategy is unmatched. They don't just execute tasks; they act as a true partner to our business, always bringing fresh ideas to the table to ensure our growth.",
    img: "https://i.pravatar.cc/150?img=12"
  },
  {
    name: "Emily Roberts",
    title: "Director of Growth, FinTrust",
    quote: "From SEO to paid ads, their holistic approach to digital marketing has helped us achieve a 400% ROI. Their team is extremely knowledgeable, responsive, and dedicated to our success.",
    img: "https://i.pravatar.cc/150?img=9"
  },
  {
    name: "Marcus Johnson",
    title: "VP of Marketing, RetailPro",
    quote: "Their data-driven approach means every decision is backed by analytics. We've seen a massive reduction in our customer acquisition cost since partnering with them. Brilliant team!",
    img: "https://i.pravatar.cc/150?img=15"
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Slider controls
  const handlePrev = () => {
    setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const activeReview = testimonials[currentTestimonial];

  return (
    <section className="w-full bg-[#F8F8F8] px-4 md:px-8 lg:px-12">
      <div className="max-w-[1400px] mx-auto flex flex-col space-y-12">
        
        <div className="w-full space-y-10">
          <p className="text-base md:text-xl lg:text-2xl font-medium text-black leading-[1.6] tracking-tight min-h-[80px]">
            " {activeReview.quote} "
          </p>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="flex items-center space-x-4">
              <img 
                src={activeReview.img} 
                alt={activeReview.name} 
                className="w-24 h-24 rounded-full object-cover"
              />
              <div>
                <h4 className="text-3xl font-bold text-black">{activeReview.name}</h4>
                <span className="text-gray-400 text-sm md:text-base lg:text-xl font-medium">{activeReview.title}</span>
              </div>
            </div>

            <div className="flex items-center space-x-6">
              <button onClick={handlePrev} className="w-20 h-20 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors">
                <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <div className="text-xl font-semibold text-gray-400 flex items-center w-20 justify-center">
                <span className="text-black underline underline-offset-4 decoration-2 pr-1">
                  0{currentTestimonial + 1}
                </span> / 05
              </div>

              <button onClick={handleNext} className="w-20 h-20 rounded-full bg-black flex items-center justify-center hover:bg-gray-800 transition-colors">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* --- 2. FAQ Card Section --- */}
        <div className="w-full bg-white rounded-[2.5rem] md:rounded-[3rem] p-8 md:p-12 lg:p-8 shadow-[0_10px_40px_rgba(0,0,0,0.03)] flex flex-col lg:flex-row gap-12 lg:gap-12">
          
          <div className="ms-6 w-full lg:w-[50%] flex flex-col space-y-6">
            <h2 className=" text-2xl md:text-3xl lg:text-5xl font-medium font-sans text-black tracking-tight leading-tight">
              Digital Marketing FAQs
            </h2>
            <p className="text-gray-400 text-base md:text-lg lg:text-lg leading-relaxed max-w-sm font-medium">
              As a leading digital marketing agency, we are dedicated to providing comprehensive educational resources and answering frequently asked questions to help our clients.
            </p>
            
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link to="/about" className="px-6 py-3 rounded-full border border-gray-300 text-black font-semibold hover:border-black transition-colors text-sm md:text-base">
                More Questions
              </Link>
              <Link to="/contact" className="px-6 py-3 text-black font-semibold hover:text-gray-600 transition-colors text-sm md:text-base">
                Contact Us
              </Link>
            </div>
          </div>

          <div className="w-full lg:w-[50%] flex flex-col">
            {faqsData.map((faq, index) => {
              const isOpen = activeIndex === index;
              return (
                <div key={index} className={`border-b border-gray-500 py-6 ${index === 0 ? 'border-t' : ''}`}>
                  <button onClick={() => toggleAccordion(index)} className="w-full flex items-start justify-between text-left focus:outline-none group">
                    <h3 className="text-lg md:text-2xl font-semibold text-black pr-8 leading-snug">
                      {faq.question}
                    </h3>
                    <span className="text-black transform transition-transform duration-200 mt-1">
                      {isOpen ? (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" /></svg>
                      ) : (
                        <svg className="w-6 h-6 text-black group-hover:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
                      )}
                    </span>
                  </button>
                  <div className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0'}`}>
                    <div className="overflow-hidden">
                      <p className="text-gray-400 text-base leading-relaxed font-medium pb-2">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
export default FAQ;