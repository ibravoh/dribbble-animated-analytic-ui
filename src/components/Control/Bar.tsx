import { motion } from "framer-motion";
export const Bar = ({
  value,
  color = "#e5e5e5",
  spead = 2,
  width,
  legend,
}: {
  value?: number;
  color?: string;
  spead?: number;
  width?: number;
  legend?: string;
  //   height?: number;
}) => {
  const styles = {
    color,
    width,
  };
  return (
    <>
      <motion.div
        className="h-full w-[30px] rounded-lg relative"
        style={{ width }}
      >
        <motion.div
          initial={{ height: 0 }}
          style={styles}
          whileInView={{
            height: `${value}%`,
            backgroundColor: color,
          }}
          transition={{ type: "spring", duration: spead }}
          className="rounded-lg absolute bottom-0 left-0 right-0"
        ></motion.div>
        <span className="absolute -bottom-4 left-2 right-3 text-[8px] text-[#e4e4e4]">{legend}</span>
      </motion.div>
    </>
  );
};

{
  /* <div className="w-full bg-[#e5e5e5] rounded-2xl" style={{ height }}>
<motion.div
  style={{ ...styles }}
  initial={{ width: 0 }}
  whileInView={{ width: `${value}%`, backgroundColor: color }}
  className="rounded-2xl"
></motion.div>
</div> */
}
