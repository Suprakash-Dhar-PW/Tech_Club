import React from 'react';
import { motion, useSpring, useTransform, useMotionValue } from 'framer-motion';

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
         <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-cyan-500/50 rounded-tl-lg"></div>
         <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-violet-500/50 rounded-br-lg"></div>
         <div style={{ transform: "translateZ(30px)" }} className="relative z-10 w-full h-full flex flex-col items-center">
            {children}
         </div>
      </div>
    </motion.div>
  );
};

export default TiltCard;