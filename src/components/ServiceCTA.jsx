import React, { useState } from 'react';

const ServiceCTA = ({ 
  title = "Ready to Build Your Platform?", 
  subtitle = "Let's discuss your project and how our custom web development services can scale your digital presence.",
  defaultService = "Website & UI/UX Design" 
}) => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    serviceRequested: defaultService,
    details: ''
  });
  const [status, setStatus] = useState('');

  const servicesList = [
    "Website & UI/UX Design",
    "Web Development",
    "AI Chatbots & Automation",
    "AI-Powered Creative Services",
    "Mobile App UI/UX Design",
    "Ongoing Optimization & Support"
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  setStatus('Sending request...');

    try {
      const response = await fetch('http://localhost:5000/api/service', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });
      
      const data = await response.json();
      
      if (data.success) {
        setStatus('Request submitted successfully! We will contact you soon.');
        setFormData({ name: '', email: '', serviceRequested: defaultService, details: '' });
        
        setTimeout(() => {
          setShowForm(false);
          setStatus('');
        }, 3000);
      } else {
        setStatus('Failed to send request.');
      }
    } catch (error) {
    setStatus('Failed to send message.');
   }
  };

  return (
    <div className="w-full bg-gradient-to-r from-[#EAF5DF] to-[#F4F9EE] rounded-[3rem] p-8 md:p-12 text-center border border-[#dcedcd] shadow-sm relative overflow-hidden transition-all duration-500">
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#A8EB59]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
      
      {!showForm ? (
        <div className="relative z-10 max-w-2xl mx-auto space-y-6 pt-4 pb-4">
          <h2 className="text-3xl md:text-4xl font-medium text-black">{title}</h2>
          <p className="text-gray-500 font-medium text-lg leading-relaxed">{subtitle}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button 
              onClick={() => setShowForm(true)} 
              className="w-full sm:w-auto bg-[#A8EB59] text-[#1a2016] px-8 py-3.5 rounded-xl font-bold text-lg hover:bg-[#96dc4a] transition-all duration-300 shadow-[0_0_25px_rgba(168,235,89,0.25)] flex items-center justify-center gap-2"
            >
              Start Your Project <span>→</span>
            </button>
            <button className="w-full sm:w-auto border border-[#A8EB59] text-black px-8 py-3.5 rounded-xl font-semibold text-lg hover:bg-white/50 transition-all duration-300">
              View Our Work
            </button>
          </div>
        </div>
      ) : (
        <div className="relative z-10 max-w-2xl mx-auto bg-white rounded-3xl p-6 md:p-8 shadow-xl text-left border border-gray-100 animate-fade-in">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-bold text-black">Project Requirements</h3>
            <button onClick={() => setShowForm(false)} className="text-gray-400 hover:text-red-500 transition-colors bg-gray-50 hover:bg-red-50 p-2 rounded-full">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Full Name *" required className="w-full px-5 py-4 rounded-xl bg-[#F8F9FA] border border-gray-100 focus:ring-2 focus:ring-[#A8EB59] outline-none text-gray-700 placeholder-gray-400 font-medium" />
              <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email Address *" required className="w-full px-5 py-4 rounded-xl bg-[#F8F9FA] border border-gray-100 focus:ring-2 focus:ring-[#A8EB59] outline-none text-gray-700 placeholder-gray-400 font-medium" />
            </div>

            <select name="serviceRequested" value={formData.serviceRequested} onChange={handleChange} className="w-full px-5 py-4 rounded-xl bg-[#F8F9FA] border border-gray-100 focus:ring-2 focus:ring-[#A8EB59] outline-none text-gray-700 font-medium cursor-pointer">
              {servicesList.map((s, i) => (
                <option key={i} value={s}>{s}</option>
              ))}
            </select>

            <textarea name="details" value={formData.details} onChange={handleChange} placeholder="Tell us a little bit about your project details..." rows="4" className="w-full px-5 py-4 rounded-xl bg-[#F8F9FA] border border-gray-100 focus:ring-2 focus:ring-[#A8EB59] outline-none text-gray-700 placeholder-gray-400 font-medium resize-none"></textarea>
            
            <button type="submit" className="w-full bg-[#1A2016] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-black transition-all duration-300 shadow-md">
              Submit Project Request
            </button>

            {status && (
              <p className={`text-sm mt-3 font-semibold text-center ${status.includes('successfully') ? 'text-green-600' : 'text-red-500'}`}>
                {status}
              </p>
            )}
          </form>
        </div>
      )}
    </div>
  );
};

export default ServiceCTA;