import { ChevronRight } from "lucide-react";

const columns = [
  {
    heading: "Explore",
    links: ["Menu", "Hot Drinks", "Pastries"],
  },
  {
    heading: "Visit",
    links: ["Find Us", "Hours", "About"],
  },
  {
    heading: "Connect",
    links: ["Contact", "Careers", "Gift Cards"],
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
                <li key={link}>
                  <a
                    href="#"
                    className="flex items-center gap-1.5 font-body text-sm text-background/85 transition-colors duration-200 ease-[cubic-bezier(0.65,0,0.35,1)] hover:text-background"
                  >
                    <ChevronRight size={14} strokeWidth={2} />
                    {link}
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
          Joe&apos;s Coffee
        </p>
        <p className="mt-8 pb-8 text-center font-body text-xs text-background/40">
          © {new Date().getFullYear()} Joe&apos;s Coffee. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
