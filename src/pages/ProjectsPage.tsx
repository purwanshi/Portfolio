import React, { useState, useEffect } from 'react';
import { Cloud, Brain, Server, Code } from 'lucide-react';
import TypingEffect from '../components/TypingEffect';

const ProjectsPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('Cloud Projects');

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const projectCategories = [
    { name: 'Cloud Projects', icon: Cloud, color: 'from-blue-500 to-cyan-500' },
    { name: 'Machine Learning Projects', icon: Brain, color: 'from-purple-500 to-pink-500' },
    { name: 'DevOps Projects', icon: Server, color: 'from-green-500 to-teal-500' },
    { name: 'Python Projects', icon: Code, color: 'from-orange-500 to-red-500' }
  ];

  const projects = {
    'Cloud Projects': [
      {
        id: 1,
        title: 'Automated S3 Deduplication System',
        purpose: 'Optimize cloud storage costs and improve data management efficiency',
        problem: 'Duplicate files in S3 buckets waste storage space and increase costs',
        howItWorks: 'Lambda functions scan S3 buckets, identify duplicates using hash comparison, and automatically remove redundant files while sending SNS notifications',
        techStack: ['AWS Lambda', 'S3', 'SNS', 'Python', 'CloudWatch'],
        image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=300'
      }
    ],
    'Machine Learning Projects': [
      {
        id: 2,
        title: 'Road Lane Detection System',
        purpose: 'Enhance autonomous vehicle navigation and driver safety',
        problem: 'Real-time lane detection is crucial for autonomous driving systems',
        howItWorks: 'Uses OpenCV for image processing and Hough Transform algorithm to detect lane lines in real-time video feeds',
        techStack: ['OpenCV', 'Python', 'Hough Transform', 'Computer Vision'],
        image: 'https://images.pexels.com/photos/1519088/pexels-photo-1519088.jpeg?auto=compress&cs=tinysrgb&w=300'
      },
      {
        id: 3,
        title: 'Plant Disease Prediction',
        purpose: 'Help farmers identify crop diseases early for better yield',
        problem: 'Late detection of plant diseases leads to significant crop losses',
        howItWorks: 'CNN model trained on plant leaf images classifies diseases with high accuracy, enabling early intervention',
        techStack: ['TensorFlow', 'CNN', 'Python', 'Image Processing'],
        image: 'https://images.pexels.com/photos/1112080/pexels-photo-1112080.jpeg?auto=compress&cs=tinysrgb&w=300'
      },
      {
        id: 4,
        title: 'Alerting System using Hand Gesture Analysis',
        purpose: 'Provide emergency alert system through gesture recognition',
        problem: 'Traditional emergency systems require physical interaction which may not be possible in crisis situations',
        howItWorks: 'AI-powered system recognizes hand gestures: open hand triggers alarm with location, index finger sends SMS via Twilio, call gesture initiates emergency calls',
        techStack: ['OpenCV', 'MediaPipe', 'Twilio', 'Python', 'AI/ML'],
        image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=300'
      },
      {
        id: 5,
        title: 'Cozy Therapist',
        purpose: 'Provide personalized mental health support and mood enhancement',
        problem: 'Limited access to mental health resources and personalized therapy',
        howItWorks: 'AI chatbot built with Gradio provides mood-boosting suggestions with 55% uplift in 5-minute sessions through personalized recommendations',
        techStack: ['Gradio', 'Python', 'NLP', 'AI/ML'],
        image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=300'
      },
      {
        id: 6,
        title: 'Calorie Prediction App',
        purpose: 'Help users track and predict calories burned during exercise',
        problem: 'Difficulty in accurately estimating calories burned during different activities',
        howItWorks: 'Streamlit app uses ML model to predict calories burned based on exercise type, duration, and user parameters',
        techStack: ['Streamlit', 'Python', 'Machine Learning', 'Pandas'],
        image: 'https://images.pexels.com/photos/1181316/pexels-photo-1181316.jpeg?auto=compress&cs=tinysrgb&w=300'
      }
    ],
    'DevOps Projects': [
      {
        id: 7,
        title: 'Flask App Deployment Pipeline',
        purpose: 'Automate application deployment with comprehensive CI/CD',
        problem: 'Manual deployment processes are error-prone and time-consuming',
        howItWorks: 'Complete pipeline with Jenkins for CI/CD, Docker containerization, Nginx reverse proxy, and SystemD service management with automated testing',
        techStack: ['Flask', 'Jenkins', 'Docker', 'Nginx', 'SystemD'],
        image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=300'
      },
      {
        id: 8,
        title: 'GEN-AI-OPS',
        purpose: 'Revolutionize CI/CD with AI-generated code deployment',
        problem: 'Traditional CI/CD pipelines require manual code updates and deployment',
        howItWorks: 'Uses Generative AI to automatically generate Flask code, builds every 5 minutes via Poll SCM pulling latest code from GitHub with automated deployment',
        techStack: ['Generative AI', 'Jenkins', 'Flask', 'GitHub', 'Python'],
        image: 'https://images.pexels.com/photos/1519088/pexels-photo-1519088.jpeg?auto=compress&cs=tinysrgb&w=300'
      }
    ],
    'Python Projects': [
      {
        id: 9,
        title: 'SyncFury',
        purpose: 'Automate social media and communication tasks',
        problem: 'Manual management of multiple social platforms is time-consuming',
        howItWorks: 'Python automation scripts handle WhatsApp messaging, email management, Instagram bot interactions, and Twitter bot operations seamlessly',
        techStack: ['Python', 'WhatsApp API', 'Email APIs', 'Instagram API', 'Twitter API'],
        image: 'https://images.pexels.com/photos/1112080/pexels-photo-1112080.jpeg?auto=compress&cs=tinysrgb&w=300'
      }
    ]
  };

  const headerText = "HERE IS THE SASS — LET'S CHECK OUT SOME PROJECTS!";

  return (
    <div className="min-h-screen pt-16 relative overflow-hidden" style={{ background: '#222831' }}>
      {/* Background Elements */}
      <div className="absolute inset-0 wave-pattern opacity-5"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold glow-text wave-animation mb-8 h-20" style={{ color: '#DDDDDD' }}>
            <TypingEffect texts={[headerText]} speed={80} deleteSpeed={30} delayBetweenTexts={3000} />
          </h1>
          <p className="text-xl max-w-2xl mx-auto" style={{ color: '#DDDDDD' }}>
            Innovative solutions showcasing technical expertise and creative problem-solving
          </p>
        </div>

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {projectCategories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.name}
                onClick={() => setSelectedCategory(category.name)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 project-category-btn ${
                  selectedCategory === category.name ? 'active' : ''
                }`}
                style={{ color: '#DDDDDD' }}
              >
                <Icon size={20} />
                <span>{category.name}</span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-8 max-w-6xl mx-auto">
          {projects[selectedCategory]?.map((project, index) => (
            <div
              key={project.id}
              className={`transform transition-all duration-1000 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="studio-ghibli-card rounded-2xl overflow-hidden card-hover">
                <div className="grid grid-cols-1 lg:grid-cols-4 min-h-[300px]">
                  {/* Image Section - 25% */}
                  <div className="lg:col-span-1 relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-gray-600/20 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  {/* Content Section - 75% */}
                  <div className="lg:col-span-3 p-8 flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl font-bold mb-4" style={{ color: '#DDDDDD' }}>{project.title}</h3>
                      
                      <div className="space-y-4 mb-6">
                        <div>
                          <h4 className="text-lg font-semibold mb-2" style={{ color: '#F05454' }}>Purpose:</h4>
                          <p style={{ color: '#DDDDDD' }}>{project.purpose}</p>
                        </div>
                        
                        <div>
                          <h4 className="text-lg font-semibold mb-2" style={{ color: '#F05454' }}>Problem it Solves:</h4>
                          <p style={{ color: '#DDDDDD' }}>{project.problem}</p>
                        </div>
                        
                        <div>
                          <h4 className="text-lg font-semibold mb-2" style={{ color: '#F05454' }}>How it Works:</h4>
                          <p style={{ color: '#DDDDDD' }}>{project.howItWorks}</p>
                        </div>
                      </div>
                      
                      {/* Tech Stack */}
                      <div>
                        <h4 className="text-sm font-semibold mb-2" style={{ color: '#F05454' }}>Tech Stack:</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.techStack.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-3 py-1 rounded-full text-sm"
                              style={{ background: '#30475E', color: '#DDDDDD' }}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;