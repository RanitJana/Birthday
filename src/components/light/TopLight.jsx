import lightImg from "../../assets/light2.png"; // adjust path if needed
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const leftLights = [
  { top: 0, offset: -2, rotate: -40, delay: 0.06, size: "16rem" },
  { top: 6, offset: -12, rotate: -28, delay: 0.18, size: "18rem" },
  { top: 2, offset: -20, rotate: -62, delay: 0.30, size: "20rem" },
  { top: 8, offset: -35, rotate: -50, delay: 0.42, size: "14rem" },
  { top: 4, offset: -50, rotate: -35, delay: 0.54, size: "16rem" },
  { top: 1, offset: -65, rotate: -60, delay: 0.66, size: "15rem" },
];

const rightLights = [
  { top: 0, offset: -8, rotate: 45, delay: 0.12, size: "16rem" },
  { top: 5, offset: -22, rotate: 30, delay: 0.24, size: "18rem" },
  { top: 3, offset: -35, rotate: 60, delay: 0.36, size: "20rem" },
  { top: 7, offset: -48, rotate: 20, delay: 0.48, size: "14rem" },
  { top: 2, offset: -60, rotate: 25, delay: 0.60, size: "15rem" },
  { top: 4, offset: -72, rotate: 50, delay: 0.72, size: "16rem" },
];

const glowStyle = {
  filter: "drop-shadow(0 0 15px rgba(255,215,0,0.5)) drop-shadow(0 0 15px rgba(255,215,0,0.5))",
};


export default function TopLight() {
  return (
    <div className="fixed inset-x-0 top-0 h-32 pointer-events-none z-50 overflow-visible">

      {/* LEFT cluster with golden glow */}
      <div className="absolute top-0 left-0 w-48 h-full z-20">
        {leftLights.map((l, i) => (
          <motion.img
            key={`L-${i}`}
            src={lightImg}
            alt="light"
            className="absolute"
            style={{
              top: l.top,
              left: l.offset,
              width: l.size,
              ...glowStyle
            }}
            initial={{ opacity: 0, x: -160, rotate: l.rotate }}
            animate={{ opacity: 1, x: 0, rotate: l.rotate }}
            transition={{ delay: l.delay, duration: 0.7, ease: "easeOut" }}
            draggable={false}
          />
        ))}
      </div>

      {/* RIGHT cluster with golden glow */}
      <div className="absolute top-0 right-0 w-48 h-full z-20">
        {rightLights.map((r, i) => (
          <motion.img
            key={`R-${i}`}
            src={lightImg}
            alt="light"
            className="absolute"
            style={{
              top: r.top,
              right: r.offset,
              width: r.size,
              ...glowStyle
            }}
            initial={{ opacity: 0, x: 160, rotate: r.rotate }}
            animate={{ opacity: 1, x: 0, rotate: r.rotate }}
            transition={{ delay: r.delay, duration: 0.7, ease: "easeOut" }}
            draggable={false}
          />
        ))}
      </div>
    </div>
  );
}