import { motion } from "framer-motion";

const EASE = [0.65, 0, 0.35, 1] as const;

// Archimedean spiral path — traces from the tight center outward, like the
// cross-section of a cinnamon roll. Animating its pathLength from 0 to 1
// makes it look like the roll is unrolling outward.
const SPIRAL_PATH =
  "M 204.0 200.0 L 204.83 201.29 L 205.2 203.0 L 204.95 204.95 L 204.0 206.93 L 202.33 208.69 L 200.0 210.0 L 197.15 210.63 L 194.0 210.39 L 190.81 209.19 L 187.88 207.0 L 185.51 203.88 L 184.0 200.0 L 183.58 195.6 L 184.41 191.0 L 186.56 186.56 L 190.0 182.68 L 194.56 179.72 L 200.0 178.0 L 205.95 177.78 L 212.0 179.22 L 217.68 182.32 L 222.52 187.0 L 226.08 193.01 L 228.0 200.0 L 228.01 207.51 L 225.98 215.0 L 221.92 221.92 L 216.0 227.71 L 208.54 231.88 L 200.0 234.0 L 190.94 233.81 L 182.0 231.18 L 173.84 226.16 L 167.09 219.0 L 162.33 210.09 L 160.0 200.0 L 160.4 189.39 L 163.63 179.0 L 169.59 169.59 L 178.0 161.89 L 188.35 156.53 L 200.0 154.0 L 212.16 154.6 L 224.0 158.43 L 234.65 165.35 L 243.3 175.0 L 249.26 186.8 L 252.0 200.0 L 251.19 213.72 L 246.77 227.0 L 238.89 238.89 L 228.0 248.5 L 214.75 255.06 L 200.0 258.0 L 184.73 256.99 L 170.0 251.96 L 156.87 243.13 L 146.31 231.0 L 139.15 216.31 L 136.0 200.0 L 137.21 183.18 L 142.84 167.0 L 152.62 152.62 L 166.0 141.11 L 182.14 133.35 L 200.0 130.0 L 218.38 131.42 L 236.0 137.65 L 251.62 148.38 L 264.09 163.0 L 272.44 180.59 L 276.0 200.0 L 274.38 219.93 L 267.55 239.0 L 255.86 255.86 L 240.0 269.28 L 220.96 278.24 L 200.0 282.0 L 178.52 280.17 L 158.0 272.75 L 139.9 260.1 L 125.52 243.0 L 115.96 222.52 L 112.0 200.0";

function IntroAnimation({ onComplete }: { onComplete: () => void }) {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
      // Sudden disappearance — no fade, just removed from the tree by the parent
      // once onAnimationComplete fires below.
    >
      <svg
        viewBox="0 0 400 400"
        className="h-[150vmax] w-[150vmax]"
        fill="none"
      >
        <motion.path
          d={SPIRAL_PATH}
          stroke="var(--color-foreground)"
          strokeWidth={26}
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.8, ease: EASE }}
          onAnimationComplete={() => {
            // brief pause so the fully-unrolled shape registers, then vanish
            setTimeout(onComplete, 200);
          }}
        />
      </svg>
    </motion.div>
  );
}

export default IntroAnimation;