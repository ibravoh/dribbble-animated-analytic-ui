import { Variants, motion, useScroll } from "framer-motion";
import laptop from "../../assets/analytics_laptop.png";
import { BarChart2, Waypoints, Zap } from "lucide-react";
import AnimatedText from "../AnimatedText";
import { useRef } from "react";
export function Analytics() {
  const ref = useRef(null);
  useScroll({ target: ref });
  const animatedTextVariant: Variants = {
    initial: {
      y: 20,
      opacity: 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.9,
      },
    },
  };
  return (
    <motion.section ref={ref} className="py-40 px-32 h-screen">
      <div className="w-full flex justify-between gap-10 items-center">
        <div className="w-full flex flex-col">
          <div className="flex justify-end items-center">
            <motion.div
              initial={{ height: 0, width: 0, rotate: 180 }}
              animate={{
                height: 80,
                width: 80,
                rotate: -180,
              }}
              transition={{ duration: 0.9 }}
              className="bg-[#f2f2f2] rounded-full flex justify-center items-center"
            >
              <motion.span
                initial={{ height: 0, width: 0 }}
                animate={{
                  height: [0, 5, 15, 20],
                  width: [0, 5, 15, 20],
                }}
              >
                <Zap className="text-[#fe4a22] h-full w-full" />
              </motion.span>
            </motion.div>
            <motion.div
              initial={{ height: 0, width: 0, rotate: 180, marginLeft: 30 }}
              animate={{
                height: 80,
                width: 80,
                marginLeft: -16,

                rotate: -180,
              }}
              transition={{ duration: 0.9 }}
              className="bg-[#fe4a22] rounded-full z-20 flex justify-center items-center"
            >
              <motion.span
                initial={{ height: 0, width: 0 }}
                animate={{
                  height: [0, 5, 15, 20],
                  width: [0, 5, 15, 20],
                }}
              >
                <Waypoints className="text-white  h-full w-full" />
              </motion.span>
            </motion.div>
            <h1 className="text-[100px] font-normal leading-tight ml-7">
              <AnimatedText
                text={"Analytics"}
                variants={animatedTextVariant}
                inView={false}
              />
            </h1>
          </div>
          <h1 className="text-[100px] font-normal leading-tight">
            <motion.span
              initial="initial"
              animate="visible"
              className="inline-block"
              transition={{ staggerChildren: 0.1 }}
            >
              {"that".split("").map((char) => {
                return (
                  <motion.span
                    className="inline-block"
                    variants={animatedTextVariant}
                  >
                    {char}
                  </motion.span>
                );
              })}
              <motion.span className="text-gray-300 font-light">
                {" "}
                {"helps".split("").map((char) => {
                  return (
                    <motion.span
                      className="inline-block"
                      variants={animatedTextVariant}
                    >
                      {char}
                    </motion.span>
                  );
                })}
              </motion.span>{" "}
              <motion.span>
                {" "}
                {"you".split("").map((char) => {
                  return (
                    <motion.span
                      className="inline-block"
                      variants={animatedTextVariant}
                    >
                      {char}
                    </motion.span>
                  );
                })}
              </motion.span>
            </motion.span>
          </h1>
        </div>

        <div className="space-x-6 relative w-1/2">
          <motion.div
            initial={{ width: 0, scale: 0 }}
            animate={{
              width: "90%",
              scale: 1,
            }}
            transition={{ duration: 0.9 }}
            className="w-[90%]"
          >
            <motion.img
              src={laptop}
              alt="Laptop"
              className="relative w-full rounded-l-3xl"
            />
          </motion.div>
          <motion.div
            initial={{ scale: 0, width: 0, height: 0 }}
            animate={{
              scale: 1,
              width: "auto",
              height: "auto",
            }}
            transition={{ duration: 0.9 }}
            className="bg-[#fe4a22] text-white p-3 rounded-full shadow-md absolute -top-7 -left-9"
          >
            <motion.svg
              animate={{
                width: 40,
                height: 40,
              }}
              initial={{ width: 0, height: 0 }}
              className="w-10 h-10 fill-current"
              viewBox="0 0 24 24"
            >
              <path d="M10 17l6-5-6-5v10z" />
            </motion.svg>
          </motion.div>
        </div>
      </div>
      <div></div>
      <div className="text-[100px] font-normal leading-tight justify-end flex items-center gap-8">
        <AnimatedText
          text={"shape"}
          variants={animatedTextVariant}
          inView={false}
        />
        <motion.div
          initial={{ height: 0, width: 0, marginLeft: -50, marginBottom: -50 }}
          animate={{
            height: [5, 10, 20, 40, 60, 80],
            width: [5, 10, 20, 40, 60, 80],
            marginLeft: 0,
            marginBottom: 0,
          }}
          transition={{ duration: 0.9 }}
          className="flex items-center justify-center rounded-full w-20 h-20 bg-yellow-500"
        >
          <motion.span
            initial={{ height: 0, width: 0 }}
            animate={{
              height: [0, 0, 0, 0, 20],
              width: [0, 0, 0, 0, 20],
            }}
            transition={{ type: "spring", duration: 1.5, delay: 0.5 }}
          >
            <BarChart2 className="h-full w-full" />
          </motion.span>
        </motion.div>
        <AnimatedText
          text={"the future"}
          variants={animatedTextVariant}
          inView={false}
        />
      </div>
    </motion.section>
  );
}
