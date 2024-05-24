import { motion } from "framer-motion";
import { ConversionRate } from "./ConversionRate";
import { GridCard } from "./GridCard";
import { RevenueCard } from "./RevenueCard";

export const CustomerService = () => {
  return (
    <GridCard>
      <motion.div className="w-full flex relative justify-center mt-6">
        <motion.div
          className=" w-[35%]"
          initial={{ opacity: 0, marginRight: -50 }}
          whileInView={{ opacity: 1, marginRight: 0 }}
          transition={{ duration: 2, type: "spring" }}
        >
          <ConversionRate />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, marginLeft: -50 }}
          whileInView={{ opacity: 1, marginLeft: -17 }}
          transition={{ duration: 2, type: "spring" }}
          className="w-[35%] !mt-5 -ml-4 z-10"
        >
          <RevenueCard />
        </motion.div>
      </motion.div>

      <h3 className="text-lg my-6 text-center">Improved customer service</h3>
      <p className="text-sm text-[#595959] text-center">
        Analytics helps optimize service processes by{" "}
        <span className="block">
          providing information on how to improve interactions{" "}
          <span>with customers and increase their satisfaction</span>
        </span>
      </p>

      <div className="mb-6"></div>
    </GridCard>
  );
};
