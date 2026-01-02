import React from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft, FaWifi, FaFingerprint, FaNetworkWired, FaMicroscope } from 'react-icons/fa';
import TiltCard from '../common/TiltCard';

// --- Animated Audio Waveform ---
const AudioWave = () => (
    <div className="flex items-center gap-1 h-8">
        {[...Array(8)].map((_, i) => (
            <motion.div
                key={i}
                className="w-1 bg-cyan-500 rounded-full"
                animate={{ height: [10, 25, 10] }}
                transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    delay: i * 0.1,
                    ease: "easeInOut"
                }}
            />
        ))}
    </div>
);

const DeptHeads = () => {
  return (
    <section id="operations" className="pt-24 pb-24 relative overflow-hidden" >
        
        {/* --- Background Atmosphere --- */}
        <div className="absolute top-1/4 left-0 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-0 w-[600px] h-[600px] bg-violet-600/5 rounded-full blur-[100px] pointer-events-none animate-pulse-slow delay-1000"></div>

        <div className="relative max-w-[1400px] mx-auto px-6">

            {/* ========================================= */}
            {/* SECTION HEADING                           */}
            {/* ========================================= */}
            <div className="w-full flex flex-col items-center justify-center mb-20 relative z-20">
                <div className="flex items-center gap-4 mb-4 opacity-80">
                    <motion.div initial={{ width: 0 }} whileInView={{ width: '4rem' }} transition={{ duration: 1 }} className="h-[1px] bg-cyan-500/50" />
                    <span className="text-cyan-400 text-[10px] font-mono tracking-[0.4em] uppercase text-shadow-sm">System Access: Beta</span>
                    <motion.div initial={{ width: 0 }} whileInView={{ width: '4rem' }} transition={{ duration: 1 }} className="h-[1px] bg-cyan-500/50" />
                </div>
                <h2 className="text-4xl md:text-6xl font-bold text-center font-tech tracking-wider uppercase relative z-10">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-white to-cyan-400 drop-shadow-[0_0_15px_rgba(34,211,238,0.3)]">
                        Operational & Research Command
                    </span>
                </h2>
            </div>


            {/* ========================================= */}
            {/* GRID CONTAINER                            */}
            {/* ========================================= */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative z-10">

                {/* ========================================= */}
                {/* CARD 1: HEAD OF OPERATIONS                */}
                {/* ========================================= */}
                <div className="bg-[#0a0514]/60 backdrop-blur-2xl border border-white/5 hover:border-cyan-500/30 transition-colors duration-500 rounded-[2.5rem] overflow-hidden relative group">
                    
                    {/* Tech Deco Background */}
                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl group-hover:bg-cyan-500/20 transition-all duration-700"></div>
                    <div className="absolute top-6 right-6 p-2 opacity-40 group-hover:opacity-100 transition-opacity duration-500 z-0">
                        <FaNetworkWired className="text-4xl text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]" />
                    </div>
                    
                    <div className="flex flex-col sm:flex-row h-full">
                        
                        {/* LEFT: IMAGE */}
                        <div className="relative w-full sm:w-[45%] h-80 sm:h-auto min-h-[380px]">
                            <TiltCard className="h-full w-full">
                                <div className="relative h-full w-full overflow-hidden group-hover:border-r border-cyan-400/30 transition-all duration-500">
                                    
                                    <img 
                                        src="/Manas_Tech.jpeg" 
                                        alt="Head of Operations" 
                                        className="w-full h-full object-cover object-top filter contrast-110 saturate-0 group-hover:saturate-100 transition-all duration-700" 
                                    />
                                    
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-90"></div>
                                    
                                    <div className="absolute top-4 left-4">
                                        <p className="px-3 py-1 bg-black/60 backdrop-blur-md border border-white/10 text-cyan-400 text-[9px] font-mono font-bold tracking-widest uppercase rounded-full">
                                            Operations
                                        </p>
                                    </div>

                                    {/* CENTERED TEXT CONTAINER */}
                                    <div className="absolute bottom-0 left-0 w-full p-6 z-20 flex flex-col items-center justify-end pb-8">
                                        <h4 className="text-white font-tech font-bold text-2xl leading-none tracking-wide drop-shadow-lg text-center">
                                            MANAS PANIKA
                                        </h4>
                                        <div className="flex items-center justify-center gap-3 mt-3 w-full">
                                            <div className="h-[2px] w-6 bg-cyan-500 shadow-[0_0_8px_rgba(34,211,238,0.8)]"></div>
                                            <p className="text-cyan-300 text-xs font-mono font-bold tracking-[0.25em] uppercase text-center">
                                                OPERATIONS LEAD
                                            </p>
                                            <div className="h-[2px] w-6 bg-cyan-500 shadow-[0_0_8px_rgba(34,211,238,0.8)]"></div>
                                        </div>
                                    </div>
                                </div>
                            </TiltCard>
                        </div>

                        {/* RIGHT: CONTENT */}
                        <div className="flex-1 p-6 md:p-8 flex flex-col justify-center relative z-10">
                             <div className="flex items-center gap-3 mb-6 border-b border-white/5 pb-4">
                                <FaWifi className="text-lg text-blue-400 animate-pulse" />
                                <h3 className="text-sm text-cyan-100 font-tech tracking-[0.2em]">LOG ENTRY: OPS</h3>
                                <div className="ml-auto scale-75 opacity-70"><AudioWave /></div>
                            </div>
                            
                            <div className="relative mb-6 flex-grow">
                                <FaQuoteLeft className="text-3xl text-cyan-500/10 absolute -top-3 -left-2 font-serif" />
                                <p className="text-sm md:text-base text-gray-300 font-light italic leading-relaxed relative z-10 pl-2">
                                    "Efficiency is the engine of innovation; we ensure that every <span className="text-cyan-400 font-bold not-italic font-tech text-glow">concept</span> finds its path to <span className="text-white border-b border-blue-500 pb-0.5">reality</span>."
                                </p>
                            </div>
                            
                            <div className="flex items-center justify-between text-[10px] font-mono text-gray-500 uppercase tracking-widest mt-auto pt-4 border-t border-white/5">
                                <div className="flex items-center gap-2">
                                    <FaFingerprint className="text-blue-500" /> OPSA-01
                                </div>
                                <div className="text-green-400">ONLINE</div>
                            </div>
                        </div>
                    </div>
                </div>


                {/* ========================================= */}
                {/* CARD 2: HEAD OF RESEARCH & COMMS          */}
                {/* ========================================= */}
                <div className="bg-[#0a0514]/60 backdrop-blur-2xl border border-white/5 hover:border-violet-500/30 transition-colors duration-500 rounded-[2.5rem] overflow-hidden relative group">
                    
                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-violet-500/10 rounded-full blur-3xl group-hover:bg-violet-500/20 transition-all duration-700"></div>
                    <div className="absolute top-6 right-6 p-2 opacity-40 group-hover:opacity-100 transition-opacity duration-500 z-0">
                        <FaMicroscope className="text-4xl text-violet-400 drop-shadow-[0_0_10px_rgba(167,139,250,0.5)]" />
                    </div>

                    <div className="flex flex-col sm:flex-row h-full">
                        
                        {/* LEFT: IMAGE */}
                        <div className="relative w-full sm:w-[45%] h-80 sm:h-auto min-h-[380px]">
                            <TiltCard className="h-full w-full">
                                <div className="relative h-full w-full overflow-hidden group-hover:border-r border-violet-400/30 transition-all duration-500">
                                    
                                    <img 
                                        src="/SuprakashTech.jpeg" 
                                        alt="Head of Research" 
                                        className="w-full h-full object-cover object-right filter contrast-110 saturate-0 group-hover:saturate-100 transition-all duration-700" 
                                    />
                                    
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-90"></div>
                                    
                                    <div className="absolute top-4 left-4">
                                        <p className="px-3 py-1 bg-black/60 backdrop-blur-md border border-white/10 text-violet-400 text-[9px] font-mono font-bold tracking-widest uppercase rounded-full">
                                            Research
                                        </p>
                                    </div>

                                    {/* CENTERED TEXT CONTAINER */}
                                    <div className="absolute bottom-0 left-0 w-full p-6 z-20 flex flex-col items-center justify-end pb-8">
                                        <h4 className="text-white font-tech font-bold text-2xl leading-none tracking-wide drop-shadow-lg text-center">
                                            SUPRAKASH DHAR
                                        </h4>
                                        <div className="flex items-center justify-center gap-3 mt-3 w-full">
                                            <div className="h-[2px] w-6 bg-violet-500 shadow-[0_0_8px_rgba(167,139,250,0.8)]"></div>
                                            <p className="text-violet-300 text-xs font-mono font-bold tracking-[0.25em] uppercase text-center">
                                                RESEARCH LEAD
                                            </p>
                                            <div className="h-[2px] w-6 bg-violet-500 shadow-[0_0_8px_rgba(167,139,250,0.8)]"></div>
                                        </div>
                                    </div>
                                </div>
                            </TiltCard>
                        </div>

                        {/* RIGHT: CONTENT */}
                        <div className="flex-1 p-6 md:p-8 flex flex-col justify-center relative z-10">
                            <div className="flex items-center gap-3 mb-6 border-b border-white/5 pb-4">
                                <FaWifi className="text-lg text-violet-400 animate-pulse" />
                                <h3 className="text-sm text-violet-100 font-tech tracking-[0.2em]">LOG ENTRY: RES</h3>
                                <div className="ml-auto scale-75 opacity-70"><AudioWave /></div>
                            </div>

                            <div className="relative mb-6 flex-grow">
                                <FaQuoteLeft className="text-3xl text-violet-500/10 absolute -top-3 -left-2 font-serif" />
                                <p className="text-sm md:text-base text-gray-300 font-light italic leading-relaxed relative z-10 pl-2">
                                    "We explore the unknown to amplify our voice, turning <span className="text-violet-400 font-bold not-italic font-tech text-glow">complex data</span> into <span className="text-white border-b border-violet-500 pb-0.5">stories</span>."
                                </p>
                            </div>
                            
                            <div className="flex items-center justify-between text-[10px] font-mono text-gray-500 uppercase tracking-widest mt-auto pt-4 border-t border-white/5">
                                <div className="flex items-center gap-2">
                                    <FaFingerprint className="text-violet-500" /> RES-09
                                </div>
                                <div className="text-green-400">ACTIVE</div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    </section>
  );
};

export default DeptHeads; 