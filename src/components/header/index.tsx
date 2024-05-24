import { motion } from "framer-motion";
import { LinkIcon } from "lucide-react";
import NavList from "./nav/navList";
import { useEffect } from "react";

export default function Header() {
  useEffect(() => {
    window.addEventListener("load", () => {
      const element = document.getElementById("hd");
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  }, []);
  return (
    <motion.div
      className="bg-[#0d0d0d] text-white pl-5 pr-2.5 py-2 rounded-2xl flex justify-between items-center m-2.5 z-30"
      initial={{ translateY: 50 }}
      animate={{ translateY: -1 }}
      transition={{ duration: 3, ease: "easeInOut", type: "spring" }}
      id="hd"
    >
      <motion.div
        className="flex gap-x-1 items-center font-bold"
        initial={{ translateY: 50, opacity: 0 }}
        animate={{ translateY: -1, opacity: [0, 0, 0.3, 0.5, 1] }}
        transition={{ duration: 4, ease: "easeInOut", type: "spring" }}
      >
        <LinkIcon size={16} />
        ramos
      </motion.div>
      <NavList />
      <motion.button
        initial={{ translateY: 50, opacity: 0 }}
        animate={{ translateY: -1, opacity: [0, 0, 0.3, 0.5, 1] }}
        transition={{ duration: 4, ease: "easeInOut", type: "spring" }}
        className="bg-white text-[#0d0d0d] px-8 py-3.5 rounded-2xl text-xs font-light"
        variants={{}}
      >
        Sign Up
      </motion.button>
    </motion.div>
  );
}
