import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const EASE = [0.65, 0, 0.35, 1] as const;

type FloatingCard = {
  name: string;
  image: string;
  position: "left" | "right";
  bottom: string;
  aspect: string;
  movement: string; // percentage the card travels, e.g. "-100%"
};

const FLOATING_CARDS: FloatingCard[] = [
  {
    name: "Americano",
    image:
      "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=400&q=80&auto=format&fit=crop",
    position: "left",
    bottom: "30%",
    aspect: "aspect-[3/4]",
    movement: "-100%",
  },
  {
    name: "Latte",
    image:
      "https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?w=400&q=80&auto=format&fit=crop",
    position: "right",
    bottom: "14%",
    aspect: "aspect-square",
    movement: "-75%",
  },
];

function FloatingProductCard({
  card,
  y,
}: {
  card: FloatingCard;
  y: ReturnType<typeof useTransform>;
}) {
  return (
    <motion.div
      style={{ y, bottom: card.bottom }}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: EASE, delay: card.position === "left" ? 0.15 : 0.3 }}
      className={`card absolute z-10 w-28 sm:w-36 md:w-44 lg:w-48 p-1.5 sm:p-2 md:p-3 rounded-brand overflow-hidden ${
        card.position === "left"
          ? "left-[calc((100vw-var(--width-content-width,80rem))/2)] translate-x-1/4 lg:-translate-x-1/2"
          : "right-[calc((100vw-var(--width-content-width,80rem))/2)] -translate-x-1/4 lg:translate-x-1/2"
      }`}
    >
      <div className="relative">
        <img
          src={card.image}
          alt={card.name}
          className={`w-full object-cover rounded-[calc(var(--radius-brand)-0.5rem)] ${card.aspect}`}
        />
        {/* Label overlaps the bottom edge of the photo, not a caption below it */}
        <div className="card card--label absolute bottom-1 sm:bottom-1.5 md:bottom-2 inset-x-1 sm:inset-x-1.5 md:inset-x-2 rounded-[calc(var(--radius-brand)-0.75rem)] p-1 sm:p-1.5">
          <h3
            className="truncate text-center text-lg sm:text-xl md:text-2xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {card.name}
          </h3>
        </div>
      </div>
    </motion.div>
  );
}

function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const cardTransforms = FLOATING_CARDS.map((card) =>
    useTransform(scrollYProgress, [0, 1], ["0%", card.movement])
  );

  return (
    <section
      ref={heroRef}
      aria-label="Hero section"
      className="relative pt-25 pb-20 md:pt-30 overflow-hidden"
    >
      {/* Background layer — kept separate from content so it can be swapped/animated independently */}
      <div className="absolute inset-0 -z-10 bg-background" />

      {/* Floating cards are positioned across the WHOLE section, not pinned to the video's corners */}
      {FLOATING_CARDS.map((card, i) => (
        <FloatingProductCard key={card.name} card={card} y={cardTransforms[i]} />
      ))}

      <div className="flex flex-col gap-10 md:gap-12 w-full max-w-7xl mx-auto px-4 sm:px-6">
        {/* Text block — right-aligned, matches the original's items-end / text-right / justify-end */}
        <div className="flex flex-col items-end gap-5 text-right">
          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: EASE }}
            className="w-full font-semibold text-7xl sm:text-8xl md:text-9xl leading-[0.9] text-foreground"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Joe&apos;s Coffee
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: EASE, delay: 0.1 }}
            className="w-full md:w-1/2 font-body text-lg md:text-2xl leading-snug text-balance text-foreground/80"
          >
            Handcrafted espresso drinks and freshly baked pastries in a warm,
            welcoming atmosphere. From our first roast to your morning cup,
            every sip tells a story.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: EASE, delay: 0.2 }}
            className="flex flex-wrap justify-end gap-3 mt-1 md:mt-2"
          >
            <a
              href="#contact"
              className="rounded-brand bg-foreground px-7 py-3.5 text-center text-sm font-medium text-background transition-transform duration-300 ease-[cubic-bezier(0.65,0,0.35,1)] hover:scale-[1.03] hover:shadow-md"
            >
              Order Now
            </a>
            <a
              href="#menu"
              className="rounded-brand border border-foreground/20 bg-transparent px-7 py-3.5 text-center text-sm font-medium text-foreground transition-transform duration-300 ease-[cubic-bezier(0.65,0,0.35,1)] hover:scale-[1.03] hover:bg-foreground/5"
              style={{ transitionDelay: "0.1s" }}
            >
              View Menu
            </a>
          </motion.div>
        </div>

        {/* Video/image block sits BELOW the text, wrapped in its own card frame, revealed on scroll-into-view */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: EASE, delay: 0.2 }}
          className="card w-full p-2 md:p-3 lg:p-4 rounded-brand overflow-hidden"
        >
          <video
            className="aspect-[4/5] md:aspect-video w-full h-full object-cover rounded-[calc(var(--radius-brand)-0.5rem)]"
            autoPlay
            loop
            muted
            playsInline
            poster="https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=1600&q=80&auto=format&fit=crop"
          >
            <source
              src="https://cdn.coverr.co/videos/coverr-pouring-coffee-in-a-cup-2517/1080p.mp4"
              type="video/mp4"
            />
          </video>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;