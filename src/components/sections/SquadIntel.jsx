import React from 'react';
import { motion } from 'framer-motion';
import { FaCrown, FaUserSecret, FaChalkboardTeacher, FaInfinity, FaMicrochip } from 'react-icons/fa';
import TiltCard from '../common/TiltCard';

// --- Animated Circuit Background ---
const CircuitBackground = () => (
    <div className="absolute inset-0 pointer-events-none opacity-20 overflow-hidden">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5"/>
            </pattern>
            <rect width="100%" height="100%" fill="url(#grid)" />
            <motion.path 
                d="M 0 100 H 1000" 
                stroke="cyan" 
                strokeWidth="1" 
                fill="none"
                strokeDasharray="10 20"
                animate={{ strokeDashoffset: -1000 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
             <motion.path 
                d="M 1000 300 H 0" 
                stroke="violet" 
                strokeWidth="1" 
                fill="none"
                strokeDasharray="10 20"
                animate={{ strokeDashoffset: 1000 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            />
        </svg>
    </div>
);

const SquadIntel = () => {
  const modules = [
    {
        id: 'lead',
        code: 'CPU_01',
        title: 'PRESIDENT',
        icon: FaCrown,
        color: 'amber',
        desc: 'Central Processing Unit. Strategic Oversight.',
        // Specific Info
        comp_label: 'SINGLE SEAT',
        comp_data: '1x Club President'
    },
    {
        id: 'core',
        code: 'CORE_SQUAD',
        title: 'ELITE CORE',
        icon: FaUserSecret,
        color: 'violet',
        desc: 'High-performance execution units.',
        // Specific Info
        comp_label: '5 MEMBERS / DOMAIN',
        comp_data: '3 Seniors (2024) + 2 Juniors (2025)'
    },
    {
        id: 'guide',
        code: 'BIOS_SYS',
        title: 'ADVISORS',
        icon: FaChalkboardTeacher,
        color: 'cyan',
        desc: 'Guidance Protocol & Debugging.',
        // Specific Info
        comp_label: 'SENIOR COUNCIL',
        comp_data: '2x Senior Mentors'
    },
    {
        id: 'pool',
        code: 'RAM_EXP',
        title: 'MEMBERS',
        icon: FaInfinity,
        color: 'emerald',
        desc: 'Open access memory for learning.',
        // Specific Info
        comp_label: 'OPEN ACCESS',
        comp_data: 'Unlimited Seats / No Restrictions'
    }
  ];

  const colors = {
      amber: 'text-amber-400 border-amber-500/50 shadow-[0_0_20px_rgba(245,158,11,0.2)]',
      violet: 'text-violet-400 border-violet-500/50 shadow-[0_0_20px_rgba(139,92,246,0.2)]',
      cyan: 'text-cyan-400 border-cyan-500/50 shadow-[0_0_20px_rgba(34,211,238,0.2)]',
      emerald: 'text-emerald-400 border-emerald-500/50 shadow-[0_0_20px_rgba(52,211,153,0.2)]',
  };

  return (
    <section id="intel" className="py-32 relative overflow-hidden bg-[#050505]">
        <CircuitBackground />

        {/* --- Header --- */}
        <div className="text-center mb-28 relative z-10 px-4">
            <div className="inline-flex items-center gap-2 border-b border-gray-700 pb-2 mb-6">
                <FaMicrochip className="text-gray-500" />
                <span className="text-gray-500 font-mono text-xs tracking-[0.3em]">HARDWARE_CONFIG</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white font-tech tracking-tight mb-4 leading-tight">
                SYSTEM <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-600">ARCHITECTURE</span>
            </h2>
        </div>
        
        {/* --- Modules Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 max-w-[1400px] mx-auto px-8 relative z-10">
            {modules.map((mod, idx) => (
                <div key={mod.id} className="h-[340px]"> {/* Compact Height */}
                    <TiltCard className="h-full group">
                        
                        {/* THE CARD BODY */}
                        <div className="relative h-full bg-[#0E0E10] border border-white/10 flex flex-col p-1 overflow-hidden transition-colors hover:border-white/30 rounded-lg">
                            
                            {/* Industrial "Cut Corner" Effect */}
                            <div className="absolute top-0 right-0 w-8 h-8 bg-[#050505] border-b border-l border-white/10" style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }}></div>

                            {/* Top Label */}
                            <div className="bg-[#151518] p-4 border-b border-white/5 flex justify-between items-center">
                                <span className={`font-mono text-[10px] tracking-widest ${colors[mod.color].split(' ')[0]}`}>
                                    {mod.code}
                                </span>
                                <div className={`w-1.5 h-1.5 rounded-full ${colors[mod.color].split(' ')[0].replace('text', 'bg')} animate-pulse`}></div>
                            </div>

                            {/* Main Content Area */}
                            <div className="flex-1 p-6 flex flex-col items-center justify-start pt-6 relative">
                                {/* Background Grid Pulse */}
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                {/* Icon Container */}
                                <div className={`w-14 h-14 mb-3 flex items-center justify-center rounded-xl border bg-black/40 backdrop-blur-sm relative group-hover:scale-110 transition-transform duration-300 ${colors[mod.color]}`}>
                                    <mod.icon className="text-2xl relative z-10" />
                                    <div className="absolute -left-2 top-1/2 w-2 h-[1px] bg-current opacity-50"></div>
                                    <div className="absolute -right-2 top-1/2 w-2 h-[1px] bg-current opacity-50"></div>
                                </div>

                                <h3 className="text-xl font-bold text-white font-tech tracking-wide mb-1">{mod.title}</h3>
                                <p className="text-[10px] text-gray-500 text-center font-mono leading-relaxed px-2 mb-2">
                                    {mod.desc}
                                </p>

                                {/* --- COMPOSITION PROTOCOL (The Bottom Part) --- */}
                                <div className="mt-auto w-full pt-3 border-t border-dashed border-white/20">
                                    <div className="flex flex-col items-center gap-1">
                                        <span className="text-[9px] text-gray-600 font-mono uppercase tracking-widest">
                                            {mod.comp_label}
                                        </span>
                                        <span className={`text-[11px] font-bold font-mono text-center tracking-wide ${colors[mod.color].split(' ')[0]}`}>
                                            {mod.comp_data}
                                        </span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </TiltCard>
                </div>
            ))}
        </div>
    </section>
  );
};

export default SquadIntel;