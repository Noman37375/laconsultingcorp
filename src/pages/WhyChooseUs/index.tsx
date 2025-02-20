import React, { Suspense } from 'react';
import { Link } from 'react-router-dom';
import { Loader2 } from 'lucide-react';

const Hero = React.lazy(() => import('./components/Hero'));
const Stats = React.lazy(() => import('./components/Stats'));
const Overview = React.lazy(() => import('./components/Overview'));
const Features = React.lazy(() => import('./components/Features'));
const ClientSection = React.lazy(() => import('./components/ClientSection'));

const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-[300px]">
    <div className="text-center">
      <Loader2 className="w-10 h-10 animate-spin text-blue-600 mx-auto mb-4" />
      <p className="text-gray-600">Loading...</p>
    </div>
  </div>
);

export default function WhyChooseUs() {
  return (
    <div className="bg-white">
      <Suspense fallback={<LoadingSpinner />}>
        <Hero />
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <Stats />
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <Overview />
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <Features />
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <ClientSection />
      </Suspense>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Let's discuss how our expertise can help you achieve your business goals
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg font-medium"
            >
              Contact Us
            </Link>
            <Link
              to="/ga4-audit"
              className="bg-blue-800 text-white px-8 py-3 rounded-lg hover:bg-blue-900 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg font-medium"
            >
              Get Free GA4 Audit
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}