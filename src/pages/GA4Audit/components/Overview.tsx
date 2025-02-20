import React from 'react';

export default function Overview() {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
          Are you tracking your website through Google Analytics (GA4) and don't know how your website and your visitors are performing? You roughly understand how the visitors are interacting with your website but you're not sure if they are following the sales flow/funnel that you designed? Do you think there are bottlenecks in your website flow that might be blocking or discouraging the visitors to go past a certain point of the website?
        </p>
        
        <p className="text-lg text-gray-700 mb-12 leading-relaxed">
          You can get the answers to this and other important business questions just by analyzing the data of your GA4 account. At LA Consulting Corp (LACC) we provide detailed audits of the website and its GA4 data that helps clients in understanding more about their traffic so that they can make more informed business decisions.
        </p>

        <img 
          src="https://laconsultingcorp.com/wp-content/uploads/2024/06/anal.jpg" 
          alt="Analytics Dashboard" 
          className="w-full rounded-xl shadow-lg mb-12 transform transition-transform duration-300 hover:scale-[1.02]"
          loading="lazy"
        />

        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
          The audits are not just limited to the areas above but you can ask your specific questions as well that might help you understand your traffic better. These tailored questions help in getting a better idea of what the customers are looking for on the website and whether the website is able to provide them the exact thing they are looking for.
        </p>
      </div>
    </div>
  );
}