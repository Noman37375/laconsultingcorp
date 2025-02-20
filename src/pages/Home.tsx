import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  BarChart, 
  Code, 
  Database, 
  LineChart, 
  Zap, 
  ArrowRight, 
  ChevronRight,
  Users,
  Clock,
  CheckCircle2,
  Globe
} from 'lucide-react';

export default function Home() {
  const services = [
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      description: 'Leverage the power of artificial intelligence to automate tasks and gain predictive insights.',
      color: 'from-blue-500 to-indigo-600'
    },
    {
      icon: BarChart,
      title: 'GA4 Analytics',
      description: 'Expert implementation and optimization of Google Analytics 4 for enhanced tracking.',
      color: 'from-purple-500 to-pink-600'
    },
    {
      icon: LineChart,
      title: 'Data Analytics',
      description: 'Transform raw data into actionable insights for better decision-making.',
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: Code,
      title: 'Software Development',
      description: 'Custom software solutions tailored to your business needs.',
      color: 'from-orange-500 to-red-600'
    },
    {
      icon: Database,
      title: 'SAP Consulting',
      description: 'Seamless SAP integration and migration services.',
      color: 'from-cyan-500 to-blue-600'
    },
    {
      icon: Zap,
      title: 'CRO Solutions',
      description: 'Optimize conversion rates through data-driven strategies.',
      color: 'from-yellow-500 to-orange-600'
    },
  ];

  const stats = [
    { number: "400+", label: "Global Clients", icon: Globe },
    { number: "98%", label: "Client Satisfaction", icon: CheckCircle2 },
    { number: "10+", label: "Years Experience", icon: Clock },
    { number: "50+", label: "Expert Team Members", icon: Users }
  ];

  return (
    <div className="flex-1">
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80")',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 mix-blend-multiply" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white animate-fade-in">
            Empowering Your Business with
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              {" "}Data-Driven Insights
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Transform your business with cutting-edge AI, analytics, and software solutions
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link
              to="/contact"
              className="group bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl flex items-center justify-center space-x-2"
            >
              <span>Get Started</span>
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/ga4-audit"
              className="group bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl flex items-center justify-center space-x-2"
            >
              <span>Free GA4 Audit</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gradient-to-b from-gray-900 to-gray-800 py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="text-center p-6 rounded-xl bg-white/5 backdrop-blur-lg hover:bg-white/10 transition-colors duration-300"
              >
                <div className="w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-6 h-6 text-blue-400" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions to drive your business forward with data-driven strategies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="group relative bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                <div className="p-8">
                  <div className="w-14 h-14 bg-gray-50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className={`h-8 w-8 bg-gradient-to-r ${service.color} bg-clip-text text-transparent`} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 truncate">
                    {service.description}
                  </p>
                  <Link
                    to="/services"
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium group"
                  >
                    <span>Learn more</span>
                    <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600" />
        <div className="absolute inset-0 bg-grid-white/[0.2] bg-grid-white/[0.2]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto">
            Get a free GA4 audit and discover how we can help optimize your data tracking
          </p>
          <Link
            to="/ga4-audit"
            className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl space-x-2 font-medium"
          >
            <span>Get Your Free GA4 Audit</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}