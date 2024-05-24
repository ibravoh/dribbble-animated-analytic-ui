import { Variants, motion } from "framer-motion";
import AnimatedText from "../AnimatedText";
import { CustomerService } from "./CustomerService";
import { Indicator } from "./Indicators";
export function Control() {
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
          <AnimatedText
            text={"We give you full"}
            variants={animatedTextVariant}
          />
          <motion.span
            initial="initial"
            whileInView="visible"
            className="inline-block"
            transition={{ staggerChildren: 0.1 }}
          >
            <motion.span className="text-gray-300 font-light">
              {"control".split("").map((char) => {
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
              {["over your data"].map((line) => {
                return (
                  <span className={``}>
                    {line.split(" ").map((word) => {
                      return (
                        <span className="inline-block">
                          {word.split("").map((char) => (
                            <motion.span
                              className="inline-block"
                              variants={animatedTextVariant}
                            >
                              {char}
                            </motion.span>
                          ))}
                          <span className="inline-block">&nbsp;</span>
                        </span>
                      );
                    })}
                  </span>
                );
              })}
              <span className="inline-block">&nbsp;</span>
            </motion.span>
          </motion.span>
        </h1>
      </div>
      <div className="flex items-center gap-8 w-full mt-8">
        <CustomerService />
        <Indicator />
      </div>
    </motion.section>
  );
}
