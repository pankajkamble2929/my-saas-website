// app/features/page.tsx
import FeaturesSection from './FeaturesSection';

export const metadata = {
  title: "SaaS Features to Boost Productivity & Team Collaboration",
  description: "Explore the powerful features of our SaaS platform designed to enhance productivity, streamline workflows, and improve collaboration for businesses of all sizes.",
};

export default function FeaturesPage() {
  return (
    <main className="pt-24 bg-[var(--color-background)]">
      <FeaturesSection />
    </main>
  );
}
