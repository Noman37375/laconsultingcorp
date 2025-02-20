import React from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export default function Services() {
  const services = [
    {
      title: "Traffic analysis",
      description: "Which channels are sending quality traffic that are highly engaging and are converting as well"
    },
    {
      title: "Customer journey",
      description: "The top landing pages that are browsed and how the users proceed to any next page. What are the exit and the bounce rates"
    },
    {
      title: "Device Category",
      description: "How are users responding to different device categories (Mobile, Desktop, Tablet). Is there any difference in the engagement and conversion rate for these categories?"
    },
    {
      title: "Conversion/Goal Analysis",
      description: "Any end goal that the website is currently tracking we can review its performance, the rate at which the goal is being triggered, where the traffic is coming from that is converting etc."
    },
    {
      title: "Competitor analysis",
      description: "Website review of the competitors to learn more about their business funnels"
    },
    {
      title: "Bottlenecks",
      description: "Highlighting any bottlenecks on the website that might be stopping conversions"
    },
    {
      title: "Conversion Rate Optimization (CRO)",
      description: "Areas of optimization on the website (UI) that can help visitors to follow a funnel towards conversion."
    },
    {
      title: "Best Sales Time",
      description: "What the best hour of the day, day of the week and days of the month for conversions"
    },
    {
      title: "Retention rate",
      description: "What is the retention rate and stickiness of the website"
    }
  ];

  const questions = [
    "Were the users looking for the authenticity of the business/website?",
    "Were we (as a website/business) able to provide the authenticity of the business/Website?",
    "How much time did it take for paid users to convert?",
    "How many users went to the business end of the website?",
    "What is the Exit and Bounce rate status? Do we have any plans for users who are leaving the site?",
    "How much 'convincing time' was required?",
    "What is the Drop off rate on the checkout flow?",
    "How many failed orders we received and what are the general reasons?",
    "Is there any difference in Conversion Rate with respect to 'Device Categories'?",
    "Are there any possible pain points in the whole funnel checkout process?",
    "Which channels are driving the highest average order value (and why)?",
    "What is the typical journey that users take through the website?",
    "Which attribution paths show the most value?"
  ];

  return (
    <div className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex items-start space-x-4">
                <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Common Business Questions We Answer</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {questions.map((question, index) => (
              <div 
                key={index}
                className="flex items-start space-x-3 group"
              >
                <ArrowRight className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1 group-hover:translate-x-1 transition-transform" />
                <p className="text-gray-700">{question}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mb-16">
          <img 
            src="https://laconsultingcorp.com/wp-content/uploads/2024/06/anal2.jpg" 
            alt="Analytics Dashboard" 
            className="w-full max-w-4xl mx-auto rounded-xl shadow-lg mb-8"
            loading="lazy"
          />
          <p className="text-lg text-gray-700 max-w-4xl mx-auto">
            By obtaining answers to these critical business questions, you can effectively enhance the performance of your paid advertising, social media initiatives, checkout processes, and much more.
          </p>
        </div>
      </div>
    </div>
  );
}