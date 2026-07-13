import { motion } from "framer-motion";
import { MessageCircle, Mail, Phone } from "lucide-react";

const EASE = [0.65, 0, 0.35, 1] as const;

const contactMethods = [
  { icon: MessageCircle, label: "Chat with us", href: "#" },
  { icon: Mail, label: "Email us", href: "mailto:hello@joescoffee.example" },
  { icon: Phone, label: "Call us", href: "tel:+10000000000" },
];

function ContactSection() {
  return (
    <section
      id="contact"
      className="mx-auto flex w-full max-w-7xl flex-col items-center px-4 py-24 text-center sm:px-6"
    >
      <span className="rounded-brand bg-card px-4 py-1.5 text-sm font-medium text-foreground/70">
        يسعدنا تواصلك معنا
      </span>
      <h2
        className="mt-6 text-h2 font-normal leading-tight text-foreground"
        style={{ fontFamily: "var(--font-display)" }}
      >
        تواصل معنا
      </h2>
      <p className="mt-4 max-w-lg font-body text-foreground/70">
        لديك استفسار، ملاحظة، أو ترغب فقط في إلقاء التحية؟ تواصل معنا بالطريقة
        التي تناسبك.
      </p>

      <div className="mt-10 flex items-center gap-5 sm:gap-8">
        {contactMethods.map(({ icon: Icon, label, href }, i) => (
          <motion.a
            key={label}
            href={href}
            aria-label={label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.4, ease: EASE, delay: i * 0.08 }}
            className="flex h-16 w-16 items-center justify-center rounded-full bg-foreground transition-transform duration-300 ease-[cubic-bezier(0.65,0,0.35,1)] hover:scale-[1.05] hover:shadow-lg sm:h-20 sm:w-20"
            style={{ color: "var(--color-background)" }}
          >
            <Icon size={26} strokeWidth={1.5} />
          </motion.a>
        ))}
      </div>
    </section>
  );
}

export default ContactSection;