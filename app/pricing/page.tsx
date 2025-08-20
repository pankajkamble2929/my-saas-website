// app/pricing/page.tsx
import PricingSection from './PricingSection';

export const metadata = {
  title: "Affordable SaaS Pricing Plans for Businesses | Choose Your Plan",
  description: "Compare our SaaS pricing plans designed for businesses of all sizes. Find the perfect plan to boost productivity, improve collaboration, and scale efficiently.",
};

export default function PricingPage() {
  return (
    <main className="pt-24 bg-[var(--color-background)]">
      <PricingSection />
    </main>
  );
}
