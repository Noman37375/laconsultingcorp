import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, Code, BarChart, Users, Lightbulb, HandshakeIcon } from 'lucide-react';

export default function Team() {
  const ceo = {
    name: "Liaquat Ali",
    role: "CEO (Chief Executive Officer)",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    description: "From last 27 years we are providing our clients solutions through technology. We believe in results. The same client also needs results, so we always ensure to provide our clients with a result-oriented product so they can benefit from it and grow their businesses."
  };

  const teamMembers = [
    {
      name: "Humaid Ibrahim",
      role: "Data & AI Analyst",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
      description: "Specializing in data analysis and artificial intelligence solutions."
    },
    {
      name: "Jeff Dean",
      role: "Software Developers",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
      description: "Expert in developing robust and scalable software solutions."
    },
    {
      name: "Levi Jack",
      role: "SAP Specialist",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
      description: "Specialized in SAP implementation and optimization."
    },
    {
      name: "Paul William",
      role: "Tracking & Integration Expert",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
      description: "Expert in implementing tracking solutions and system integrations."
    },
    {
      name: "Leo Mark",
      role: "Project Manager",
      image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
      description: "Experienced in managing complex technical projects."
    },
    {
      name: "Steven Liam",
      role: "Backend Specialist",
      image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
      description: "Specialized in building robust backend systems and APIs."
    }
  ];

  const specialties = [
    {
      title: "Data Scientists & AI Specialists",
      icon: Brain,
      description: "Our data scientists are the masterminds behind unlocking the secrets hidden within your data. They possess a deep understanding of advanced analytics tools and techniques, allowing them to extract valuable insights, identify trends and patterns, and build powerful AI models tailored to your specific needs."
    },
    {
      title: "Web Developers & SAP Consultants",
      icon: Code,
      description: "Our web development team comprises skilled developers who are passionate about crafting user-friendly and high-performing websites. They stay at the forefront of the latest web development trends and technologies to create websites that not only look great but also deliver exceptional user experiences."
    },
    {
      title: "Data Visualization Experts & Project Managers",
      icon: BarChart,
      description: "Our data visualization experts are skilled at transforming complex data sets into clear and compelling visuals. They utilize charts, graphs, and other visual aids to bring your data to life, ensuring everyone within your organization can understand the story your data tells."
    }
  ];

  const values = [
    {
      title: "A Culture of Collaboration & Continuous Learning",
      icon: Users,
      description: "At LAC, we foster a collaborative work environment where our team members can share knowledge, learn from each other, and push the boundaries of what's possible. We believe in continuous learning and development."
    },
    {
      title: "Innovation & Excellence",
      icon: Lightbulb,
      description: "We encourage our team to stay up-to-date with the latest advancements in data science, AI, web development, and SAP technologies. This ensures we deliver the most cutting-edge solutions to our clients."
    },
    {
      title: "Building Long-Term Partnerships",
      icon: HandshakeIcon,
      description: "We view our clients as partners, not just customers. Our team is committed to building strong relationships and taking the time to understand your specific needs and challenges."
    }
  ];

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div 
        className="relative h-[400px] flex items-center justify-center bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")'
        }}
      >
        <div className="text-center text-white z-10 px-4">
          <h1 className="text-5xl font-bold mb-6 tracking-tight">The LAC Team</h1>
          <p className="text-2xl font-light mb-8">Your Trusted Partners in Data and AI</p>
          <div className="inline-flex items-center justify-center space-x-2 text-sm bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
            <Link to="/" className="hover:text-blue-300 transition-colors">HOME</Link>
            <span>/</span>
            <span className="text-blue-300">TEAM</span>
          </div>
        </div>
      </div>

      {/* Team Overview Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Meet Our Expert Team
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              At LAC, we believe our team is our greatest asset. With a passionate group of individuals united by a shared vision to empower businesses with the power of data and artificial intelligence.
            </p>
          </div>

          {/* CEO Section */}
          <div className="mb-24">
            <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="md:flex">
                <div className="md:w-2/5">
                  <div className="h-full">
                    <img 
                      src={ceo.image} 
                      alt={ceo.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="md:w-3/5 p-8 md:p-12">
                  <div className="uppercase tracking-wide text-sm text-blue-600 font-semibold mb-1">
                    Leadership
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">{ceo.name}</h3>
                  <p className="text-blue-600 font-medium text-lg mb-6">{ceo.role}</p>
                  <p className="text-gray-600 leading-relaxed">{ceo.description}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Team Members Grid */}
          <div className="mb-24">
            <h3 className="text-2xl font-bold text-center mb-12">Our Team Members</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {teamMembers.map((member) => (
                <div 
                  key={member.name} 
                  className="group relative bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                >
                  <div className="aspect-w-3 aspect-h-4">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6 bg-white">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                    <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                    <p className="text-gray-600 text-sm leading-relaxed">{member.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Specialties Section */}
          <div className="mb-24">
            <h2 className="text-3xl font-bold text-center mb-16">Our Expertise</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {specialties.map((specialty) => (
                <div 
                  key={specialty.title} 
                  className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="bg-blue-50 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                    <specialty.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{specialty.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{specialty.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Values Section */}
          <div className="bg-gray-50 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-center mb-16">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value) => (
                <div 
                  key={value.title} 
                  className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="bg-blue-50 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                    <value.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}