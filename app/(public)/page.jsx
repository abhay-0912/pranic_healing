import Link from "next/link";
import Button from "@/components/ui/button";
import SectionLabel from "@/components/section-label";
import ScrollReveal from "@/components/scroll-reveal";
import CountUp from "@/components/count-up";
import { chakraItems, courses, healers, services, stats, testimonials } from "@/lib/site-data";

function Section({ className = "", children, id }) {
  return (
    <section id={id} className={`px-6 py-[130px] sm:px-10 lg:px-[60px] ${className}`.trim()}>
      <div className="mx-auto max-w-[1280px]">{children}</div>
    </section>
  );
}

function Card({ children, className = "" }) {
  return <div className={`rounded-[0] border border-white/6 bg-ink-900 p-6 ${className}`.trim()}>{children}</div>;
}

export default function HomePage() {
  return (
    <div>
      <Section className="relative min-h-[100vh] flex items-center overflow-hidden py-0">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute left-[8%] top-[12%] h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle,rgba(126,94,182,0.08),transparent_65%)] blur-3xl" />
          <div className="absolute right-[5%] top-[8%] h-[22rem] w-[22rem] rounded-full bg-[radial-gradient(circle,rgba(201,169,110,0.08),transparent_65%)] blur-3xl" />
          <div className="absolute bottom-[8%] left-[15%] h-[18rem] w-[18rem] rounded-full bg-[radial-gradient(circle,rgba(41,163,163,0.08),transparent_65%)] blur-3xl" />
          <svg className="absolute right-8 top-16 hidden h-[42rem] w-[42rem] opacity-[0.055] lg:block" viewBox="0 0 800 800" fill="none">
            <g stroke="#e8d4a8" strokeWidth="1.1">
              <circle cx="400" cy="400" r="260" />
              <circle cx="400" cy="400" r="170" />
              <circle cx="400" cy="400" r="92" />
              <path d="M400 140L400 660" />
              <path d="M140 400L660 400" />
              <path d="M220 220L580 580" />
              <path d="M580 220L220 580" />
            </g>
          </svg>
          <svg className="absolute bottom-0 left-0 hidden h-[18rem] w-[18rem] opacity-[0.04] lg:block" viewBox="0 0 400 400" fill="none">
            <g stroke="#c9a96e" strokeWidth="1">
              <circle cx="200" cy="200" r="120" />
              <circle cx="200" cy="200" r="72" />
              <path d="M200 80L200 320" />
              <path d="M80 200L320 200" />
            </g>
          </svg>
        </div>

        <div className="relative mx-auto flex w-full max-w-[900px] flex-col items-center justify-center text-center">
          <ScrollReveal delay={100}>
            <SectionLabel>Ancient Wisdom · Modern Practice</SectionLabel>
          </ScrollReveal>
          <ScrollReveal delay={250} className="mt-8">
            <h1 className="font-display text-[clamp(3.2rem,7vw,6.5rem)] font-light leading-[0.95] text-white">
              Awaken the <span className="italic text-gold-200">Healing Power</span> Within You
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={400} className="mt-8 max-w-[580px]">
            <p className="text-base font-light leading-8 text-ink-500 sm:text-lg">
              Experience the transformative science of Pranic Healing - a no-touch, no-drug energy-based system practiced in over 120 countries to restore balance, vitality, and inner peace.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={550} className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button href="/courses">Begin Your Journey</Button>
            <Button href="/booking" variant="outline">
              Book a Session
            </Button>
          </ScrollReveal>
          <ScrollReveal delay={700} className="mt-14 grid w-full max-w-3xl grid-cols-1 gap-3 sm:grid-cols-3">
            {[
              ["120+", "Countries"],
              ["30+", "Years of Research"],
              ["∞", "Transformations"]
            ].map(([number, label]) => (
              <div key={label} className="border-t border-white/10 pt-4">
                <p className="font-display text-3xl font-light text-gold-200">{number}</p>
                <p className="mt-2 text-[0.65rem] uppercase tracking-[0.35em] text-ink-500">{label}</p>
              </div>
            ))}
          </ScrollReveal>
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center">
            <p className="text-[0.7rem] uppercase tracking-[0.4em] text-ink-500">Discover</p>
            <div className="mx-auto mt-3 h-16 w-px bg-gradient-to-b from-gold-300 to-transparent animate-pulseSoft" />
          </div>
        </div>
      </Section>

      <Section className="border-y border-white/6 bg-ink-900/40 py-16">
        <ScrollReveal>
          <div className="flex flex-wrap items-center justify-between gap-4">
            {chakraItems.map(([label, color], index) => (
              <div key={label} className="flex flex-1 min-w-[90px] flex-col items-center text-center">
                <div className="h-px w-full bg-white/5" />
                <div className="mt-5 flex h-5 w-5 items-center justify-center rounded-full" style={{ backgroundColor: color, boxShadow: `0 0 18px ${color}` }}>
                  <span className="h-2 w-2 rounded-full bg-white/80" />
                </div>
                <p className="mt-4 text-xs uppercase tracking-[0.3em] text-ink-300">{label}</p>
                <div className="mt-5 hidden h-px w-full bg-white/5 sm:block" />
              </div>
            ))}
          </div>
          <p className="mx-auto mt-8 max-w-3xl text-center text-sm text-ink-500">
            The chakras are the body's major energy centers - each one influencing physical vitality, emotional balance, and higher awareness.
          </p>
        </ScrollReveal>
      </Section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <ScrollReveal>
            <div className="space-y-6">
              <SectionLabel>What is Pranic Healing</SectionLabel>
              <h2 className="font-display text-4xl font-light leading-tight text-white sm:text-5xl">
                Energy that surrounds <span className="italic text-gold-200">and sustains</span> all life
              </h2>
              <div className="space-y-5 text-sm leading-8 text-ink-500 sm:text-base">
                <p>
                  Prana is the Sanskrit word for life force energy. Modern Pranic Healing, developed in the GMCKS system, uses this principle in a clean, structured, and practical way.
                </p>
                <p>
                  Physical symptoms often begin as energetic disturbance in the aura and chakras. By cleansing and energising the energy body, the system supports the body's natural ability to recover.
                </p>
                <p>
                  The practice has spread to 120+ countries and helped millions of people through personal, distance, and group healing work.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button href="/courses">Explore Courses</Button>
                <Button href="/booking" variant="outline">
                  Book a Session
                </Button>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={150}>
            <div className="relative rounded-[2rem] border border-gold-300/15 bg-ink-900 p-10">
              <div className="absolute inset-0 bg-gold-radial opacity-70" />
              <div className="relative mx-auto flex aspect-square max-w-xl items-center justify-center rounded-full border border-gold-300/20 bg-gradient-to-br from-gold-300/25 via-ink-800/10 to-transparent p-8">
                <div className="absolute inset-8 rounded-full border border-gold-300/20 animate-pulseSoft" />
                <div className="absolute inset-16 rounded-full border border-white/10 animate-floatSlow" />
                <div className="relative flex h-56 w-56 items-center justify-center rounded-full bg-[radial-gradient(circle_at_center,rgba(201,169,110,0.45),rgba(126,94,182,0.18),transparent_72%)] text-center">
                  <span className="font-display text-2xl italic text-gold-100">Life Force Energy</span>
                </div>
                {[["Physical", "left-4 top-12"], ["Mental", "right-6 top-12"], ["Emotional", "left-10 bottom-8"], ["Spiritual", "right-8 bottom-10"]].map(([label, position]) => (
                  <span key={label} className={`absolute rounded-full border border-gold-300/20 bg-ink-950/90 px-3 py-2 text-xs uppercase tracking-[0.3em] text-ink-300 ${position}`}>
                    {label}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </Section>

      <Section className="border-y border-white/6 bg-ink-900/50">
        <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((item, index) => (
            <Card key={item.label} className="space-y-3">
              <p className="font-display text-5xl font-light text-gold-200">
                <CountUp end={item.value} suffix={item.suffix} />
              </p>
              <p className="text-xs uppercase tracking-[0.3em] text-ink-500">{item.label}</p>
              <p className="hidden text-sm leading-7 text-ink-500 md:block">{item.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid gap-6 lg:grid-cols-[1.1fr,0.9fr]">
          <ScrollReveal>
            <div className="space-y-6">
              <SectionLabel>Healing for body, mind & spirit</SectionLabel>
              <h2 className="font-display text-4xl font-light text-white sm:text-5xl">Services crafted for different layers of growth</h2>
              <p className="max-w-2xl text-sm leading-8 text-ink-500 sm:text-base">
                The center offers practical healing sessions, meditation, and prosperity work. Every service is framed around clean technique, ethical care, and clear guidance.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={150}>
            <p className="text-sm leading-8 text-ink-500">
              Personal healing, distance support, emotional release, relationship balancing, abundance work, and weekly meditation form a complete path from relief to transformation.
            </p>
          </ScrollReveal>
        </div>

        <div className="mt-10 grid gap-[2px] md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <Card key={service.slug} className="group relative overflow-hidden transition-colors hover:bg-ink-800">
              <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold-300 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <p className="text-xs uppercase tracking-[0.35em] text-gold-200/80">{service.number}</p>
              <h3 className="mt-4 font-display text-3xl font-light text-white">{service.title}</h3>
              <p className="mt-4 text-sm leading-7 text-ink-500">{service.description}</p>
              <div className="mt-8 flex items-center justify-between text-xs uppercase tracking-[0.3em] text-gold-200/80">
                <Link href={`/booking`} className="transition-colors group-hover:text-gold-100">
                  Book
                </Link>
                <span>→</span>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <Section id="meditation" className="bg-ink-900/35">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <ScrollReveal>
            <div className="relative rounded-[2rem] border border-gold-300/15 bg-ink-900 p-10">
              <div className="mx-auto flex max-w-md flex-col items-center gap-6">
                <div className="flex flex-col items-center gap-4">
                  <div className="h-24 w-24 rounded-full border border-gold-300/25 bg-[radial-gradient(circle,rgba(201,169,110,0.5),rgba(201,169,110,0.05),transparent_75%)] shadow-[0_0_40px_rgba(201,169,110,0.25)] animate-pulseSoft" />
                  <div className="h-32 w-px bg-gradient-to-b from-gold-200 to-transparent" />
                  <div className="h-28 w-28 rounded-full border border-rose-300/25 bg-[radial-gradient(circle,rgba(244,114,182,0.5),rgba(244,114,182,0.05),transparent_75%)] shadow-[0_0_40px_rgba(244,114,182,0.2)] animate-pulseSoft" />
                </div>
                <p className="text-center text-xs uppercase tracking-[0.35em] text-ink-500">Crown · Heart · Light</p>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={150}>
            <div className="space-y-6">
              <SectionLabel>Key Practice</SectionLabel>
              <h2 className="font-display text-4xl font-light text-white sm:text-5xl">Meditation on Twin Hearts</h2>
              <p className="text-sm leading-8 text-ink-500 sm:text-base">
                Activates the Crown and Heart chakras simultaneously, supporting divine love, clarity, and a calm inner field.
              </p>
              <p className="text-sm leading-8 text-ink-500 sm:text-base">
                The practice is accessible for all levels and also contributes to collective healing through consistent group blessing.
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  "Deep inner peace & stillness",
                  "Enhanced mental clarity",
                  "Spiritual illumination",
                  "Stress & anxiety relief",
                  "Global healing contribution",
                  "Expanded awareness"
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-2xl border border-white/6 bg-ink-900 p-4 text-sm text-ink-300">
                    <span className="mt-2 h-2 w-2 rounded-full bg-gold-200" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <Button href="/booking" className="mt-4">
                Join Weekly Sessions
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </Section>

      <Section>
        <div className="space-y-10">
          <div className="flex flex-col gap-4 text-center">
            <SectionLabel>Courses</SectionLabel>
            <h2 className="font-display text-4xl font-light text-white sm:text-5xl">Courses for every level of your journey</h2>
            <p className="mx-auto max-w-2xl text-sm leading-8 text-ink-500 sm:text-base">A structured path from foundational practice to advanced spiritual development.</p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {courses.map((course) => (
              <Card key={course.slug} className={`flex h-full flex-col justify-between ${course.featured ? "border-gold-300/40 shadow-glow" : ""}`}>
                {course.featured ? <span className="text-xs uppercase tracking-[0.35em] text-gold-200">Most Popular</span> : <span className="text-xs uppercase tracking-[0.35em] text-ink-500">{course.level}</span>}
                <div className="mt-4 flex items-start justify-between gap-4">
                  <h3 className="font-display text-3xl font-light text-white">{course.title}</h3>
                  <p className="text-sm text-gold-200">₹{course.price.toLocaleString("en-IN")}</p>
                </div>
                <p className="mt-4 text-sm leading-7 text-ink-500">{course.excerpt}</p>
                <ul className="mt-6 space-y-3 text-sm text-ink-300">
                  {course.topics.map((topic) => (
                    <li key={topic} className="flex items-center gap-3">
                      <span className="h-1.5 w-1.5 rounded-full bg-gold-200" />
                      {topic}
                    </li>
                  ))}
                </ul>
                <Button href={`/courses/${course.slug}`} variant="outline" className="mt-8 w-full">
                  Enroll
                </Button>
              </Card>
            ))}
          </div>
          <div className="text-center">
            <Button href="/courses" variant="outline">
              View All Courses
            </Button>
          </div>
        </div>
      </Section>

      <Section className="bg-ink-900/35">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <ScrollReveal>
            <div className="relative rounded-[2rem] border border-gold-300/15 bg-ink-900 p-10">
              <div className="aspect-[3/4] rounded-[1.5rem] border border-gold-300/20 bg-[linear-gradient(180deg,rgba(201,169,110,0.12),rgba(10,12,16,0.85))] p-6">
                <div className="flex h-full flex-col justify-between rounded-[1.1rem] border border-white/5 p-6 text-white">
                  <p className="font-display text-5xl text-gold-200">MCKS</p>
                  <div>
                    <p className="text-xl">Grand Master Choa Kok Sui</p>
                    <p className="mt-2 text-xs uppercase tracking-[0.35em] text-gold-200/80">Founder of Modern Pranic Healing</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={150}>
            <div className="space-y-6">
              <SectionLabel>The Founder</SectionLabel>
              <h2 className="font-display text-4xl font-light text-white sm:text-5xl">A legacy of healing & wisdom</h2>
              <p className="text-sm leading-8 text-ink-500 sm:text-base">
                Grand Master Choa Kok Sui was a global teacher whose engineering background helped him develop a practical, results-oriented healing system.
              </p>
              <blockquote className="border-l-2 border-gold-300 pl-5 font-display text-2xl font-light italic text-gold-100">
                The soul is pure, divine, and perfect...
              </blockquote>
              <p className="text-sm leading-8 text-ink-500 sm:text-base">
                Through decades of research, Modern Pranic Healing and Arhatic Yoga spread across 120+ countries.
              </p>
              <Button href="/about" variant="outline">
                Read Full Story
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </Section>

      <Section>
        <div className="space-y-8">
          <div className="flex items-end justify-between gap-4">
            <div>
              <SectionLabel>Healers</SectionLabel>
              <h2 className="mt-4 font-display text-4xl font-light text-white">Meet the people behind the practice</h2>
            </div>
            <Button href="/healers" variant="outline">
              View All
            </Button>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {healers.map((healer) => (
              <Link key={healer.slug} href={`/healers/${healer.slug}`}>
                <Card className="group h-full overflow-hidden transition-all hover:-translate-y-1 hover:border-gold-300/30">
                  <div className="aspect-[4/3] rounded-[0] bg-[linear-gradient(180deg,rgba(201,169,110,0.18),rgba(10,12,16,0.85))] transition-transform duration-300 group-hover:scale-[1.02]" />
                  <div className="mt-5 space-y-2">
                    <h3 className="font-display text-3xl font-light text-white">{healer.name}</h3>
                    <p className="text-sm uppercase tracking-[0.3em] text-gold-200/85">{healer.title}</p>
                    <p className="text-sm text-ink-500">{healer.speciality}</p>
                    <p className="text-sm text-ink-500">{healer.experience}</p>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-ink-900/35">
        <div className="space-y-8">
          <div className="text-center">
            <SectionLabel>Testimonials</SectionLabel>
            <h2 className="mt-4 font-display text-4xl font-light text-white">What clients are saying</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((item) => (
              <Card key={item.name} className="space-y-5">
                <div className="text-5xl leading-none text-gold-200">&ldquo;</div>
                <div className="flex gap-1 text-gold-200">{"★★★★★".slice(0, item.rating)}</div>
                <p className="font-display text-2xl italic font-light leading-8 text-white">{item.quote}</p>
                <div>
                  <p className="text-sm text-white">{item.name}</p>
                  <p className="text-xs uppercase tracking-[0.3em] text-ink-500">{item.title}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[0.95fr,1.05fr] lg:items-start">
          <ScrollReveal>
            <div className="sticky top-28 space-y-6">
              <SectionLabel>Contact</SectionLabel>
              <h2 className="font-display text-4xl font-light text-white">Your moment of transformation starts here</h2>
              <p className="text-sm leading-8 text-ink-500 sm:text-base">
                Reach out for a healing session, a course enquiry, or a conversation about the right next step for you.
              </p>
              <div className="space-y-4 text-sm text-ink-300">
                <p>Email: info@pranichealing.center</p>
                <p>Phone: +91 12345 67890</p>
                <p>Location: Lucknow, Uttar Pradesh, India</p>
                <p>Meditation: Sunday 7:00 AM IST</p>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={150}>
            <Card className="space-y-5">
              <div className="grid gap-4 sm:grid-cols-2">
                <input className="rounded-2xl border border-white/10 bg-ink-950 px-4 py-3 text-sm text-white outline-none placeholder:text-ink-500" placeholder="Full Name*" />
                <input className="rounded-2xl border border-white/10 bg-ink-950 px-4 py-3 text-sm text-white outline-none placeholder:text-ink-500" placeholder="Email*" />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <input className="rounded-2xl border border-white/10 bg-ink-950 px-4 py-3 text-sm text-white outline-none placeholder:text-ink-500" placeholder="Phone" />
                <select className="rounded-2xl border border-white/10 bg-ink-950 px-4 py-3 text-sm text-white outline-none">
                  <option>Healing Session</option>
                  <option>Basic Course</option>
                  <option>Advanced Course</option>
                  <option>Meditation</option>
                </select>
              </div>
              <textarea rows="6" className="w-full rounded-2xl border border-white/10 bg-ink-950 px-4 py-3 text-sm text-white outline-none placeholder:text-ink-500" placeholder="Tell us how we can help" />
              <Button className="w-full">Send Enquiry</Button>
              <p className="text-xs leading-6 text-ink-500">We respond within 24 hours · All information kept confidential</p>
            </Card>
          </ScrollReveal>
        </div>
      </Section>
    </div>
  );
}