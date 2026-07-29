import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Settings } from "lucide-react";

const NAME = "Sarankumar";

export default function TypingName() {
  const [text, setText] = useState(NAME);
  const [phase, setPhase] = useState("pause");

  useEffect(() => {
    let timer;

    switch (phase) {
      case "pause":
        timer = setTimeout(() => setPhase("delete"), 2000);
        break;

      case "delete":
        if (text.length > 0) {
          timer = setTimeout(() => {
            setText((prev) => prev.slice(0, -1));
          }, 80);
        } else {
          timer = setTimeout(() => {
            setPhase("typing");
          }, 300);
        }
        break;

      case "typing":
        if (text.length < NAME.length) {
          timer = setTimeout(() => {
            setText(NAME.slice(0, text.length + 1));
          }, 120);
        } else {
          timer = setTimeout(() => {
            setPhase("pause");
          }, 2500);
        }
        break;
    }

    return () => clearTimeout(timer);
  }, [text, phase]);

  return (
   <p className="flex justify-center items-center flex-wrap gap-1 text-[0.85rem] uppercase tracking-[0.15em] text-text-muted text-center">
  <span>Hi, I'm</span>

  {phase === "typing" && (
    <motion.span
      initial={{ opacity: 0, x: -8 }}
      animate={{ opacity: 1, x: 0 }}
      className="text-sky-400 font-semibold"
    >
      {"</>"}
    </motion.span>
  )}

  <span className="text-text-main font-semibold">
    {text}
  </span>

  <AnimatePresence>
    {phase === "delete" && (
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1, rotate: 360 }}
        exit={{ scale: 0 }}
        transition={{
          rotate: {
            repeat: Infinity,
            duration: 1,
            ease: "linear",
          },
        }}
      >
        <Settings
          size={16}
          className="text-orange-500"
        />
      </motion.div>
    )}
  </AnimatePresence>

  <motion.span
    animate={{ opacity: [1, 0] }}
    transition={{
      repeat: Infinity,
      duration: 0.8,
    }}
    className="text-green-500"
  >
    |
  </motion.span>
</p>
  );
}