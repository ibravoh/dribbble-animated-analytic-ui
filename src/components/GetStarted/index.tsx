import { Variants, motion } from "framer-motion";
import { LinkIcon } from "lucide-react";
import AnimatedText from "../AnimatedText";
const animatedTextVariant: Variants = {
  initial: {
    y: 20,
    opacity: 0,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};
export const GetStarted = () => {
  return (
    <motion.section className="py-20 px-32 h-screen flex flex-col items-center">
      <motion.div
        className="bg-[#fe4a22] shadow-2xl rounded-3xl h-24 w-24 flex justify-center items-center"
        initial={{ scale: 1.5 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <LinkIcon size={30} color="white" />
      </motion.div>

      <h1 className="text-[100px]">
        <AnimatedText
          text={"Get Started"}
          variants={animatedTextVariant}
          staggeringRate={0.09}
        />
      </h1>

      <motion.p
        className="text-center text-[#a2a2a2] font-light"
        initial={{ y: 50 }}
        whileInView={{ y: 1 }}
        transition={{ duration: 2, type: "spring" }}
      >
        Turn information into advantage! Start using{" "}
        <span className="block">Ramos today. Sign up for a free trial.</span>
      </motion.p>

      <div className="flex gap-4 mt-10">
        <motion.button
          className="bg-[#f2f2f2] text-xs font-light px-4 py-1 rounded-xl"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 2, type: "spring" }}
        >
          <motion.span>Request a dmeo</motion.span>
        </motion.button>
        <motion.button
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 2, type: "spring" }}
          className="bg-[#fe4a22] text-xs font-light px-6 py-3 rounded-xl text-white"
        >
          <motion.span>Request a dmeo</motion.span>
        </motion.button>
      </div>
    </motion.section>
  );
};
