import Button from "@/components/ui/button";
import PageHero from "@/components/page-hero";
import SectionLabel from "@/components/section-label";
import ScrollReveal from "@/components/scroll-reveal";
import { getPageConstants } from "@/lib/data-access";

function Section({ children, className = "" }) {
  return (
    <section className={`px-6 py-[130px] sm:px-10 lg:px-[60px] ${className}`.trim()}>
      <div className="mx-auto max-w-[1280px]">{children}</div>
    </section>
  );
}

export default async function AboutPage() {
  const { timeline, values } = await getPageConstants();

  return (
    <div>
      <PageHero
        eyebrow="Our Story"
        title="Healing the World, One Soul at a Time"
        subtitle="We are dedicated to making practical, ethical, and transformative healing available to every seeker through disciplined teaching and compassionate service."
        breadcrumb="Home / About"
      />

      <Section>
        <div className="grid gap-10 lg:grid-cols-2">
          <ScrollReveal>
            <div className="space-y-5">
              <SectionLabel>Who We Are</SectionLabel>
              <h2 className="font-display text-5xl font-light text-white">A sanctuary of energy, healing & transformation</h2>
              <p className="text-ink-500 leading-8">Our center is focused on bringing Pranic Healing to India and beyond through high-quality sessions, disciplined training, and weekly meditation practice.</p>
              <p className="text-ink-500 leading-8">We are guided by certified instructors trained in the GMCKS lineage and committed to precision, integrity, and kindness in all work.</p>
              <p className="text-ink-500 leading-8">Students and clients join us for personal healing, distance work, courses, and long-term spiritual development.</p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={150}>
            <div className="space-y-4">
              {[
                ["10+ Years", "Serving the community"],
                ["500+ Students", "Trained across all levels"],
                ["1000+ Sessions", "Completed with compassion"]
              ].map(([value, label]) => (
                <div key={label} className="border-l-2 border-gold-300 bg-ink-900 p-6">
                  <p className="font-display text-4xl text-gold-200">{value}</p>
                  <p className="mt-2 text-sm uppercase tracking-[0.3em] text-ink-500">{label}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </Section>

      <Section className="bg-ink-900/35">
        <div className="grid gap-10 lg:grid-cols-[0.85fr,1.15fr]">
          <div className="rounded-[1.8rem] border border-gold-300/20 bg-[linear-gradient(180deg,rgba(201,169,110,0.12),rgba(10,12,16,0.9))] p-6">
            <div className="aspect-[3/4] rounded-[1.3rem] border border-white/10 p-6 text-white">
              <div className="flex h-full flex-col justify-end">
                <p className="font-display text-5xl text-gold-200">GMCKS</p>
                <p className="mt-3 text-xl">Grand Master Choa Kok Sui</p>
                <p className="mt-2 text-xs uppercase tracking-[0.35em] text-gold-200/80">Founder of Modern Pranic Healing</p>
              </div>
            </div>
          </div>
          <div className="space-y-5">
            <SectionLabel>The Founder</SectionLabel>
            <h2 className="font-display text-5xl font-light text-white">Grand Master Choa Kok Sui</h2>
            <p className="text-xs uppercase tracking-[0.35em] text-gold-200/85">Founder of Modern Pranic Healing</p>
            <div className="h-px bg-white/10" />
            <p className="leading-8 text-ink-500">Grand Master Choa Kok Sui, through his research and experiments, conceptualized a comprehensive method that helps in cleansing and energizing the energy system which pervades the physical body, thus accelerating the rate at which the body can heal itself. Through his teachings and practical application of Pranic Healing, he demonstrated that energy is an important factor in healing not only the physical being but also the psyche.</p>
            <p className="leading-8 text-ink-500">Most of GMCKS' spiritual experiments were conducted along with his clairvoyant friends, Mang Nenet and Mang Mike, who observed and monitored the procedure and the results of these experiments. Based on his experiments, Master Choa Kok Sui conceptualized, formulated and developed Modern Pranic Healing, as we know it today. His concepts, principles, techniques and methodologies were the result of the synthesis of deep intellectual understanding and wise intuition.</p>
            <p className="leading-8 text-ink-500">With a background in engineering and chemistry, GMCKS brought a systematic, results-oriented approach to ancient healing traditions. He spent over two decades researching spiritual, healing, and mystical traditions from cultures across the globe, synthesising them into a coherent, practical, and repeatable system.</p>
            <p className="leading-8 text-ink-500">His teachings transcend cultural and religious boundaries, emphasising universal truths: that all human beings have the innate capacity to heal, and that energy is the bridge between the physical body and the higher self. Today, Modern Pranic Healing is practiced in over 120 countries by people from all walks of life.</p>
            <blockquote className="border-l-2 border-gold-300 pl-4 font-display text-2xl italic text-gold-100">The purpose of Pranic Healing is not just to heal the sick, but to transform the whole being - physically, emotionally, and spiritually.</blockquote>
          </div>
        </div>
      </Section>

      <Section>
        <div className="relative mx-auto max-w-4xl">
          <div className="absolute bottom-0 left-1/2 top-0 w-px -translate-x-1/2 bg-white/10" />
          <div className="space-y-8">
            {timeline.map(([year, text], index) => (
              <div key={year} className={`grid items-center gap-6 md:grid-cols-2 ${index % 2 === 0 ? "" : "md:[&>*:first-child]:order-2"}`}>
                <div className="rounded-2xl border border-white/10 bg-ink-900 p-5">
                  <p className="text-xs uppercase tracking-[0.35em] text-gold-200">{year}</p>
                  <p className="mt-2 text-sm leading-7 text-ink-300">{text}</p>
                </div>
                <div className="hidden md:flex justify-center">
                  <span className="h-3 w-3 rounded-full bg-gold-300" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-ink-900/35">
        <div className="text-center">
          <SectionLabel>The Science</SectionLabel>
          <h2 className="mt-5 font-display text-5xl font-light text-white">How Pranic Healing Works</h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            ["The Aura", "The body is surrounded by an energy field that supports vitality. Stress and illness can deplete this field."],
            ["Scanning", "Healers are trained to sense energetic congestion and depletion without physical contact."],
            ["Cleansing & Energising", "Used energy is removed and fresh prana is projected to support faster natural recovery."]
          ].map(([title, text]) => (
            <div key={title} className="border border-white/10 bg-ink-900 p-6">
              <h3 className="font-display text-3xl text-white">{title}</h3>
              <p className="mt-4 leading-8 text-ink-500">{text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid gap-6 md:grid-cols-4">
          {values.map(([title, text]) => (
            <div key={title} className="border border-white/10 bg-ink-900 p-6">
              <h3 className="font-display text-3xl text-gold-200">{title}</h3>
              <p className="mt-4 text-sm leading-7 text-ink-500">{text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="border-t border-white/10">
        <div className="text-center">
          <h2 className="font-display text-5xl font-light text-white">Begin your healing journey today</h2>
          <div className="mt-8 flex items-center justify-center gap-3">
            <Button href="/booking">Book a Session</Button>
            <Button href="/courses" variant="outline">Explore Courses</Button>
          </div>
        </div>
      </Section>
    </div>
  );
}
