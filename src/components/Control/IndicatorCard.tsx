import { motion } from "framer-motion";
import { Bar } from "./Bar";
// import IndicatorStatistics from "./IndicatorStatistics";

const bar = [
    {
      value: 80,
      height: 23,
      legend: "2021",
    },
    {
      value: 40,
      height: 50,
      legend: "2020",
    },
    {
      value: 70,
      height: 40,
      legend: "2019",
    },
    {
      color: "#ffd026",
      value: 100,
      height: 23,
      legend: "2018",
    },
    {
      value: 45,
      height: 70,
      legend: "2017",
    },
  ];
export const IndicatorCard = ({
  icon,
  label,
}: {
  icon: JSX.Element;
  label: string;
}) => {
  
  return (
    <div className="shadow-lg flex flex-col bg-white py-6 px-6 rounded-xl w-full border">
      <div className="flex gap-x-3">
        <div className="flex h-6 w-6 rounded-lg bg-[#f2f2f2] justify-center items-center">
          {icon}
        </div>
        <span className="text-sm">{label}</span>
      </div>

      <div className="flex mt-4 gap-x-3">
        <div className="flex flex-col gap-3">
          <span className="text-[#a7a7a7] text-xs">Total profit</span>
          <span className="text-lg -mt-2">$ 264,2K</span>
          <motion.button className="bg-[#ffd026] text-xs font-light px-4 py-2 rounded-xl">
            Data Visuaization
          </motion.button>
        </div>

        <div className="flex gap-x-2 px-8">
          {bar.map((_, i) => {
            return <Bar value={_.value} color={_.color} legend={_.legend} />;
          })}
        </div>
      </div>
    </div>
  );
};
