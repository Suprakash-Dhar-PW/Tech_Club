import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import TechDroidScene from '../models/TechDroidScene';

// --- SUB-COMPONENTS ---

// 1. CRT Scanline Overlay (Visual Noise)
const HolographicOverlay = () => (
  <div className="absolute inset-0 pointer-events-none z-0">
    <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,20,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%] pointer-events-none" />
    <div className="absolute inset-0 bg-radial-gradient(circle, transparent 50%, #05020a 100%) opacity-90" />
  </div>
);

// 2. Decorative HUD Corners
const HUDCorners = () => (
  <>
    <div className="absolute top-32 left-8 w-16 h-16 border-t-2 border-l-2 border-cyan-500/30 rounded-tl-xl pointer-events-none z-10 hidden md:block" />
    <div className="absolute top-32 right-8 w-16 h-16 border-t-2 border-r-2 border-violet-500/30 rounded-tr-xl pointer-events-none z-10 hidden md:block" />
    <div className="absolute bottom-8 left-8 w-16 h-16 border-b-2 border-l-2 border-violet-500/30 rounded-bl-xl pointer-events-none z-10 hidden md:block" />
    <div className="absolute bottom-8 right-8 w-16 h-16 border-b-2 border-r-2 border-cyan-500/30 rounded-br-xl pointer-events-none z-10 hidden md:block" />
  </>
);

// 3. Tech Separator (Animation)
const TechSeparator = () => (
  <motion.div 
    initial={{ width: 0, opacity: 0 }} 
    animate={{ width: "240px", opacity: 1 }} 
    transition={{ delay: 0.5, duration: 1.2, ease: "easeOut" }}
    className="relative h-px bg-white/10 my-8 mx-auto"
  >
     {/* Center Glow */}
     <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-80"></div>
     
     {/* Moving Node Left */}
     <motion.div 
        animate={{ left: ['0%', '100%', '0%'] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-cyan-400 rounded-full shadow-[0_0_10px_cyan]"
     />
     
     {/* Moving Node Right */}
     <motion.div 
        animate={{ right: ['0%', '100%', '0%'] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        className="absolute top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-violet-400 rounded-full shadow-[0_0_10px_violet]"
     />
  </motion.div>
);

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <header className="relative h-screen flex flex-col justify-center items-center text-center px-4 overflow-hidden bg-[#05020a]">
      
      {/* --- BACKGROUND LAYER --- */}
      <div className="absolute inset-0 z-0 opacity-80">
         <TechDroidScene />
      </div>
      
      <HolographicOverlay />
      <HUDCorners />

      {/* --- CONTENT LAYER --- */}
      <motion.div 
        style={{ y: y1, opacity }} 
        className="relative z-10 flex flex-col items-center justify-center h-full"
      >
        {/* Main Title Group */}
        <div className="relative mb-2">
            {/* Background Glow Pulse */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-cyan-500/10 blur-[100px] rounded-full animate-pulse-slow pointer-events-none"></div>

            <motion.h1 
              initial={{ scale: 0.9, opacity: 0, letterSpacing: "-0.05em" }} 
              animate={{ scale: 1, opacity: 1, letterSpacing: "0em" }} 
              transition={{ duration: 1.2, ease: "circOut" }} 
              className="text-7xl md:text-9xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-100 to-gray-500 drop-shadow-[0_0_50px_rgba(34,211,238,0.2)] select-none relative z-10"
            >
              TECH CLUB
            </motion.h1>
            
            {/* Glitch Overlay */}
            <motion.h1 
              className="absolute inset-0 text-7xl md:text-9xl font-black tracking-tighter text-cyan-400 opacity-20 pointer-events-none mix-blend-overlay z-10"
              animate={{ x: [-2, 3, -1, 0], opacity: [0, 0.4, 0] }}
              transition={{ repeat: Infinity, duration: 4, repeatDelay: 1 }}
            >
              TECH CLUB
            </motion.h1>
        </div>

        {/* Enhanced Divider */}
        <TechSeparator />

        {/* Subtitle with Typewriter Reveal */}
        <div className="overflow-hidden">
            <motion.p 
              initial={{ y: "100%" }} 
              animate={{ y: 0 }} 
              transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }} 
              className="text-lg md:text-2xl text-gray-400 max-w-xl mx-auto font-light leading-relaxed px-4"
            >
               Where <span className="text-white font-medium drop-shadow-lg">Imagination</span> compiles into <span className="text-cyan-400 font-medium drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]">Reality</span>.
            </motion.p>
        </div>
      </motion.div>

      {/* --- FOOTER SCROLL INDICATOR --- */}
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ delay: 2, duration: 1.5 }} 
        className="absolute bottom-12 z-20 pointer-events-auto"
      >
           <button 
             onClick={() => document.getElementById('hierarchy').scrollIntoView({ behavior: 'smooth'})} 
             className="flex flex-col items-center gap-3 group"
           >
              <span className="text-[10px] text-gray-500 font-mono tracking-[0.3em] uppercase group-hover:text-cyan-400 transition-colors">System Access</span>
              <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-cyan-500/50 to-transparent overflow-hidden relative">
                 <motion.div 
                    animate={{ top: ['-100%', '100%'] }} 
                    transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                    className="absolute left-0 w-full h-1/3 bg-cyan-400 blur-[1px]" 
                 />
              </div>
           </button>
      </motion.div>
    </header>
  );
};

export default Hero;