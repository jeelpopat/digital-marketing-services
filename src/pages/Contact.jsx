import React, { useState } from 'react';

const Contact = () => {
  const initialFormState = {
    fullName: '',
    email: '',
    companyName: '',
    message: ''
  };

  const [formData, setFormData] = useState(initialFormState);
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const response = await fetch('https://digital-marketing-services-backend.onrender.com/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData(initialFormState); // હવે બધા ફિલ્ડ્સ પ્રોપરલી ક્લિયર થશે
      } else {
        throw new Error("Server error");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("Failed to send message.");
    }
  };

  return (
    <main className="w-full bg-[#F8F9FA] pb-10">
      <section className="max-w-3xl mx-auto text-center pt-4 pb-16 px-4 md:px-6">
        <h1 className="text-3xl md:text-4xl font-bold text-[#0B0F17] mb-6">Want to Get in Touch?</h1>
        <p className="text-gray-700 text-sm md:text-base leading-relaxed font-medium">We love hearing from you. Don't hesitate to get in touch.</p>
      </section>

      <section className="max-w-6xl mx-auto px-4 md:px-12 lg:px-40 mb-16">
        <div className="bg-white rounded-[2rem] shadow-sm p-6 md:p-16 flex flex-col lg:flex-row gap-12">
          {/* ... તમારા બાકીના કોન્ટેક્ટ ઇન્ફોના કોડ અહીં રાખો ... */}
          
          <div className="w-full lg:w-1/2">
            <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
              <input 
                type="text" name="fullName" value={formData.fullName} onChange={handleChange}
                placeholder="Full Name *" className="w-full px-6 py-4 rounded-xl bg-[#F8F9FA] border outline-none" required
              />
              <input 
                type="email" name="email" value={formData.email} onChange={handleChange}
                placeholder="Email Address *" className="w-full px-6 py-4 rounded-xl bg-[#F8F9FA] border outline-none" required
              />
              <input 
                type="text" name="companyName" value={formData.companyName} onChange={handleChange}
                placeholder="Company Name *" className="w-full px-6 py-4 rounded-xl bg-[#F8F9FA] border outline-none" required
              />
              <textarea 
                name="message" value={formData.message} onChange={handleChange}
                placeholder="How can we help you?" rows="5" className="w-full px-6 py-4 rounded-xl bg-[#F8F9FA] border outline-none resize-none" required
              ></textarea>
              
              <button type="submit" className="bg-[#222222] text-white px-8 py-4 rounded-xl font-semibold w-full sm:w-auto">
                Explore Our Agency
              </button>

              {status && <p className="text-sm mt-3 font-medium text-gray-800">{status}</p>}
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;