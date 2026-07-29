// import { useEffect, useState } from "react";
// import { motion } from "framer-motion";

// export default function ScrollIndicator() {
//   const [progress, setProgress] = useState(0);

//   useEffect(() => {
//     const updateScroll = () => {
//       const scrollTop = window.scrollY;

//       const docHeight =
//         document.documentElement.scrollHeight - window.innerHeight;

//       setProgress((scrollTop / docHeight) * 100);
//     };

//     updateScroll();

//     window.addEventListener("scroll", updateScroll);

//     return () => window.removeEventListener("scroll", updateScroll);
//   }, []);

//   return (
//     <div className="fixed right-7 top-1/2 -translate-y-1/2 h-48 w-[2px] bg-zinc-700 rounded-full z-[999]">

//       <motion.div
//         className="absolute left-1/2 h-4 w-4 -translate-x-1/2 rounded-full bg-cyan-400 shadow-[0_0_18px_#22d3ee]"
//         animate={{
//           top: `${progress}%`,
//         }}
//         transition={{
//           type: "spring",
//           stiffness: 90,
//           damping: 18,
//         }}
//       />
//     </div>
//   );
// }


import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function ScrollBar() {
  const trackRef = useRef(null);

  const [progress, setProgress] = useState(0);
  const [dragging, setDragging] = useState(false);

  // Update thumb position when page scrolls
  useEffect(() => {
    const updateScroll = () => {
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;

      setProgress(window.scrollY / maxScroll);
    };

    updateScroll();

    window.addEventListener("scroll", updateScroll);

    return () => window.removeEventListener("scroll", updateScroll);
  }, []);

  // Drag
  useEffect(() => {
    const move = (e) => {
      if (!dragging || !trackRef.current) return;

      const rect = trackRef.current.getBoundingClientRect();

      let y = e.clientY - rect.top;

      y = Math.max(0, Math.min(y, rect.height));

      const percent = y / rect.height;

      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;

      window.scrollTo({
        top: percent * maxScroll,
        behavior: "auto",
      });
    };

    const stop = () => {
  setDragging(false);
  document.body.style.userSelect = "auto";
};

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseup", stop);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseup", stop);
    };
  }, [dragging]);

  return (
    <div
      ref={trackRef}
      className="fixed right-5 top-1/2 -translate-y-1/2 h-60 w-[8px] rounded-full bg-zinc-800 z-[9999]"
    >
      <motion.div
       onMouseDown={() => {
  setDragging(true);
  document.body.style.userSelect = "none";
}}
        className="absolute left-1/2 h-8 w-8 -translate-x-1/2 cursor-grab active:cursor-grabbing rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 shadow-[0_0_25px_#22d3ee]"
        animate={{
          top: `calc(${progress * 100}% - 16px)`,
        }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 20,
        }}
      />
    </div>
  );
}