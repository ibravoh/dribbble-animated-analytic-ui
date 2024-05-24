import { motion } from "framer-motion";
export default function NavList() {
  return (
    <motion.nav
      initial={{ translateY: 25, opacity: 0, height: 0, zIndex: 0 }}
      animate={{
        translateY: -1,
        opacity: [0, 0, 0, 0.5, 1],
        height: [0, 0, 0, 0, "auto"],
        zIndex: [-1, -1, -1, 1],
    
      }}

      transition={{ duration: 4, ease: "easeInOut", type:'spring' }}
      className="space-x-4 bg-[#252525] py-3.5 rounded-2xl relative -z-40"
    >
      <a href="#dashboard" className="text-white text-xs px-5">
        Dashboard
      </a>
      <a href="#reports" className="text-white text-xs px-5">
        Reports
      </a>
      <a href="#documents" className="text-white text-xs px-5">
        Documents
      </a>
      <a href="#history" className="text-white text-xs px-5">
        History
      </a>
      <a href="#settings" className="text-white text-xs px-5">
        Settings
      </a>
    </motion.nav>
  );
}
