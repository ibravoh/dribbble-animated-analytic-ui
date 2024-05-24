import { KeyframeOptions, animate, motion, useInView } from "framer-motion";
import { useLayoutEffect, useRef } from "react";

type CounterProps = {
  from: number;
  to: number;
  option?: KeyframeOptions;
};

function AnimatedCounter({ from, to, option }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: false });

  useLayoutEffect(() => {
    const elem = ref.current;
    if (!elem) return;
    if (!inView) return;
    elem.textContent = String(from);
    const controls = animate(from, to, {
      duration: 2,
      ease: "easeOut",
      ...option,
      onUpdate(value) {
        // elem.textContent = Intl.NumberFormat("en-US", {
        //   style: "currency",
        //   currency: "USD",
        // }).format(Number(value.toFixed(0)));
        elem.textContent = value.toFixed(0).toLocaleString();
        //
      },
    });
    return () => {
      controls.stop();
    };
  }, [inView, to, ref, from]);

  return <motion.span ref={ref} />;
}

export { AnimatedCounter };
