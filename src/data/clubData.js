import { FaCode, FaLaptopCode, FaBrain, FaShieldAlt } from 'react-icons/fa';

export const subgroups = [
  { 
    id: 'cp', title: 'Competitive Programming', icon: FaCode, 
    desc: 'Master DSA, algorithms, and compete in ICPC & CodeForces.',
    leader: { name: "Atul Kumar", batch: "Batch 2024", enrollment: "2401010021", image: "/Atul_Pic.jpg" }
  },
  { 
    id: 'dev_os', title: 'Development & Open Source', icon: FaLaptopCode, 
    desc: 'Architect full-stack apps and drive global Open Source projects.',
    leader: { name: "Riya Patel", batch: "Batch 2024", enrollment: "2024IT205", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800&h=800&auto=format&fit=crop" }
  },
  { 
    id: 'aiml', title: 'AIML / Data Science', icon: FaBrain, 
    desc: 'Neural networks, NLP, Computer Vision, and Predictive Ops.',
    leader: { name: "Ananya Singh", batch: "Batch 2024", enrollment: "2024AI304", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&h=800&auto=format&fit=crop" }
  },
  { 
    id: 'cyber', title: 'Cyber Security', icon: FaShieldAlt, 
    desc: 'Ethical Hacking, CTFs, Cryptography, and Network Defense.',
    leader: { name: "Vikram Malhotra", batch: "Batch 2024", enrollment: "2024CS150", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&h=800&auto=format&fit=crop" }
  },
];