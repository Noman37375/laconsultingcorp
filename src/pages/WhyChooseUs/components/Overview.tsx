import React from 'react';
import { 
  Brain, 
  Target, 
  Users, 
  MessageSquare,
  CheckCircle2,
  Lightbulb,
  BarChart
} from 'lucide-react';

export default function Overview() {
  const reasons = [
    {
      id: "01",
      title: "Unmatched Expertise",
      description: "Our team comprises highly skilled data scientists, AI specialists, web developers, and SAP consultants. Each team member brings a wealth of experience and in-depth knowledge to the table, ensuring we deliver exceptional solutions tailored to your specific needs."
    },
    {
      id: "02",
      title: "A Collaborative Approach",
      description: "We believe in building strong partnerships with our clients. We take the time to understand your unique challenges, objectives, and industry landscape. This collaborative approach ensures every solution we deliver is designed to address your specific needs and contribute to your overall business success."
    },
    {
      id: "03",
      title: "Data-Centric Philosophy",
      description: "Data is at the core of everything we do. We leverage cutting-edge AI models and analytical tools to extract meaningful insights from your data, regardless of its format or complexity. We don't just collect data; we transform it into actionable intelligence that informs better decision-making."
    },
    {
      id: "04",
      title: "A Spectrum of Services",
      description: "We offer a comprehensive suite of services designed to empower your business with the power of data and AI. From website audits and GA4 implementation to AI integration and SAP optimization, we have the expertise to address all your data-driven needs under one roof."
    },
    {
      id: "05",
      title: "Focus on Client Success",
      description: "Your success is our priority. We go beyond simply delivering solutions; we ensure they generate tangible results for your business. Our team is committed to providing ongoing support and ensuring you have the tools and knowledge to leverage your data effectively."
    },
    {
      id: "06",
      title: "Commitment to Innovation",
      description: "The world of technology is constantly evolving, and so are we. We stay at the forefront of the latest advancements in AI, data analytics, and web development to ensure our clients have access to the most cutting-edge solutions available."
    },
    {
      id: "07",
      title: "Transparency & Communication",
      description: "We believe in open and honest communication. Throughout every project, we keep you informed of our progress, explain our recommendations clearly, and ensure you have a clear understanding of the value we're delivering."
    }
  ];

  const differentiators = [
    {
      title: "Personalized Service",
      description: "We take the time to build strong relationships with our clients. A dedicated account manager will be your point of contact."
    },
    {
      title: "Industry Expertise",
      description: "Our team brings a deep source of fresh insights from throughout the entire engagement."
    },
    {
      title: "Results-Oriented Approach",
      description: "We're not satisfied with simply delivering solutions; we want to see them generate real results for your business."
    }
  ];

  return (
    <div className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Introduction */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Your Partner for Data-Driven Success
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            In today's data-driven world, having access to information isn't enough. You need the expertise to transform that data into actionable insights that drive real business results. That's where LAC comes in. We're more than just a software house; we're a team of passionate professionals dedicated to empowering businesses with the power of data and artificial intelligence (AI).
          </p>
        </div>

        {/* Key Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {reasons.map((reason) => (
            <div 
              key={reason.id}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex items-start space-x-4">
                <div className="text-3xl font-bold text-blue-600">{reason.id}</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{reason.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{reason.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* LAC Difference Section */}
        <div className="bg-blue-600 rounded-2xl p-12 text-white mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Beyond the Technical: The LAC Difference</h2>
            <p className="text-blue-100 max-w-3xl mx-auto">
              We understand that technology is just one piece of the puzzle. When you choose LAC, you gain a partner who is committed to your long-term success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {differentiators.map((diff, index) => (
              <div 
                key={index}
                className="bg-blue-700/50 rounded-xl p-6 backdrop-blur-sm"
              >
                <h3 className="text-xl font-bold mb-3">{diff.title}</h3>
                <p className="text-blue-100">{diff.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Ready to Start Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Unlock the Power of Your Data?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Partner with LAC and embark on a journey of data-driven transformation. Contact us today to discuss your specific needs and how we can help you leverage the power of data and AI to achieve your business goals.
          </p>
        </div>
      </div>
    </div>
  );
}