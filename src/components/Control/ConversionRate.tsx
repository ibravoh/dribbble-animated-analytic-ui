import { motion } from "framer-motion";
import { Warehouse } from "lucide-react";
// import { AnimatedCounter } from "../AnimatedCounter";
// import AnimatedNumbers from "react-animated-numbers"
export const ConversionRate = () => {
  return (
    <div className="shadow-lg flex flex-col bg-white p-6 rounded-xl w-full">
      <h4 className="text-center text-xs">Conversion Rate</h4>

      <motion.div
        className="bg-[#f8ce39] relative rounded-2xl flex flex-col justify-center items-center p-4 mt-3"
        initial={{ backgroundColor: "transparent" }}
        whileInView={{ backgroundColor: "#f8ce39" }}
        transition={{ duration: 2, type: "spring" }}
      >
        <div className="absolute -top-2 -left-1 bg-white shadow-3xl rounded-full h-6 w-6 flex justify-center items-center">
          <Warehouse size={5} />
        </div>
        <h1 className="text-3xl">
           2,3
          <span className="text-xl">%</span>
        </h1>
      </motion.div>
      <span className="text-center text-[8px] block mt-4 text-[#a5a5a5]">
        Percentage of <span className="block">Website visitors</span>
      </span>
    </div>
  );
};
