import React from 'react';
import { Users, Award, Clock } from 'lucide-react';

export default function Stats() {
  const stats = [
    {
      icon: Users,
      number: "400+",
      label: "Global Clients",
      description: "Trusted by businesses worldwide"
    },
    {
      icon: Award,
      number: "98%",
      label: "Client Satisfaction",
      description: "Consistently exceeding expectations"
    },
    {
      icon: Clock,
      number: "10+",
      label: "Years Experience",
      description: "Proven track record of success"
    }
  ];

  return (
    <div className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-100 transition-colors duration-300">
                <stat.icon className="h-8 w-8 text-blue-600" />
              </div>
              <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
              <div className="text-xl font-semibold text-gray-900 mb-2">{stat.label}</div>
              <p className="text-gray-600">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}