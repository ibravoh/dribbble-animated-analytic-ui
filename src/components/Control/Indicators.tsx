import { motion } from "framer-motion";
import { GridCard } from "./GridCard";
import { IndicatorCard } from "./IndicatorCard";
import { Waypoints } from "lucide-react";

export const Indicator = () => {
  return (
    <GridCard>
      <div className="w-full flex relative justify-center flex-col mt-0.5 items-center flex-1 h-full">
        <motion.div
          className="absolute z-30 top-20"
          whileInView={{ top: 80 }}
          initial={{ top: 120 }}
          transition={{ type: "spring", duration: 3 }}
        >
          <IndicatorCard icon={<Waypoints size={12} />} label="Insights" />
        </motion.div>

        <motion.div className=" z-20 top-8 w-[90%] absolute">
          <IndicatorCard
            icon={<Waypoints size={12} />}
            label="Finance reports"
          />
        </motion.div>

        <div className=" z-10 top-4 absolute w-[80%] ">
          <IndicatorCard icon={<Waypoints size={12} />} label="what" />
        </div>
      </div>

      <div className="mt-[242px] pt-[15px]">
        <h3 className="text-lg my-6 text-center">Monitoring key indicators</h3>
        <p className="text-sm text-[#595959] text-center">
          Analytics platforms allow business ot track{" "}
          <span className="block">
            KPIs, an important tool for measuring sucess{" "}
            <span className="block">and achieving goals</span>
          </span>
        </p>
      </div>

      <div className="mb-6"></div>
    </GridCard>
  );
};
