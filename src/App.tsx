import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Team from './pages/Team';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import WhyChooseUs from './pages/WhyChooseUs';
import GA4Audit from './pages/GA4Audit';
import InfoBar from './components/InfoBar';
import { UIProvider } from './context/UIContext';

export default function App() {
  return (
    <UIProvider>
      <Router>
        <div className="min-h-screen flex flex-col">
          <InfoBar />
          <Header />
          <main className="flex-1 pt-24">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/team" element={<Team />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/why-choose-us" element={<WhyChooseUs />} />
              <Route path="/ga4-audit" element={<GA4Audit />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </UIProvider>
  );
}