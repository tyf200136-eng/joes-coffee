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
          أكثر من مجرد حلى
        </span>
        <h2
          className="mt-6 text-h2 font-normal leading-tight text-foreground"
          style={{ fontFamily: "var(--font-display)" }}
        >
          نكهات تستحق التجربة
        </h2>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 md:grid-rows-2">
        <Card
          title="طلبات خاصة"
          description="نجهز طلبات السنبون والتشيز كيك بكميات كبيرة لمناسباتك ومناسبات محبينك."
          image="/images/menu/طلبات خاصة.jpg"
          className="aspect-[4/3] md:aspect-auto"
        />
        <Card
          title="طازج يوميًا"
          description="نخبز كل قطعة سنبون وتشيز كيك صباح كل يوم بمكونات طبيعية مختارة بعناية."
          image="/images/menu/Cinnamon rolls.jpg"
          className="aspect-[4/3] md:aspect-auto"
          delay={0.1}
        />
        <Card
          title="قهوتنا المختصة"
          description="نحرص على اختيار أجود حبوب القهوة المختصة لتكون الرفيق المثالي لكل قطعة حلى."
          image="/images/menu/قهوتنا المختصة.jpg"
          className="aspect-[4/3] md:col-span-2 md:aspect-[21/9]"
          delay={0.2}
        />
      </div>
    </section>
  );
}

export default BeyondTheCupSection;