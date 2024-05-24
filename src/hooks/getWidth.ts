import { useEffect, useState } from "react";

export function getWidth(ref:any) {
  const [width, setWidth] = useState(0);
  if (typeof window != "undefined") {
    // Client only.
    useEffect(() => {
      let recalcWidth = () => {
        let w = ref?.current?.offsetWidth || 0;
        setWidth(w);
      };
      // Recalculate on window resize.
      window.addEventListener("resize", recalcWidth);
    }, [ref]);
  }
  return width;
}
