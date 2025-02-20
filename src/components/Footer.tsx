import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin } from 'lucide-react';
import logo from '../assets/images/logo3.webp';

export default function Footer() {
  const services = [
    'AI & Machine Learning',
    'GA4 Audits & Implementation',
    'Data Analytics & Visualization',
    'Software Development',
    'Social Marketing',
    'Website Development'
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-6">
              <img src={logo} alt="LA Consulting Logo" className="h-14 w-auto" />
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              LA Consulting Corporation is providing clients best business solutions through technology since 1995.
            </p>
            <div className="flex space-x-6 text-gray-400">
              <a
                href="https://www.linkedin.com/company/la-consulting-corporation"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transform hover:scale-110 transition-all duration-200"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="https://twitter.com/LAConsultingCo"
                target="_blank"
                rel="noopener noreferrer" 
                className="hover:text-blue-400 transform hover:scale-110 transition-all duration-200"
              >
                <Twitter className="h-6 w-6" />
              </a>
              <a
                href="https://www.facebook.com/LAConsultingCorporation"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transform hover:scale-110 transition-all duration-200"
              >
                <Facebook className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-blue-400">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200 flex items-center"
                  >
                    <span className="hover:translate-x-1 transition-transform duration-200">
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-blue-400">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service} className="text-gray-300">
                  {service}
                </li>
              ))}
              <li>
                <Link 
                  to="/services" 
                  className="text-blue-400 hover:text-blue-300 transition-colors duration-200 inline-flex items-center group"
                >
                  View All Services 
                  <span className="transform group-hover:translate-x-1 transition-transform duration-200">→</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-blue-400">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 text-gray-300">
                <MapPin className="h-6 w-6 flex-shrink-0 text-blue-400" />
                <span>31 Hillhouse Avenue, 3rd floor, Bridgeport, CT 06606, USA</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="h-5 w-5 flex-shrink-0 text-blue-400" />
                <span>+1 203 953 6490</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="h-5 w-5 flex-shrink-0 text-blue-400" />
                <span>info@laconsultingcorp.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-16 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} LA Consulting LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}