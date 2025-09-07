import React, { useState, useEffect } from 'react';
import { Code, Cloud, Server, Database } from 'lucide-react';

const TechArsenalPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const techCategories = [
    {
      icon: Code,
      title: 'Programming Languages',
      technologies: ['C++', 'Python', 'JavaScript', 'HTML/CSS'],
      color: 'from-purple-500 to-pink-500',
      description: 'Core programming languages for versatile development'
    },
    {
      icon: Server,
      title: 'DevOps',
      technologies: ['Docker', 'Kubernetes', 'Jenkins', 'Prometheus', 'Grafana'],
      color: 'from-blue-500 to-cyan-500',
      description: 'Advanced container orchestration and CI/CD pipelines'
    },
    {
      icon: Cloud,
      title: 'Cloud Computing',
      technologies: ['AWS', 'Azure', 'Lambda', 'EC2', 'S3'],
      color: 'from-green-500 to-teal-500',
      description: 'Scalable cloud infrastructure and serverless solutions'
    },
    {
      icon: Database,
      title: 'Full Stack & Tools',
      technologies: ['Git/GitHub', 'Flask', 'Linux', 'Version Control'],
      color: 'from-orange-500 to-red-500',
      description: 'Complete development ecosystem and system administration'
    }
  ];

  return (
    <div className="min-h-screen pt-16 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 wave-pattern opacity-5"></div>
      <div className="absolute top-20 right-20 w-32 h-32 bg-blue-500/10 rounded-full rotating-bg"></div>
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-purple-500/10 rounded-full rotating-bg" style={{animationDelay: '10s'}}></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl lg:text-6xl font-bold glow-text wave-animation mb-4">
            Tech Arsenal
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Cutting-edge technologies powering modern solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {techCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className={`transform transition-all duration-1000 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="relative group h-full">
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                  <div className="relative p-8 bg-slate-900/90 backdrop-blur-sm rounded-xl glow-border card-hover h-full flex flex-col">
                    {/* Header */}
                    <div className="flex items-center space-x-4 mb-6">
                      <div className={`p-4 rounded-full bg-gradient-to-r ${category.color} floating-animation`}>
                        <Icon size={32} className="text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {category.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex-grow">
                      <div className="grid grid-cols-2 gap-3">
                        {category.technologies.map((tech, techIndex) => (
                          <div
                            key={techIndex}
                            className={`px-4 py-2 bg-gradient-to-r ${category.color} rounded-full text-white text-sm font-medium text-center transform transition-all duration-300 hover:scale-105 opacity-90 hover:opacity-100`}
                            style={{ 
                              animationDelay: `${index * 200 + techIndex * 100}ms`,
                              animation: isVisible ? 'slideInLeft 0.8s ease-out' : 'none'
                            }}
                          >
                            {tech}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Hover Effect Background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 via-cyan-600/0 to-purple-600/0 group-hover:from-purple-600/5 group-hover:via-cyan-600/5 group-hover:to-purple-600/5 rounded-xl transition-all duration-300"></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Floating Elements */}
        <div className="absolute top-1/3 left-10 w-16 h-16 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full floating-animation"></div>
        <div className="absolute bottom-1/3 right-10 w-12 h-12 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full floating-animation" style={{animationDelay: '1s'}}></div>
      </div>
    </div>
  );
};

export default TechArsenalPage;