import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { FaCalendarAlt, FaGlobe, FaTerminal, FaNetworkWired, FaCode, FaShieldAlt, FaBrain, FaIdBadge, FaAngleDoubleRight, FaFingerprint, FaPenNib, FaLightbulb } from 'react-icons/fa';

// --- CONFIGURATION: PASTE YOUR LINKS HERE ---
const CORE_FORM_LINK = "https://forms.gle/SCrpaHqj4RSEdXtE9"; 
const IDENTITY_FORM_LINK = "https://forms.gle/nMkjz4YNC4a8QnL1A";

// --- DATA STRUCTURE ---
const expandedSubgroups = [
    {
        id: 1,
        title: "Competitive Programming",
        icon: FaCode,
        desc: "Master algorithms, data structures, and dominate global coding challenges.",
        leaders: [
            { 
                name: "Krish Gupta", 
                role: "CP LEAD", 
                batch: "2024", 
                enrollmentId: "2401010044", 
                image: "/Krish1.jpeg" 
            }
        ]
    },
    {
        id: 2,
        title: "Web Development",
        icon: FaNetworkWired,
        desc: "Architect scalable full-stack WebApps.",
        leaders: [
            { 
                name: "Udhay Nayyar", 
                role: "DEV LEAD", 
                batch: "2024", 
                enrollmentId: "2401010103", 
                image: "/Udhay1.jpeg" 
            }
        ]
    },
    {
        id: 3,
        title: "Open Source",
        icon: FaTerminal,
        desc: "Drive contributions to major repositories.",
        leaders: [
            { 
                name: "Riyanshi Tomar", 
                role: "OS LEAD", 
                batch: "2024", 
                enrollmentId: "2401010074", 
                image: "/Riyanshi.png" 
            }
        ]
    },
    {
        id: 4,
        title: "Cyber Security",
        icon: FaShieldAlt,
        desc: "Securing digital infrastructures & cryptography.",
        leaders: [
            { 
                name: "Avirath V Pawar", 
                role: "SEC LEAD", 
                batch: "2024", 
                enrollmentId: "2401010023", 
                image: "/Avirath.jpeg" 
            }
        ]
    },
    {
        id: 5,
        title: "AI/ML & Data Science",
        icon: FaBrain,
        desc: "Develop neural networks, predictive models, and intelligent systems.",
        leaders: [
            { 
                name: "Tejas Jyoti", 
                role: "AI LEAD", 
                batch: "2024", 
                enrollmentId: "2401010152", 
                image: "/Tejas.jpeg" 
            },
            { 
                name: "Hamza Mirza", 
                role: "DATA LEAD", 
                batch: "2024", 
                enrollmentId: "2401010121", 
                image: "/Hamza.jpeg" 
            }
        ]
    }
];

// --- 3D TILT CONTAINER ---
const WideTiltCard = ({ children, className }) => {
    const ref = useRef(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const mouseX = useSpring(x, { stiffness: 100, damping: 20 });
    const mouseY = useSpring(y, { stiffness: 100, damping: 20 });
    
    // Only enable tilt on larger screens (optional, but better for mobile UX)
    const rotateX = useTransform(mouseY, [-0.5, 0.5], ["1.5deg", "-1.5deg"]); 
    const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-1deg", "1deg"]);

    const handleMouseMove = (e) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        x.set((e.clientX - rect.left) / rect.width - 0.5);
        y.set((e.clientY - rect.top) / rect.height - 0.5);
    };

    const handleMouseLeave = () => { x.set(0); y.set(0); };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ 
                rotateX: typeof window !== 'undefined' && window.innerWidth > 768 ? rotateX : 0, 
                rotateY: typeof window !== 'undefined' && window.innerWidth > 768 ? rotateY : 0, 
                transformStyle: "preserve-3d" 
            }}
            className={`relative lg:perspective-2000 ${className}`} 
        >
            <div className="relative h-full transition-all duration-300 ease-out transform-style-3d shadow-lg lg:shadow-[0_0_40px_rgba(0,0,0,0.5)]">
                {children}
            </div>
        </motion.div>
    );
};

// --- LEADER IMAGE PANEL COMPONENT ---
const LeaderPanel = ({ data, widthClass }) => {
    return (
        <div className={`relative h-64 lg:h-full ${widthClass} overflow-hidden group/panel border-t lg:border-t-0 lg:border-l border-white/10`}>
            {/* Main Image */}
            <img 
                src={data.image} 
                alt={data.name} 
                className="w-full h-full object-cover object-top filter contrast-110 brightness-90 group-hover/panel:scale-105 group-hover/panel:brightness-100 transition-all duration-700"
            />
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#020005] via-[#020005]/20 to-transparent opacity-90"></div>

            {/* Content Overlay */}
            <div className="absolute bottom-0 left-0 w-full p-4 lg:p-5 z-20">
                
                {/* Role Badge */}
                <div className="mb-1 lg:mb-2">
                    <span className="inline-block px-2 py-0.5 bg-cyan-500/20 border border-cyan-500/40 text-[8px] lg:text-[9px] font-bold text-cyan-400 rounded uppercase tracking-wider backdrop-blur-md">
                        {data.role}
                    </span>
                </div>

                {/* Name */}
                <h4 className="text-lg lg:text-2xl font-bold text-white font-tech uppercase leading-none tracking-wide mb-2 lg:mb-3">
                    {data.name}
                </h4>

                {/* Details (ID & Batch) */}
                <div className="flex flex-col gap-1 border-l-2 border-cyan-500/30 pl-3">
                    <div className="flex items-center gap-2">
                        <FaIdBadge className="text-cyan-500 text-[10px]" />
                        <span className="text-[10px] lg:text-[11px] font-mono text-gray-300 uppercase tracking-wide">{data.enrollmentId}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <FaCalendarAlt className="text-cyan-500 text-[10px]" />
                        <span className="text-[10px] lg:text-[11px] font-mono text-gray-300 uppercase tracking-wide">Batch {data.batch}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

const JoinArmy = () => {
  return (
    <section id="join" className="py-16 lg:py-24 relative bg-[#020005] overflow-hidden">
         {/* --- Background --- */}
         <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] lg:bg-[size:60px_60px] pointer-events-none"></div>
         
         {/* --- Header --- */}
         <div className="text-center mb-12 lg:mb-20 relative z-10 px-4">
             <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-3 border border-cyan-500/30 px-4 py-1.5 lg:px-6 lg:py-2 rounded-full bg-cyan-950/10 backdrop-blur-md mb-4 lg:mb-6"
             >
                <FaGlobe className="text-cyan-400 text-xs animate-pulse" />
                <span className="text-cyan-300 font-mono text-[10px] lg:text-xs tracking-[0.2em] lg:tracking-[0.3em] uppercase">Core Team Recruitment</span>
             </motion.div>
             <h2 className="text-3xl lg:text-7xl font-bold text-white mb-2 font-tech tracking-tight">
                 DOMAIN <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-violet-400">LEADERS</span>
             </h2>
         </div>

         {/* --- DOMAIN CARDS GRID --- */}
         <div className="max-w-7xl mx-auto px-4 lg:px-6 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 relative z-10">
            {expandedSubgroups.map((sub, idx) => {
                const leaders = sub.leaders || [];
                const isMulti = leaders.length > 1;

                // Grid Spanning logic
                const gridClass = isMulti ? "lg:col-span-2" : "lg:col-span-1";
                
                // Width Logic (Responsive)
                const infoWidth = isMulti ? "w-full lg:w-[30%]" : "w-full lg:w-[45%]";
                const leaderSectionWidth = isMulti ? "w-full lg:w-[70%]" : "w-full lg:w-[55%]";
                const singleLeaderWidth = isMulti ? "w-full lg:w-1/2" : "w-full";

                return (
                    <WideTiltCard key={sub.id} className={`${gridClass} w-full`}>
                        <motion.div 
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: idx * 0.1 }}
                            // Responsive height: h-auto on mobile, fixed height on desktop
                            className="relative w-full h-auto lg:h-[380px] bg-[#090516]/90 backdrop-blur-xl border border-white/10 rounded-[1.5rem] lg:rounded-[2rem] overflow-hidden group hover:border-cyan-500/30 transition-colors duration-500"
                        >
                            {/* Flex Column on mobile, Row on Desktop */}
                            <div className="flex flex-col lg:flex-row h-full w-full">
                                
                                {/* --- INFO SECTION --- */}
                                <div className={`${infoWidth} p-6 lg:p-8 flex flex-col justify-center relative bg-gradient-to-b lg:bg-gradient-to-br from-white/5 to-transparent`}>
                                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5"></div>
                                    <FaNetworkWired className="absolute -bottom-10 -left-10 text-[6rem] lg:text-[8rem] text-white/5 rotate-12" />

                                    <div className="relative z-10">
                                        <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-2xl bg-[#0d0a1a] border border-cyan-500/20 flex items-center justify-center text-cyan-400 text-xl lg:text-2xl mb-4 lg:mb-5 shadow-[0_0_30px_rgba(34,211,238,0.1)] group-hover:scale-110 transition-transform duration-500">
                                            {sub.icon ? <sub.icon /> : <FaTerminal />}
                                        </div>
                                        
                                        <h3 className="text-xl lg:text-2xl font-bold text-white font-tech uppercase tracking-wide leading-none mb-2 lg:mb-3">
                                            {sub.title}
                                        </h3>
                                        
                                        <p className="text-gray-400 text-xs leading-relaxed font-light mb-4 lg:mb-6 line-clamp-3">
                                            {sub.desc}
                                        </p>

                                        <div className="flex items-center gap-3">
                                            <div className={`h-6 lg:h-8 w-[2px] lg:w-[3px] rounded-full ${isMulti ? 'bg-violet-500 shadow-[0_0_10px_#8b5cf6]' : 'bg-cyan-500 shadow-[0_0_10px_#06b6d4]'}`}></div>
                                            <div>
                                                <p className="text-[8px] lg:text-[9px] text-gray-500 font-mono uppercase tracking-widest mb-0.5">Status</p>
                                                <p className={`text-[9px] lg:text-[10px] font-bold ${isMulti ? 'text-violet-400' : 'text-cyan-400'} uppercase tracking-wide`}>
                                                    {isMulti ? 'DUAL COMMAND' : 'SINGLE LEAD'}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* --- LEADERS SECTION --- */}
                                {/* Flex Column on mobile (if multiple leaders), Row on Desktop */}
                                <div className={`${leaderSectionWidth} flex flex-col lg:flex-row h-auto lg:h-full bg-transparent`}>
                                    {leaders.map((leader, i) => (
                                        <LeaderPanel 
                                            key={i} 
                                            data={leader} 
                                            widthClass={singleLeaderWidth} 
                                        />
                                    ))}
                                </div>

                            </div>
                        </motion.div>
                    </WideTiltCard>
                );
            })}
         </div>

         {/* --- ACTION SECTION --- */}
         <div className="mt-20 lg:mt-28 relative z-20 pb-12 max-w-6xl mx-auto px-4 lg:px-6">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-stretch">
                 
                 {/* --- ACTION 1: JOIN CORE --- */}
                 <div className="flex flex-col items-center justify-between text-center gap-6 p-6 lg:p-8 rounded-3xl bg-[#090516]/50 border border-cyan-500/20 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-500 group">
                     <div>
                         <div className="flex justify-center mb-4">
                             <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-cyan-500/10 flex items-center justify-center border border-cyan-500/30 group-hover:scale-110 transition-transform">
                                 <FaFingerprint className="text-cyan-400 text-lg lg:text-xl" />
                             </div>
                         </div>
                         <h3 className="text-xl lg:text-2xl font-bold text-white font-tech uppercase mb-2">Join the Core Team</h3>
                         <p className="text-gray-400 text-xs lg:text-sm font-mono leading-relaxed">
                             Ready to lead? Apply to become a core member for any of the technical domains listed above.
                         </p>
                     </div>

                     <a 
                        href={CORE_FORM_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full group/btn relative px-6 py-3 lg:px-8 lg:py-4 bg-cyan-600 hover:bg-cyan-500 text-black font-bold text-sm lg:text-lg font-tech tracking-widest uppercase overflow-hidden rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:shadow-[0_0_30px_rgba(34,211,238,0.6)]"
                     >
                         <div className="absolute inset-0 bg-white translate-x-[-100%] group-hover/btn:translate-x-0 transition-transform duration-300 ease-out mix-blend-difference"></div>
                         <span className="relative z-10 flex items-center justify-center gap-2 lg:gap-3">
                            APPLY FOR CORE
                            <FaAngleDoubleRight className="animate-pulse" />
                         </span>
                     </a>
                 </div>

                 {/* --- ACTION 2: SUBMIT IDENTITY --- */}
                 <div className="flex flex-col items-center justify-between text-center gap-6 p-6 lg:p-8 rounded-3xl bg-[#090516]/50 border border-violet-500/20 backdrop-blur-sm hover:border-violet-500/50 transition-all duration-500 group">
                     <div>
                         <div className="flex justify-center mb-4">
                             <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-violet-500/10 flex items-center justify-center border border-violet-500/30 group-hover:scale-110 transition-transform">
                                 <FaLightbulb className="text-violet-400 text-lg lg:text-xl" />
                             </div>
                         </div>
                         <h3 className="text-xl lg:text-2xl font-bold text-white font-tech uppercase mb-2">Define Our Identity</h3>
                         <p className="text-gray-400 text-xs lg:text-sm font-mono leading-relaxed">
                             Have a brilliant name or logo idea for the club? Submit your concept and tell us what it signifies.
                         </p>
                     </div>

                     <a 
                        href={IDENTITY_FORM_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full group/btn relative px-6 py-3 lg:px-8 lg:py-4 bg-transparent border border-violet-500 text-violet-300 hover:text-black hover:bg-violet-500 font-bold text-sm lg:text-lg font-tech tracking-widest uppercase overflow-hidden rounded-xl transition-all duration-300 shadow-[0_0_15px_rgba(139,92,246,0.1)] hover:shadow-[0_0_30px_rgba(139,92,246,0.5)]"
                     >
                         <span className="relative z-10 flex items-center justify-center gap-2 lg:gap-3">
                            <FaPenNib />
                            SUBMIT IDEAS
                         </span>
                     </a>
                 </div>

             </div>
         </div>
    </section>
  );
};

export default JoinArmy;