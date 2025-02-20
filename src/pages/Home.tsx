import { Link } from 'react-router-dom';
import { 
  ArrowRight,
  ChevronRight,
  Users,
  Clock,
  CheckCircle2,
  Globe,
  Search,
  Cloud,
  PieChart,
  Lightbulb,
  Network,
  MonitorSmartphone,
  Server,
  TrendingUp,
  BarChart
} from 'lucide-react';
import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { LucideIcon } from 'lucide-react';

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
  features: string[];
  slug: string;
}

export default function Home() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const services = [
    {
      icon: Lightbulb,
      title: 'AI & Machine Learning',
      description: 'Leverage the power of artificial intelligence to automate tasks and gain predictive insights.',
      color: 'from-blue-500 to-indigo-600',
      features: ['Predictive Analytics', 'Machine Learning Models', 'AI Integration'],
      slug: 'ai-machine-learning'
    },
    {
      icon: BarChart,
      title: 'GA4 Analytics',
      description: 'Expert implementation and optimization of Google Analytics 4 for enhanced tracking.',
      color: 'from-purple-500 to-pink-600',
      features: ['Data Migration', 'Custom Reports', 'Event Tracking'],
      slug: 'ga4-analytics'
    },
    {
      icon: PieChart,
      title: 'Data Analytics',
      description: 'Transform raw data into actionable insights for better decision-making.',
      color: 'from-green-500 to-emerald-600',
      features: ['Business Intelligence', 'Data Visualization', 'Custom Dashboards'],
      slug: 'data-analytics'
    },
    {
      icon: MonitorSmartphone,
      title: 'Software Development',
      description: 'Custom software solutions tailored to your business needs.',
      color: 'from-orange-500 to-red-600',
      features: ['Web Applications', 'Mobile Apps', 'API Integration'],
      slug: 'software-development'
    },
    {
      icon: Network,
      title: 'SAP Consulting',
      description: 'Seamless SAP integration and migration services.',
      color: 'from-cyan-500 to-blue-600',
      features: ['SAP Implementation', 'System Integration', 'Process Optimization'],
      slug: 'sap-consulting'
    },
    {
      icon: TrendingUp,
      title: 'CRO Solutions',
      description: 'Optimize conversion rates through data-driven strategies.',
      color: 'from-yellow-500 to-orange-600',
      features: ['A/B Testing', 'User Analytics', 'Conversion Funnels'],
      slug: 'cro-solutions'
    },
    {
      icon: Search,
      title: 'Digital Marketing',
      description: 'Strategic digital marketing solutions to enhance your online presence and reach.',
      color: 'from-pink-500 to-rose-600',
      features: ['SEO Optimization', 'Social Media Marketing', 'Content Strategy'],
      slug: 'digital-marketing'
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and migration services for modern businesses.',
      color: 'from-sky-500 to-blue-600',
      features: ['Cloud Migration', 'AWS/Azure Services', 'DevOps Solutions'],
      slug: 'cloud-solutions'
    },
    {
      icon: Server,
      title: 'Business Intelligence',
      description: 'Transform your data into actionable business insights with advanced BI solutions.',
      color: 'from-violet-500 to-purple-600',
      features: ['Data Warehousing', 'Power BI Integration', 'Real-time Analytics'],
      slug: 'business-intelligence'
    }
  ];

  const stats = [
    { number: "400+", label: "Global Clients", icon: Globe },
    { number: "98%", label: "Client Satisfaction", icon: CheckCircle2 },
    { number: "10+", label: "Years Experience", icon: Clock },
    { number: "50+", label: "Expert Team Members", icon: Users }
  ];

  return (
    <div className="flex-1 font-inter">
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), url("https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80")',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-purple-600/30 mix-blend-multiply" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-white/90 text-lg md:text-xl mb-2 block font-medium tracking-wide">
            For Hundreds of Users
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-8 text-white animate-fade-in font-poppins leading-tight">
            Empowering Your Business with
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D1D1] to-[#0073C6] block mt-4">
              Data-Driven Excellence
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-gray-200 max-w-3xl mx-auto leading-relaxed font-light">
            Unlock your business potential with LAC's expert data analysis and industry-leading software services. Transform your data into strategic assets through innovative, tailored solutions.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link
              to="/contact"
              className="group bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl flex items-center justify-center space-x-2 font-medium tracking-wide"
            >
              <span>Get Started</span>
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
            </Link>
            <Link
              to="/ga4-audit"
              className="group bg-white/10 backdrop-blur-sm text-white border border-white/20 px-8 py-4 rounded-lg hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl flex items-center justify-center space-x-2 font-medium tracking-wide"
            >
              <span>Free GA4 Audit</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
            </Link>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <section className="relative py-32 overflow-hidden bg-gradient-to-br from-[#000000] via-[#0073C6] to-[#00D1D1]">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-grid-white/[0.03]" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent" />
        
        {/* Animated Circles */}
        <div className="absolute inset-0">
          <div className="absolute -left-20 top-20 w-72 h-72 bg-[#0073C6]/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -right-20 bottom-20 w-72 h-72 bg-[#00D1D1]/20 rounded-full blur-3xl animate-pulse delay-500" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="text-[#00D1D1] text-lg md:text-xl mb-4 block font-medium tracking-wide">
              Our Impact & Expertise
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 font-poppins leading-tight">
              Decades of Excellence in
              <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-[#00D1D1] to-white">
                Digital Transformation
              </span>
            </h2>
            <p className="text-xl md:text-2xl leading-relaxed max-w-4xl mx-auto text-gray-300 font-light">
              With deep expertise in AI, GA4, SAP, and custom software development, we help businesses transform their operations and achieve sustainable growth through data-driven strategies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-[#0073C6] to-[#00D1D1] rounded-2xl blur-xl opacity-25 group-hover:opacity-40 transition-opacity duration-300" />
              <div className="relative p-8 rounded-2xl bg-black/10 backdrop-blur-sm border border-white/10 hover:bg-white/[0.15] transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-16 h-16 bg-gradient-to-br from-[#0073C6] to-[#00D1D1] rounded-xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <div className="text-5xl font-bold text-white mb-3 font-poppins">500+</div>
                <div className="text-gray-300 font-medium tracking-wide text-lg">Global Clients</div>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-[#0073C6] to-[#00D1D1] rounded-2xl blur-xl opacity-25 group-hover:opacity-40 transition-opacity duration-300" />
              <div className="relative p-8 rounded-2xl bg-black/10 backdrop-blur-sm border border-white/10 hover:bg-white/[0.15] transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <CheckCircle2 className="w-8 h-8 text-white" />
                </div>
                <div className="text-5xl font-bold text-white mb-3 font-poppins">100%</div>
                <div className="text-gray-300 font-medium tracking-wide text-lg">Client Satisfaction</div>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-[#0073C6] to-[#00D1D1] rounded-2xl blur-xl opacity-25 group-hover:opacity-40 transition-opacity duration-300" />
              <div className="relative p-8 rounded-2xl bg-black/10 backdrop-blur-sm border border-white/10 hover:bg-white/[0.15] transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <div className="text-5xl font-bold text-white mb-3 font-poppins">25+</div>
                <div className="text-gray-300 font-medium tracking-wide text-lg">Years Experience</div>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-[#0073C6] to-[#00D1D1] rounded-2xl blur-xl opacity-25 group-hover:opacity-40 transition-opacity duration-300" />
              <div className="relative p-8 rounded-2xl bg-black/10 backdrop-blur-sm border border-white/10 hover:bg-white/[0.15] transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <div className="text-5xl font-bold text-white mb-3 font-poppins">100+</div>
                <div className="text-gray-300 font-medium tracking-wide text-lg">Expert Team Members</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 bg-gradient-to-b from-white via-[#f8f9fa] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-poppins bg-clip-text text-transparent bg-gradient-to-r from-[#0073C6] to-[#00D1D1]">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive solutions to drive your business forward with innovative strategies and cutting-edge technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="group relative bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl border border-[#0073C6]/5 backdrop-blur-sm"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#0073C6] to-[#00D1D1] opacity-[0.02] group-hover:opacity-[0.05] transition-opacity duration-300" />
                <div className="h-1.5 w-full bg-gradient-to-r from-[#0073C6] to-[#00D1D1]" />
                <div className="p-8">
                  <div className="flex items-center space-x-4 mb-8">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center bg-gradient-to-br ${service.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 font-poppins">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-8 min-h-[3rem] leading-relaxed">
                    {service.description}
                  </p>
                  <div className="space-y-4 mb-10">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center text-gray-700 group/feature">
                        <CheckCircle2 className={`h-5 w-5 mr-3 transition-colors duration-300 bg-gradient-to-br ${service.color} bg-clip-text text-transparent`} />
                        <span className="group-hover/feature:translate-x-1 transition-transform duration-200">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                  <button
                    onClick={() => setSelectedService(service)}
                    className="inline-flex items-center px-6 py-3 rounded-xl bg-gradient-to-r from-[#0073C6] to-[#00D1D1] text-white font-medium group hover:shadow-lg transition-all duration-300 w-full justify-center"
                  >
                    <span>Learn more</span>
                    <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1.5 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-grid-white/[0.05]" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
        
        {/* Animated Circles */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -left-10 -top-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -right-10 -bottom-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-700" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 font-poppins leading-tight">
              Ready to Transform Your Business
              <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                with Data-Driven Solutions?
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
              Get a comprehensive GA4 audit and discover untapped opportunities to optimize your data tracking and business performance
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link
                to="/ga4-audit"
                className="group bg-white/10 backdrop-blur-md border border-white/10 px-8 py-4 rounded-xl hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl flex items-center justify-center space-x-3 w-full sm:w-auto min-w-[200px]"
              >
                <span className="text-white font-medium tracking-wide">Get Free GA4 Audit</span>
                <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1.5 transition-transform" />
              </Link>
              
              <Link
                to="/contact"
                className="group px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl flex items-center justify-center space-x-3 w-full sm:w-auto min-w-[200px]"
              >
                <span className="text-white font-medium tracking-wide">Contact Us</span>
                <ChevronRight className="w-5 h-5 text-white group-hover:translate-x-1.5 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Modal Dialog */}
      <Dialog
        open={selectedService !== null}
        onClose={() => setSelectedService(null)}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm" aria-hidden="true" />
        
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="mx-auto max-w-2xl rounded-2xl bg-white p-8">
            {selectedService && (
              <>
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center bg-gradient-to-br ${selectedService.color}`}>
                    <selectedService.icon className="h-8 w-8 text-white" />
                  </div>
                  <Dialog.Title className="text-2xl font-bold">
                    {selectedService.title}
                  </Dialog.Title>
                </div>
                
                <div className="prose prose-lg">
                  <p>{selectedService.description}</p>
                  <h3>Key Features</h3>
                  <ul>
                    {selectedService.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                  {/* Add more detailed content here */}
                </div>

                <div className="mt-8 flex justify-end space-x-4">
                  <button
                    onClick={() => setSelectedService(null)}
                    className="px-6 py-3 rounded-xl border border-gray-200 text-gray-700 font-medium hover:bg-gray-50 transition-colors duration-200"
                  >
                    Cancel
                  </button>
                  <Link
                    to="/contact"
                    className={`inline-flex items-center px-6 py-3 rounded-xl bg-gradient-to-r ${selectedService.color} text-white font-medium`}
                  >
                    Get Started
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </div>
              </>
            )}
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
}