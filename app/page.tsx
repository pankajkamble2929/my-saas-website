import Hero from "../components/Hero";
import Features from "../components/Features";
import Pricing from "../components/Pricing";
import About from "../components/About";
import Contact from "../components/Contact";
import CTA from "../components/CTA";

export const metadata = {
  title: "Modern SaaS Platform for Businesses | Boost Productivity",
  description:
    "Discover our modern SaaS platform that helps businesses grow efficiently, manage tasks, and collaborate seamlessly with powerful features and tools.",
};

export default function HomePage() {
  return (
    <main className="pt-24">
    <Hero />
    <Features />
    <Pricing />
    <About />
    <Contact />
    <CTA />
    </main>
  );
}
