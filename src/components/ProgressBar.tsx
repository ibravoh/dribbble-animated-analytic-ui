import { motion } from "framer-motion";
interface Props {
  value: number;
  color: string;
  height: number;
  spead?: number;
  delay?:number
}
export const ProgressBar = ({ value, color, height, spead = 2, delay }: Props) => {
  const styles = {
    color,
    height,
  };
  return (
    <div className="w-full bg-[#e5e5e5] rounded-2xl" style={{ height }}>
      <motion.div
        style={{ ...styles }}
        initial={{ width: 0 }}
        whileInView={{ width: `${value}%`, backgroundColor: color }}
        transition={{ type: "spring", duration: spead, delay }}
        className="rounded-2xl"
      ></motion.div>
    </div>
  );
};
