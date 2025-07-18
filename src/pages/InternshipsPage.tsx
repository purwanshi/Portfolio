import { useState, useEffect } from 'react';
import { Calendar, ChevronLeft, ChevronRight, Building, Clock, BookOpen } from 'lucide-react';

const InternshipsPage = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedInternship, setSelectedInternship] = useState<number | null>(null);
  const [isFlipping, setIsFlipping] = useState(false);

  const internships = [
    {
      position: 'Data Analyst Intern',
      company: 'NOQs Digital, Jaipur',
      duration: '1 Month',
      date: 'August 1 - September 30, 2023',
      summary: 'Created dynamic dashboards using Power BI with advanced data visualization techniques.',
      fullDescription: 'Developed comprehensive dashboards using Power BI with advanced features including filters, slicers, charts, and KPIs. Gained extensive expertise in data cleaning, transformation, and visualization techniques. Worked with complex datasets to create meaningful insights for business decision-making.',
      keyLearnings: ['Power BI Dashboard Development', 'Data Visualization', 'KPI Creation', 'Data Cleaning & Transformation'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      position: 'AWS Solution Architect Intern',
      company: 'Regex Software Pvt Ltd, Jaipur',
      duration: '1.5 Months',
      date: 'July 8 - August 23, 2024',
      summary: 'Architected cloud solutions using AWS services including EC2, Lambda, S3, VPC, IAM etc',
      fullDescription: 'Designed and implemented cloud infrastructure using AWS services including EC2, Lambda, IAM, MFA, VPC, and S3. Developed serverless solutions and explored advanced services like IoT, Machine Learning, SNS, and CloudWatch. Built scalable and secure cloud architectures following AWS best practices.',
              keyLearnings: ['AWS Cloud Architecture', 'Serverless Computing', 'Security', 'Storage', 'Networking', 'Monitoring', 'Cloud Fundamentals'],
      color: 'from-orange-500 to-red-500'
    },
    {
      position: 'AI/ML Development Intern',
      company: 'Next24Tech, Jaipur',
      duration: '2 Months',
      date: 'August 20 - October 20, 2024',
      summary: 'Built intelligent systems using OpenCV, CNN, and real-time communication APIs.',
      fullDescription: 'Developed AI/ML projects using OpenCV for computer vision, CNN for deep learning, and Twilio for real-time communication. Focused on image processing, pattern recognition, and real-time alert systems. Created intelligent applications that could process visual data and provide automated responses.',
      keyLearnings: ['Computer Vision', 'Deep Learning', 'Real-time Systems', 'API Integration'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      position: 'Azure-Devops Intern',
      company: 'Celebal Technologies, Jaipur',
      duration: '2 Months',
      date: 'May 19 - July 20, 2025',
      summary: 'I was responsible for managing cloud infrastructure, containerized applications, and CI/CD pipelines using Azure, Docker, Kubernetes, and Azure DevOps tools.',
      keyLearnings: ['Azure DevOps', 'Azure', 'Docker', 'Kubernetes', 'CI/CD pipeline'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      position: 'AI/ML Development Intern',
      company: 'Next24Tech, Jaipur',
      duration: '2 Months',
      date: 'August 20 - October 20, 2024',
      summary: 'Built intelligent systems using OpenCV, CNN, and real-time communication APIs.',
      fullDescription: 'Developed AI/ML projects using OpenCV for computer vision, CNN for deep learning, and Twilio for real-time communication. Focused on image processing, pattern recognition, and real-time alert systems. Created intelligent applications that could process visual data and provide automated responses.',
      keyLearnings: ['Computer Vision', 'Deep Learning', 'Real-time Systems', 'API Integration'],
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const nextPage = () => {
    if (currentPage < internships.length - 1) {
      setIsFlipping(true);
      setTimeout(() => {
        setCurrentPage(currentPage + 1);
        setIsFlipping(false);
      }, 300);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setIsFlipping(true);
      setTimeout(() => {
        setCurrentPage(currentPage - 1);
        setIsFlipping(false);
      }, 300);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (selectedInternship === null) {
        setIsFlipping(true);
        setTimeout(() => {
          setCurrentPage((prev) => (prev + 1) % internships.length);
          setIsFlipping(false);
        }, 300);
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [selectedInternship, internships.length]);

  const currentInternship = internships[currentPage];

  return (
    <div className="min-h-screen pt-16 relative overflow-hidden" style={{ background: '#222831' }}>
      {/* Background Elements */}
      <div className="absolute inset-0 wave-pattern opacity-5"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl lg:text-6xl font-bold glow-text wave-animation mb-4" style={{ color: '#DDDDDD' }}>
            Internship Calendar
          </h1>
          <p className="text-xl max-w-2xl mx-auto" style={{ color: '#DDDDDD' }}>
            Professional journey through hands-on learning experiences
          </p>
        </div>

        {/* Calendar-style Container */}
        <div className="max-w-4xl mx-auto">
          <div className="relative calendar-page">
            {/* Calendar Header */}
            <div className="backdrop-blur-sm rounded-t-xl p-6 glow-border" style={{ background: '#30475E' }}>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Calendar style={{ color: '#F05454' }} size={24} />
                  <h2 className="text-2xl font-bold" style={{ color: '#DDDDDD' }}>Professional Experience Calendar</h2>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="text-lg font-bold" style={{ color: '#F05454' }}>
                    {currentInternship.date}
                  </div>
                  <span className="text-sm" style={{ color: '#DDDDDD' }}>
                    {currentPage + 1} / {internships.length}
                  </span>
                </div>
              </div>
            </div>

            {/* Calendar Body */}
            <div className="backdrop-blur-sm rounded-b-xl p-8 glow-border border-t-0 calendar-flip" style={{ background: '#222831' }}>
              <div className="relative min-h-[500px]">
                {/* Navigation Buttons */}
                <button
                  onClick={prevPage}
                  disabled={currentPage === 0}
                  className={`absolute left-0 top-1/2 transform -translate-y-1/2 p-2 rounded-full ${
                    currentPage === 0 
                      ? 'cursor-not-allowed opacity-50' 
                      : 'hover:opacity-80'
                  } transition-all duration-300 z-10`}
                  style={{ background: currentPage === 0 ? '#30475E' : '#F05454', color: '#DDDDDD' }}
                >
                  <ChevronLeft size={24} />
                </button>

                <button
                  onClick={nextPage}
                  disabled={currentPage === internships.length - 1}
                  className={`absolute right-0 top-1/2 transform -translate-y-1/2 p-2 rounded-full ${
                    currentPage === internships.length - 1 
                      ? 'cursor-not-allowed opacity-50' 
                      : 'hover:opacity-80'
                  } transition-all duration-300 z-10`}
                  style={{ background: currentPage === internships.length - 1 ? '#30475E' : '#F05454', color: '#DDDDDD' }}
                >
                  <ChevronRight size={24} />
                </button>

                {/* Internship Card */}
                <div className={`px-12 transition-all duration-300 ${isFlipping ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
                  <div className="text-center mb-8">
                    <div className={`inline-block p-4 rounded-full bg-gradient-to-r ${currentInternship.color} mb-4`}>
                      <Building size={32} className="text-white" />
                    </div>
                    <h3 className="text-3xl font-bold mb-2" style={{ color: '#DDDDDD' }}>{currentInternship.position}</h3>
                    <p className="text-xl mb-4" style={{ color: '#DDDDDD' }}>{currentInternship.company}</p>
                    <div className="flex items-center justify-center space-x-4">
                      <div className="flex items-center space-x-2" style={{ color: '#F05454' }}>
                        <Clock size={18} />
                        <span>{currentInternship.duration}</span>
                      </div>
                      <div className="w-2 h-2 rounded-full" style={{ background: '#F05454' }}></div>
                      <span style={{ color: '#F05454' }}>{currentInternship.date}</span>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="rounded-lg p-6" style={{ background: '#30475E' }}>
                      <h4 className="text-lg font-semibold mb-3 flex items-center" style={{ color: '#DDDDDD' }}>
                        <BookOpen className="mr-2" size={18} />
                        Learning Summary
                      </h4>
                      <p className="leading-relaxed mb-4" style={{ color: '#DDDDDD' }}>
                        {selectedInternship === currentPage ? currentInternship.fullDescription : currentInternship.summary}
                      </p>
                      
                      {selectedInternship === currentPage && (
                        <div>
                          <h5 className="font-semibold mb-2" style={{ color: '#F05454' }}>Key Learnings:</h5>
                          <div className="grid grid-cols-2 gap-2">
                            {currentInternship.keyLearnings.map((learning, index) => (
                              <div key={index} className="px-3 py-1 rounded-full text-sm text-center" style={{ background: '#222831', color: '#DDDDDD' }}>
                                {learning}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="text-center">
                      <button
                        onClick={() => setSelectedInternship(selectedInternship === currentPage ? null : currentPage)}
                        className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                          selectedInternship === currentPage
                            ? 'hover:opacity-80'
                            : 'hover:opacity-90'
                        }`}
                        style={{ 
                          background: selectedInternship === currentPage ? '#30475E' : `linear-gradient(45deg, ${currentInternship.color.split(' ')[1]}, ${currentInternship.color.split(' ')[3]})`,
                          color: '#DDDDDD'
                        }}
                      >
                        {selectedInternship === currentPage ? 'Show Less' : 'Read Full Description'}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Page Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {internships.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsFlipping(true);
                  setTimeout(() => {
                    setCurrentPage(index);
                    setIsFlipping(false);
                  }, 300);
                }}
                className={`h-3 rounded-full transition-all duration-300 ${
                  index === currentPage ? 'w-8' : 'w-3 hover:opacity-80'
                }`}
                style={{ background: index === currentPage ? '#F05454' : '#30475E' }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InternshipsPage;