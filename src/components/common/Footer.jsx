import React from 'react';

const Footer = () => (
    <footer className="py-12 text-center border-t border-white/5 bg-[#020105] relative overflow-hidden">
         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
         <p className="text-gray-500 text-xs font-mono tracking-[0.3em] uppercase mb-2">Secure Connection Established</p>
         <p className="text-white font-tech text-sm">© TECH CLUB IOI 2025</p>
    </footer>
);

export default Footer;