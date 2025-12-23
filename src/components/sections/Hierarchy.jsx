import React from 'react';
import { motion } from 'framer-motion';
import { FaCrown, FaNetworkWired, FaServer, FaCode } from 'react-icons/fa';
import TiltCard from '../common/TiltCard';
import { subgroups } from '../../data/clubData';

// --- DOMAIN IMAGE MAPPING (UPDATED) ---
const DOMAIN_IMAGES = {
    // 1. Competitive Programming
    "Competitive Programming": "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=800&q=80",
    
    // 2. Development & Open Source (UPDATED)
    // Option A: Futuristic Workspace Object (Selected)
    "Development & Open Source": "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80", 
    // Option B: Abstract 3D Network Object (Uncomment to use)
    // "Development & Open Source": "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
    
    // Variations for safety
    "Web Development": "https://images.unsplash.com/photo-1627398242454-45a1465c2479?auto=format&fit=crop&w=800&q=80",
    "App Development": "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800&q=80",

    // 3. AIML / Data Science
    "AIML / Data Science": "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80",
    "AI & Machine Learning": "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80",

    // 4. Cyber Security
    "Cyber Security": "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80",
    "Cybersecurity": "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80",

    // Cloud Computing
    "Cloud Computing": "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80",

    // Fallback Image
    "default": "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80"
};

// --- Animated Connection Line ---
const DataStream = ({ className, vertical = false }) => (
    <div className={`relative overflow-hidden ${className} bg-white/5`}>
        <motion.div 
            className={`absolute inset-0 ${vertical ? 'w-full h-full bg-gradient-to-b' : 'w-full h-full bg-gradient-to-r'} from-transparent via-cyan-500 to-transparent opacity-50`}
            animate={vertical ? { top: ['-100%', '100%'] } : { left: ['-100%', '100%'] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />
    </div>
);

const Hierarchy = () => {
  return (
    <section id="hierarchy" className="py-24 relative overflow-hidden bg-[#05020a]">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none"></div>

      {/* --- HEADER --- */}
      <div className="text-center mb-20 relative z-10 px-4">
         <div className="inline-flex items-center gap-2 border border-violet-500/30 bg-violet-500/10 px-4 py-1 rounded-full mb-4 backdrop-blur-md">
            <FaNetworkWired className="text-violet-400 text-xs" />
            <span className="text-violet-300 font-mono text-[10px] tracking-[0.2em] uppercase">Network Topology</span>
         </div>
         <h2 className="text-4xl md:text-5xl font-bold text-white font-tech tracking-tight drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
            CHAIN OF <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">COMMAND</span>
         </h2>
      </div>

      <div className="flex flex-col items-center w-full max-w-7xl mx-auto px-4 relative z-10">
        
        {/* --- LEVEL 1: PRESIDENT --- */}
        <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="relative z-20 mb-0"
        >
            <div className="absolute inset-0 bg-violet-600/20 blur-3xl rounded-full animate-pulse-slow"></div>
            
            <div className="relative bg-[#0d071a]/90 backdrop-blur-sm border border-violet-500/50 pr-8 pl-6 py-6 rounded-2xl flex flex-col md:flex-row items-center gap-6 shadow-[0_0_50px_rgba(124,58,237,0.15)] hover:border-violet-400 transition-colors duration-300 group">
                <div className="absolute -inset-1 border border-dashed border-violet-500/20 rounded-2xl animate-spin-slow pointer-events-none"></div>
                
                <div className="relative">
                    <div className="w-20 h-20 bg-gradient-to-br from-amber-400 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg transform group-hover:scale-105 transition-transform duration-300">
                        <FaCrown className="text-4xl text-white drop-shadow-md" />
                    </div>
                    <div className="absolute -bottom-3 -right-3 bg-black border border-white/20 px-2 py-0.5 rounded text-[9px] font-mono text-green-400 shadow-xl">ONLINE</div>
                </div>

                <div className="text-center md:text-left md:border-l md:border-white/10 md:pl-6">
                    <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                        <span className="text-[10px] text-gray-400 font-mono tracking-widest">ROOT_ACCESS</span>
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                    </div>
                    <h3 className="text-3xl font-bold text-white leading-none font-tech tracking-wide mb-1">PRESIDENT</h3>
                    <p className="text-xs text-violet-300 font-mono uppercase tracking-[0.2em]">System Administrator</p>
                </div>
            </div>
        </motion.div>

        {/* --- CONNECTORS --- */}
        <div className="flex flex-col items-center w-full max-w-[85%] relative">
             <div className="w-px h-16 bg-white/10 relative"><DataStream className="h-full w-full" vertical={true} /></div>
             <div className="hidden md:flex w-full h-px bg-white/10 relative justify-between">
                 <DataStream className="h-full w-full" />
                 <div className="absolute top-1/2 left-0 -translate-y-1/2 w-2 h-2 bg-cyan-500 rounded-full shadow-[0_0_10px_cyan]"></div>
                 <div className="absolute top-1/2 right-0 -translate-y-1/2 w-2 h-2 bg-cyan-500 rounded-full shadow-[0_0_10px_cyan]"></div>
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-violet-500 rounded-full"></div>
             </div>
             <div className="hidden md:grid grid-cols-4 w-full h-12">
                 {[...Array(4)].map((_, i) => (
                    <div key={i} className="flex justify-center h-full relative"><div className="w-px h-full bg-white/10"><DataStream className="h-full w-full" vertical={true} /></div></div>
                 ))}
             </div>
        </div>

        {/* --- LEVEL 2: SUBGROUPS --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 w-full mt-4 md:mt-0">
             {subgroups.map((sub, idx) => {
                 const domainImage = DOMAIN_IMAGES[sub.title] || DOMAIN_IMAGES["default"];
                 const SpecificIcon = sub.icon || FaCode;

                 return (
                 <motion.div 
                    key={sub.id || idx} 
                    initial={{ opacity: 0, y: 30 }} 
                    whileInView={{ opacity: 1, y: 0 }} 
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }} 
                    className="relative group h-full"
                 >
                     <div className="md:hidden w-px h-8 bg-white/10 mx-auto"></div> 
                     
                     <TiltCard className="h-full bg-[#0a0514] overflow-hidden" border="border-white/10 group-hover:border-cyan-500/50">
                         {/* Connection Point (Desktop) */}
                         <div className="hidden md:block absolute -top-[1px] left-1/2 -translate-x-1/2 w-8 h-[2px] bg-cyan-500 shadow-[0_0_10px_cyan] z-20"></div>

                         <div className="flex flex-col h-full">
                             
                             {/* 1. Header Banner Image (Top 40%) */}
                             <div className="h-32 w-full relative overflow-hidden border-b border-white/10">
                                 <img 
                                    src={domainImage}
                                    alt={sub.title}
                                    onError={(e) => { e.target.src = DOMAIN_IMAGES["default"]; }} // Fallback if link breaks
                                    className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                                 />
                                 <div className="absolute inset-0 bg-gradient-to-t from-[#0a0514] via-transparent to-transparent"></div>
                                 <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md px-2 py-0.5 rounded border border-white/10">
                                    <span className="text-[9px] font-mono text-gray-300">NODE_{idx + 1 < 10 ? `0${idx + 1}` : idx + 1}</span>
                                 </div>
                             </div>

                             {/* 2. Content Body (Bottom 60%) */}
                             <div className="relative px-5 pb-6 flex flex-col items-center flex-grow bg-[#0a0514]">
                                 
                                 {/* Floating Icon (The Reactor Core) - Overlaps Banner and Body */}
                                 <div className="relative -mt-10 mb-4">
                                     <div className="absolute inset-0 bg-cyan-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                     <div className="w-20 h-20 rounded-2xl bg-[#0b0816] border border-white/10 flex items-center justify-center shadow-[0_5px_15px_rgba(0,0,0,0.5)] group-hover:border-cyan-500/50 group-hover:shadow-[0_0_20px_rgba(34,211,238,0.2)] transition-all duration-300 relative z-10">
                                         <SpecificIcon className="text-3xl text-cyan-400 drop-shadow-[0_0_5px_rgba(34,211,238,0.8)]" />
                                     </div>
                                 </div>

                                 {/* Title */}
                                 <h4 className="text-xl font-bold text-white mb-2 font-tech tracking-wide text-center group-hover:text-cyan-400 transition-colors">
                                     {sub.title}
                                 </h4>

                                 {/* Spacer */}
                                 <div className="flex-grow"></div>

                                 {/* Status & Tech Decorations */}
                                 <div className="w-full flex items-center justify-between border-t border-white/5 pt-3 mt-2">
                                     <div className="flex items-center gap-1.5">
                                         <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></div>
                                         <span className="text-[9px] text-cyan-300 font-mono uppercase tracking-wider">Online</span>
                                     </div>
                                     <FaServer className="text-[10px] text-gray-600 group-hover:text-cyan-500/50 transition-colors" />
                                 </div>

                             </div>
                         </div>
                     </TiltCard>
                 </motion.div>
             )})}
        </div>
      </div>
    </section>
  );
};

export default Hierarchy;