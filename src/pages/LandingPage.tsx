import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, ArrowRight } from 'lucide-react';
import TypingEffect from '../components/TypingEffect';
import resumeImg from '../../resume.jpg';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const LandingPage = () => {
  const jobTitles = [
    'AWS Solution Architect',
    'Lang-chain',
    'GEN-AI-OPS',
    'DevOps',
    'ML-OPS'
  ];

  const handleDownloadResume = async () => {
    // Create PDF content directly
    const pdf = new jsPDF('p', 'pt', 'a4');
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();
    const margin = 40;
    let yPosition = margin;

    // Add profile picture
    try {
      const img = new Image();
      img.crossOrigin = 'anonymous';
      img.src = resumeImg;
      await new Promise((resolve, reject) => {
        img.onload = resolve;
        img.onerror = reject;
      });
      
      // Add image to PDF (positioned on the right side of the header)
      const imgWidth = 150;
      const imgHeight = 150;
      const imgX = pageWidth - margin - imgWidth;
      const imgY = margin - 20;
      pdf.addImage(img, 'JPEG', imgX, imgY, imgWidth, imgHeight);
    } catch (error) {
      console.log('Could not load image, continuing without it');
    }

    // Set font styles
    pdf.setFontSize(24);
    pdf.setFont('helvetica', 'bold');
    pdf.text('Purwanshi Mishra', margin, yPosition);
    yPosition += 35;

    // Contact info
    pdf.setFontSize(12);
    pdf.setFont('helvetica', 'normal');
    pdf.text('mishrapurwanshi449@gmail.com', margin, yPosition);
    yPosition += 22;
    pdf.text('+91 9571797661', margin, yPosition);
    yPosition += 22;
    pdf.text('https://github.com/purwanshi', margin, yPosition);
    yPosition += 22;
    pdf.text('https://www.linkedin.com/in/purwanshi-mishra-028013222', margin, yPosition);
    yPosition += 35;

    // Professional Summary
    pdf.setFontSize(16);
    pdf.setFont('helvetica', 'bold');
    pdf.text('Professional Summary', margin, yPosition);
    yPosition += 20;
    pdf.setFontSize(11);
    pdf.setFont('helvetica', 'normal');
    const summaryText = 'Passionate about cloud architecture, DevOps, and AI/ML technologies. Building scalable solutions and innovative applications.';
    const summaryLines = pdf.splitTextToSize(summaryText, pageWidth - 2 * margin);
    pdf.text(summaryLines, margin, yPosition);
    yPosition += summaryLines.length * 15 + 20;

    // Skills
    pdf.setFontSize(16);
    pdf.setFont('helvetica', 'bold');
    pdf.text('Skills & Tech Stack', margin, yPosition);
    yPosition += 20;
    pdf.setFontSize(11);
    pdf.setFont('helvetica', 'normal');
    const skills = ['AWS', 'Python', 'DevOps', 'Machine Learning', 'React', 'Docker', 'Jenkins', 'GitHub', 'Azure', 'Kubernetes', 'OpenCV', 'TensorFlow', 'CI/CD', 'LLM', 'AI/ML', 'OOPs', 'Agile Development'];
    let xPos = margin;
    skills.forEach(skill => {
      const skillWidth = pdf.getTextWidth(skill);
      if (xPos + skillWidth > pageWidth - margin) {
        xPos = margin;
        yPosition += 15;
      }
      pdf.text(skill, xPos, yPosition);
      xPos += skillWidth + 10;
    });
    yPosition += 30;

    // Projects
    pdf.setFontSize(16);
    pdf.setFont('helvetica', 'bold');
    pdf.text('Selected Projects', margin, yPosition);
    yPosition += 20;
    pdf.setFontSize(11);
    pdf.setFont('helvetica', 'normal');

    const projects = [
      { category: 'Cloud Projects', items: ['Automated S3 Deduplication System: Optimize cloud storage costs and improve data management efficiency'] },
      { category: 'Machine Learning Projects', items: [
        'Road Lane Detection System: Enhance autonomous vehicle navigation and driver safety',
        'Plant Disease Prediction: Help farmers identify crop diseases early for better yield',
        'Alerting System using Hand Gesture Analysis: Provide emergency alert system through gesture recognition',
        'Calorie Prediction App: Help users track and predict calories burned during exercise'
      ]},
      { category: 'DevOps Projects', items: [
        'Flask App Deployment Pipeline: Automate application deployment with comprehensive CI/CD',
        'GEN-AI-OPS: Revolutionize CI/CD with AI-generated code deployment'
      ]},
      { category: 'Python Projects', items: [
        'SyncFury: Automate social media and communication tasks'
      ]},
      { category: 'LLM & AI Automation', items: [
        'Cozy Therapist: Provide personalized mental health support and mood enhancement'
      ]}
    ];

    projects.forEach(project => {
      pdf.setFontSize(12);
      pdf.setFont('helvetica', 'bold');
      pdf.text(project.category, margin, yPosition);
      yPosition += 15;
      pdf.setFontSize(10);
      pdf.setFont('helvetica', 'normal');
      project.items.forEach(item => {
        const lines = pdf.splitTextToSize(item, pageWidth - 2 * margin);
        pdf.text(lines, margin + 10, yPosition);
        yPosition += lines.length * 12;
        if (yPosition > pageHeight - 100) {
          pdf.addPage();
          yPosition = margin;
        }
      });
      yPosition += 10;
    });

    // Achievements
    if (yPosition > pageHeight - 150) {
      pdf.addPage();
      yPosition = margin;
    }
    pdf.setFontSize(16);
    pdf.setFont('helvetica', 'bold');
    pdf.text('Achievements', margin, yPosition);
    yPosition += 20;
    pdf.setFontSize(11);
    pdf.setFont('helvetica', 'normal');
    pdf.text('• AWS Cloud Practitioner Badge', margin, yPosition);
    yPosition += 15;
    pdf.text('• Patent Pending: Automatic Foldable Solar Powered Smart Tent', margin, yPosition);
    yPosition += 15;
    pdf.text('• FCF - Introduction to the Threat Landscape 3.0 Self-Paced', margin, yPosition);
    yPosition += 15;
    pdf.text('• FCF - Getting Started in Cybersecurity 3.0 Self-Paced', margin, yPosition);
    yPosition += 30;

    // Internships
    if (yPosition > pageHeight - 200) {
      pdf.addPage();
      yPosition = margin;
    }
    pdf.setFontSize(16);
    pdf.setFont('helvetica', 'bold');
    pdf.text('Internships', margin, yPosition);
    yPosition += 20;
    pdf.setFontSize(11);
    pdf.setFont('helvetica', 'normal');
    
    const internships = [
      { position: 'Data Analyst Intern', company: 'NOQs Digital, Jaipur', date: 'August 1 - September 30, 2023', summary: 'Created dynamic dashboards with advanced data visualization techniques.' },
      { position: 'AWS Solution Architect Intern', company: 'Regex Software Pvt Ltd, Jaipur', date: 'July 8 - August 23, 2024', summary: 'Architected cloud solutions using AWS services including EC2, Lambda, S3, VPC, IAM etc' },
      { position: 'AI/ML Development Intern', company: 'Next24Tech, Jaipur', date: 'August 20 - October 20, 2024', summary: 'Built intelligent systems using OpenCV, CNN, and real-time communication APIs.' },
      { position: 'Azure-Devops Intern', company: 'Celebal Technologies, Jaipur', date: 'May 19 - July 20, 2025', summary: 'Managed cloud infrastructure, containerized applications, and CI/CD pipelines using Azure, Docker, Kubernetes, and Azure DevOps tools.' }
    ];

    internships.forEach(internship => {
      pdf.setFontSize(11);
      pdf.setFont('helvetica', 'bold');
      pdf.text(`${internship.position}, ${internship.company} (${internship.date})`, margin, yPosition);
      yPosition += 15;
      pdf.setFontSize(10);
      pdf.setFont('helvetica', 'normal');
      const summaryLines = pdf.splitTextToSize(internship.summary, pageWidth - 2 * margin);
      pdf.text(summaryLines, margin + 10, yPosition);
      yPosition += summaryLines.length * 12 + 10;
      if (yPosition > pageHeight - 100) {
        pdf.addPage();
        yPosition = margin;
      }
    });

    // Save the PDF
    pdf.save('Purwanshi_Mishra_Resume.pdf');
  };

  return (
    <div className="min-h-screen pt-16 relative overflow-hidden" style={{ background: '#222831' }}>
      {/* Background Animation */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-20 w-32 h-32 rounded-full rotating-bg" style={{ background: 'rgba(48, 71, 94, 0.2)' }}></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 rounded-full rotating-bg" style={{ background: 'rgba(240, 84, 84, 0.2)', animationDelay: '10s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 rounded-full rotating-bg" style={{ background: 'rgba(48, 71, 94, 0.2)', animationDelay: '5s' }}></div>
      </div>

      {/* Wave Pattern */}
      <div className="absolute inset-0 wave-pattern opacity-10"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-screen flex items-center">
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
            <div className="pt-4 flex space-x-4 items-center">
              <Link
                to="/projects"
                className="inline-flex items-center space-x-2 px-8 py-4 rounded-full text-white font-semibold transition-all duration-300 floating-animation glow-border"
                style={{ background: 'linear-gradient(45deg, #F05454, #30475E)' }}
              >
                <span>View Projects</span>
                <ArrowRight size={20} />
              </Link>
              {/* Project Counter Badge */}
              <span className="inline-block px-4 py-2 rounded-full text-sm font-bold bg-gradient-to-r from-green-400 to-blue-500 text-white shadow-md ml-2">
                10+ Projects
              </span>
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center space-x-2 px-8 py-4 rounded-full text-white font-semibold transition-all duration-300 floating-animation glow-border"
                style={{ background: 'linear-gradient(45deg, #30475E, #F05454)' }}
              >
                <span>Download Resume</span>
              </a>
              <Link
                to="/resume"
                className="inline-flex items-center space-x-2 px-8 py-4 rounded-full text-white font-semibold transition-all duration-300 floating-animation glow-border"
                style={{ background: 'linear-gradient(45deg, #F05454, #30475E)' }}
              >
                <span>View Resume</span>
              </Link>
            </div>
          </div>

          {/* Right Column - Profile Picture */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden glow-border p-2">
                <img
                  src={resumeImg}
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