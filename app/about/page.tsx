// app/about/page.tsx
import AboutSection from './AboutSection';

export const metadata = {
  title: "About Our SaaS Platform | Empowering Businesses Worldwide",
  description: "Learn about our SaaS platform, mission, vision, and values. Discover how we help businesses improve productivity, collaboration, and efficiency with modern solutions.",
};

export default function AboutPage() {
  return (
    <main className="pt-24 bg-[var(--color-background)]">
      <AboutSection />
    </main>
  );
}
