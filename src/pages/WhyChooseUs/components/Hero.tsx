import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export default function Hero() {
  return (
    <div 
      className="relative min-h-[500px] flex items-center justify-center bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/20 mix-blend-multiply"></div>
      <div className="relative text-center text-white z-10 px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Why Choose <span className="text-blue-400">LAC</span>
        </h1>
        <p className="text-lg md:text-xl mb-8 text-gray-200 max-w-2xl mx-auto leading-relaxed">
          Discover how we deliver exceptional value and drive transformative results for our clients through innovation and expertise
        </p>
        <div className="flex items-center justify-center space-x-4">
          <Link 
            to="/contact"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
          >
            Get Started
          </Link>
          <div className="flex items-center text-sm space-x-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
            <Link to="/" className="hover:text-blue-300 transition-colors">HOME</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-blue-300">WHY CHOOSE US</span>
          </div>
        </div>
      </div>
    </div>
  );
}