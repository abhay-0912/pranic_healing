import { notFound } from "next/navigation";
import Button from "@/components/ui/button";
import { courses, testimonials, healers } from "@/lib/site-data";

function Section({ children, className = "" }) {
  return (
    <section className={`px-6 py-[130px] sm:px-10 lg:px-[60px] ${className}`.trim()}>
      <div className="mx-auto max-w-[1280px]">{children}</div>
    </section>
  );
}

export function generateStaticParams() {
  return courses.map((course) => ({ slug: course.slug }));
}

export default function CourseDetailPage({ params }) {
  const course = courses.find((item) => item.slug === params.slug);
  if (!course) notFound();

  const instructor = healers[0];

  return (
    <Section>
      <div className="grid gap-10 lg:grid-cols-[0.36fr,0.64fr]">
        <aside className="h-fit border border-white/10 bg-ink-900 p-6 lg:sticky lg:top-28">
          <h2 className="font-display text-4xl font-light text-white">{course.title}</h2>
          <p className="mt-4 text-sm text-gold-200">Price: ₹{course.price.toLocaleString("en-IN")}</p>
          <p className="mt-2 text-sm text-ink-500">Duration: {course.duration}</p>
          <p className="mt-2 text-sm text-ink-500">Next date: {course.nextDate}</p>
          <p className="mt-2 text-sm text-ink-500">Seats: {course.seatsRemaining} remaining</p>
          <Button href={`/booking?course=${course.slug}`} className="mt-6 w-full">Enroll Now</Button>
          <Button href="/contact" variant="outline" className="mt-3 w-full">Have a Question?</Button>
        </aside>

        <div className="space-y-10">
          <div className="aspect-[16/8] bg-[linear-gradient(180deg,rgba(201,169,110,0.2),rgba(10,12,16,0.95))]" />
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-gold-200">{course.level}</p>
            <h1 className="mt-3 font-display text-6xl font-light text-white">{course.title}</h1>
            <p className="mt-5 leading-8 text-ink-500">{course.description}</p>
          </div>

          <div className="border border-white/10 bg-ink-900 p-6">
            <h3 className="font-display text-4xl text-white">What you'll learn</h3>
            <ol className="mt-4 space-y-2 text-sm text-ink-300 list-decimal list-inside">
              {course.topics.map((topic) => (
                <li key={topic}>{topic}</li>
              ))}
            </ol>
          </div>

          <div className="border border-white/10 bg-ink-900 p-6">
            <h3 className="font-display text-4xl text-white">Course curriculum</h3>
            <div className="mt-4 space-y-3 text-sm text-ink-300">
              <p>Day 1: Foundations, scanning, cleansing</p>
              <p>Day 2: Energising protocols, practice, integration</p>
            </div>
          </div>

          <div className="border border-white/10 bg-ink-900 p-6">
            <h3 className="font-display text-4xl text-white">About the instructor</h3>
            <p className="mt-3 text-gold-200">{instructor.name} · {instructor.title}</p>
            <p className="mt-2 text-sm text-ink-500">{instructor.bio}</p>
          </div>

          <div className="border border-white/10 bg-ink-900 p-6">
            <h3 className="font-display text-4xl text-white">Student reviews</h3>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              {testimonials.slice(0, 2).map((item) => (
                <div key={item.name} className="border border-white/10 p-4">
                  <p className="font-display text-2xl italic text-gold-100">"{item.quote}"</p>
                  <p className="mt-2 text-xs uppercase tracking-[0.3em] text-ink-500">{item.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
