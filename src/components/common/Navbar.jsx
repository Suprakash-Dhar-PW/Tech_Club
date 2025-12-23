import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaCube, FaAtom } from 'react-icons/fa';

// --- LOGO COMPONENT ---
const PWLogo = () => (
    <motion.a 
        href="#"
        className="flex items-center gap-3 group cursor-pointer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
    >
        <div className="relative w-10 h-10 flex items-center justify-center bg-white text-black font-black font-tech text-xl rounded-lg shadow-[0_0_15px_rgba(255,255,255,0.3)] group-hover:shadow-[0_0_25px_rgba(34,211,238,0.6)] transition-all duration-300">
            <span className="relative z-10">PW</span>
            
            {/* Tech Decoration on Logo */}
            <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-cyan-500 rounded-full animate-pulse border-2 border-[#030014]"></div>
            <div className="absolute inset-0 border border-white/20 rounded-lg group-hover:scale-110 transition-transform duration-300"></div>
        </div>
        
        <div className="flex flex-col leading-none">
            <span className="text-xl font-bold font-tech tracking-wider text-white group-hover:text-cyan-400 transition-colors">IOI</span>
            <span className="text-[9px] text-gray-400 group-hover:text-cyan-200 font-mono tracking-[0.2em] uppercase transition-colors">
                Institute of Innovation
            </span>
        </div>
    </motion.a>
);

// --- NAV LINK COMPONENT ---
const NavLink = ({ href, children, isMobile = false, onClick }) => {
    const mobileClasses = "text-2xl py-4 border-b border-white/10 w-full text-center";
    const desktopClasses = "relative px-2 py-1 text-xs font-bold tracking-widest text-gray-400 hover:text-white transition-colors uppercase font-tech group";

    return (
        <a 
            href={href} 
            onClick={onClick}
            className={isMobile ? mobileClasses : desktopClasses}
        >
            <span className="relative z-10 flex items-center gap-2 justify-center">
                {isMobile && <FaCube className="text-cyan-500 text-[10px]" />}
                {children}
            </span>
            
            {/* Desktop Hover Effect: Brackets & Glow */}
            {!isMobile && (
                <>
                    <span className="absolute left-0 top-0 text-cyan-500 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">[</span>
                    <span className="absolute right-0 top-0 text-cyan-500 opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">]</span>
                    <span className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                </>
            )}
        </a>
    );
};

// --- CTA BUTTON COMPONENT ---
const CTAButton = ({ href, children, isMobile }) => (
    <a 
        href={href}
        className={`${isMobile ? 'w-full mt-6 py-4' : 'px-6 py-2'} relative overflow-hidden bg-white/5 hover:bg-cyan-500/20 border border-cyan-500/30 hover:border-cyan-400 text-cyan-400 hover:text-white rounded transition-all duration-300 group`}
    >
        <span className="relative z-10 text-xs font-bold tracking-widest font-tech uppercase flex items-center justify-center gap-2">
            <FaAtom className={`text-sm ${isMobile ? 'animate-spin-slow' : 'group-hover:animate-spin'}`} />
            {children}
        </span>
        <div className="absolute inset-0 bg-cyan-500/10 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
    </a>
);

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <motion.nav 
                initial={{ y: -100 }} 
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
                // UPDATED: Logic to completely remove border when not scrolled
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 
                    ${scrolled 
                        ? 'bg-[#030014]/80 backdrop-blur-xl py-3 shadow-[0_10px_30px_rgba(0,0,0,0.5)] border-b border-white/10' 
                        : 'bg-transparent py-6 border-none'}`}
            >
                <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                    <PWLogo />

                    {/* --- DESKTOP MENU --- */}
                    <div className="hidden md:flex items-center gap-8">
                        <NavLink href="#hierarchy">Structure</NavLink>
                        <NavLink href="#intel">Intel</NavLink>
                        <div className="w-px h-4 bg-white/20"></div> {/* Separator */}
                        <CTAButton href="#army">Join Army</CTAButton>
                    </div>

                    {/* --- MOBILE TOGGLE --- */}
                    <button 
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden text-white text-2xl p-2 hover:bg-white/10 rounded-lg transition-colors"
                    >
                        {mobileMenuOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </motion.nav>

            {/* --- MOBILE MENU OVERLAY --- */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div 
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: "spring", damping: 20 }}
                        className="fixed inset-0 z-40 bg-[#05020a] md:hidden pt-28 px-6 flex flex-col items-center"
                    >
                        {/* Background Grid for Mobile Menu */}
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
                        
                        <div className="flex flex-col w-full gap-2 relative z-10 font-tech">
                            <NavLink href="#hierarchy" isMobile onClick={() => setMobileMenuOpen(false)}>Structure</NavLink>
                            <NavLink href="#intel" isMobile onClick={() => setMobileMenuOpen(false)}>Intel</NavLink>
                            <CTAButton href="#army" isMobile onClick={() => setMobileMenuOpen(false)}>Join Army</CTAButton>
                        </div>
                        
                        <div className="mt-auto mb-10 text-gray-600 text-[10px] font-mono tracking-widest">
                            SYSTEM: ONLINE
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;