import { motion } from "framer-motion";
import Report from "./report";
export function Strategy() {
  return (
    <motion.section
      initial={{ translateY: 50 }}
      whileInView={{ translateY: -70 }}
      transition={{ duration: 2, type: "spring", ease: "easeInOut" }}
      className="bg-[#f9f9f9] rounded-[100px] px-32 pt-20 pb-12 min-h-screen"
    >
      <Report />
      <div className="w-full justify-center flex">
        <div className="mt-20 flex justify-center w-[55%] text-center items-center gap-x-4">
          <h1 className="w-[60%] flex gap-x-4">
            <span className="text-sm text-nowrap self-center mt-10">up to</span>
            <span className="text-[70px]"> 45%</span>
          </h1>

          <motion.div
            initial={{ translateY: 50 }}
            whileInView={{ translateY: 1 }}
            transition={{ duration: 2, type: "spring", ease: "easeInOut" }}
          >
            <p className="text-sm font-light text-left">
              Increase your analytics efficiency by up to 45%. Unique algorithms
              provide inside from data, reduce time for analysis and save time
              for making important informed descisions
            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
