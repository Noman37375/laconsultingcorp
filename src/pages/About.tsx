import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Users, 
  BarChart, 
  MessageCircle,
  CheckCircle2,
  ArrowRight,
  HelpCircle
} from 'lucide-react';

export default function About() {
  const stats = [
    { number: "400+", label: "Global Customers" },
    { number: "100%", label: "Client Satisfaction" }
  ];

  const services = [
    "Predictive Analytics: Forecast future trends and customer behavior",
    "Data Integration: Connect and streamline your data across platforms",
    "Cloud Migration: Identify and prevent fraudulent activities",
    "Customer Success: Understand customer feedback and requirements"
  ];

  const faqs = [
    {
      question: "What services does LAC offer?",
      answer: "LAC provides a comprehensive range of services, including business analytics, AI/ML models, and implementation. Also including but not limited to data visualization, custom software development, SAP consultation, integration, and migration. Our goal is to help businesses unlock the full potential of their data and drive growth through technology-driven solutions."
    },
    {
      question: "How can LAC help my business leverage AI?",
      answer: "We help businesses implement AI solutions through careful assessment, strategic planning, and customized development. Our team ensures seamless integration with existing systems while maximizing ROI."
    },
    {
      question: "What is involved in a GA4 audit and implementation?",
      answer: "Our GA4 audit process includes a thorough review of your current analytics setup, identification of tracking gaps, and recommendations for improvement. Implementation involves setting up enhanced tracking, custom events, and ensuring data accuracy."
    },
    {
      question: "How does LAC approach custom software development?",
      answer: "We follow an agile methodology, working closely with clients to understand their specific needs and develop tailored solutions. Our process includes thorough planning, iterative development, and comprehensive testing."
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div 
        className="relative h-[400px] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")'
        }}
      >
        <div className="text-center text-white z-10 px-4">
          <h1 className="text-5xl font-bold mb-6">About Us</h1>
          <div className="inline-flex items-center justify-center space-x-2 text-sm bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
            <Link to="/" className="hover:text-blue-300 transition-colors">HOME</Link>
            <span>/</span>
            <span className="text-blue-300">ABOUT</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Company Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
              alt="Team collaboration"
              className="rounded-lg shadow-xl"
            />
          </div>
          <div>
            <h2 className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-2">
              ABOUT OUR COMPANY
            </h2>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              LAC: Where Innovation Meets Expertise
            </h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              At LAC, we've built more than a software house; we're a team of passionate innovators dedicated to empowering businesses with the transformative power of data and artificial intelligence (AI). We bridge the gap between complex data insights, technical solutions, and real business outcomes.
            </p>
            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat) => (
                <div key={stat.number} className="text-center p-6 bg-gray-50 rounded-lg">
                  <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Our Story */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Story: Rooted in Data, Driven by Progress</h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            LAC's journey began with a shared vision: to unlock the transformative potential of data. Recognizing the ever-growing importance of data analytics and AI in today's business landscape, we assembled a team of experts in data science, software development, analytics specialists, web developers, and SAP consultants - each with a deep understanding of their domain and a shared commitment to excellence.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Today, we continue to evolve and innovate, staying ahead of technological trends while maintaining our core focus on delivering tangible business value to our clients.
          </p>
        </div>

        {/* Our Approach */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Approach: A Collaborative Symphony</h2>
          <p className="text-gray-600 leading-relaxed">
            At LAC, we believe in the power of collaboration. We work closely with our clients, taking time to understand their unique challenges and objectives. This collaborative approach ensures that every solution we deliver is tailored to their specific needs.
          </p>
        </div>

        {/* Services Overview */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Services: A Spectrum of Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="flex items-start space-x-4">
                <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <p className="text-gray-600">{service}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-gray-50 rounded-xl p-12">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-8">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200">
                <div className="flex items-start space-x-4">
                  <HelpCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}