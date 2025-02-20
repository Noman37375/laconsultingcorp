import React from 'react';
import { Target, Globe } from 'lucide-react';

export default function ClientSection() {
  const clients = [
    {
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Chase_logo_2007.svg/2000px-Chase_logo_2007.svg.png",
      name: "Chase"
    },
    {
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Bank_of_America_logo.svg/2560px-Bank_of_America_logo.svg.png",
      name: "Bank of America"
    },
    {
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/AT%26T_logo_2016.svg/2560px-AT%26T_logo_2016.svg.png",
      name: "AT&T"
    }
  ];

  return (
    <div className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6">
              <Target className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              Our mission is always to provide the best services to our clients, increase their business productivity through our solutions, and meet their requirements and satisfy them.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6">
              <Globe className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed">
              To be the premier leader in the industry, driving innovation and fostering growth for clients worldwide through transformative IT solutions and services.
            </p>
          </div>
        </div>

        {/* Client Interactions */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            400+ Client's Interactions!
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Trusted by leading companies worldwide
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {clients.map((client, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
              >
                <img 
                  src={client.logo} 
                  alt={client.name}
                  className="h-12 w-auto mx-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}