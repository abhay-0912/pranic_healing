import Link from "next/link";
import PageHero from "@/components/page-hero";
import Button from "@/components/ui/button";
import { getHealers } from "@/lib/data-access";

function Section({ children, className = "" }) {
  return (
    <section className={`px-6 py-[130px] sm:px-10 lg:px-[60px] ${className}`.trim()}>
      <div className="mx-auto max-w-[1280px]">{children}</div>
    </section>
  );
}

export default async function HealersPage() {
  const healers = await getHealers();

  return (
    <div>
      <PageHero eyebrow="Healers" title="Meet Our Healers" subtitle="Certified, compassionate practitioners dedicated to your transformation." breadcrumb="Home / Healers" />

      <Section>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {healers.map((healer) => (
            <Link key={healer.slug} href={`/healers/${healer.slug}`} className="group border border-white/10 bg-ink-900 p-5">
              <div className="aspect-[4/3] bg-[linear-gradient(180deg,rgba(201,169,110,0.2),rgba(10,12,16,0.92))] transition-transform duration-300 group-hover:scale-[1.02]" />
              <h2 className="mt-4 font-display text-4xl font-light text-white">{healer.name}</h2>
              <p className="mt-1 text-xs uppercase tracking-[0.3em] text-gold-200">{healer.title}</p>
              <p className="mt-3 text-sm text-ink-500">{healer.speciality}</p>
              <p className="mt-2 text-sm text-ink-500">Experience: {healer.experience}</p>
              <Button className="mt-5 w-full">Book with {healer.name.split(" ")[0]}</Button>
            </Link>
          ))}
        </div>
      </Section>
    </div>
  );
}
