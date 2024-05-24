import { Variants, motion } from "framer-motion";
import { Activity } from "lucide-react";
import AnimatedText from "../AnimatedText";
export function Efficiency() {
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
    <motion.section className="py-20 px-32 h-screen">
      <div className="w-full flex justify-between gap-10 items-center">
        <h1 className="text-[100px] font-normal leading-tight">
          <motion.span
            initial="initial"
            whileInView="visible"
            className="inline-block"
            transition={{ staggerChildren: 0.1 }}
          >
            {"Maximum".split("").map((char) => {
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
              {"efficiency".split("").map((char) => {
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
          </motion.span>
          <AnimatedText
            text={"with our intuitive"}
            variants={animatedTextVariant}
          />
        </h1>
      </div>
      <div className="text-[100px] font-normal leading-tight justify-between flex items-center gap-8">
        <div className="flex">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{
              scale: 1,
            }}
            transition={{ duration: 0.9 }}
            className="bg-[#f2f2f2] rounded-full flex h-[100px] w-[100px] justify-center items-center z-10"
          >
            <motion.div
              className="bg-[#fe4a22] p-1 rounded-lg flex justify-center items-center"
            >
              <Activity className="text-white" size={18} />
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{
              scale: 1,
            }}
            transition={{ duration: 0.9 }}
            className="bg-[#ffd026] rounded-full  h-[100px] w-[100px] -ml-4 flex justify-center items-center flex-col gap-y-0.5"
          >
            <span className="text-sm font-normal">45%</span>
            <span className="text-[5px] text-center">
              System grow <span className="block">faster</span>
            </span>
          </motion.div>
        </div>
        <div className="w-[40%] rounded-full px-3 bg-[#ffd026] z-10">
          <motion.input
            disabled
            initial={{ width: 0, x: 50 }}
            whileInView={{ width: "100%", x: 0 }}
            transition={{ duration: 1, origin: 1 }}
            value={"Analytics Services"}
            className="rounded-full px-3 bg-transparent"
          />
        </div>
      </div>
      <hr className="mt-20" />

      <div className="flex justify-between items-center mt-10">
        <div className="w-full">
          <p>
            Explore traffic resources page, behavior, conversatons and more to
            again deep insight into your audience. With us, your business
            justn't just adpat - it evolves
          </p>
        </div>

        <div className="w-full flex justify-end gap-x-8">
          <motion.button
            className="bg-[#f2f2f2] rounded-2xl px-5 py-4 text-sm font-light"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 2, type: "spring" }}
          >
            Request a demo
          </motion.button>

          <motion.button
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 2, type: "spring" }}
            className="bg-[#fe4a22] rounded-2xl px-5 py-4 text-sm font-light text-white"
          >
            Request a demo
          </motion.button>
        </div>
      </div>
    </motion.section>
  );
}
