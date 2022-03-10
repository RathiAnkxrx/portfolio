import { useEffect, useState } from "react";

const useWindowScroll = () => {
  const [scrollHeight, setScrollHeight] = useState({ height: "null" });
  useEffect(() => {
    const handleHeight = () => {
      setScrollHeight({
        height: window.scrollY,
      });
    };
    window.addEventListener("scroll", handleHeight);
    handleHeight();
    return () => window.removeEventListener("scroll", handleHeight);
  }, []);
  return scrollHeight;
};

export default useWindowScroll;
