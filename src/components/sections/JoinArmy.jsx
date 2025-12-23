import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { FaCrown, FaUser, FaIdBadge, FaCalendarAlt, FaNetworkWired, FaGlobe, FaTerminal } from 'react-icons/fa';
import { subgroups } from '../../data/clubData';

// --- 3D TILT CARD COMPONENT ---
const ThreeDCard = ({ children, className }) => {
    const ref = useRef(null);

    // Motion Values for 3D Tilt
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Smooth physics
    const mouseX = useSpring(x, { stiffness: 150, damping: 15 });
    const mouseY = useSpring(y, { stiffness: 150, damping: 15 });

    // Map mouse position to rotation degrees
    const rotateX = useTransform(mouseY, [-0.5, 0.5], ["7deg", "-7deg"]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-7deg", "7deg"]);
    
    // Holographic sheen movement
    const sheenX = useTransform(mouseX, [-0.5, 0.5], ["0%", "100%"]);
    const sheenY = useTransform(mouseY, [-0.5, 0.5], ["0%", "100%"]);

    const handleMouseMove = (e) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        
        // Calculate normalized position (-0.5 to 0.5)
        const xPct = (e.clientX - rect.left) / rect.width - 0.5;
        const yPct = (e.clientY - rect.top) / rect.height - 0.5;
        
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            className={`relative perspective-1000 ${className}`}
        >
            <div className="relative h-full transition-all duration-200 ease-linear transform-style-3d">
                {children}
                
                {/* Holographic Sheen Layer */}
                <motion.div 
                    style={{ 
                        background: `radial-gradient(circle at ${sheenX} ${sheenY}, rgba(255,255,255,0.1) 0%, transparent 60%)`,
                        opacity: useTransform(mouseX, [-0.5, 0, 0.5], [0.4, 0, 0.4])
                    }}
                    className="absolute inset-0 rounded-[2rem] pointer-events-none z-20 mix-blend-overlay"
                />
            </div>
        </motion.div>
    );
};

const JoinArmy = ({ onApply }) => {
  return (
    <section id="army" className="py-24 relative overflow-hidden bg-[#030014]">
         {/* --- 3D Background Grid --- */}
         <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>
         
         {/* --- Header --- */}
         <div className="text-center mb-20 relative z-10 px-4">
             <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-3 border border-violet-500/30 px-5 py-2 rounded-lg bg-violet-900/10 backdrop-blur-md mb-6"
             >
                <FaGlobe className="text-violet-400 text-xs animate-spin-slow" />
                <span className="text-violet-300 font-mono text-xs tracking-[0.2em] uppercase">Global Recruitment Protocol</span>
             </motion.div>
             
             <h2 className="text-5xl md:text-6xl font-bold text-white mb-4 font-tech tracking-tight">
                 Join the <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">Vanguard</span>
             </h2>
             <p className="text-gray-400 font-light max-w-xl mx-auto text-sm md:text-base leading-relaxed">
                 Select a specialized unit. Engage in real-world projects. Build the future.
             </p>
         </div>

         {/* --- 3D Cards Grid --- */}
         <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 relative z-10 max-w-[1300px] mx-auto px-6">
            {subgroups.map((sub, idx) => (
                <ThreeDCard key={sub.id} className="group">
                    <motion.div 
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1, duration: 0.5 }}
                        className="relative h-full bg-[#080512] border border-white/10 rounded-[2rem] overflow-hidden flex flex-col md:flex-row group-hover:border-violet-500/40 transition-colors duration-500"
                    >
                        {/* --- LEFT: Leader Dossier --- */}
                        <div className="md:w-2/5 bg-[#0b0816] border-b md:border-b-0 md:border-r border-white/5 p-8 flex flex-col items-center justify-center relative">
                            {/* Tech Background Pattern */}
                            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5"></div>
                            
                            {/* HUD Corners */}
                            <div className="absolute top-4 left-4 w-2 h-2 border-t border-l border-cyan-500/50"></div>
                            <div className="absolute top-4 right-4 w-2 h-2 border-t border-r border-cyan-500/50"></div>
                            <div className="absolute bottom-4 left-4 w-2 h-2 border-b border-l border-cyan-500/50"></div>
                            <div className="absolute bottom-4 right-4 w-2 h-2 border-b border-r border-cyan-500/50"></div>

                            {/* Badge */}
                            <div className="absolute top-6 left-1/2 -translate-x-1/2 w-max">
                                <span className="text-[9px] font-mono text-cyan-500/80 tracking-widest uppercase border border-cyan-500/20 px-2 py-1 rounded bg-cyan-900/10">
                                    UNIT COMMANDER
                                </span>
                            </div>

                            {/* Image */}
                            <div className="w-32 h-40 mt-6 rounded-xl overflow-hidden border border-white/10 shadow-2xl relative z-10 group-hover:border-cyan-500/40 transition-colors duration-500">
                                <div className="absolute inset-0 bg-violet-900/20 mix-blend-overlay z-10 group-hover:bg-transparent transition-colors"></div>
                                <img 
                                    src={sub.leader.image} 
                                    alt={sub.leader.name} 
                                    className="w-full h-full object-cover filter contrast-110" 
                                />
                            </div>

                            {/* Name & Title */}
                            <div className="mt-5 text-center w-full relative z-10">
                                <h3 className="text-xl font-bold text-white font-tech leading-tight">{sub.leader.name}</h3>
                                
                                <div className="mt-4 grid grid-cols-1 gap-2 w-full max-w-[180px] mx-auto">
                                    <div className="flex justify-between items-center text-[10px] font-mono text-gray-400 bg-white/5 px-3 py-1.5 rounded border border-white/5">
                                        <span className="flex items-center gap-1"><FaCalendarAlt /> BATCH</span>
                                        <span className="text-gray-200">{sub.leader.batch}</span>
                                    </div>
                                    <div className="flex justify-between items-center text-[10px] font-mono text-gray-400 bg-white/5 px-3 py-1.5 rounded border border-white/5">
                                        <span className="flex items-center gap-1"><FaIdBadge /> ID</span>
                                        <span className="text-gray-200">{sub.leader.enrollment}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* --- RIGHT: Mission Data --- */}
                        <div className="md:w-3/5 p-8 flex flex-col justify-between bg-gradient-to-br from-transparent to-violet-900/5 relative">
                            {/* Decorative Line */}
                            <div className="absolute left-0 top-10 w-1 h-12 bg-gradient-to-b from-cyan-500 to-violet-500 rounded-r-full"></div>

                            <div className="relative z-10 transform-style-3d" style={{ transform: "translateZ(20px)" }}>
                                <div className="flex items-center gap-4 mb-5">
                                    <div className="p-3 bg-white/5 rounded-xl border border-white/10 text-cyan-400 text-2xl shadow-inner">
                                        <sub.icon />
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-bold text-white font-tech">{sub.title}</h2>
                                        <div className="flex items-center gap-2 mt-1">
                                            <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                                            <span className="text-[10px] text-gray-500 uppercase tracking-wider font-mono">Operations Active</span>
                                        </div>
                                    </div>
                                </div>
                                
                                <p className="text-sm text-gray-400 leading-relaxed font-light border-l border-white/10 pl-4 mb-8">
                                    {sub.desc}
                                </p>
                            </div>

                            {/* Buttons */}
                            <div className="grid grid-cols-2 gap-4 mt-auto relative z-20 transform-style-3d" style={{ transform: "translateZ(30px)" }}>
                                <button 
                                    onClick={() => onApply('CORE', sub.title)}
                                    className="relative overflow-hidden py-3 bg-white text-black hover:bg-cyan-400 rounded-lg font-bold text-[10px] uppercase tracking-wider transition-all duration-300 shadow-lg group/btn"
                                >
                                    <span className="relative z-10 flex items-center justify-center gap-2">
                                        <FaCrown className="text-sm" /> Apply Core
                                    </span>
                                </button>
                                
                                <button 
                                    onClick={() => onApply('MEMBER', sub.title)}
                                    className="relative py-3 bg-transparent border border-white/20 hover:border-white/50 text-gray-300 hover:text-white rounded-lg font-bold text-[10px] uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2"
                                >
                                    <FaUser className="text-sm" /> Join Member
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </ThreeDCard>
            ))}
         </div>
    </section>
  );
};

export default JoinArmy;