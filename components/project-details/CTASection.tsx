import Button from "../Button";

export default function CTASection({
  primaryButton,
  title = "Ready to Create Something Amazing?",
  subtitle = "Let's bring your vision to life",
}: {
  primaryButton: { href: string; text: string };
  title?: string;
  subtitle?: string;
}) {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-3xl mx-auto text-center space-y-8">
        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black">
            {title}
          </h2>
          <p className="text-lg text-gray-700">{subtitle}</p>
        </div>
        <Button href={primaryButton.href}>{primaryButton.text}</Button>
      </div>
    </section>
  );
}
