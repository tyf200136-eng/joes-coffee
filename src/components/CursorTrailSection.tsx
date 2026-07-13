import { useRef, useEffect, useCallback } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const TRAIL_IMAGES = [
  "/images/menu/ -3.jpg",
  "/images/menu/Roll.jpg",
  "/images/menu/ -4.jpg",
  "/images/menu/ -5.jpg",
  "/images/menu/-6.jpg",
  "/images/menu/-7.jpg",
  "/images/menu/-8.jpg",
  "/images/menu/ -9.jpg",
];


const MOVE_THRESHOLD = 150; // px the pointer must travel before the next image activates
const VISIBLE_MS = 800; // how long each image stays visible before fading out

type TrailItemHandle = {
  activate: (x: number, y: number) => void;
};

function TrailItem({
  src,
  zIndex,
  registerRef,
}: {
  src: string;
  zIndex: number;
  registerRef: (el: TrailItemHandle | null) => void;
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const scale = useMotionValue(0.2);

  const springX = useSpring(x, { stiffness: 300, damping: 30 });
  const springY = useSpring(y, { stiffness: 300, damping: 30 });
  const springScale = useSpring(scale, { stiffness: 300, damping: 30 });

  const opacity = useMotionValue(0);
  const springOpacity = useSpring(opacity, { stiffness: 300, damping: 30 });

  const hideTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const activate = useCallback(
    (mx: number, my: number) => {
      x.set(mx);
      y.set(my);
      scale.set(1);
      opacity.set(1);

      if (hideTimeout.current) clearTimeout(hideTimeout.current);
      hideTimeout.current = setTimeout(() => {
        scale.set(0.2);
        opacity.set(0);
      }, VISIBLE_MS);
    },
    [x, y, scale, opacity]
  );

  useEffect(() => {
    registerRef({ activate });
    return () => registerRef(null);
  }, [activate, registerRef]);

  return (
    <motion.div
      data-trail="item"
      className="rounded-brand w-[15em] h-[20em] absolute overflow-hidden pointer-events-none"
      style={{
        left: 0,
        top: 0,
        x: springX,
        y: springY,
        scale: springScale,
        opacity: springOpacity,
        zIndex,
        translateX: "-50%",
        translateY: "-50%",
      }}
    >
      <img
        src={src}
        alt=""
        className="min-h-0 rounded-brand object-cover w-full h-full"
      />
    </motion.div>
  );
}

function CursorTrailSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const lastPos = useRef<{ x: number; y: number } | null>(null);
  const currentIndex = useRef(0);
  const itemRefs = useRef<(TrailItemHandle | null)[]>([]);

  const triggerAt = useCallback((x: number, y: number) => {
    if (lastPos.current) {
      const dx = x - lastPos.current.x;
      const dy = y - lastPos.current.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < MOVE_THRESHOLD) return;
    }

    lastPos.current = { x, y };

    const item = itemRefs.current[currentIndex.current];
    item?.activate(x, y);

    currentIndex.current = (currentIndex.current + 1) % TRAIL_IMAGES.length;
  }, []);

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      const section = sectionRef.current;
      if (!section) return;
      const rect = section.getBoundingClientRect();
      triggerAt(e.clientX - rect.left, e.clientY - rect.top);
    },
    [triggerAt]
  );

  const handleTouchMove = useCallback(
    (e: TouchEvent) => {
      const section = sectionRef.current;
      if (!section) return;
      const touch = e.touches[0];
      if (!touch) return;
      const rect = section.getBoundingClientRect();
      triggerAt(touch.clientX - rect.left, touch.clientY - rect.top);
    },
    [triggerAt]
  );

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    section.addEventListener("mousemove", handleMouseMove);
    // passive: true keeps scrolling smooth since we never call preventDefault
    section.addEventListener("touchmove", handleTouchMove, { passive: true });

    return () => {
      section.removeEventListener("mousemove", handleMouseMove);
      section.removeEventListener("touchmove", handleTouchMove);
    };
  }, [handleMouseMove, handleTouchMove]);

  return (
    <section
      aria-label="About section"
      className="relative py-60"
      ref={sectionRef}
    >
      <div
        data-trail="wrapper"
        className="w-full h-full absolute inset-0 z-0"
      >
        {TRAIL_IMAGES.map((src, i) => (
          <TrailItem
            key={src}
            src={src}
            zIndex={25 + i}
            registerRef={(handle) => {
              itemRefs.current[i] = handle;
            }}
          />
        ))}
      </div>

      <div className="relative z-10 flex flex-col items-center gap-2 w-content-width mx-auto text-center pointer-events-none">
        <h3 className="text-3xl md:text-5xl font-medium">اكتشف معنا...</h3>
        <h2 className="bg-gradient-to-r from-foreground to-primary-cta bg-clip-text text-transparent pb-[0.1em] -mb-[0.1em] text-7xl md:text-8xl leading-[1.15] font-semibold text-center text-balance">
         اختار خط انتاجك
        </h2>
        <div className="flex flex-wrap justify-center gap-3 mt-2 md:mt-3 pointer-events-auto">
          <a
            href="#menu"
            className="flex items-center justify-center h-10 px-6 text-sm rounded-brand bg-foreground cursor-pointer"
            style={{ color: "var(--color-background)" }}
          >
            قائمتنا
          </a>
          <a
            href="#locations"
            className="flex items-center justify-center h-10 px-6 text-sm rounded-brand border border-foreground/20 cursor-pointer"
          >
            موقعنا
          </a>
        </div>
      </div>
    </section>
  );
}

export default CursorTrailSection;