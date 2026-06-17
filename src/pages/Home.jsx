import React from 'react';

import Hero from '../components/Hero.jsx';
import ServiceIntro from '../components/ServiceIntro.jsx';
import WhoWeAre from '../components/WhoWeAre.jsx';
import HowWeWork from '../components/HowWeWork.jsx';
import OurStory from '../components/OurStory.jsx';
import FAQ from '../components/FAQ.jsx';
import InsightsAndCTA from '../components/InsightsAndCTA.jsx';

const Home = () => {
  return (
    <main className="w-full min-h-screen bg-[#F8F8F8]">
      <Hero />
      <ServiceIntro />
      <WhoWeAre />
      <HowWeWork />
      <FAQ />
      <InsightsAndCTA />
    </main>
  );
};

export default Home;