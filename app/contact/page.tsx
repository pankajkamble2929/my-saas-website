// app/contact/page.tsx
import ContactForm from './ContactForm';

export const metadata = {
  title: "Contact Our SaaS Team | Get Support & Assistance Quickly",
  description: "Reach out to our SaaS support team via email, phone, or location. Fill out the contact form to get fast assistance and answers to your queries efficiently.",
};

export default function ContactPage() {
  return (
    <main className="pt-24 bg-[var(--color-background)]">
      <ContactForm />
    </main>
  );
}
