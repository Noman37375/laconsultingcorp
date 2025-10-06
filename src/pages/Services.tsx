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
  CheckCircle2,
  Laptop,
  Server,
  Shield,
  Cloud,
  Star,
  Quote
} from 'lucide-react';

export default function Services() {
  const mainServices = [
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description: "Leverage cutting-edge AI and ML solutions to automate processes, gain predictive insights, and drive business growth.",
      features: [
        "Custom AI Model Development",
        "Machine Learning Integration",
        "Predictive Analytics",
        "Natural Language Processing"
      ]
    },
    {
      icon: BarChart,
      title: "GA4 Analytics & Implementation",
      description: "Expert implementation and optimization of Google Analytics 4 for enhanced tracking and data-driven decisions.",
      features: [
        "GA4 Migration & Setup",
        "Custom Event Tracking",
        "E-commerce Tracking",
        "Advanced Analytics Reports"
      ]
    },
    {
      icon: LineChart,
      title: "Data Analytics & Visualization",
      description: "Transform raw data into actionable insights with powerful analytics and stunning visualizations.",
      features: [
        "Business Intelligence",
        "Custom Dashboards",
        "Real-time Analytics",
        "Data-driven Insights"
      ]
    }
  ];

  const developmentServices = [
    {
      icon: Code,
      title: "Custom Software Development",
      description: "End-to-end software development services tailored to your business needs.",
      features: [
        "Web Application Development",
        "Mobile App Development",
        "API Integration & Development",
        "Cloud-Native Solutions"
      ]
    },
    {
      icon: Database,
      title: "SAP Consulting & Integration",
      description: "Expert SAP consulting services to optimize your business processes and systems.",
      features: [
        "SAP Implementation",
        "System Integration",
        "Performance Optimization",
        "Maintenance & Support"
      ]
    }
  ];

  const technicalFeatures = [
    {
      icon: Laptop,
      title: "Modern Technology Stack",
      description: "We use the latest technologies and frameworks to build robust, scalable solutions."
    },
    {
      icon: Server,
      title: "Scalable Architecture",
      description: "Our solutions are designed to grow with your business needs."
    },
    {
      icon: Shield,
      title: "Security First",
      description: "We implement industry-standard security measures to protect your data."
    },
    {
      icon: Cloud,
      title: "Cloud Integration",
      description: "Seamless integration with leading cloud platforms and services."
    }
  ];

  const caseStudies = [
    {
      title: "E-commerce Analytics Transformation",
      client: "Global Retail Chain",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      results: [
        "200% increase in conversion rate",
        "45% reduction in cart abandonment",
        "Enhanced customer journey tracking"
      ]
    },
    {
      title: "AI-Powered Inventory Management",
      client: "Manufacturing Leader",
      image: "https://images.unsplash.com/photo-1565343429117-cf8d9814d75b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      results: [
        "30% reduction in inventory costs",
        "95% prediction accuracy",
        "Automated reordering system"
      ]
    },
    {
      title: "SAP Integration & Optimization",
      client: "Logistics Company",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      results: [
        "50% faster order processing",
        "Seamless multi-system integration",
        "Real-time tracking implementation"
      ]
    }
  ];

  const testimonials = [
    {
      quote: "LAC's expertise in AI and analytics has transformed our business operations. Their solutions have given us unprecedented insights into our customer behavior.",
      author: "Sarah Johnson",
      position: "CTO, Global Retail Chain",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
    },
    {
      quote: "The SAP integration project was handled with exceptional professionalism. Their team's technical knowledge and commitment to our success was impressive.",
      author: "Michael Chen",
      position: "Operations Director, Manufacturing Corp",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section - updated to match About styling */}
      <div className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed transform scale-105"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")'
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

        <div className="relative text-center text-white z-10 px-4 max-w-5xl mx-auto">
          <div className="space-y-8">
            <div className="inline-flex items-center justify-center space-x-2 text-sm bg-white/10 px-6 py-3 rounded-full backdrop-blur-sm border border-white/10">
              <Link to="/" className="hover:text-[#00D1D1] transition-colors">HOME</Link>
              <span className="text-white/40">/</span>
              <span className="text-[#00D1D1]">SERVICES</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold font-poppins">
              Our Services
            </h1>

            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed font-light">
              Empowering your business with cutting-edge technology and data-driven solutions
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </div>

      {/* Main Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-poppins">
              Comprehensive Solutions for Your Business
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer a complete suite of services designed to transform your business with the power of data and artificial intelligence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainServices.map((service, index) => (
              <div key={index} className="relative group bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-r from-[#0073C6] to-[#00D1D1] opacity-0 group-hover:opacity-[0.03] transition-opacity duration-300" />
                <div className="p-8">
                  <div className="w-14 h-14 bg-blue-50 rounded-lg flex items-center justify-center mb-6">
                    <service.icon className="h-8 w-8 text-[#0073C6]" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <div className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle2 className="h-5 w-5 text-[#00D1D1]" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="px-8 pb-6">
                  <Link
                    to="/contact"
                    className="inline-flex items-center text-[#0073C6] hover:text-[#005b9e] font-medium"
                  >
                    Learn more <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-poppins">
              Development & Integration Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Custom software solutions and SAP consulting services to streamline your business operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {developmentServices.map((service, index) => (
              <div key={index} className="group relative bg-white rounded-2xl p-8 hover:shadow-2xl transition-all duration-300">
                <div className="w-14 h-14 bg-gradient-to-r from-[#0073C6] to-[#00D1D1] rounded-lg flex items-center justify-center mb-6">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <div className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <CheckCircle2 className="h-5 w-5 text-[#0073C6]" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-poppins">
              Technical Excellence
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our commitment to technical excellence ensures reliable, secure, and scalable solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technicalFeatures.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-[#0073C6] to-[#00D1D1] rounded-lg flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-poppins">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real results from real clients. See how we've helped businesses transform their operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="relative bg-white rounded-2xl shadow-lg overflow-hidden group">
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src={study.image} 
                    alt={study.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0073C6]/10 to-[#00D1D1]/10 opacity-0 group-hover:opacity-60 transition-opacity duration-500" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{study.title}</h3>
                  <p className="text-[#0073C6] font-medium mb-4">{study.client}</p>
                  <div className="space-y-2">
                    {study.results.map((result, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <Star className="h-5 w-5 text-yellow-500" />
                        <span className="text-gray-700">{result}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-poppins">
              Client Testimonials
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear what our clients have to say about working with us
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg">
                <Quote className="h-8 w-8 text-[#0073C6] mb-6" />
                <p className="text-gray-700 text-lg mb-6 italic">"{testimonial.quote}"</p>
                <div className="flex items-center space-x-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.author}</h4>
                    <p className="text-gray-600">{testimonial.position}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Let's discuss how our services can help you achieve your business goals
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-md hover:bg-gray-100 transition-colors duration-200 text-lg font-medium"
            >
              Contact Us
            </Link>
            <Link
              to="/ga4-audit"
              className="bg-blue-700 text-white px-8 py-3 rounded-md hover:bg-blue-800 transition-colors duration-200 text-lg font-medium"
            >
              Get Free GA4 Audit
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}