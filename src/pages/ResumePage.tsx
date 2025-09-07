import React from 'react';
import resumeImg from '../../resume.jpg';

const projects = {
  'Cloud Projects': [
    {
      id: 1,
      title: 'Automated S3 Deduplication System',
      purpose: 'Optimize cloud storage costs and improve data management efficiency',
      githubUrl: 'https://github.com/yourusername/s3-deduplication-system'
    }
  ],
  'Machine Learning Projects': [
    {
      id: 2,
      title: 'Road Lane Detection System',
      purpose: 'Enhance autonomous vehicle navigation and driver safety',
      githubUrl: 'https://github.com/yourusername/lane-detection-system'
    },
    {
      id: 3,
      title: 'Plant Disease Prediction',
      purpose: 'Help farmers identify crop diseases early for better yield',
      githubUrl: 'https://github.com/yourusername/plant-disease-prediction'
    },
    {
      id: 4,
      title: 'Alerting System using Hand Gesture Analysis',
      purpose: 'Provide emergency alert system through gesture recognition',
      githubUrl: 'https://github.com/yourusername/gesture-alert-system'
    },
    {
      id: 6,
      title: 'Calorie Prediction App',
      purpose: 'Help users track and predict calories burned during exercise',
      githubUrl: 'https://github.com/yourusername/calorie-prediction-app'
    }
  ],
  'DevOps Projects': [
    {
      id: 7,
      title: 'Flask App Deployment Pipeline',
      purpose: 'Automate application deployment with comprehensive CI/CD',
      githubUrl: 'https://github.com/yourusername/flask-deployment-pipeline'
    },
    {
      id: 8,
      title: 'GEN-AI-OPS',
      purpose: 'Revolutionize CI/CD with AI-generated code deployment',
      githubUrl: 'https://github.com/yourusername/gen-ai-ops'
    }
  ],
  'Python Projects': [
    {
      id: 9,
      title: 'SyncFury',
      purpose: 'Automate social media and communication tasks',
      githubUrl: 'https://github.com/yourusername/syncfury'
    }
  ],
  'LLM & AI Automation': [
    {
      id: 5,
      title: 'Cozy Therapist',
      purpose: 'Provide personalized mental health support and mood enhancement',
      githubUrl: 'https://github.com/yourusername/cozy-therapist'
    }
  ]
};

const internships = [
  {
    position: 'Data Analyst Intern',
    company: 'NOQs Digital, Jaipur',
    duration: '1 Month',
    date: 'August 1 - September 30, 2023',
    summary: 'Created dynamic dashboards with advanced data visualization techniques.'
  },
  {
    position: 'AWS Solution Architect Intern',
    company: 'Regex Software Pvt Ltd, Jaipur',
    duration: '1.5 Months',
    date: 'July 8 - August 23, 2024',
    summary: 'Architected cloud solutions using AWS services including EC2, Lambda, S3, VPC, IAM etc'
  },
  {
    position: 'AI/ML Development Intern',
    company: 'Next24Tech, Jaipur',
    duration: '2 Months',
    date: 'August 20 - October 20, 2024',
    summary: 'Built intelligent systems using OpenCV, CNN, and real-time communication APIs.'
  },
  {
    position: 'Azure-Devops Intern',
    company: 'Celebal Technologies, Jaipur',
    duration: '2 Months',
    date: 'May 19 - July 20, 2025',
    summary: 'Managed cloud infrastructure, containerized applications, and CI/CD pipelines using Azure, Docker, Kubernetes, and Azure DevOps tools.'
  }
];

const ResumePage = () => {
  return (
    <div style={{ background: '#fff', color: '#222', minHeight: '100vh', fontFamily: 'Arial, sans-serif', padding: '32px 0' }}>
      <div style={{ maxWidth: 700, margin: '0 auto', background: '#fff', border: '1px solid #eee', borderRadius: 8, boxShadow: '0 2px 8px rgba(0,0,0,0.04)', padding: 32 }}>
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: 24 }}>
          <img src={resumeImg} alt="Purwanshi Mishra" style={{ width: 96, height: 96, borderRadius: '50%', objectFit: 'cover', marginRight: 24, border: '2px solid #eee' }} />
          <div>
            <h1 style={{ fontSize: 32, fontWeight: 700, margin: 0 }}>Purwanshi Mishra</h1>
            <div style={{ fontSize: 16, margin: '8px 0' }}>mishrapurwanshi449@gmail.com</div>
            <div style={{ fontSize: 16, margin: '8px 0' }}>+91 9571797661</div>
            <div style={{ fontSize: 14 }}>
              <div style={{ marginBottom: 4 }}>https://github.com/purwanshi</div>
              <div>https://www.linkedin.com/in/purwanshi-mishra-028013222</div>
            </div>
          </div>
        </div>
        <hr style={{ margin: '24px 0' }} />
        {/* Summary */}
        <div style={{ marginBottom: 24 }}>
          <h2 style={{ fontSize: 20, fontWeight: 600, margin: 0 }}>Professional Summary</h2>
          <p style={{ margin: '8px 0 0 0', fontSize: 15 }}>
            Passionate about cloud architecture, DevOps, and AI/ML technologies. Building scalable solutions and innovative applications.
          </p>
        </div>
        <hr style={{ margin: '24px 0' }} />
        {/* Skills */}
        <div style={{ marginBottom: 24 }}>
          <h2 style={{ fontSize: 20, fontWeight: 600, margin: 0 }}>Skills & Tech Stack</h2>
          <ul style={{ display: 'flex', flexWrap: 'wrap', gap: 8, listStyle: 'none', padding: 0, margin: '8px 0 0 0', fontSize: 15 }}>
            <li>AWS</li>
            <li>Python</li>
            <li>DevOps</li>
            <li>Machine Learning</li>
            <li>React</li>
            <li>Docker</li>
            <li>Jenkins</li>
            <li>GitHub</li>
            <li>Azure</li>
            <li>Kubernetes</li>
            <li>OpenCV</li>
            <li>TensorFlow</li>
            <li>CI/CD</li>
            <li>LLM</li>
            <li>AI</li>
            <li>OOPs</li>
            <li>Agile Development</li>
          </ul>
        </div>
        <hr style={{ margin: '24px 0' }} />
        {/* Projects */}
        <div style={{ marginBottom: 24 }}>
          <h2 style={{ fontSize: 20, fontWeight: 600, margin: 0 }}>Selected Projects</h2>
          {Object.entries(projects).map(([category, projs]) => (
            <div key={category} style={{ margin: '12px 0' }}>
              <h3 style={{ fontSize: 16, fontWeight: 600, margin: 0 }}>{category}</h3>
              <ul style={{ margin: '4px 0 0 16px', fontSize: 15 }}>
                {projs.map((proj) => (
                  <li key={proj.id} style={{ marginBottom: 2 }}>
                    <span style={{ fontWeight: 500 }}>{proj.title}</span>: {proj.purpose}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <hr style={{ margin: '24px 0' }} />
        {/* Achievements */}
        <div style={{ marginBottom: 24 }}>
          <h2 style={{ fontSize: 20, fontWeight: 600, margin: 0 }}>Achievements</h2>
          <ul style={{ margin: '8px 0 0 16px', fontSize: 15 }}>
            <li>AWS Cloud Practitioner Badge</li>
            <li>Patent Pending: Automatic Foldable Solar Powered Smart Tent</li>
            <li>FCF - Introduction to the Threat Landscape 3.0 Self-Paced</li>
            <li>FCF - Getting Started in Cybersecurity 3.0 Self-Paced</li>
          </ul>
        </div>
        <hr style={{ margin: '24px 0' }} />
        {/* Internships */}
        <div style={{ marginBottom: 0 }}>
          <h2 style={{ fontSize: 20, fontWeight: 600, margin: 0 }}>Internships</h2>
          <ul style={{ margin: '8px 0 0 16px', fontSize: 15 }}>
            {internships.map((internship, index) => (
              <li key={index} style={{ marginBottom: 4 }}>
                <span style={{ fontWeight: 500 }}>{internship.position}</span>, {internship.company} ({internship.date})
                <div style={{ fontSize: 14, color: '#666', marginLeft: 16 }}>{internship.summary}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ResumePage; 