import { Variants, motion } from "framer-motion";
import AnimatedText from "../AnimatedText";
import { QrCode } from "lucide-react";
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
export const Footer = () => {
  return (
    <motion.section className="pt-20 px-32 flex flex-col bg-[#0d0d0d]">
      <motion.div
        className="flex justify-between items-center"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 1, opacity: 1 }}
        transition={{ duration: 2, type: "spring" }}
      >
        <motion.ul className="flex justify-between items-center flex-nowrap text-[#909090] text-sm gap-x-5 cursor-pointer">
          <motion.li>About</motion.li>
          <motion.li>Why Us</motion.li>
          <motion.li>Platform</motion.li>
          <motion.li>Pricing</motion.li>
          <motion.li>Contacts</motion.li>
        </motion.ul>
        <motion.h1 className="text-[60px] text-white">
          hello@ramos.com
        </motion.h1>
      </motion.div>
      <motion.hr
        className="mt-8 bg-[#515151] text-[#515151] h-0.5"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 1, opacity: 1 }}
        transition={{ duration: 2, type: "spring" }}
      />
      <motion.div
        className="flex justify-between  text-white w-full mt-16 text-sm"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 1, opacity: 1 }}
        transition={{ duration: 2, type: "spring" }}
      >
        <motion.div className="flex justify-between  gap-x-8 space-x-20">
          <div>
            <h4>Warrensville Heights</h4>
            <span className="text-[#818181]">14418 Vineyard Drive, NC</span>
            <span className="block text-[#818181]">44128</span>
          </div>

          <div>
            <h4>Saint Louis</h4>
            <span className="text-[#818181]">1366 Penn Street</span>
            <span className="block text-[#818181]">63101</span>
          </div>
        </motion.div>
        <motion.ul className="flex justify-between items-center flex-nowrap flex-col text-sm gap-y-5 space-y-5 cursor-pointer font-light">
          <motion.li>LinkedIn</motion.li>
          <motion.li>Instagram</motion.li>
          <motion.li>Facebook</motion.li>
        </motion.ul>
      </motion.div>

      <motion.div className="flex justify-between items-end mt-8 h-full">
        <h1 className="text-white text-[100px]">
          <AnimatedText
            text={"Ramos®"}
            variants={animatedTextVariant}
            staggeringRate={0.09}
          />
        </h1>

        <motion.a className="text-[#818181] self-center" href="#">
          Privacy Policy
        </motion.a>
        <motion.a className="text-[#818181] self-center" href="#">
          License agreement
        </motion.a>

        <motion.div
          className="bg-white rounded-3xl p-3 h-28 w-28 self-center"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <QrCode className="w-full h-full" />
        </motion.div>
      </motion.div>
    </motion.section>
  );
};
