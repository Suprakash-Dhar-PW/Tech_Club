import { FaCode, FaRobot, FaShieldAlt, FaTerminal, FaLaptopCode } from 'react-icons/fa';

export const subgroups = [
  {
    id: 'dev-opensource',
    title: 'Dev & Open Source',
    desc: 'Building scalable architectures and contributing to the global open-source ecosystem.',
    icon: FaCode,
    // --- 2 LEADERS ---
    leaders: [
      { 
        name: 'Ayush Chaurasiya', 
        image: '/Ayush_Dev.jpeg', 
        role: 'Dev Lead', 
        batch: '2024'
      },
      { 
        name: 'Saiyam Kumar', 
        image: '/Saiyam_OS.jpeg', 
        role: 'Open Source Lead', 
        batch: '2024'
      }
    ]
  },
  {
    id: 'aiml',
    title: '', // AI / ML
    desc: 'Pushing the boundaries of Neural Networks, Generative AI, and Predictive Modeling.',
    icon: FaRobot,
    // --- 2 LEADERS ---
    leaders: [
      { 
        name: 'Tejas Jyoti', 
        image: '/Tejas_AIML.jpeg', 
        role: 'AI Research Head', 
        batch: '2024'
      },
      { 
        name: 'Hamza Mirza', 
        image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80', 
        role: 'ML Ops Head', 
        batch: '2024'
      }
    ]
  },
  {
    id: 'cp',
    title: 'Competitive Programming', // Replaces Design
    desc: 'Mastering algorithms, data structures, and elite-level coding logic.',
    icon: FaTerminal,
    // --- 1 LEADER ---
    leader: { 
      name: 'Krish', 
      image: '', 
      role: 'CP Captain',
      batch: '2024'
    }
  },
  {
    id: 'cyber',
    title: 'Cyber Security',
    desc: 'Defensive and offensive security operations, cryptography, and network protection.',
    icon: FaShieldAlt,
    // --- 1 LEADER ---
    leader: { 
      name: 'Avirath', 
      image: '', 
      role: 'Security Lead',
      batch: '2024'
    }
  }
];