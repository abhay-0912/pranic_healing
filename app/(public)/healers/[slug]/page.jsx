import { notFound } from "next/navigation";
import Button from "@/components/ui/button";
import { healers, testimonials } from "@/lib/site-data";

function Section({ children, className = "" }) {
  return (
    <section className={`px-6 py-[130px] sm:px-10 lg:px-[60px] ${className}`.trim()}>
      <div className="mx-auto max-w-[1280px]">{children}</div>
    </section>
  );
}

export function generateStaticParams() {
  return healers.map((healer) => ({ slug: healer.slug }));
}

export default function HealerDetailPage({ params }) {
  const healer = healers.find((item) => item.slug === params.slug);
  if (!healer) notFound();

  return (
    <Section>
      <div className="grid gap-10 lg:grid-cols-[0.36fr,0.64fr]">
        <aside className="h-fit border border-white/10 bg-ink-900 p-6 lg:sticky lg:top-28">
          <div className="aspect-[3/4] bg-[linear-gradient(180deg,rgba(201,169,110,0.2),rgba(10,12,16,0.92))]" />
          <h1 className="mt-4 font-display text-5xl font-light text-white">{healer.name}</h1>
          <p className="mt-2 text-xs uppercase tracking-[0.35em] text-gold-200">{healer.title}</p>
          <p className="mt-4 text-sm text-ink-500">Experience: {healer.experience}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {healer.certifications.map((certification) => (
              <span key={certification} className="border border-gold-300/30 px-3 py-1 text-xs text-gold-100">{certification}</span>
            ))}
          </div>
          <Button href={`/booking?healer=${healer.slug}`} className="mt-6 w-full">Book a Session</Button>
        </aside>

        <div className="space-y-8">
          <article className="border border-white/10 bg-ink-900 p-6">
            <h2 className="font-display text-4xl text-white">Biography</h2>
            <p className="mt-4 leading-8 text-ink-500">{healer.bio}</p>
          </article>

          <article className="border border-white/10 bg-ink-900 p-6">
            <h2 className="font-display text-4xl text-white">Areas of Expertise</h2>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              {["Physical healing", "Emotional balancing", "Mental clarity", "Distance support"].map((item) => (
                <p key={item} className="border border-white/10 p-3 text-sm text-ink-300">{item}</p>
              ))}
            </div>
          </article>

          <article className="border border-white/10 bg-ink-900 p-6">
            <h2 className="font-display text-4xl text-white">Availability</h2>
            <p className="mt-4 text-sm text-ink-500">{healer.availability.join(", ")} · 10:00 AM to 6:00 PM IST</p>
          </article>

          <article className="border border-white/10 bg-ink-900 p-6">
            <h2 className="font-display text-4xl text-white">Testimonials</h2>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              {testimonials.slice(0, 2).map((review) => (
                <div key={review.name} className="border border-white/10 p-4">
                  <p className="font-display text-2xl italic text-gold-100">"{review.quote}"</p>
                  <p className="mt-2 text-xs uppercase tracking-[0.3em] text-ink-500">{review.name}</p>
                </div>
              ))}
            </div>
          </article>
        </div>
      </div>
    </Section>
  );
}
