import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaAtom, FaRocket, FaUserSecret, FaCogs } from 'react-icons/fa';

// --- UTILITY: SMOOTH SCROLL FUNCTION ---
const handleSmoothScroll = (e, href) => {
    e.preventDefault();
    
    if (href === '#') {
        window.history.pushState({}, "", window.location.pathname);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
        window.history.pushState({}, "", href);
        const targetId = href.replace('#', '');
        const element = document.getElementById(targetId);
        
        if (element) {
            // Offset for fixed navbar
            const offset = 80; 
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    }
};

// --- LOGO COMPONENT ---
const PWLogo = () => (
    <motion.a 
        href="#"
        onClick={(e) => handleSmoothScroll(e, '#')} 
        className="flex items-center gap-3 group cursor-pointer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
    >
        <div className="relative w-10 h-10 flex items-center justify-center bg-white text-black font-black font-tech text-xl rounded-lg shadow-[0_0_15px_rgba(255,255,255,0.3)] group-hover:shadow-[0_0_25px_rgba(34,211,238,0.6)] transition-all duration-300">
            <span className="relative z-10">PW</span>
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
    const mobileClasses = "text-xl py-4 border-b border-white/10 w-full text-center flex items-center justify-center gap-2";
    const desktopClasses = "relative px-2 py-1 text-xs font-bold tracking-widest text-gray-400 hover:text-white transition-colors uppercase font-tech group flex items-center gap-2 cursor-pointer";

    const handleClick = (e) => {
        if (onClick) onClick();
        handleSmoothScroll(e, href);
    };

    return (
        <a 
            href={href} 
            onClick={handleClick}
            className={isMobile ? mobileClasses : desktopClasses}
        >
            <span className="relative z-10">
                {children}
            </span>
            
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
const CTAButton = ({ href, children, isMobile, onClick }) => {
    const handleClick = (e) => {
        if (onClick) onClick();
        handleSmoothScroll(e, href);
    };

    return (
        <a 
            href={href}
            onClick={handleClick}
            className={`${isMobile ? 'w-full mt-6 py-4' : 'px-6 py-2'} relative overflow-hidden bg-cyan-600 hover:bg-cyan-500 border border-cyan-400 text-white rounded transition-all duration-300 group shadow-[0_0_15px_rgba(34,211,238,0.4)] hover:shadow-[0_0_25px_rgba(34,211,238,0.6)] cursor-pointer`}
        >
            <span className="relative z-10 text-xs font-bold tracking-widest font-tech uppercase flex items-center justify-center gap-2">
                <FaRocket className={`text-sm ${isMobile ? 'animate-bounce' : 'group-hover:-translate-y-0.5 transition-transform'}`} />
                {children}
            </span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
        </a>
    );
};

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 
                    ${scrolled 
                        ? 'bg-[#030014]/90 backdrop-blur-xl py-3 shadow-[0_10px_30px_rgba(0,0,0,0.5)] border-b border-white/5' 
                        : 'bg-transparent py-6 border-none'}`}
            >
                <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                    <PWLogo />

                    {/* --- DESKTOP MENU --- */}
                    <div className="hidden md:flex items-center gap-8">
                        <NavLink href="#leaders">Leaders</NavLink>
                        <NavLink href="#operations">Operations</NavLink>
                        
                        <div className="w-px h-4 bg-white/20"></div>
                        
                        {/* LINKED TO #join */}
                        <CTAButton href="#join">Join Army</CTAButton>
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
                        className="fixed inset-0 z-40 bg-[#05020a] md:hidden pt-28 px-6 flex flex-col items-center border-l border-white/10"
                    >
                        {/* Background Grid for Mobile */}
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
                        
                        <div className="flex flex-col w-full gap-2 relative z-10 font-tech">
                            <NavLink href="#leaders" isMobile onClick={() => setMobileMenuOpen(false)}>
                                <FaUserSecret className="text-cyan-500" /> Leaders
                            </NavLink>
                            <NavLink href="#operations" isMobile onClick={() => setMobileMenuOpen(false)}>
                                <FaCogs className="text-cyan-500" /> Operations
                            </NavLink>
                            
                            <CTAButton href="#join" isMobile onClick={() => setMobileMenuOpen(false)}>
                                Join Army
                            </CTAButton>
                        </div>
                        
                        <div className="mt-auto mb-10 flex flex-col items-center gap-2">
                            <div className="text-cyan-500 animate-pulse text-2xl"><FaAtom /></div>
                            <div className="text-gray-600 text-[10px] font-mono tracking-widest">
                                SYSTEM: ONLINE // v2.0
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;