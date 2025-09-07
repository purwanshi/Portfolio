import React, { useState, useEffect } from 'react';
import { Award, FileText, Trophy, Star } from 'lucide-react';

const AchievementsPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const achievements = [
    {
      id: 1,
      title: 'AWS Cloud Practitioner Badge',
      description: 'Certified AWS Cloud Practitioner demonstrating foundational knowledge of AWS cloud services, security, and architecture.',
      icon: Award,
      color: 'from-yellow-500 to-orange-500',
      type: 'Certification',
      date: '2024'
    },
    {
      id: 2,
      title: 'Patent Pending',
      description: 'Automatic Foldable Solar Powered Smart Tent - Innovation in sustainable camping technology with automated setup and solar power integration.',
      icon: FileText,
      color: 'from-green-500 to-teal-500',
      type: 'Patent',
      date: '2024'
    },
    {
      id: 3,
      title: 'FCF - Introduction to the Threat Landscape 3.0 Self-Paced',
      description: 'Fortinet Certified Fundamentals badge demonstrating comprehensive understanding of modern cybersecurity threat landscape and defensive strategies.',
      icon: Award,
      color: 'from-red-500 to-pink-500',
      type: 'Certification',
      date: '2024'
    },
    {
      id: 4,
      title: 'FCF - Getting Started in Cybersecurity 3.0 Self-Paced',
      description: 'Fortinet Certified Fundamentals badge showcasing foundational cybersecurity knowledge and best practices for secure system design.',
      icon: Award,
      color: 'from-blue-500 to-purple-500',
      type: 'Certification',
      date: '2024'
    }
  ];

  return (
    <div className="min-h-screen pt-16 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 wave-pattern opacity-5"></div>
      <div className="absolute top-20 right-20 w-32 h-32 bg-yellow-500/10 rounded-full rotating-bg"></div>
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-green-500/10 rounded-full rotating-bg" style={{animationDelay: '10s'}}></div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl lg:text-6xl font-bold glow-text wave-animation mb-4">
            Achievements
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Recognition and milestones in professional development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <div
                key={achievement.id}
                className={`transform transition-all duration-1000 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 300}ms` }}
              >
                <div className="relative group h-full">
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                  <div className="relative bg-slate-900/90 backdrop-blur-sm rounded-2xl glow-border card-hover p-8 h-full flex flex-col">
                    {/* Diamond Icon */}
                    <div className="absolute top-4 right-4">
                      <div className="diamond-icon floating-animation"></div>
                    </div>

                    {/* Main Icon */}
                    <div className="flex items-center space-x-4 mb-6">
                      <div className={`p-4 rounded-full bg-gradient-to-r ${achievement.color} floating-animation`}>
                        <Icon size={32} className="text-white" />
                      </div>
                      <div>
                        <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${achievement.color} text-white mb-2`}>
                          {achievement.type}
                        </span>
                        <h3 className="text-xl font-bold text-white">{achievement.title}</h3>
                      </div>
                    </div>

                    {/* Description */}
                    <div className="flex-grow">
                      <p className="text-gray-300 leading-relaxed mb-4">
                        {achievement.description}
                      </p>
                    </div>

                    {/* Footer */}
                    <div className="flex items-center justify-between mt-6 pt-6 border-t border-gray-700">
                      <div className="flex items-center space-x-2">
                        <Star className="text-yellow-400" size={16} />
                        <span className="text-sm text-gray-400">Achieved in {achievement.date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Trophy className={`text-yellow-400`} size={16} />
                        <span className="text-sm text-yellow-400 font-medium">Excellence</span>
                      </div>
                    </div>

                    {/* Hover Effect Background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 via-cyan-600/0 to-purple-600/0 group-hover:from-purple-600/5 group-hover:via-cyan-600/5 group-hover:to-purple-600/5 rounded-2xl transition-all duration-300"></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Visual Elements */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-4 px-8 py-4 rounded-full bg-gradient-to-r from-purple-600/20 to-cyan-600/20 glow-border">
            <Trophy className="text-yellow-400" size={24} />
            <span className="text-lg font-medium text-white">More achievements coming soon...</span>
            <Trophy className="text-yellow-400" size={24} />
          </div>
        </div>

        {/* Floating Achievement Icons */}
        <div className="absolute top-1/4 left-10 w-16 h-16 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-full flex items-center justify-center floating-animation">
          <Award className="text-yellow-400" size={24} />
        </div>
        <div className="absolute bottom-1/4 right-10 w-12 h-12 bg-gradient-to-r from-green-500/20 to-teal-500/20 rounded-full flex items-center justify-center floating-animation" style={{animationDelay: '1s'}}>
          <FileText className="text-green-400" size={18} />
        </div>
      </div>
    </div>
  );
};

export default AchievementsPage;