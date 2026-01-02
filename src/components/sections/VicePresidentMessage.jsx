import React from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft, FaWifi, FaSignal, FaFingerprint, FaLock } from 'react-icons/fa';
import TiltCard from '../common/TiltCard';

// --- Animated Audio Waveform (Reused) ---
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

const VicePresidentMessage = () => {
  return (
    // UPDATED: Changed py-24 to "pt-0 pb-24" to remove the top gap
    <section className="pt-0 pb-24 relative overflow-hidden">
        
        {/* Background Atmosphere */}
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="relative max-w-7xl mx-auto px-6">
            
            {/* --- Main Interface Container --- */}
            <div className="bg-[#0a0514]/90 backdrop-blur-2xl border border-white/10 rounded-[2rem] overflow-hidden shadow-2xl relative group">
                
                {/* HUD Overlay */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50"></div>
                <div className="absolute top-4 right-6 flex items-center gap-3 text-[10px] font-mono text-cyan-500/70 border border-cyan-500/20 px-3 py-1 rounded-full uppercase tracking-widest">
                    <FaLock className="text-xs" /> Secure Channel // Encrypted
                </div>

                {/* Decorative Grid */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:30px_30px] pointer-events-none"></div>

                <div className="p-8 md:p-16 flex flex-col lg:flex-row gap-12 lg:gap-20 items-center relative z-10">
                    
                    {/* --- LEFT: HOLOGRAPHIC PROJECTOR --- */}
                    <div className="relative flex-shrink-0">
                        <div className="relative w-72 h-80">
                            
                            {/* Rotating Tech Rings */}
                            <div className="absolute inset-[-20px] border border-dashed border-violet-500/30 rounded-[2.5rem] animate-spin-slow"></div>
                            
                            {/* Profile Card */}
                            <TiltCard className="h-full rounded-2xl">
                                <div className="relative h-full w-full rounded-2xl overflow-hidden border-2 border-white/10 group-hover:border-cyan-400/50 transition-colors duration-500">
                                    
                                    {/* --- TOP BAR: Title --- */}
                                    <div className="absolute top-0 left-0 w-full bg-black/60 backdrop-blur-md py-3 border-b border-white/10 z-20 flex justify-center">
                                        <p className="text-cyan-400 text-[10px] font-mono font-bold tracking-[0.2em] uppercase">
                                            Vice President
                                        </p>
                                    </div>

                                    {/* Image - REMOVED saturate-0 (grayscale) */}
                                    <img 
                                        src="/Atul_Pic.jpg" 
                                        alt="Vice President" 
                                        className="w-full h-full object-cover filter contrast-125 transition-all duration-700 hover:scale-105" 
                                    />

                                    {/* Hologram Scan Effect */}
                                    <motion.div 
                                        className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/20 to-transparent w-full h-[20%]"
                                        animate={{ top: ['-20%', '120%'] }}
                                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                    />
                                    
                                    {/* Scanlines Overlay */}
                                    <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-10 bg-[length:100%_4px,3px_100%] pointer-events-none opacity-50"></div>

                                    {/* --- BOTTOM BAR: Name --- */}
                                    <div className="absolute bottom-0 left-0 w-full bg-black/80 backdrop-blur-md p-4 border-t border-white/10 z-20">
                                        <h4 className="text-white font-tech font-bold text-lg leading-none text-center">
                                            ATUL KUMAR
                                        </h4>
                                    </div>
                                </div>
                            </TiltCard>
                        </div>
                    </div>

                    {/* --- RIGHT: TRANSMISSION DATA --- */}
                    <div className="flex-1 relative">
                        {/* Status Header */}
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 border-b border-white/10 pb-6">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center">
                                    <FaWifi className="text-2xl text-violet-400 animate-pulse" />
                                </div>
                                <div>
                                    <h3 className="text-xl text-white font-tech tracking-wide">INCOMING TRANSMISSION</h3>
                                    <div className="flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                                        <span className="text-[10px] font-mono text-gray-400 uppercase">Live Feed // 980ms Latency</span>
                                    </div>
                                </div>
                            </div>
                            {/* Audio Visualizer */}
                            <div className="hidden md:block">
                                <AudioWave />
                            </div>
                        </div>

                        {/* UPDATED: The Message (One Liner) */}
                        <div className="relative">
                            <FaQuoteLeft className="text-5xl text-white/5 absolute -top-4 -left-6 pointer-events-none" />
                            
                            <p className="text-lg md:text-2xl text-gray-200 font-light leading-relaxed italic relative z-10">
                                "Bridging the gap between <span className="text-cyan-400 font-bold not-italic font-tech text-glow">Imagination</span> and <span className="text-cyan-400 font-bold not-italic font-tech text-glow">Implementation</span> to shape the <span className="text-white border-b border-violet-500">digital frontier</span>."
                            </p>
                        </div>

                        {/* Footer Data */}
                        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-6 pt-6 border-t border-white/10">
                            <div>
                                <p className="text-[9px] text-gray-500 font-mono uppercase mb-1">Authorization</p>
                                <p className="text-xs text-white font-bold tracking-wider flex items-center gap-2">
                                    <FaFingerprint className="text-violet-500" /> ALPHA-2
                                </p>
                            </div>
                            <div>
                                <p className="text-[9px] text-gray-500 font-mono uppercase mb-1">Batch ID</p>
                                <p className="text-xs text-white font-bold tracking-wider">2024</p>
                            </div>
                            <div className="hidden md:block">
                                <p className="text-[9px] text-gray-500 font-mono uppercase mb-1">Signal Strength</p>
                                <div className="flex items-end gap-1 h-4">
                                    <div className="w-1 h-2 bg-cyan-500/30"></div>
                                    <div className="w-1 h-3 bg-cyan-500/60"></div>
                                    <div className="w-1 h-4 bg-cyan-500"></div>
                                    <span className="text-[10px] text-cyan-400 ml-1">100%</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>
  );
};

export default VicePresidentMessage;