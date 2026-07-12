import { motion } from "framer-motion";

const EASE = [0.65, 0, 0.35, 1] as const;

function Card({
  title,
  description,
  image,
  className = "",
  delay = 0,
}: {
  title: string;
  description: string;
  image: string;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, ease: EASE, delay }}
      className={`relative overflow-hidden rounded-brand bg-card ${className}`}
    >
      <img
        src={image}
        alt={title}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/10 to-transparent" />
      <div className="relative flex h-full flex-col justify-end p-6 sm:p-8">
        <h3
          className="text-2xl text-background sm:text-3xl"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {title}
        </h3>
        <p className="mt-2 max-w-sm font-body text-sm text-background/85 sm:text-base">
          {description}
        </p>
      </div>
    </motion.div>
  );
}

function BeyondTheCupSection() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-24 sm:px-6">
      <div className="flex flex-col items-center text-center">
        <span className="rounded-brand bg-card px-4 py-1.5 text-sm font-medium text-foreground/70">
          Beyond the Cup
        </span>
        <h2
          className="mt-6 text-h2 font-normal leading-tight text-foreground"
          style={{ fontFamily: "var(--font-display)" }}
        >
          More Than Just Coffee
        </h2>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 md:grid-rows-2">
        <Card
          title="Private Events"
          description="Host your next gathering in our cozy back room, complete with a dedicated barista bar."
          image="https://images.unsplash.com/photo-1511920170033-f8396924c348?w=900&q=80&auto=format&fit=crop"
          className="aspect-[4/3] md:aspect-auto"
        />
        <Card
          title="Catering"
          description="Fresh coffee and pastries delivered to your office, wedding, or celebration."
          image="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=900&q=80&auto=format&fit=crop"
          className="aspect-[4/3] md:aspect-auto"
          delay={0.1}
        />
        <Card
          title="Custom Menus"
          description="Work with our roastmaster to build a menu that fits your event perfectly."
          image="https://images.unsplash.com/photo-1509785307050-d4066910ec1e?w=900&q=80&auto=format&fit=crop"
          className="aspect-[4/3] md:col-span-2 md:aspect-[21/9]"
          delay={0.2}
        />
      </div>
    </section>
  );
}

export default BeyondTheCupSection;
