import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';

import Home from './pages/Home.jsx'; 
import OurTeam from './pages/OurTeam.jsx'; 
import AboutUs from './pages/AboutUs.jsx';
import ServicePage from './pages/ServicePage.jsx';
import Blog from './pages/Blog.jsx';               
import BlogPost from './pages/BlogPost.jsx';
import Contact from './pages/Contact.jsx';

import WebsiteUIDesign from './pages/WebsiteUIDesign.jsx';
import WebDevelopment from './pages/WebDevelopment.jsx';
import AIChatbotsAutomation from './pages/AIChatbotsAutomation.jsx';
import AICreativeServices from './pages/AICreativeServices.jsx';
import MobileAppDesign from './pages/MobileAppDesign.jsx';
import OptimizationSupport from './pages/OptimizationSupport.jsx';
import OurService from './pages/OurService.jsx';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop /> 

      <div className="min-h-screen font-sans bg-[#F8F8FF]">
        <Header />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} /> 
          <Route path="/team" element={<OurTeam />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          
          <Route path="/contact" element={<Contact />} />

          {/* Main Service Page */}
          <Route path="/service" element={<ServicePage />} />
          <Route path="/ourservice" element={<OurService />} />
          
          {/* Individual Service Sub-Pages */}
          <Route path="/service/website-design" element={<WebsiteUIDesign />} />
          <Route path="/service/web-development" element={<WebDevelopment />} />
          <Route path="/service/ai-chatbots" element={<AIChatbotsAutomation />} />
          <Route path="/service/ai-creative" element={<AICreativeServices />} />
          <Route path="/service/mobile-app-design" element={<MobileAppDesign />} />
          <Route path="/service/optimization-support" element={<OptimizationSupport />} />
        </Routes>
        
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;