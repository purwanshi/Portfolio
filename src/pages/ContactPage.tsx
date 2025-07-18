import React, { useState } from 'react';
import { Mail, Send, CheckCircle, User, MessageSquare } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true);
      setIsSubmitting(false);
      setFormData({ name: '', email: '', message: '' });
    }, 1500);
  };

  return (
    <div className="min-h-screen pt-16 relative overflow-hidden" style={{ background: '#222831' }}>
      {/* Background Elements */}
      <div className="absolute inset-0 wave-pattern opacity-5"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl lg:text-6xl font-bold glow-text wave-animation mb-4" style={{ color: '#DDDDDD' }}>
            Get in Touch
          </h1>
          <p className="text-xl max-w-2xl mx-auto" style={{ color: '#DDDDDD' }}>
            Let's discuss opportunities and collaborate on exciting projects
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {!isSubmitted ? (
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-gray-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative backdrop-blur-sm rounded-2xl glow-border p-8" style={{ background: '#30475E' }}>
                {/* Mailbox Icon */}
                <div className="text-center mb-8">
                  <div className="inline-block p-6 rounded-full floating-animation" style={{ background: 'linear-gradient(45deg, #F05454, #30475E)' }}>
                    <Mail size={48} className="text-white" />
                  </div>
                  <h2 className="text-2xl font-bold mt-4" style={{ color: '#DDDDDD' }}>Send a Message</h2>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Field */}
                  <div className="relative">
                    <label htmlFor="name" className="block text-sm font-medium mb-2" style={{ color: '#DDDDDD' }}>
                      Name
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2" style={{ color: '#F05454' }} size={20} />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full pl-12 pr-4 py-3 border rounded-lg focus:ring-2 focus:outline-none transition-all duration-300 placeholder-gray-400"
                        style={{ 
                          background: '#222831', 
                          borderColor: '#F05454', 
                          color: '#DDDDDD',
                          focusRingColor: '#F05454'
                        }}
                        placeholder="Your full name"
                      />
                    </div>
                  </div>

                  {/* Email Field */}
                  <div className="relative">
                    <label htmlFor="email" className="block text-sm font-medium mb-2" style={{ color: '#DDDDDD' }}>
                      Email
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2" style={{ color: '#F05454' }} size={20} />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full pl-12 pr-4 py-3 border rounded-lg focus:ring-2 focus:outline-none transition-all duration-300 placeholder-gray-400"
                        style={{ 
                          background: '#222831', 
                          borderColor: '#F05454', 
                          color: '#DDDDDD'
                        }}
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  {/* Message Field */}
                  <div className="relative">
                    <label htmlFor="message" className="block text-sm font-medium mb-2" style={{ color: '#DDDDDD' }}>
                      Message
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-4" style={{ color: '#F05454' }} size={20} />
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full pl-12 pr-4 py-3 border rounded-lg focus:ring-2 focus:outline-none transition-all duration-300 placeholder-gray-400 resize-none"
                        style={{ 
                          background: '#222831', 
                          borderColor: '#F05454', 
                          color: '#DDDDDD'
                        }}
                        placeholder="Tell me about your project or opportunity..."
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full flex items-center justify-center space-x-2 px-8 py-4 rounded-lg font-semibold text-white transition-all duration-300 ${
                        isSubmitting
                          ? 'cursor-not-allowed opacity-50'
                          : 'floating-animation glow-border hover:opacity-90'
                      }`}
                      style={{ background: isSubmitting ? '#30475E' : 'linear-gradient(45deg, #F05454, #30475E)' }}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <Send size={20} />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          ) : (
            // Success Message
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative backdrop-blur-sm rounded-2xl glow-border p-8 text-center" style={{ background: '#30475E' }}>
                <div className="inline-block p-6 rounded-full bg-gradient-to-r from-green-500 to-teal-500 floating-animation mb-6">
                  <CheckCircle size={48} className="text-white" />
                </div>
                <h2 className="text-3xl font-bold mb-4" style={{ color: '#DDDDDD' }}>Message Sent!</h2>
                <p className="text-lg mb-8" style={{ color: '#DDDDDD' }}>
                  Thank you for reaching out. She will be in contact with you soon.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-8 py-3 font-semibold rounded-lg transition-all duration-300 hover:opacity-90"
                  style={{ background: 'linear-gradient(45deg, #F05454, #30475E)', color: '#DDDDDD' }}
                >
                  Send Another Message
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Additional Contact Information */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-4 px-8 py-4 rounded-full glow-border" style={{ background: 'rgba(240, 84, 84, 0.2)' }}>
            <Mail style={{ color: '#F05454' }} size={24} />
            <span className="text-lg font-medium" style={{ color: '#DDDDDD' }}>mishrapurwanshi449@gmail.com</span>
            <Mail style={{ color: '#F05454' }} size={24} />
          </div>
          <div className="mt-4 inline-flex items-center space-x-4 px-8 py-4 rounded-full glow-border" style={{ background: 'rgba(240, 84, 84, 0.2)' }}>
            <span className="text-lg font-medium" style={{ color: '#DDDDDD' }}>+91 9571797661</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;