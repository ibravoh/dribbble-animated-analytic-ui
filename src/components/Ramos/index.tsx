import { Variants, motion } from "framer-motion";
import laptop from "../../assets/laptop_cut.png";
import phone from "../../assets/phone_cut.png";
import { Plus } from "lucide-react";
import AnimatedText from "../AnimatedText";

const animatedTextVariant: Variants = {
  initial: {
    // y: 20,
    opacity: 0,
  },
  visible: {
    opacity: 1,
    // y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const animatedList: Variants = {
  initial: {
    y: 70,
  },
  visible: {
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const ListItem = ({ text }: { text: string }) => {
  return (
    <div className="flex justify-between items-center px-4 py-4 bg-[#fff] shadow-lg rounded-2xl">
      <h5>{text}</h5>
      <div className="h-8 w-8 rounded-full bg-[#f2f2f2] flex items-center justify-center cursor-pointer">
        <Plus size={16} />
      </div>
    </div>
  );
};
export function Ramos() {
  return (
    <motion.section
      initial={{ translateY: 50 }}
      whileInView={{ translateY: -70 }}
      transition={{ duration: 2, type: "spring", ease: "easeInOut" }}
      className="bg-[#f9f9f9] rounded-[100px] pt-20 relative"
    >
      <div className="flex px-32">
        <div>
          <motion.h1
            className="text-3xl font-light"
            initial={{ translateY: 50 }}
            whileInView={{ translateY: 1 }}
            transition={{ duration: 2, type: "spring", ease: "easeInOut" }}
          >
            Turn your data into real{" "}
            <motion.span
              className="block"
              initial={{ translateY: 50 }}
              whileInView={{ translateY: 1 }}
              transition={{ duration: 2, type: "spring", ease: "easeInOut" }}
            >
              actions and ideas
            </motion.span>
          </motion.h1>

          <motion.div
            className="flex flex-col gap-y-5 mt-28"
            initial="initial"
            whileInView="visible"
            transition={{ staggerChildren: 0.2 }}
          >
            <motion.div variants={animatedList}>
              <ListItem text="Instant Insights" />
            </motion.div>

            <motion.div  variants={animatedList}>
              <ListItem text="AI Technology" />
            </motion.div>

            <motion.div  variants={animatedList}>
              <ListItem text="Easy Integration" />
            </motion.div>
          </motion.div>
        </div>
        <motion.div
          className="bg-black w-[50%] absolute right-0 rounded-tl-3xl z-10"
          initial={{ translateY: 100 }}
          whileInView={{ translateY: 1 }}
          transition={{ duration: 2, type: "spring", ease: "easeInOut" }}
        >
          <motion.img
            src={laptop}
            alt="laptop"
            className="-mt-1 h-[70vh] w-full"
          />
          <motion.div
            className="bg-black w-max !h-max absolute rounded-[40px] top-[160px] -left-[90px] p-1.5"
            initial={{ translateY: 50 }}
            whileInView={{ translateY: 1 }}
            transition={{ duration: 2, type: "spring", ease: "easeInOut" }}
          >
            <motion.img src={phone} alt="phone" className="-mt-1 h-[60vh]" />
          </motion.div>
        </motion.div>
      </div>
      <div className="multi-grid-background mt-28 rounded-bl-[100px] rounded-br-[100px] px-32 h-max !py-0">
        <h1 className="text-[20vw] mt-40 font-bold text-nowrap gap-x-4 text-[#fe4a22]">
          <AnimatedText
            text={"Ramos"}
            variants={animatedTextVariant}
            staggeringRate={0.4}
          />
        </h1>
      </div>
    </motion.section>

  );
}
// 
