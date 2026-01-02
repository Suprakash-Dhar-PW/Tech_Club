import React from 'react';
import Navbar from './components/common/Navbar';
import ScrollToTop from './components/common/ScrollToTop';
import Footer from './components/common/Footer';
import Hero from './components/sections/Hero';
import Hierarchy from './components/sections/Hierarchy';
import PresidentMessage from './components/sections/PresidentMessage';
import VicePresidentMessage from './components/sections/VicePresidentMessage';
import DeptHeads from './components/sections/DeptHeads';
import JoinArmy from './components/sections/JoinArmy';

function App() {
  const handleApply = (role, domain) => {
      alert(`Initiating recruitment protocol for: ${role} - ${domain}`);
  };

  return (
    <div className="min-h-screen bg-[#030014] text-white selection:bg-cyan-500/30 relative overflow-x-hidden">
      <Navbar />
      <div className="scanline"></div>
      
      <Hero />
      
      <main className="relative z-10 max-w-7xl mx-auto px-6 space-y-36 pb-32">
        <Hierarchy />
        <PresidentMessage />
        <VicePresidentMessage />
        <DeptHeads/>
        <JoinArmy onApply={handleApply} />
      </main>

      <Footer />

      <ScrollToTop />
    </div>
  );
}

export default App;