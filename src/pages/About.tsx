import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Users, 
  BarChart, 
  MessageCircle,
  CheckCircle2,
  ArrowRight,
  HelpCircle,
  ChevronDown,
  PieChart,
  Network,
  Globe
} from 'lucide-react';

export default function About() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const stats = [
    { 
      number: "400+", 
      label: "Global Clients",
      icon: Globe,
      gradient: "from-[#0073C6] to-[#00D1D1]"
    },
    { 
      number: "100%", 
      label: "Client Satisfaction",
      icon: CheckCircle2,
      gradient: "from-green-500 to-emerald-500"
    }
  ];

  const aiSolutions = [
    "Predictive Analytics: Forecast future trends and customer behavior",
    "Demand Forecasting: Optimize inventory management and avoid stockouts",
    "Fraud Detection: Identify and prevent fraudulent activities",
    "Sentiment Analysis: Understand customer feedback and brand perception"
  ];

  const differentiators = [
    {
      title: "Data-Centric Philosophy",
      description: "Data is the cornerstone of every project we undertake. We utilize cutting-edge AI models and analytical tools to extract meaningful insights from your data, regardless of its format or complexity."
    },
    {
      title: "Website & GA4 Expertise",
      description: "In today's digital landscape, a strong online presence is critical. Our team of web development experts creates user-friendly, high-performing websites that drive results. Additionally, we offer comprehensive GA4 audits."
    },
    {
      title: "Data Visualization for Impact",
      description: "Data is powerful, but its presentation unlocks its true potential. Our team transforms complex data sets into compelling visuals, making insights clear and actionable for all levels within your organization."
    },
    {
      title: "SAP Services",
      description: "For businesses utilizing SAP solutions, we offer a range of services to optimize their systems and unlock their full potential. Our SAP consultants have extensive experience in various SAP modules."
    }
  ];

  const faqs = [
    {
      question: "What services does LAC offer?",
      answer: "LAC provides a comprehensive range of services, including Google Analytics 4 (GA4) audits and implementation, data tracking and visualization, AI integration, custom software development, and SAP customization, integration, and migration. Our goal is to help businesses unlock the full potential of their data and drive growth through innovative solutions."
    },
    {
      question: "How can LAC help my business leverage AI?",
      answer: "Our AI specialists can integrate AI into various aspects of your business to automate tasks, enhance decision-making, and gain a competitive edge. We offer solutions for predictive analytics, demand forecasting, fraud detection, and sentiment analysis, helping you anticipate market shifts, optimize operations, and understand customer behavior."
    },
    {
      question: "What is involved in a GA4 audit and implementation?",
      answer: "A GA4 audit ensures that you are capturing the right data and maximizing the value of your website analytics. Our team will identify any gaps in your data collection and configuration, provide actionable recommendations, and help you implement GA4 smoothly and efficiently. This enables you to gain deeper insights into your website traffic and user behavior."
    },
    {
      question: "How does LAC approach custom software development?",
      answer: "We begin by understanding your unique business needs and goals. Our team of skilled developers then creates custom software solutions tailored to streamline your processes, boost efficiency, and empower your business. We focus on delivering high-performing, user-friendly software that meets your specific requirements."
    },
    {
      question: "What makes LAC different from other data and software service providers?",
      answer: "At LAC, we combine decades of industry experience with a collaborative approach to deliver tailored solutions. Our team of experts is dedicated to transforming data into strategic assets and actionable insights. We prioritize transparency, open communication, and continuous innovation to ensure our clients achieve their business objectives."
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image & Overlays */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed transform scale-105"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0073C6]/30 to-[#00D1D1]/30 mix-blend-multiply" />
        
        {/* Animated Circles */}
        <div className="absolute inset-0">
          <div className="absolute -left-20 top-20 w-72 h-72 bg-[#0073C6]/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -right-20 bottom-20 w-72 h-72 bg-[#00D1D1]/20 rounded-full blur-3xl animate-pulse delay-500" />
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-grid-white/[0.03]" />
        
        {/* Content */}
        <div className="relative text-center text-white z-10 px-4 max-w-5xl mx-auto">
          <div className="space-y-8">
            <div className="inline-flex items-center justify-center space-x-2 text-sm bg-white/10 px-6 py-3 rounded-full backdrop-blur-sm border border-white/10">
              <Link to="/" className="hover:text-[#00D1D1] transition-colors">HOME</Link>
              <span className="text-white/40">/</span>
              <span className="text-[#00D1D1]">ABOUT</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold font-poppins">
              About Us
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed font-light">
              Empowering businesses through innovative data solutions and cutting-edge technology
            </p>
          </div>
        </div>

        {/* Bottom Gradient */}
        <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Company Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-[#0073C6] to-[#00D1D1] rounded-2xl opacity-10 blur-xl group-hover:opacity-20 transition-opacity duration-500" />
            <img 
              src="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
              alt="Team collaboration"
              className="relative rounded-2xl shadow-2xl transform group-hover:scale-[1.02] transition-transform duration-500"
            />
          </div>
          <div>
            <h2 className="text-sm font-semibold text-[#0073C6] uppercase tracking-wide mb-3 animate-fade-in">
              ABOUT OUR COMPANY
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 font-poppins leading-tight animate-slide-up">
              LAC: Where Innovation Meets
              <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-[#0073C6] to-[#00D1D1] animate-gradient">
                Expertise
              </span>
            </h3>
            <p className="text-gray-600 mb-10 leading-relaxed text-lg md:text-xl animate-fade-in-up">
              At LAC, we've built more than a software house; we're a team of passionate innovators dedicated to empowering businesses with the transformative power of data and artificial intelligence (AI).
            </p>
            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat) => (
                <div key={stat.number} className="relative group transform hover:scale-105 transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0073C6] to-[#00D1D1] rounded-xl opacity-5 group-hover:opacity-15 transition-opacity duration-300 blur-lg" />
                  <div className="relative p-6 text-center rounded-xl bg-white shadow-xl border border-gray-100 hover:border-[#0073C6]/30 transition-all duration-300">
                    <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#0073C6] to-[#00D1D1] mb-3 group-hover:scale-110 transition-transform duration-300">
                      {stat.number}
                    </div>
                    <div className="text-gray-600 font-medium group-hover:text-[#0073C6] transition-colors duration-300">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Our Story Section */}
        <div className="mb-24 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-[#0073C6]/5 to-[#00D1D1]/5 rounded-3xl" />
          <div className="relative p-12 rounded-3xl">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 font-poppins">
              Our Story: 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0073C6] to-[#00D1D1]">
                Rooted in Data, Driven by Progress
              </span>
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg mb-6">
              LAC's journey began with a shared vision: to harness the transformative potential of data. Recognizing the ever-growing importance of data analysis and interpretation in today's information-driven world, we assembled a team of exceptional professionals – data scientists, data analysts, AI specialists, web developers, and SAP consultants – each with a deep understanding of their respective fields and a shared commitment to excellence.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              At LAC, we believe in the power of collaboration. We work closely with our clients, taking the time to understand their unique challenges and objectives. This collaborative approach ensures that every solution we deliver is tailored to their specific needs.
            </p>
          </div>
        </div>

        {/* What Sets Us Apart */}
        <div className="mb-24 relative overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0">
            <div className="absolute -left-20 top-20 w-72 h-72 bg-[#0073C6]/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute -right-20 bottom-20 w-72 h-72 bg-[#00D1D1]/10 rounded-full blur-3xl animate-pulse delay-500" />
          </div>

          <div className="relative">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 font-poppins">
              What Sets Us
              <span className="relative">
                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-[#0073C6] to-[#00D1D1]"> Apart</span>
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#0073C6] to-[#00D1D1] rounded-full transform scale-x-0 animate-expand" />
              </span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {differentiators.map((diff, index) => (
                <div 
                  key={index} 
                  className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
                >
                  {/* Card Background Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0073C6] to-[#00D1D1] opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500" />
                  
                  {/* Top Border Gradient */}
                  <div className="h-1 w-full bg-gradient-to-r from-[#0073C6] to-[#00D1D1] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                  
                  <div className="p-8">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-r from-[#0073C6] to-[#00D1D1] transform group-hover:scale-110 transition-transform duration-500 shadow-lg">
                        {index === 0 && <Brain className="w-6 h-6 text-white" />}
                        {index === 1 && <BarChart className="w-6 h-6 text-white" />}
                        {index === 2 && <PieChart className="w-6 h-6 text-white" />}
                        {index === 3 && <Network className="w-6 h-6 text-white" />}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#0073C6] transition-colors duration-300">
                          {diff.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                          {diff.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Hover Effect Corner */}
                  <div className="absolute -right-12 -bottom-12 w-24 h-24 bg-gradient-to-r from-[#0073C6] to-[#00D1D1] rounded-full opacity-0 group-hover:opacity-10 transform scale-0 group-hover:scale-100 transition-all duration-500" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* AI Solutions */}
        <div className="mb-24">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 font-poppins text-center">
            Artificial Intelligence
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0073C6] to-[#00D1D1] block mt-2">
              Solutions
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {aiSolutions.map((solution, index) => (
              <div key={index} className="flex items-start space-x-4 group">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-r from-[#0073C6] to-[#00D1D1] group-hover:scale-110 transition-transform duration-300">
                  <CheckCircle2 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-gray-600 text-lg leading-relaxed group-hover:translate-x-2 transition-transform duration-300">
                    {solution}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* The LAC Difference */}
        <div className="rounded-3xl bg-gradient-to-r from-[#0073C6]/5 to-[#00D1D1]/5 p-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12 font-poppins">
            The LAC Difference
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Personalized Service</h3>
              <p className="text-gray-600 leading-relaxed">
                We believe in building strong relationships with our clients. Our team takes the time to understand your specific needs and challenges, ensuring our solutions are tailored to address them effectively.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Industry Expertise</h3>
              <p className="text-gray-600 leading-relaxed">
                We have extensive experience working with businesses across various industries, allowing us to understand the unique challenges and opportunities within your sector.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Transparency & Communication</h3>
              <p className="text-gray-600 leading-relaxed">
                We believe in open communication. We keep you informed throughout every step of the process, ensuring you have a clear understanding of our progress and can make informed decisions.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Continuous Innovation</h3>
              <p className="text-gray-600 leading-relaxed">
                The world of technology is constantly evolving, and so are we. We stay at the forefront of industry trends and innovations to deliver cutting-edge solutions that drive success.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="pt-24 pb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4 font-poppins">
            Most Common Questions
            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-[#0073C6] to-[#00D1D1]">
              About Our Services
            </span>
          </h2>
          <div className="mt-12 max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
              >
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                  className="w-full text-left p-6 focus:outline-none"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-gradient-to-r from-[#0073C6] to-[#00D1D1] group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                        <HelpCircle className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">{faq.question}</h3>
                    </div>
                    <div className={`transform transition-transform duration-300 ${openFaqIndex === index ? 'rotate-180' : ''}`}>
                      <ChevronDown className="w-5 h-5 text-gray-500" />
                    </div>
                  </div>
                  {openFaqIndex === index && (
                    <div className="mt-4 pl-14">
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}