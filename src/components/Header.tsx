import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import logo from '../assets/images/logo.webp';
import { useUI } from '../context/UIContext';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { isInfoBarVisible } = useUI();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Team', href: '/team' },
    { name: 'Why Choose Us', href: '/why-choose-us' },
    { name: 'Contact Us', href: '/contact' },
    { name: 'Free GA4 Audit', href: '/ga4-audit', highlight: true },
  ];

  return (
    <header 
      className={`fixed w-full transition-all duration-300 font-inter ${
        isInfoBarVisible ? 'top-8' : 'top-0'
      } z-40 ${
        isScrolled 
          ? 'bg-white/40 backdrop-blur-[2px] shadow-md border-b border-[#0073C6]/10' 
          : 'bg-white shadow-md'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="w-full py-4 flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2 hover:opacity-90 transition-opacity">
              <img src={logo} alt="LA Consulting Logo" className="h-14 w-auto" />
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`${
                  item.highlight
                    ? 'bg-[#0073C6] text-white px-6 py-2.5 rounded-md hover:bg-[#0073C6]/90 shadow-sm font-poppins'
                    : 'text-[#000000] hover:text-[#0073C6] font-medium'
                } text-sm tracking-wide transition-all duration-200 hover:scale-105`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              type="button"
              className="text-[#000000] hover:text-[#0073C6] transition-colors duration-200"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-7 w-7" />
              ) : (
                <Menu className="h-7 w-7" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="py-3 space-y-2 border-t border-[#0073C6]/10">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`${
                    item.highlight
                      ? 'bg-[#0073C6] text-white hover:bg-[#0073C6]/90'
                      : 'text-[#000000] hover:bg-[#0073C6]/5 hover:text-[#0073C6]'
                  } block px-4 py-3 rounded-md text-base font-medium transition-colors duration-200`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}