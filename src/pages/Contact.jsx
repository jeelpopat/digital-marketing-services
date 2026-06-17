import React from 'react';

const Contact = () => {
  return (
    <main className="w-full bg-[#F8F9FA] pb-10">
      {/* Header  */}
      <section className="max-w-3xl mx-auto text-center pt-4 pb-16 px-4 md:px-6">
        <h1 className="text-3xl md:text-4xl font-bold text-[#0B0F17] mb-6">
          Want to Get in Touch?
        </h1>
        <p className="text-gray-700 px-4 md:px-12 lg:px-22 text-sm md:text-base leading-relaxed font-medium">
          We love hearing from other people, whether they're our users or just curious
          about what we do. If you have any questions about our product or want to give
          us feedback (good or bad), don't hesitate to get in touch.
        </p>
      </section>

      {/* Contact Card */}
      <section className="max-w-6xl mx-auto px-4 md:px-12 lg:px-40 mb-16">
        <div className="bg-white rounded-[2rem] shadow-sm p-6 md:p-16 flex flex-col lg:flex-row gap-12 lg:gap-16">
          
          {/* Contact Info */}
          <div className="w-full lg:w-1/2 flex px-2 md:px-5 flex-col space-y-6">
            <div>
              <h2 className="text-xl font-bold text-[#0B0F17] leading-tight mb-4 max-w-sm">
                Let's Join Forces to Create unique experiences.
              </h2>
              <p className="text-sm md:text-base leading-relaxed font-normal text-gray-800 uppercase tracking-wide">
                THUS YOUR BRAND WILL TRANSFORM <br />
                FROM BLAND TO BUZZWORTHY. <br />
                Our all ears and mind are here for you.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4 text-[#333333] font-medium">
              <div className="flex items-center text-sm md:text-base font-normal text-gray-800 gap-4">
                <svg className="w-6 h-6 text-[#C25934] shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.864-1.051l-3.215-.536c-.538-.09-1.066.192-1.282.694l-1.076 2.508c-3.59-1.805-6.47-4.685-8.275-8.275l2.508-1.076c.502-.216.784-.744.694-1.282l-.536-3.215C11.166 3.6 10.716 3.25 10.2 3.25H8.823C8.261 3.25 7.783 3.682 7.72 4.24a18.064 18.064 0 00-5.47 2.51z" />
                </svg>
                <span>+91 9501041005</span>
              </div>
              
              {/* Email */}
              <div className="flex items-center text-sm md:text-base font-normal text-gray-800 gap-4">
                <svg className="w-6 h-6 text-[#C25934] shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                <span>hello@alphamw.com</span>
              </div>
              
              {/* Address */}
              <div className="flex items-start text-sm md:text-base font-normal text-gray-800 gap-4">
                <svg className="w-6 h-6 text-[#C25934] mt-1 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
                </svg>
                <div className="leading-relaxed">
                  <p>Plot No. 29 Sector 82</p>
                  <p>JLPL Ind Zone, Mohali</p>
                  <p>Punjab 160055 IND.</p>
                </div>
              </div>
            </div>

            {/* Careers Link */}
            <div className="pt-2">
              <a href="#" className="inline-flex items-center text-[#C25934] font-sm hover:underline">
                Careers 
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="w-full lg:w-1/2">
            <form className="flex flex-col space-y-4">
              <input 
                type="text" 
                placeholder="Full Name *" 
                className="w-full px-6 py-4 rounded-xl bg-[#F8F9FA] border border-gray-100 focus:ring-2 focus:ring-[#8AE66D] outline-none text-gray-700 placeholder-gray-400 font-medium"
                required
              />
              <input 
                type="email" 
                placeholder="Email Address *" 
                className="w-full px-6 py-4 rounded-xl bg-[#F8F9FA] border border-gray-100 focus:ring-2 focus:ring-[#8AE66D] outline-none text-gray-700 placeholder-gray-400 font-medium"
                required
              />
              <input 
                type="text" 
                placeholder="Company Name *" 
                className="w-full px-6 py-4 rounded-xl bg-[#F8F9FA] border border-gray-100 focus:ring-2 focus:ring-[#8AE66D] outline-none text-gray-700 placeholder-gray-400 font-medium"
                required
              />
              <textarea 
                placeholder="How can we help you?" 
                rows="5"
                className="w-full px-6 py-4 rounded-xl bg-[#F8F9FA] border border-gray-100 focus:ring-2 focus:ring-[#8AE66D] outline-none text-gray-700 placeholder-gray-400 font-medium resize-none"
              ></textarea>
              
              <div className="pt-2">
                <button 
                  type="submit" 
                  className="bg-[#222222] text-white px-8 py-4 rounded-xl font-semibold flex items-center justify-center hover:bg-black transition-colors w-full sm:w-auto"
                >
                  Explore Our Agency
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </form>
          </div>

        </div>
      </section>

      {/* 3. Map Section */}
      <section className="max-w-6xl mx-4 md:mx-12 lg:mx-60 px-4 md:px-6">
        <div className="w-full h-64 md:h-96 bg-gray-200 rounded-xl overflow-hidden shadow-sm">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3432.2285141075677!2d76.74102927640166!3d30.655688589333333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fec7d031c55c3%3A0xc392fa942540b3de!2sSector%2082%2C%20JLPL%20Industrial%20Area%2C%20Mohali%2C%20Punjab%20140308!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Office Location"
          ></iframe>
        </div>
      </section>
    </main>
  );
};

export default Contact;