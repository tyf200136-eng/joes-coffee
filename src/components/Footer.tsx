import { ChevronRight } from "lucide-react";

const columns = [
  {
    heading: "استكشف",
    links: [
      { label: "القائمة", href: "#menu" },
      { label: "سينابون", href: "#menu" },
      { label: "تشيز كيك", href: "#menu" },
    ],
  },
  {
    heading: "زورونا",
    links: [
      { label: "موقعنا", href: "#contact" },
      { label: "أوقات العمل", href: "#contact" },
      { label: "من نحن", href: "#contact" },
    ],
  },
  {
    heading: "تواصل",
    links: [
      { label: "تواصل معنا", href: "#contact" },
      { label: "بطاقات الهدايا", href: "#contact" },
    ],
  },
];

function Footer() {
  return (
    <footer className="w-full overflow-hidden bg-foreground px-4 pt-20 text-background sm:px-6">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-2 gap-10 sm:grid-cols-3 md:grid-cols-3">
        {columns.map((col) => (
          <div key={col.heading}>
            <p className="mb-4 font-body text-xs font-semibold uppercase tracking-wider text-background/50">
              {col.heading}
            </p>
            <ul className="flex flex-col gap-3">
              {col.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="flex items-center gap-1.5 font-body text-sm text-background/85 transition-colors duration-200 ease-[cubic-bezier(0.65,0,0.35,1)] hover:text-background"
                  >
                    <ChevronRight size={14} strokeWidth={2} />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mx-auto mt-16 w-full max-w-7xl border-t border-background/10 pt-8">
        <p
          className="select-none text-center leading-none text-background/90"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(3rem, 12vw, 9rem)",
          }}
        >
          Cherry Roll
        </p>
        <p className="mt-8 pb-8 text-center font-body text-xs text-background/40">
          © {new Date().getFullYear()} مجموعة تركي عمر.
        </p>
      </div>
    </footer>
  );
}

export default Footer;