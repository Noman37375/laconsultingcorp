import React from 'react';
import { 
  Brain, 
  Target, 
  Shield,
  CheckCircle2 
} from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: Brain,
      title: "Technical Excellence",
      description: "Our team comprises highly skilled data scientists, AI specialists, and SAP consultants with extensive experience.",
      points: [
        "Expert team of specialists",
        "Cutting-edge technology stack",
        "Proven methodologies"
      ]
    },
    {
      icon: Target,
      title: "Results-Driven Approach",
      description: "We focus on delivering measurable results that directly impact your business objectives.",
      points: [
        "Data-driven decisions",
        "Measurable outcomes",
        "ROI-focused solutions"
      ]
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "We implement robust security measures to protect your valuable data and systems.",
      points: [
        "Advanced data protection",
        "Compliance adherence",
        "Regular security audits"
      ]
    }
  ];

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Sets Us <span className="text-blue-600">Apart</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We combine technical expertise with business acumen to deliver exceptional results
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group bg-gradient-to-b from-white to-gray-50 rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-100 transition-colors duration-300">
                <feature.icon className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{feature.description}</p>
              <ul className="space-y-4">
                {feature.points.map((point, idx) => (
                  <li key={idx} className="flex items-start space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}