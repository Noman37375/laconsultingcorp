import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Brain } from 'lucide-react';

export default function Footer() {
  const services = [
    'AI & Machine Learning',
    'GA4 Audits & Implementation',
    'Data Analytics & Visualization',
    'Software Development',
    'SAP Consulting',
    'Conversion Rate Optimization',
  ];

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Team', href: '/team' },
    { name: 'Contact Us', href: '/contact' },
    { name: 'Free GA4 Audit', href: '/ga4-audit' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Brain className="h-6 w-6 text-blue-400" />
              <span className="text-xl font-bold">LA Consulting</span>
            </div>
            <p className="text-gray-400 mb-4">
              Empowering businesses with data-driven insights and innovative solutions.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-gray-400">
                <MapPin className="h-5 w-5" />
                <span>123 Business Ave, Suite 100</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <Phone className="h-5 w-5" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <Mail className="h-5 w-5" />
                <span>contact@laconsulting.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service} className="text-gray-400">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Office Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Office Hours</h3>
            <div className="text-gray-400">
              <p>Monday - Friday</p>
              <p>8:00 AM - 9:00 PM EST</p>
              <p className="mt-4">Saturday - Sunday</p>
              <p>By Appointment Only</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} LA Consulting. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}