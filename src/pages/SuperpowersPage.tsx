import React, { useState, useEffect } from 'react';
import { Brain, Zap, Target, MessageCircle, Clock, Settings } from 'lucide-react';

const SuperpowersPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const superpowers = [
    {
      icon: Brain,
      title: 'Creative Thinking',
      description: 'Innovative problem-solving with out-of-the-box solutions',
      direction: 'left',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Zap,
      title: 'Grit',
      description: 'Persistent determination to overcome any challenge',
      direction: 'right',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Target,
      title: 'Accountability',
      description: 'Taking ownership and delivering on commitments',
      direction: 'left',
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: MessageCircle,
      title: 'Fluent English Proficiency',
      description: 'Clear communication across global teams',
      direction: 'right',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Clock,
      title: 'Time Management',
      description: 'Efficient prioritization and deadline adherence',
      direction: 'left',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: Settings,
      title: 'Practicality',
      description: 'Pragmatic approach to real-world solutions',
      direction: 'right',
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  return (
    <div className="min-h-screen pt-16 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 wave-pattern opacity-5"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl lg:text-6xl font-bold glow-text wave-animation mb-4">
            Workplace Superpowers
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            The core strengths that drive exceptional performance and team success
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {superpowers.map((superpower, index) => {
            const Icon = superpower.icon;
            return (
              <div
                key={index}
                className={`transform transition-all duration-1000 ${
                  isVisible
                    ? 'translate-x-0 opacity-100'
                    : superpower.direction === 'left'
                    ? '-translate-x-full opacity-0'
                    : 'translate-x-full opacity-0'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                  <div className="relative p-8 bg-slate-900/90 backdrop-blur-sm rounded-lg glow-border card-hover">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className={`p-3 rounded-full bg-gradient-to-r ${superpower.color}`}>
                        <Icon size={24} className="text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white">{superpower.title}</h3>
                    </div>
                    <p className="text-gray-300 text-lg leading-relaxed">
                      {superpower.description}
                    </p>
                    
                    {/* Progress Bar Animation */}
                    <div className="mt-6">
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full bg-gradient-to-r ${superpower.color} transition-all duration-2000 ease-out`}
                          style={{ 
                            width: isVisible ? '95%' : '0%',
                            transitionDelay: `${index * 200 + 500}ms`
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SuperpowersPage;