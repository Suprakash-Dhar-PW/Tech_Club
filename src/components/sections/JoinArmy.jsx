import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { FaUserPlus, FaCalendarAlt, FaGlobe, FaCrosshairs, FaTerminal, FaNetworkWired, FaAngleRight } from 'react-icons/fa';
import { subgroups } from '../../data/clubData';

// --- 3D TILT CONTAINER ---
const WideTiltCard = ({ children, className }) => {
    const ref = useRef(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const mouseX = useSpring(x, { stiffness: 100, damping: 20 }); // Softer spring for large cards
    const mouseY = useSpring(y, { stiffness: 100, damping: 20 });
    
    // Very subtle tilt for wide cards to prevent distortion
    const rotateX = useTransform(mouseY, [-0.5, 0.5], ["2deg", "-2deg"]); 
    const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-1deg", "1deg"]);
    const sheenX = useTransform(mouseX, [-0.5, 0.5], ["0%", "100%"]);

    const handleMouseMove = (e) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const xPct = (e.clientX - rect.left) / rect.width - 0.5;
        const yPct = (e.clientY - rect.top) / rect.height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => { x.set(0); y.set(0); };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            className={`relative perspective-2000 ${className}`} // Deeper perspective
        >
            <div className="relative h-full transition-all duration-300 ease-out transform-style-3d shadow-2xl">
                {children}
                {/* Holographic Swipe Effect */}
                <motion.div 
                    style={{ 
                        background: `linear-gradient(90deg, transparent, rgba(255,255,255,0.05) 50%, transparent)`,
                        left: sheenX
                    }}
                    className="absolute inset-0 w-full h-full pointer-events-none z-30 mix-blend-overlay"
                />
            </div>
        </motion.div>
    );
};

// --- LEADER PROFILE (Optimized for Wide Layout) ---
const LeaderProfile = ({ data, isMulti }) => {
    if (!data) return null;

    return (
        <div className={`relative group/profile flex items-center gap-4 bg-black/20 p-2 pr-4 rounded-xl border border-white/5 hover:border-cyan-500/30 transition-all duration-300 ${isMulti ? 'w-full' : 'w-auto'}`}>
            {/* Hexagon-ish Image Mask */}
            <div className="relative w-16 h-16 shrink-0 overflow-hidden rounded-lg border border-white/10 group-hover/profile:border-cyan-400/50 transition-colors">
                <div className="absolute inset-0 bg-violet-500/10 mix-blend-overlay z-10 group-hover/profile:bg-transparent transition-colors"></div>
                <img 
                    src={data.image} 
                    alt={data.name} 
                    className="w-full h-full object-cover filter contrast-125 saturate-50 group-hover/profile:saturate-100 transition-all duration-500" 
                />
            </div>

            {/* Text Info */}
            <div className="flex flex-col">
                 <span className="text-[9px] font-mono text-cyan-400 uppercase tracking-wider mb-0.5">
                    {data.role || "COMMANDER"}
                </span>
                <h4 className="text-white font-bold font-tech text-sm leading-none">{data.name}</h4>
                <div className="flex items-center gap-2 mt-1">
                    <span className="text-[10px] text-gray-500 font-mono flex items-center gap-1">
                        <FaCalendarAlt className="text-[8px]" /> {data.batch}
                    </span>
                </div>
            </div>
        </div>
    );
};

const JoinArmy = ({ onApply }) => {
  // Safe load check
  if (!subgroups) return null;

  return (
    <section id="army" className="py-24 relative bg-[#030014] overflow-hidden">
         {/* --- Background Matrix --- */}
         <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>
         
         {/* --- Section Title --- */}
         <div className="text-center mb-16 relative z-10 px-4">
             <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-3 border border-cyan-500/30 px-6 py-2 rounded-full bg-cyan-950/10 backdrop-blur-md mb-6"
             >
                <FaGlobe className="text-cyan-400 text-xs animate-pulse" />
                <span className="text-cyan-300 font-mono text-xs tracking-[0.3em] uppercase">Recruitment Channels Open</span>
             </motion.div>
             
             <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 font-tech tracking-tight">
                 Choose Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-violet-400">Division</span>
             </h2>
         </div>

         {/* --- STACK LAYOUT (One Row = One Domain) --- */}
         <div className="max-w-5xl mx-auto px-6 flex flex-col gap-8 relative z-10">
            {subgroups.map((sub, idx) => {
                // Determine Leaders Logic
                const leadersList = sub?.leaders && sub.leaders.length > 0 
                    ? sub.leaders 
                    : (sub?.leader ? [sub.leader] : []);
                
                const isMulti = leadersList.length > 1;

                return (
                    <WideTiltCard key={sub.id || idx} className="w-full">
                        <motion.div 
                            initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: idx * 0.1 }}
                            className="relative w-full bg-[#090516]/80 backdrop-blur-xl border border-white/10 rounded-[1.5rem] overflow-hidden group hover:border-cyan-500/40 transition-colors duration-500"
                        >
                            {/* Scanning Line Animation */}
                            <div className="absolute top-0 left-0 w-[2px] h-full bg-gradient-to-b from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100 group-hover:left-[100%] transition-all duration-[1.5s] ease-in-out z-20"></div>

                            <div className="flex flex-col md:flex-row min-h-[220px]">
                                
                                {/* --- LEFT: DOMAIN IDENTITY (35%) --- */}
                                <div className="md:w-[35%] bg-gradient-to-br from-white/5 to-transparent p-8 flex flex-col justify-between border-b md:border-b-0 md:border-r border-white/5 relative">
                                    {/* Tech Background */}
                                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5"></div>
                                    <FaNetworkWired className="absolute -bottom-4 -right-4 text-8xl text-white/5 rotate-12" />

                                    <div className="relative z-10">
                                        <div className="w-12 h-12 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 text-2xl mb-4 shadow-[0_0_15px_rgba(34,211,238,0.2)]">
                                            {sub.icon ? <sub.icon /> : <FaTerminal />}
                                        </div>
                                        <h3 className="text-2xl font-bold text-white font-tech uppercase tracking-wide leading-tight">
                                            {sub.title}
                                        </h3>
                                        <p className="text-gray-400 text-xs mt-3 leading-relaxed font-light border-l-2 border-cyan-500/30 pl-3">
                                            {sub.desc}
                                        </p>
                                    </div>
                                    
                                    <div className="mt-6 flex items-center gap-2">
                                        <div className={`w-2 h-2 rounded-full ${isMulti ? 'bg-cyan-400' : 'bg-green-500'} animate-pulse`}></div>
                                        <span className="text-[10px] text-gray-500 font-mono uppercase tracking-wider">
                                            {isMulti ? 'Joint Command' : 'Unit Active'}
                                        </span>
                                    </div>
                                </div>

                                {/* --- MIDDLE: LEADERS GRID (40%) --- */}
                                <div className="md:w-[40%] p-6 flex flex-col justify-center border-b md:border-b-0 md:border-r border-white/5 relative bg-[#05030a]">
                                    {/* Badge */}
                                    <div className="absolute top-4 right-4">
                                        <span className={`text-[9px] font-mono border px-2 py-1 rounded ${isMulti ? 'border-cyan-500/30 text-cyan-400' : 'border-white/10 text-gray-500'}`}>
                                            {isMulti ? 'DUAL LEADERSHIP' : 'UNIT HEAD'}
                                        </span>
                                    </div>

                                    <div className={`grid ${isMulti ? 'grid-cols-1 gap-3' : 'grid-cols-1'} w-full mt-4`}>
                                        {leadersList.map((leader, i) => (
                                            <LeaderProfile key={i} data={leader} isMulti={isMulti} />
                                        ))}
                                    </div>
                                </div>

                                {/* --- RIGHT: ACTION AREA (25%) --- */}
                                <div className="md:w-[25%] p-6 flex flex-col justify-center items-center bg-gradient-to-l from-cyan-900/10 to-transparent relative group/btn-area">
                                    <div className="absolute inset-0 bg-cyan-500/5 opacity-0 group-hover/btn-area:opacity-100 transition-opacity duration-500"></div>
                                    
                                    <button 
                                        onClick={() => onApply && onApply('MEMBER', sub.title)}
                                        className="relative w-full group/btn overflow-hidden rounded-xl bg-white text-black font-bold py-4 px-6 flex items-center justify-between transition-all hover:scale-[1.02] shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(34,211,238,0.4)]"
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-300 via-white to-cyan-300 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                                        
                                        <span className="relative z-10 flex flex-col items-start">
                                            <span className="text-[10px] uppercase tracking-widest opacity-60">Status: Open</span>
                                            <span className="text-lg font-tech tracking-wide flex items-center gap-2">
                                                JOIN MEMBER <FaAngleRight />
                                            </span>
                                        </span>
                                        
                                        <FaUserPlus className="relative z-10 text-xl group-hover/btn:translate-x-1 transition-transform" />
                                    </button>

                                    <div className="mt-4 flex items-center gap-3 text-[10px] text-gray-500 font-mono">
                                        <FaCrosshairs />
                                        <span>ENCRYPTION: SECURE</span>
                                    </div>
                                </div>

                            </div>
                        </motion.div>
                    </WideTiltCard>
                );
            })}
         </div>
    </section>
  );
};

export default JoinArmy;