import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, ArrowRight } from 'lucide-react';
import TypingEffect from '../components/TypingEffect';

const LandingPage = () => {
  const jobTitles = [
    'AWS Solution Architect',
    'Docker',
    'Kubernetes',
    'GEN-AI-OPS',
    'DevOps'
  ];

  return (
    <div className="min-h-screen pt-16 relative overflow-hidden" 
         style={{ 
           background: '#222831',
           backgroundImage: 'url("https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2025&q=80")',
           backgroundSize: 'cover',
           backgroundPosition: 'center',
           backgroundRepeat: 'no-repeat',
           backgroundAttachment: 'fixed'
         }}>
      
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-0"></div>
      
      {/* Background Animation */}
      <div className="absolute inset-0 z-10">
        <div className="absolute top-20 left-20 w-32 h-32 rounded-full rotating-bg" style={{ background: 'rgba(48, 71, 94, 0.2)' }}></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 rounded-full rotating-bg" style={{ background: 'rgba(240, 84, 84, 0.2)', animationDelay: '10s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 rounded-full rotating-bg" style={{ background: 'rgba(48, 71, 94, 0.2)', animationDelay: '5s' }}></div>
      </div>

      {/* Wave Pattern */}
      <div className="absolute inset-0 wave-pattern opacity-10 z-10"></div>

      <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold glow-text wave-animation" style={{ color: '#DDDDDD' }}>
                Purwanshi Mishra
              </h1>
              <div className="text-2xl lg:text-3xl font-medium h-12">
                <TypingEffect texts={jobTitles} />
              </div>
              <p className="text-lg max-w-md" style={{ color: '#DDDDDD' }}>
                Passionate about cloud architecture, DevOps, and AI/ML technologies. 
                Building scalable solutions and innovative applications.
              </p>
            </div>

            {/* Social Links - Static and Visible */}
            <div className="flex space-x-6">
              <a
                href="https://github.com/purwanshi"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full transition-all duration-300 glow-border"
                style={{ background: '#30475E', color: '#DDDDDD' }}
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/purwanshi-mishra-028013222"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full transition-all duration-300 glow-border"
                style={{ background: '#30475E', color: '#DDDDDD' }}
              >
                <Linkedin size={24} />
              </a>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <Link
                to="/projects"
                className="inline-flex items-center space-x-2 px-8 py-4 rounded-full text-white font-semibold transition-all duration-300 floating-animation glow-border"
                style={{ background: 'linear-gradient(45deg, #F05454, #30475E)' }}
              >
                <span>View Projects</span>
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>

          {/* Right Column - Profile Picture */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden glow-border p-2">
                <img
                  src="https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Purwanshi Mishra"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              {/* Floating elements around profile */}
              <div className="absolute -top-5 -right-5 w-12 h-12 rounded-full floating-animation" style={{ background: 'linear-gradient(45deg, #F05454, #30475E)' }}></div>
              <div className="absolute -bottom-5 -left-5 w-8 h-8 rounded-full floating-animation" style={{ background: 'linear-gradient(45deg, #30475E, #F05454)', animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;