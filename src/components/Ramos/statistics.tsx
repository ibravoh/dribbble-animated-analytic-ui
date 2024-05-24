import { motion } from "framer-motion";
import VisitStatistics from "./StrategyGraph";
import { ProgressBar } from "../ProgressBar";
import { CircleArrowUp, Layers3 } from "lucide-react";
export default function Statistics() {
  return (
    <div className="rounded-2xl bg-white pt-8 shadow-lg flex pl-8 justify-between w-full">
      <div className="w-[50%]">
        <button className="bg-[#ffd026] px-4 py-2 rounded-2xl shadow-xl">
          settup up reports
        </button>

        <div className="mt-32 pr-6">
          <h4 className="font-normal text-lg">
            Fast and easy access to analytics
          </h4>
          <p className="text-gray-300 text-sm font-normal mt-6">
            One platform is a comprehensive system of solutions that will be the
            first step towards digitalization of your business
          </p>
        </div>
      </div>
      <div className="border border-r-0 border-b-0 rounded-2xl rounded-tr-none rounded-bl-none w-[60%] p-5">
        <h4 className="text-sm mb-5">Sales statistics</h4>
        <div className="flex w-full">
          <div className="w-[60%] flex gap-x-4 items-center">
            <motion.div
              initial={{ translateY: 15 }}
              whileInView={{
                translateY: 1,
              }}
              transition={{ duration: 0.9, type: "spring" }}
              className="flex items-center justify-center rounded-full w-10 h-10 bg-[#fe4a22]"
            >
              <motion.span initial={{ height: 10, width: 10 }}>
                <Layers3 className="h-full w-full text-white" />
              </motion.span>
            </motion.div>
            <div>
              <span className="text-xs font-light text-[#b6b6b6]">
                Total profit
              </span>
              <h4>
                <span className="text-sm font-light">$</span>{" "}
                <span>246,2K</span>
              </h4>
            </div>
          </div>

          <div className="w-[45%] p-3 bg-[#f6f6f6] rounded-xl flex flex-col gap-y-3">
            <span className="text-xs font-light">Visitors</span>
            <ProgressBar color="#3ec57c" height={3} value={30} />
            <div className="relative">
              <h4 className="text-lg font-light">56K</h4>
              <div className="flex absolute -top-0 left-10 text-[#3ec57c] text-xs gap-x-1">
                <CircleArrowUp size={16} color="#3ec57c" /> <span> +4%</span>
              </div>
            </div>
          </div>
        </div>
        <VisitStatistics />
      </div>
    </div>
  );
}
