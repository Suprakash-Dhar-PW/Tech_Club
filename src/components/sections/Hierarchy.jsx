import React from 'react';
import { motion } from 'framer-motion';
import { FaCrown, FaServer, FaCode, FaShieldAlt, FaBrain, FaBullhorn, FaUserTie, FaTerminal, FaNetworkWired } from 'react-icons/fa';
import TiltCard from '../common/TiltCard';

// --- DATA STRUCTURE ---
const hierarchyData = {
    topNode: {
        title: "President",
        icon: FaCrown,
        color: "from-amber-400 to-orange-600"
    },
    middleNodes: [
        {
            title: "Vice President",
            icon: FaUserTie,
            color: "from-blue-400 to-indigo-600"
        },
        {
            title: "Operations & Comms",
            icon: FaBullhorn,
            color: "from-pink-500 to-rose-500"
        }
    ],
    // 5 Domains
    techDomains: [
        {
            id: 1,
            title: "Competitive Programming",
            icon: FaCode,
            image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=800&q=80"
        },
        {
            id: 2,
            title: "Web Development",
            icon: FaNetworkWired,
            image: "/web-dev-logo.jpg"
        },
        {
            id: 3,
            title: "Open Source",
            icon: FaTerminal,
            image: "/OS-logo.png"
        },
        {
            id: 5,
            title: "AI/ML & Data Science",
            icon: FaBrain,
            image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80"
        },
        {
            id: 4,
            title: "Cyber Security",
            icon: FaShieldAlt,
            image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80"
        }
    ]
};

// --- ANIMATED LINE COMPONENT ---
const DataStream = ({ className, vertical = false }) => (
    <div className={`relative overflow-hidden ${className} bg-white/5`}>
        <motion.div 
            className={`absolute inset-0 ${vertical ? 'w-full h-full bg-gradient-to-b' : 'w-full h-full bg-gradient-to-r'} from-transparent via-cyan-500 to-transparent opacity-80`}
            animate={vertical ? { top: ['-100%', '100%'] } : { left: ['-100%', '100%'] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
        />
    </div>
);

const Hierarchy = () => {
  return (
    <section id="hierarchy" className="py-16 md:py-24 relative overflow-hidden bg-[#030014]">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/20 via-[#030014] to-[#030014] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none opacity-50"></div>

      <div className="flex flex-col items-center w-full max-w-7xl mx-auto px-4 relative z-10">

        {/* =========================================
            LEVEL 1: PRESIDENT
        ========================================= */}
        <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="relative z-30 mb-0"
        >
            <div className="relative bg-[#0d071a]/60 backdrop-blur-md border border-amber-500/30 px-8 py-4 md:px-10 md:py-5 rounded-2xl flex flex-col items-center gap-3 shadow-[0_0_50px_rgba(245,158,11,0.15)] hover:shadow-[0_0_70px_rgba(245,158,11,0.25)] transition-shadow duration-500">
                <div className={`w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br ${hierarchyData.topNode.color} rounded-xl flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform`}>
                    <hierarchyData.topNode.icon className="text-xl md:text-2xl text-white" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-white leading-none font-tech tracking-wide">{hierarchyData.topNode.title}</h3>
                <div className="absolute -bottom-2 w-3 h-3 bg-amber-500 rounded-full shadow-[0_0_10px_orange]"></div>
            </div>
        </motion.div>

        {/* CONNECTOR: Level 1 -> Level 2 */}
        {/* On Mobile: Simple vertical line. On Desktop: Branching logic */}
        <div className="flex flex-col items-center h-16 md:h-20 w-full relative max-w-4xl">
            {/* Main Vertical Stem */}
            <div className="w-px h-8 md:h-10 bg-white/10 relative">
                <DataStream className="h-full w-full" vertical={true} />
            </div>
            
            {/* Branching Arms (Hidden on Mobile if we stack vertically, but here we keep structure) */}
            {/* We will hide the horizontal branch on mobile and just show vertical connectors if stacked, 
                BUT since level 2 is 2 items, we need the split. */}
            <div className="w-[80%] md:w-[300px] h-px bg-white/10 relative flex justify-between">
                 <DataStream className="h-full w-full" />
                 
                 {/* Connection Dots */}
                 <div className="absolute left-0 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-cyan-500 rounded-full shadow-[0_0_10px_cyan]"></div>
                 <div className="absolute right-0 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-cyan-500 rounded-full shadow-[0_0_10px_cyan]"></div>
                 <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-amber-500 rounded-full shadow-[0_0_10px_orange]"></div>
                 
                 {/* Downward Lines to Level 2 nodes */}
                 <div className="absolute left-0 top-0 w-px h-8 md:h-10 bg-white/10 translate-y-0">
                    <DataStream className="h-full w-full" vertical={true} />
                 </div>
                 <div className="absolute right-0 top-0 w-px h-8 md:h-10 bg-white/10 translate-y-0">
                    <DataStream className="h-full w-full" vertical={true} />
                 </div>
            </div>
        </div>

        {/* =========================================
            LEVEL 2: VICE PRESIDENT & OPS
        ========================================= */}
        {/* CHANGED: grid-cols-1 on mobile, grid-cols-2 on medium+ */}
        {/* Added gap-8 to separate them vertically on mobile */}
        <div className="grid grid-cols-2 gap-4 md:gap-8 w-full max-w-4xl relative z-20">
            {hierarchyData.middleNodes.map((node, idx) => (
                <div key={idx} className="flex flex-col items-center">
                    <motion.div 
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 + (idx * 0.1) }}
                        viewport={{ once: true }}
                        className="bg-[#0e071e]/80 backdrop-blur-md border border-white/10 p-4 md:p-5 rounded-xl flex flex-col items-center gap-3 w-full max-w-[200px] md:max-w-[250px] shadow-lg hover:border-cyan-500/40 hover:shadow-[0_0_30px_rgba(34,211,238,0.1)] transition-all duration-300"
                    >
                        <div className={`w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br ${node.color} rounded-lg flex items-center justify-center shadow-md`}>
                            <node.icon className="text-lg md:text-xl text-white" />
                        </div>
                        <h4 className="text-sm md:text-lg font-bold text-white font-tech tracking-wide text-center">{node.title}</h4>
                        <div className="absolute -bottom-[5px] w-2 h-2 bg-cyan-500 rounded-full opacity-50"></div>
                    </motion.div>
                </div>
            ))}
        </div>

        {/* CONNECTOR: Level 2 -> Level 3 */}
        {/* Adjusted height and logic for mobile */}
        <div className="relative w-full h-12 md:h-16 max-w-7xl mt-0">
             <div className="absolute inset-0 w-full">
                {/* Vertical lines coming down from Level 2 nodes */}
                {/* Matches the grid-cols-2 layout above */}
                <div className="absolute left-[25%] top-0 w-px h-6 md:h-8 bg-white/10 -translate-x-1/2">
                    <DataStream className="h-full w-full" vertical={true} />
                </div>
                <div className="absolute left-[75%] top-0 w-px h-6 md:h-8 bg-white/10 -translate-x-1/2">
                    <DataStream className="h-full w-full" vertical={true} />
                </div>
             </div>

             {/* Horizontal Bar connecting Level 2 to Level 3 */}
             <div className="absolute top-6 md:top-8 left-1/2 -translate-x-1/2 w-[76%] h-px bg-white/10 flex justify-between items-center">
                 <DataStream className="h-full w-full" />
                 <div className="w-1 h-1 bg-cyan-500 rounded-full shadow-[0_0_5px_cyan]"></div>
                 <div className="w-1 h-1 bg-cyan-500 rounded-full shadow-[0_0_5px_cyan]"></div>
             </div>
        </div>

        {/* =========================================
            LEVEL 3: TECHNICAL DOMAINS
        ========================================= */}
        {/* CHANGED: grid-cols-1 on mobile, 2 on tablet, 5 on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 w-full mt-0">
             {hierarchyData.techDomains.map((sub, idx) => (
                 <motion.div 
                    key={sub.id} 
                    initial={{ opacity: 0, y: 30 }} 
                    whileInView={{ opacity: 1, y: 0 }} 
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + (idx * 0.1) }} 
                    className="relative group h-full w-full"
                 >
                     {/* Connector Line for each card */}
                     {/* On mobile, this needs to align with the main flow. 
                         Since we have a complex tree, simpler visual on mobile is often better.
                         Here we keep it but it connects to the horizontal bar above. */}
                     <div className="absolute -top-6 md:-top-8 left-1/2 -translate-x-1/2 w-px h-6 md:h-8 bg-white/10 z-0">
                        <DataStream className="h-full w-full" vertical={true} />
                     </div>

                     <TiltCard className="h-full bg-[#0a0514] overflow-hidden rounded-xl relative z-10" border="border-white/10 hover:border-cyan-500/50">
                         <div className="hidden lg:block absolute -top-[3px] left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-cyan-500 rounded-full shadow-[0_0_8px_cyan]"></div>

                         <div className="flex flex-col h-full">
                             {/* Image - Fully Visible Color */}
                             <div className="h-24 md:h-28 w-full relative overflow-hidden">
                                 <img 
                                    src={sub.image} 
                                    alt={sub.title} 
                                    className="w-full h-full object-cover transition-all duration-700" 
                                 />
                                 <div className="absolute inset-0 bg-gradient-to-t from-[#0a0514] via-[#0a0514]/20 to-transparent"></div>
                                 <div className="absolute inset-0 bg-indigo-500/5 mix-blend-overlay"></div>
                             </div>

                             {/* Content */}
                             <div className="relative px-2 pb-6 -mt-8 md:-mt-10 flex flex-col items-center flex-grow">
                                 <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-[#0e071e] border border-cyan-500/50 flex items-center justify-center shadow-[0_0_20px_rgba(34,211,238,0.2)] relative z-10 mb-3">
                                     <sub.icon className="text-base md:text-lg text-cyan-400 drop-shadow-[0_0_2px_rgba(34,211,238,0.8)]" />
                                 </div>

                                 <h4 className="text-xs md:text-sm font-bold text-cyan-400 mb-2 font-tech text-center tracking-wide min-h-[2.5rem] flex items-center justify-center">
                                     {sub.title}
                                 </h4>
                             </div>
                         </div>
                     </TiltCard>
                 </motion.div>
             ))}
        </div>
      </div>
    </section>
  );
};

export default Hierarchy;