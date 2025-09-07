import React, { useState, useEffect } from 'react';
import { Cloud, Brain, Server, Code, Bot, ExternalLink } from 'lucide-react';
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
    { name: 'Python Projects', icon: Code, color: 'from-orange-500 to-red-500' },
    { name: 'LLM & AI Automation', icon: Bot, color: 'from-indigo-500 to-purple-500' }
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
        image: 'https://imgs.search.brave.com/Lk2QIo8f24M3e5wNN0E-srBAnsnc2HAHbO9j3t9GOJM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wcmV2/ZW50ZGlyZWN0YWNj/ZXNzLmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvMjAxOC8wNS9w/ZGEtczMtc3F1YXJl/LTI1Ni1sb2dvLTE1/MHgxNTAucG5n',
        githubUrl: 'https://github.com/purwanshi/Automated-S3-duplicate-file-detection-and-deletion-.git'
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
        image: 'https://imgs.search.brave.com/KOIFzrl_LXedkezWA7WIKoIx8qn8iQK1yMrw8a0xU9c/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9naXRo/dWIuY29tL09hbmFH/YXNrZXkvTGFuZS1M/aW5lcy1EZXRlY3Rp/b24vcmF3L21hc3Rl/ci90ZXN0X2ltYWdl/c19vdXRwdXQvNy5K/UEc',
        githubUrl: 'https://github.com/purwanshi/Roadlane-detection-ml-project.git'
      },
      {
        id: 3,
        title: 'Plant Disease Prediction',
        purpose: 'Help farmers identify crop diseases early for better yield',
        problem: 'Late detection of plant diseases leads to significant crop losses',
        howItWorks: 'CNN model trained on plant leaf images classifies diseases with high accuracy, enabling early intervention',
        techStack: ['TensorFlow', 'CNN', 'Python', 'Image Processing'],
        image: 'https://imgs.search.brave.com/8mYiQw6XOTS7-_1DTrx2nvvaMyRnK-qQTkr7a9es3Ho/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9wbGFu/dC12aXRyby1kb2N0/b3ItbGFib3JhdG9y/eS1zZWxlY3RpdmUt/Zm9jdXMtd2hpdGUt/MzA0ODQwNDM1Lmpw/Zw',
        githubUrl: 'https://github.com/purwanshi/plant-diseases-classification-ml-project.git'
      },
      {
        id: 4,
        title: 'Alerting System using Hand Gesture Analysis',
        purpose: 'Provide emergency alert system through gesture recognition',
        problem: 'Traditional emergency systems require physical interaction which may not be possible in crisis situations',
        howItWorks: 'AI-powered system recognizes hand gestures: open hand triggers alarm with location, index finger sends SMS via Twilio, call gesture initiates emergency calls',
        techStack: ['OpenCV', 'MediaPipe', 'Twilio', 'Python', 'AI/ML'],
        image: 'https://imgs.search.brave.com/DY4nSLov7i8aiFvyllnGY3FJHOaahhYO02cWT71gC5E/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/bmNiaS5ubG0ubmlo/Lmdvdi9wbWMvYmxv/YnMvNzA1Mi85MjI0/ODU3LzE2YTdmNDUy/MzJhOC9qaW1hZ2lu/Zy0wOC0wMDE1My1n/MDA1LmpwZw',
        githubUrl: 'https://github.com/purwanshi/Alerting-System-using-hand-gesture-analysis.git'
      },
      {
        id: 6,
        title: 'Calorie Prediction App',
        purpose: 'Help users track and predict calories burned during exercise',
        problem: 'Difficulty in accurately estimating calories burned during different activities',
        howItWorks: 'Streamlit app uses ML model to predict calories burned based on exercise type, duration, and user parameters',
        techStack: ['Streamlit', 'Python', 'Machine Learning', 'Pandas'],
        image: 'https://imgs.search.brave.com/wb2Wx_8Z1p1SfVE1YyILK4V9jyqZZZs1JUbc2wVdvOA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA1Lzc0LzY0LzMy/LzM2MF9GXzU3NDY0/MzI2Nl82OFRuRXEz/TnFKeFBhTWp1ZUZV/VThmRmpSVzBOSzlO/WS5qcGc',
        githubUrl: 'https://github.com/purwanshi/calorie_prediction_ml_model.git'
      }
      ,
      {
        id: 11,
        title: 'Heatwave Prediction and Alert System',
        purpose: 'Predict heatwaves and send automated alerts to users',
        problem: 'Extreme temperatures pose health risks; early alerts are needed',
        howItWorks: 'Uses real-time weather data to predict heatwaves and triggers SMS alerts via Twilio for at-risk regions',
        techStack: ['Python', 'Twilio', 'Pandas', 'Weather API'],
        image: 'https://imgs.search.brave.com/4G0yK0F3w9CQwmy8c3ZzL_sV2Vn1gK8l3qg0AS6q5gA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc3F1YXJlc3Bh/Y2UuY29tL3RoYW1i/bmFpbC9pbWcvYmxv/Zy9pbWFnZXMvMjAy/NC8wNS9oZWF0d2F2/ZS1oZWF0LmpwZw',
        githubUrl: 'https://github.com/purwanshi/heatwave-prediction-and-alert-system.git'
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
        image: 'https://imgs.search.brave.com/bbpmViDws_Itur5nDMCcG2JOShd7aqxNp9yQsuk7eeg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/YmxhY2tkdWNrLmNv/bS9nbG9zc2FyeS93/aGF0LWlzLWNpY2Qv/X2pjcl9jb250ZW50/L3Jvb3Qvc3lub3Bz/eXNjb250YWluZXIv/Y29sdW1uXzE5NDYz/OTU0NTJfY28vY29s/UmlnaHQvaW1hZ2Vf/Y29weS5jb3JlaW1n/LnN2Zy8xNzI3MTk5/Mzc3MTk1L2NpY2Qu/c3Zn',
        githubUrl: 'https://github.com/yourusername/flask-deployment-pipeline'
      },
      {
        id: 8,
        title: 'GEN-AI-OPS',
        purpose: 'Revolutionize CI/CD with AI-generated code deployment',
        problem: 'Traditional CI/CD pipelines require manual code updates and deployment',
        howItWorks: 'Uses Generative AI to automatically generate Flask code, Autobuilds after every 5 minutes via Poll SCM ,triggers by pulling latest code from GitHub and  automate deployment',
        techStack: ['Generative AI', 'Jenkins', 'Flask', 'GitHub', 'Python'],
        image: 'https://imgs.search.brave.com/wb2Wx_8Z1p1SfVE1YyILK4V9jyqZZZs1JUbc2wVdvOA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA1Lzc0LzY0LzMy/LzM2MF9GXzU3NDY0/MzI2Nl82OFRuRXEz/TnFKeFBhTWp1ZUZV/VThmRmpSVzBOSzlO/WS5qcGc',
        githubUrl: 'https://github.com/purwanshi/GEN-AI--flaskops-pipeline.git'
      },
      {
        id: 10,
        title: '🔹 DevSecOps Pipeline with Jenkins, SonarQube, and Trivy',
        purpose: 'Implement comprehensive security-first CI/CD pipeline with automated code quality and vulnerability scanning',
        problem: 'Traditional CI/CD pipelines lack security integration, leading to vulnerabilities in production deployments',
        howItWorks: 'This project implements a CI/CD pipeline using Jenkins, integrating SonarQube for code quality analysis and Trivy for security vulnerability scanning. It automates code fetching from GitHub, security checks, and Docker-based deployment, ensuring secure and reliable application delivery.',
        techStack: ['Jenkins', 'SonarQube', 'Trivy', 'Docker', 'GitHub', 'Security Scanning'],
        image: 'https://imgs.search.brave.com/bbpmViDws_Itur5nDMCcG2JOShd7aqxNp9yQsuk7eeg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/YmxhY2tkdWNrLmNv/bS9nbG9zc2FyeS93/aGF0LWlzLWNpY2Qv/X2pjcl9jb250ZW50/L3Jvb3Qvc3lub3Bz/eXNjb250YWluZXIv/Y29sdW1uXzE5NDYz/OTU0NTJfY28vY29s/UmlnaHQvaW1hZ2Vf/Y29weS5jb3JlaW1n/LnN2Zy8xNzI3MTk5/Mzc3MTk1L2NpY2Qu/c3Zn',
        githubUrl: 'https://github.com/yourusername/devsecops-pipeline'
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
        image: 'https://imgs.search.brave.com/mx3rOAbuE9hvvHmA5QAo395p4cLKCjOtFnsw8bShEOI/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS12ZWN0b3Iv/cG9wdWxhci1zb2Np/YWwtbWVkaWEtY2ly/Y3VsYXItbG9nby1j/b2xsZWN0aW9uXzEz/NjEtMzQ5LmpwZz9z/ZW10PWFpc19oeWJy/aWQmdz03NDA',
        githubUrl: 'https://github.com/purwanshi/all_tech_launching_dashbaord.git'
      }
    ],
    'LLM & AI Automation': [
      {
        id: 5,
        title: 'Cozy Therapist',
        purpose: 'Provide personalized mental health support and mood enhancement',
        problem: 'Limited access to mental health resources and personalized therapy',
        howItWorks: 'AI chatbot built with Gradio provides mood-boosting suggestions with 55% uplift in 5-minute sessions through personalized recommendations',
        techStack: ['Gradio', 'Python', 'NLP', 'AI'],
        image: 'https://imgs.search.brave.com/Js8NHPHWKKY_ZzSXq7_tPStuDFWwUh0wpaX5h3D_6w8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9t/aWQtc2hvdC13b21h/bi10aGVyYXBpc3Qt/d2l0aC1jbGlwYm9h/cmRfMjMtMjE0ODc1/OTExMy5qcGc_c2Vt/dD1haXNfaHlicmlk/Jnc9NzQw',
        githubUrl: 'https://github.com/purwanshi/AI-projects.git'
      }
    ]
  };

  const headerText = "HERE IS THE SASS — LET'S CHECK OUT SOME PROJECTS!";

  const handleViewCode = (url: string) => {
    window.open(url, '_blank');
  };

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
                      <div className="mb-6">
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

                      {/* View Code Button */}
                      {project.githubUrl && (
                        <button
                          onClick={() => handleViewCode(project.githubUrl!)}
                          className="flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105"
                          style={{ background: '#F05454', color: '#DDDDDD' }}
                        >
                          <Code size={16} />
                          <span>View Code</span>
                          <ExternalLink size={16} />
                        </button>
                      )}
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