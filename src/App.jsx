import React, { useRef, useMemo } from 'react';
import { motion, useSpring, useTransform, useMotionValue } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars, Float, Sphere, Cylinder, Box, MeshDistortMaterial, Torus } from '@react-three/drei';
import { FaCrown, FaCode, FaLaptopCode, FaUbuntu, FaBrain, FaShieldAlt, FaRocket, FaCheckCircle, FaTimes, FaUser, FaIdBadge, FaCalendarAlt, FaUsers, FaChalkboardTeacher, FaGamepad, FaInfinity, FaUserSecret, FaBolt } from 'react-icons/fa';

// --- DATA (Updated with high-res image URLs) ---
const subgroups = [
  { 
    id: 'cp', title: 'Competitive Programming', icon: FaCode, 
    desc: 'Master DSA, algorithms, and compete in ICPC & CodeForces.',
    // Increased resolution to w=800&h=800
    leader: { name: "Atul Kumar", batch: "Batch 2024 B1", enrollment: "2401010021", image: "/public/Atul_Pic.jpg" }
  },
  { 
    id: 'dev_os', title: 'Development & Open Source', icon: FaLaptopCode, 
    desc: 'Architect full-stack apps and drive global Open Source projects.',
     // Increased resolution to w=800&h=800
    leader: { name: "Riya Patel", batch: "Batch 2024", enrollment: "2024IT205", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800&h=800&auto=format&fit=crop" }
  },
  { 
    id: 'aiml', title: 'AIML / Data Science', icon: FaBrain, 
    desc: 'Neural networks, NLP, Computer Vision, and Predictive Ops.',
     // Increased resolution to w=800&h=800
    leader: { name: "Ananya Singh", batch: "Batch 2024", enrollment: "2024AI304", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&h=800&auto=format&fit=crop" }
  },
  { 
    id: 'cyber', title: 'Cyber Security', icon: FaShieldAlt, 
    desc: 'Ethical Hacking, CTFs, Cryptography, and Network Defense.',
     // Increased resolution to w=800&h=800
    leader: { name: "Vikram Malhotra", batch: "Batch 2024", enrollment: "2024CS150", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&h=800&auto=format&fit=crop" }
  },
];

// --- 3D MODEL: "THE TECH DROID" ---
function DroidBody() {
  const group = useRef();
  
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if(group.current) {
        group.current.position.y = Math.sin(t) * 0.15;
        group.current.rotation.y = Math.sin(t / 2) * 0.1; 
    }
  });

  return (
    <group ref={group} scale={2.2}>
        {/* Head */}
        <Sphere args={[0.6, 32, 32]} position={[0, 1.2, 0]}>
            <MeshDistortMaterial color="#e0e7ff" metalness={0.9} roughness={0.1} distort={0.15} speed={2} />
        </Sphere>
        {/* Visor */}
        <Box args={[0.7, 0.15, 0.45]} position={[0, 1.2, 0.35]}>
            <meshStandardMaterial color="#22d3ee" emissive="#22d3ee" emissiveIntensity={3} />
        </Box>
        {/* Body */}
        <Cylinder args={[0.4, 0.55, 1.2, 32]} position={[0, 0.2, 0]}>
             <meshStandardMaterial color="#1e1b4b" metalness={0.8} roughness={0.2} />
        </Cylinder>
        {/* Core Reactor */}
        <Sphere args={[0.18, 32, 32]} position={[0, 0.3, 0.35]}>
             <meshStandardMaterial color="#7c3aed" emissive="#7c3aed" emissiveIntensity={4} />
        </Sphere>
        {/* Floating Ring */}
        <Torus args={[1.1, 0.02, 16, 100]} position={[0, -0.4, 0]} rotation={[Math.PI / 2, 0, 0]}>
             <meshStandardMaterial color="#22d3ee" emissive="#22d3ee" emissiveIntensity={2} />
        </Torus>
    </group>
  );
}

const ThreeScene = () => (
  <div className="absolute inset-0 z-0 opacity-80">
    <Canvas camera={{ position: [0, 0, 7] }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} color="#22d3ee" intensity={3} />
      <pointLight position={[-10, 5, -10]} color="#7c3aed" intensity={3} />
      <Stars radius={100} depth={60} count={5000} factor={4} saturation={0} fade speed={1} />
      <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
         <DroidBody />
      </Float>
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} maxPolarAngle={Math.PI/2} minPolarAngle={Math.PI/2} />
    </Canvas>
  </div>
);

// --- COMPONENT: 3D TILT CARD ---
const TiltCard = ({ children, className = "", onClick, border = "border-white/10" }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseX = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseY = useSpring(y, { stiffness: 150, damping: 15 });
  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["6deg", "-6deg"]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-6deg", "6deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  return (
    <motion.div
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      onClick={onClick}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`relative transform perspective-1000 cursor-pointer ${className}`}
    >
      <div className={`relative h-full bg-[#0a0514]/90 ${border} border rounded-2xl p-6 shadow-2xl backdrop-blur-md flex flex-col items-center text-center transition-all duration-300 group hover:bg-[#130d24]`} style={{ transformStyle: "preserve-3d" }}>
         {/* Corner Accents */}
         <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-cyan-500/50 rounded-tl-lg"></div>
         <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-violet-500/50 rounded-br-lg"></div>
         
         <div style={{ transform: "translateZ(30px)" }} className="relative z-10 w-full h-full flex flex-col items-center">
            {children}
         </div>
      </div>
    </motion.div>
  );
};

// --- CUSTOM LOGO COMPONENT ---
const PWLogo = () => (
    <div className="flex items-center gap-3">
        <div className="relative w-10 h-10 flex items-center justify-center bg-white text-black font-black font-tech text-xl rounded-lg shadow-[0_0_15px_rgba(255,255,255,0.5)]">
            PW
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-cyan-500 rounded-full animate-pulse"></div>
        </div>
        <div className="flex flex-col leading-none">
            <span className="text-xl font-bold font-tech tracking-wider text-white">IOI</span>
            <span className="text-[9px] text-cyan-400 font-mono tracking-[0.2em] uppercase">Institute of Innovation</span>
        </div>
    </div>
);

// --- NAVBAR ---
const Navbar = () => (
    <motion.nav 
        initial={{ y: -100 }} animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 bg-[#030014]/80 backdrop-blur-xl border-b border-white/5 px-6 py-4 flex justify-between items-center"
    >
        <PWLogo />
        
        <div className="hidden md:flex gap-8 text-xs font-bold tracking-widest text-gray-400 font-tech">
            <a href="#hierarchy" className="hover:text-cyan-400 transition-colors uppercase">Structure</a>
            <a href="#intel" className="hover:text-violet-400 transition-colors uppercase">Intel</a>
            <a href="#army" className="hover:text-white transition-colors uppercase">Join Army</a>
        </div>
    </motion.nav>
);

// --- MAIN APP ---
function App() {
  const handleApply = (role, domain) => {
      alert(`Initiating recruitment protocol for: ${role} - ${domain}`);
  };

  return (
    <div className="min-h-screen bg-[#030014] text-white selection:bg-cyan-500/30 relative overflow-x-hidden">
      <Navbar />
      <div className="scanline"></div>

      {/* --- HERO SECTION --- */}
      <header className="relative h-screen flex flex-col justify-center items-center text-center px-4 overflow-hidden">
        <ThreeScene /> 
        <div className="relative z-10 pointer-events-none mix-blend-screen">
             <motion.div 
                initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }}
                className="mb-6 inline-flex items-center gap-3 px-4 py-2 rounded-full border border-cyan-500/30 bg-black/40 backdrop-blur-md"
             >
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_#22c55e]"></span>
                <span className="text-cyan-400 text-xs font-mono tracking-[0.3em]">SYSTEM ONLINE v2.5</span>
             </motion.div>

             <motion.h1 
                initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8 }}
                className="text-7xl md:text-9xl font-black tracking-tighter text-white mb-2 drop-shadow-[0_0_30px_rgba(34,211,238,0.2)]"
             >
               TECH CLUB
             </motion.h1>
             <motion.div 
                initial={{ width: 0 }} animate={{ width: "200px" }} transition={{ delay: 0.5, duration: 1 }}
                className="h-1 bg-gradient-to-r from-violet-600 to-cyan-400 mx-auto mb-6"
             ></motion.div>
             
             <motion.p 
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}
                className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto font-light"
             >
                Where <span className="text-cyan-400 font-bold">Imagination</span> Meets <span className="text-violet-500 font-bold">Execution</span>.
             </motion.p>
        </div>
        
        <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}
            className="absolute bottom-12 z-10 pointer-events-auto"
        >
             <button onClick={() => document.getElementById('hierarchy').scrollIntoView({ behavior: 'smooth'})} className="flex flex-col items-center gap-2 group">
                <span className="text-[10px] text-gray-500 font-tech tracking-[0.3em] uppercase group-hover:text-cyan-400 transition-colors">Initialize</span>
                <div className="w-px h-12 bg-gradient-to-b from-cyan-500/50 to-transparent group-hover:h-16 transition-all duration-500"></div>
             </button>
        </motion.div>
      </header>

      <main className="relative z-10 max-w-7xl mx-auto px-6 space-y-36 pb-32">

        {/* --- SECTION 1: HIERARCHY --- */}
        <section id="hierarchy" className="pt-20">
          <div className="text-center mb-20">
             <span className="text-violet-500 font-mono text-xs tracking-widest uppercase mb-3 block">/// CLASSIFIED STRUCTURE</span>
             <h2 className="text-4xl md:text-5xl font-bold text-white text-glow">Chain of Command</h2>
          </div>

          <div className="flex flex-col items-center w-full">
            {/* President */}
            <motion.div whileHover={{ scale: 1.05 }} className="relative z-20 mb-12">
                <div className="absolute inset-0 bg-violet-600 blur-3xl opacity-20 rounded-full animate-pulse"></div>
                <div className="relative bg-[#0a0514] border border-violet-500 px-12 py-6 rounded-2xl flex items-center gap-6 shadow-[0_0_30px_rgba(124,58,237,0.3)]">
                    <FaCrown className="text-4xl text-amber-400 drop-shadow-md" />
                    <div className="text-left border-l border-white/10 pl-6">
                        <h3 className="text-2xl font-bold text-white leading-none font-tech">CLUB PRESIDENT</h3>
                        <p className="text-xs text-violet-400 font-mono mt-1 uppercase tracking-widest">Supreme Commander</p>
                    </div>
                </div>
            </motion.div>

            {/* Circuit Lines */}
            <div className="flex flex-col items-center w-full max-w-6xl">
                 <div className="w-px h-20 bg-gradient-to-b from-violet-500 to-cyan-500 shadow-[0_0_10px_#8b5cf6]"></div>
                 <div className="w-full md:w-[90%] h-px bg-cyan-500/50 relative mb-12 shadow-[0_0_10px_#22d3ee]">
                     <div className="absolute left-0 -top-1 w-2 h-2 bg-cyan-400 rounded-full"></div>
                     <div className="absolute right-0 -top-1 w-2 h-2 bg-cyan-400 rounded-full"></div>
                     {/* Droppers */}
                     <div className="absolute top-0 left-[10%] w-px h-10 bg-cyan-500/50"></div>
                     <div className="absolute top-0 left-[35%] w-px h-10 bg-cyan-500/50"></div>
                     <div className="absolute top-0 left-[65%] w-px h-10 bg-cyan-500/50"></div>
                     <div className="absolute top-0 left-[90%] w-px h-10 bg-cyan-500/50"></div>
                 </div>
            </div>

            {/* Domains */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 w-full">
                 {subgroups.map((sub, idx) => (
                     <motion.div 
                        key={sub.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="relative group"
                     >
                         <TiltCard className="h-full bg-black/60" border="border-cyan-500/30 group-hover:border-cyan-400/80">
                             <div className="w-14 h-14 mx-auto rounded-xl bg-cyan-900/20 border border-cyan-500/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                 <sub.icon className="text-2xl text-cyan-400" />
                             </div>
                             <h4 className="text-lg font-bold text-white mb-2 font-tech">{sub.title}</h4>
                             <p className="text-[10px] text-gray-500 uppercase tracking-widest">Active Unit</p>
                         </TiltCard>
                     </motion.div>
                 ))}
            </div>
          </div>
        </section>

        {/* --- SECTION 2: PRESIDENT'S TRANSMISSION --- */}
        <section className="py-10">
            <div className="relative bg-[#05020B] border border-white/10 rounded-3xl p-1 overflow-hidden">
                <div className="absolute inset-0 bg-circuit-pattern opacity-5"></div>
                <div className="bg-[#0a0514] rounded-[22px] p-8 md:p-12 flex flex-col md:flex-row items-center gap-10 relative z-10">
                    
                    {/* Holographic Image Container (Increased Resolution) */}
                    <div className="relative w-48 h-48 flex-shrink-0 group">
                        <div className="absolute inset-0 border-2 border-dashed border-violet-500/50 rounded-full animate-spin-slow"></div>
                        <div className="absolute -inset-2 border border-cyan-500/30 rounded-full"></div>
                        <div className="w-full h-full rounded-full overflow-hidden border-4 border-violet-900 bg-black relative">
                             <img 
                                src="/public/Munaf_Pic.jpg" 
                                alt="President" 
                                className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity" 
                            />
                            {/* Scanline Effect over image */}
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/10 to-transparent h-2 w-full animate-scan"></div>
                        </div>
                        <div className="absolute bottom-0 right-0 bg-green-500 text-black text-[10px] font-bold px-2 py-0.5 rounded shadow-lg border border-white">
                            ONLINE
                        </div>
                    </div>

                    <div className="text-center md:text-left flex-1">
                        <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                            <h3 className="text-3xl font-bold text-white font-tech">INCOMING TRANSMISSION...</h3>
                            <div className="w-2 h-2 bg-red-500 rounded-full animate-ping"></div>
                        </div>
                        <div className="border-l-2 border-violet-500 pl-6">
                            <p className="text-violet-300 font-mono text-xs mb-4 tracking-widest">SENDER: MD MUNAF // BATCH 2024 B2</p>
                            <p className="text-gray-300 text-lg leading-relaxed font-light">
                                "Technology is best when it brings people together. At <span className="text-cyan-400 font-bold">Tech Club IOI</span>, We believe code is more than syntax it’s a legacy in the making. Whether you’re new to the journey or deep in mastery, you’ll find space here to learn, lead, and innovate. Join us as we decode the future, together."
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* --- SECTION 3: INTEL (SQUAD COMPOSITION) --- */}
        <section id="intel" className="py-10">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white font-tech mb-4">Squad Composition Board</h2>
                <div className="h-1 w-24 bg-gradient-to-r from-transparent via-violet-500 to-transparent mx-auto"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {/* 1. Leader */}
                <TiltCard className="h-full bg-[#0e0a1a]" border="border-amber-500/40">
                    <FaCrown className="text-4xl text-amber-500 mb-4" />
                    <h3 className="text-xl font-bold text-white mb-2 font-tech">1 LEADER</h3>
                    <p className="text-xs text-gray-400 font-mono">The Visionary</p>
                </TiltCard>

                {/* 2. Core Members */}
                <div className="col-span-1 md:col-span-1">
                    <TiltCard className="h-full bg-[#0e0a1a]" border="border-violet-500/40">
                        <FaUserSecret className="text-4xl text-violet-500 mb-4" />
                        <h3 className="text-xl font-bold text-white mb-4 font-tech">5 CORE ELITES</h3>
                        <div className="w-full space-y-2">
                             <div className="flex justify-between items-center bg-white/5 p-2 px-3 rounded border border-white/5">
                                <span className="text-xs font-mono text-gray-400">SENIORS '24</span>
                                <span className="text-violet-400 font-bold">03</span>
                             </div>
                             <div className="flex justify-between items-center bg-white/5 p-2 px-3 rounded border border-white/5">
                                <span className="text-xs font-mono text-gray-400">JUNIORS '25</span>
                                <span className="text-violet-400 font-bold">02</span>
                             </div>
                        </div>
                    </TiltCard>
                </div>

                {/* 3. Advisors */}
                <TiltCard className="h-full bg-[#0e0a1a]" border="border-cyan-500/40">
                    <FaChalkboardTeacher className="text-4xl text-cyan-500 mb-4" />
                    <h3 className="text-xl font-bold text-white mb-2 font-tech">2 ADVISORS</h3>
                    <p className="text-xs text-gray-400 font-mono">Senior Guidance Council</p>
                </TiltCard>

                {/* 4. Regular Members */}
                <TiltCard className="h-full bg-[#0e0a1a]" border="border-green-500/40">
                    <FaInfinity className="text-4xl text-green-500 mb-4" />
                    <h3 className="text-xl font-bold text-white mb-2 font-tech">UNLIMITED</h3>
                    <p className="text-xs text-gray-400 font-mono">Open Membership Slots</p>
                </TiltCard>
            </div>
        </section>

        {/* --- SECTION 4: ARCADE ARMY (Application) --- */}
        <section id="army" className="py-24 relative">
             <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5"></div>
             
             <div className="text-center mb-20 relative z-10">
                 <div className="inline-block border-2 border-white/10 p-2 px-6 rounded-full bg-black/50 backdrop-blur-md mb-6">
                    <span className="text-cyan-400 font-mono text-sm tracking-[0.2em] animate-pulse">Ready Player One?</span>
                 </div>
                 <h2 className="text-5xl md:text-7xl font-black text-white uppercase italic tracking-tighter mb-4 font-tech text-glow">
                     Welcome to the <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-cyan-400">Arcade</span>
                 </h2>
                 <p className="text-2xl font-mono text-white/80">&gt; JOIN MY ARMY_</p>
             </div>

             <div className="space-y-16 relative z-10">
                {subgroups.map((sub, idx) => (
                    <motion.div 
                        key={sub.id}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="bg-[#0a0514] border border-white/10 rounded-[2rem] overflow-hidden shadow-2xl flex flex-col md:flex-row min-h-[280px] group hover:border-violet-500/50 transition-colors duration-500"
                    >
                        {/* LEFT: Leader Card (Updated - No Circle) */}
                        <div className="md:w-1/3 bg-[#0d071a] border-r border-white/5 p-8 flex flex-col items-center justify-end text-center relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10"></div>
                            <img src={sub.leader.image} alt="Leader" className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-opacity duration-500 grayscale group-hover:grayscale-0" />
                            
                            <div className="relative z-20 mt-32">
                                <h3 className="text-3xl font-bold text-white mb-1 font-tech">{sub.leader.name}</h3>
                                <div className="inline-flex flex-col gap-1 text-[10px] text-cyan-400 font-mono uppercase tracking-widest bg-black/80 p-2 rounded border border-white/10 mt-2 backdrop-blur-sm">
                                    <span className="flex items-center gap-2"><FaCalendarAlt /> {sub.leader.batch}</span>
                                    <span className="flex items-center gap-2"><FaIdBadge /> {sub.leader.enrollment}</span>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT: Action Area */}
                        <div className="md:w-2/3 p-8 md:p-12 flex flex-col justify-between bg-gradient-to-r from-transparent to-violet-900/5">
                            <div>
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="p-3 bg-violet-500/10 rounded-xl text-violet-400 text-2xl border border-violet-500/20">
                                        <sub.icon />
                                    </div>
                                    <h2 className="text-3xl font-bold text-white font-tech">{sub.title}</h2>
                                </div>
                                <p className="text-gray-400 text-lg leading-relaxed mb-8 font-light border-l-2 border-white/10 pl-4">
                                    {sub.desc}
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <button 
                                    onClick={() => handleApply('CORE', sub.title)}
                                    className="flex-1 py-4 bg-violet-600 hover:bg-violet-500 text-white rounded-xl font-bold tracking-widest uppercase transition-all shadow-[0_0_20px_rgba(124,58,237,0.3)] flex items-center justify-center gap-2 text-xs font-tech hover:scale-105"
                                >
                                    <FaCrown className="text-lg" /> Apply as Core
                                </button>
                                <button 
                                    onClick={() => handleApply('MEMBER', sub.title)}
                                    className="flex-1 py-4 bg-transparent border border-white/20 hover:bg-white/10 text-white rounded-xl font-bold tracking-widest uppercase transition-all flex items-center justify-center gap-2 text-xs font-tech hover:scale-105"
                                >
                                    <FaUser className="text-lg" /> Join as Member
                                </button>
                            </div>
                        </div>
                    </motion.div>
                ))}
             </div>
        </section>

      </main>

      <footer className="py-12 text-center border-t border-white/5 bg-[#020105] relative overflow-hidden">
         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
         <p className="text-gray-500 text-xs font-mono tracking-[0.3em] uppercase mb-2">Secure Connection Established</p>
         <p className="text-white font-tech text-sm">© TECH CLUB IOI 2025</p>
      </footer>
    </div>
  );
}

export default App;