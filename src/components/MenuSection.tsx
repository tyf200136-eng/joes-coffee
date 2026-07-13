import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { menuItems, categoryLabels, type MenuCategory } from "../data/menuItems";

const EASE = [0.65, 0, 0.35, 1] as const;

type FilterKey = "all" | MenuCategory;

// تم تعليق خيار القهوة المختصة من الفلاتر هنا
const filters: FilterKey[] = [
  "all", 
  "cinnamon-roll", 
  "cheesecake", 
  // "specialty-coffee" 
];

function MenuSection() {
  const [filter, setFilter] = useState<FilterKey>("all");

  const filtered = useMemo(
    () => {
      // استبعاد عناصر القهوة من قائمة المنتجات المعروضة بالكامل حالياً
      const availableItems = menuItems.filter((item) => item.category !== "specialty-coffee");

      return filter === "all"
        ? availableItems
        : availableItems.filter((item) => item.category === filter);
    },
    [filter]
  );

  return (
    <section
      id="menu"
      className="mx-auto w-full max-w-7xl px-4 py-24 sm:px-6"
    >
      <div className="flex flex-col items-center text-center">
        <span className="card rounded-brand px-4 py-1.5 text-sm font-medium text-foreground/70">
          ما نقدمه
        </span>
        <h2
          className="mt-6 text-h2 font-normal leading-tight text-foreground"
          style={{ fontFamily: "var(--font-display)" }}
        >
          استكشف قائمتنا
        </h2>
        <p className="mt-4 max-w-xl font-body text-foreground/70">
         كل دفعة (Batch) من مخبوزاتنا تحضر وتخبز بمعايير دقيقة وعناية فائقة في مصنعنا، لنضمن لكم الطعم المثالي والجودة الثابتة في كل مرة.
        </p>
      </div>

      <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
        {filters.map((key) => {
          const isActive = filter === key;
          return (
            <button
              key={key}
              type="button"
              onClick={() => setFilter(key)}
              className={`rounded-brand px-5 py-2.5 text-sm font-medium transition-all duration-300 ease-[cubic-bezier(0.65,0,0.35,1)] hover:scale-[1.03] ${
                isActive
                  ? "bg-foreground text-background"
                  : "card text-foreground hover:bg-foreground/5"
              }`}
            >
              {categoryLabels[key]}
            </button>
          );
        })}
      </div>

      <motion.div
        layout
        className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3"
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, ease: EASE }}
              className="card group relative overflow-hidden rounded-brand p-2"
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-[calc(var(--radius-brand)-0.5rem)]">
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-foreground/50 via-transparent to-transparent" />
                <div className="absolute inset-x-1 bottom-1 flex justify-center">
                  <span
                    className="card card--label w-full rounded-brand px-4 py-2 text-center text-sm font-normal leading-none text-foreground sm:text-base"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {item.name}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}

export default MenuSection;