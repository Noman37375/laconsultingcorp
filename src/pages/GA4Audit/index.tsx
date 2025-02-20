import React, { Suspense } from 'react';
import { Loader2 } from 'lucide-react';

const Hero = React.lazy(() => import('./components/Hero'));
const Overview = React.lazy(() => import('./components/Overview'));
const Services = React.lazy(() => import('./components/Services'));
const AuditForm = React.lazy(() => import('./components/AuditForm'));

const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-[300px]">
    <div className="text-center">
      <Loader2 className="w-10 h-10 animate-spin text-blue-600 mx-auto mb-4" />
      <p className="text-gray-600">Loading...</p>
    </div>
  </div>
);

export default function GA4Audit() {
  return (
    <div className="bg-white">
      <Suspense fallback={<LoadingSpinner />}>
        <Hero />
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <Overview />
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <Services />
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <AuditForm />
      </Suspense>
    </div>
  );
}