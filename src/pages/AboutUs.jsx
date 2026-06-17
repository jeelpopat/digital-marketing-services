import React from 'react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import OurStory from '../components/OurStory.jsx';
import WhoWeAre from '../components/WhoWeAre.jsx';
import AboutSection from '../components/AboutSection.jsx';


const AboutUs = () => {
  return (
    <main className="w-full min-h-screen bg-[#F8F8F8]">
      <OurStory/>
      <WhoWeAre/>
      <AboutSection/>
    </main>
  );
};

export default AboutUs;