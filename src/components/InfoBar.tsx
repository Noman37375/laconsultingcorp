import { Mail, Clock, MapPin, X } from 'lucide-react';
import { useUI } from '../context/UIContext';

export default function InfoBar() {
  const { isInfoBarVisible, setIsInfoBarVisible } = useUI();

  if (!isInfoBarVisible) return null;

  return (
    <div className="bg-[#0073C6] text-white py-2 px-4 text-sm fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto relative">
        {/* Close Button */}
        <button 
          onClick={() => setIsInfoBarVisible(false)}
          className="absolute right-0 top-1/2 -translate-y-1/2 p-1 hover:bg-white/10 rounded-full transition-colors"
          aria-label="Close info bar"
        >
          <X className="h-4 w-4" />
        </button>

        {/* Desktop View */}
        <div className="hidden md:flex justify-between items-center pr-8">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <MapPin className="h-4 w-4" />
              <span>USA</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4" />
              <a href="mailto:info@laconsultingcorp.com" className="hover:text-[#00D1D1] transition-colors">
                info@laconsultingcorp.com
              </a>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Clock className="h-4 w-4" />
            <span>Office Hours: 8:00 AM – 9 PM</span>
          </div>
        </div>

        {/* Mobile View */}
        <div className="md:hidden flex flex-col items-center space-y-1 pr-8">
          <div className="flex items-center space-x-2">
            <MapPin className="h-4 w-4" />
            <span>USA</span>
            <span className="mx-2">|</span>
            <Mail className="h-4 w-4" />
            <a href="mailto:info@laconsultingcorp.com" className="hover:text-[#00D1D1] transition-colors">
              info@laconsultingcorp.com
            </a>
          </div>
          <div className="flex items-center space-x-2">
            <Clock className="h-4 w-4" />
            <span>Office Hours: 8:00 AM – 9 PM</span>
          </div>
        </div>
      </div>
    </div>
  );
} 