import { Variants, motion } from "framer-motion";

export default function AnimatedText({
  text,
  variants,
  className,
  inView = true,
  staggeringRate = 0.1,
}: {
  text: string[] | string;
  variants: Variants;
  className?: string;
  inView?: boolean;
  staggeringRate?: number;
}) {
  const textArray = Array.isArray(text) ? text : [text];
  return (
    <div>
      <span className="sr-only">{text}</span>
      <motion.span
        initial="initial"
        {...(inView && { whileInView: "visible" })}
        {...(!inView && { animate: "visible" })}
        transition={{ staggerChildren: staggeringRate }}
        aria-hidden
      >
        {textArray.map((line) => {
          return (
            <span className={`block ${className}`}>
              {line.split(" ").map((word) => {
                return (
                  <span className="inline-block">
                    {word.split("").map((char) => (
                      <motion.span className="inline-block" variants={variants}>
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
      </motion.span>
    </div>
  );
}
