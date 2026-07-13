import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

const EASE = [0.65, 0, 0.35, 1] as const;

const links = [
  { label: "القائمة", href: "#menu" },
  { label: "موقعنا", href: "#contact" },
];

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="fixed inset-x-0 top-4 z-50 flex justify-center px-4 sm:top-6">
        <div className="flex w-full max-w-3xl items-center justify-between gap-3 rounded-brand bg-card/90 px-4 py-3 shadow-[0_8px_30px_rgba(44,24,16,0.08)] backdrop-blur-md sm:px-6 sm:py-4">
          <span className="font-body text-lg font-semibold tracking-tight text-foreground sm:text-xl">
            شيري رول
          </span>

          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href="#contact"
              className="hidden rounded-brand bg-foreground px-5 py-2.5 text-sm font-medium transition-transform duration-300 ease-[cubic-bezier(0.65,0,0.35,1)] hover:scale-[1.03] hover:shadow-md sm:inline-flex"
              style={{ color: "var(--color-background)" }}
            >
              اطلب الآن
            </a>
            <button
              type="button"
              aria-label={open ? "إغلاق القائمة" : "فتح القائمة"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-foreground transition-transform duration-300 ease-[cubic-bezier(0.65,0,0.35,1)] hover:scale-[1.05]"
              style={{ color: "var(--color-background)" }}
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            key="curtain"
            className="fixed inset-0 z-40 flex items-center justify-center bg-foreground"
            initial={{ clipPath: "circle(0% at 95% 5%)" }}
            animate={{ clipPath: "circle(150% at 95% 5%)" }}
            exit={{ clipPath: "circle(0% at 95% 5%)" }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <nav className="flex w-full max-w-xl flex-col items-center gap-8 px-6">
              {links.map((link, i) => (
                <div key={link.label} className="w-full">
                  {i > 0 && <div className="mb-8 h-px w-full bg-background/20" />}
                  <motion.a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      ease: EASE,
                      delay: 0.25 + i * 0.08,
                    }}
                    className="group flex items-center justify-center gap-3 font-display text-5xl"
                    style={{ color: "var(--color-background)" }}
                  >
                    {link.label}
                    <ArrowUpRight
                      className="transition-transform duration-300 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:translate-x-1 group-hover:-translate-y-1"
                      size={36}
                    />
                  </motion.a>
                </div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Header;