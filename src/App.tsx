import { useEffect } from "react";
import { createLenis, destroyLenis } from "./lib/lenis";
import AuroraBackground from "./components/ui/AuroraBackground";
import Header from "./components/Header";
import Hero from "./components/Hero";
import CursorTrailSection from "./components/CursorTrailSection";
import MenuSection from "./components/MenuSection";
import BeyondTheCupSection from "./components/BeyondTheCupSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (!prefersReducedMotion) {
      createLenis();
    }

    return () => {
      destroyLenis();
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <AuroraBackground position="fixed" />
      <Header />
      <main>
        <Hero />
        <CursorTrailSection />
        <MenuSection />
        <BeyondTheCupSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;