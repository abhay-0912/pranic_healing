"use client";

import { useMemo, useState } from "react";
import PageHero from "@/components/page-hero";
import Button from "@/components/ui/button";
import { courses } from "@/lib/site-data";

const filters = ["All", "Level 01", "Level 02", "Level 03", "Advanced", "Specialised"];

function Section({ children, className = "" }) {
  return (
    <section className={`px-6 py-[130px] sm:px-10 lg:px-[60px] ${className}`.trim()}>
      <div className="mx-auto max-w-[1280px]">{children}</div>
    </section>
  );
}

export default function CoursesPage() {
  const [filter, setFilter] = useState("All");
  const [enrollCourse, setEnrollCourse] = useState(null);

  const visibleCourses = useMemo(() => {
    if (filter === "All") return courses;
    return courses.filter((course) => course.level === filter || (filter === "Advanced" && course.level.includes("Advanced")));
  }, [filter]);

  return (
    <div>
      <PageHero
        eyebrow="Courses"
        title="Learn the Science of Energy Healing"
        subtitle="Our structured curriculum takes you from complete beginner to advanced practitioner, at your own pace."
        breadcrumb="Home / Courses"
      />

      <Section>
        <div className="flex flex-wrap gap-2">
          {filters.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setFilter(item)}
              className={`rounded-full border px-4 py-2 text-xs uppercase tracking-[0.3em] ${filter === item ? "border-gold-300 bg-gold-300 text-ink-950" : "border-white/20 text-ink-300"}`}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-3 md:grid-cols-2">
          {visibleCourses.map((course) => (
            <article key={course.slug} className="border border-white/10 bg-ink-900 p-6">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-[0.3em] text-gold-200">{course.level}</span>
                {course.featured ? <span className="text-xs uppercase tracking-[0.3em] text-gold-100">Most Popular</span> : null}
              </div>
              <div className="mt-4 aspect-[16/9] bg-[linear-gradient(180deg,rgba(201,169,110,0.2),rgba(10,12,16,0.9))]" />
              <h2 className="mt-4 font-display text-4xl font-light text-white">{course.title}</h2>
              <p className="mt-2 text-sm text-gold-200">₹{course.price.toLocaleString("en-IN")} • {course.duration}</p>
              <p className="mt-4 text-sm leading-7 text-ink-500">{course.excerpt}</p>
              <ul className="mt-4 space-y-2 text-sm text-ink-300">
                {course.topics.map((topic) => (
                  <li key={topic} className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-gold-200" />{topic}</li>
                ))}
              </ul>
              <div className="mt-6 flex gap-3">
                <Button href={`/courses/${course.slug}`} variant="outline" className="flex-1">View Details</Button>
                <Button type="button" className="flex-1" onClick={() => setEnrollCourse(course)}>Enroll Now</Button>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section className="bg-ink-900/35">
        <h2 className="font-display text-5xl font-light text-white">Learning Path</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-5">
          {["Basic", "Advanced", "Psychotherapy", "Crystal Healing", "Arhatic Yoga"].map((item, index) => (
            <div key={item} className="border border-white/10 bg-ink-900 p-4 text-center">
              <p className="text-sm text-white">{item}</p>
              {index < 4 ? <p className="mt-2 text-xs uppercase tracking-[0.3em] text-gold-200">unlocks next</p> : null}
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <h2 className="font-display text-5xl font-light text-white">Upcoming Course Dates</h2>
        <div className="mt-8 overflow-x-auto border border-white/10">
          <table className="w-full min-w-[760px] text-left text-sm">
            <thead className="bg-ink-900">
              <tr>
                <th className="p-4 text-gold-200">Course</th>
                <th className="p-4 text-gold-200">Date</th>
                <th className="p-4 text-gold-200">Location</th>
                <th className="p-4 text-gold-200">Seats</th>
                <th className="p-4 text-gold-200">Register</th>
              </tr>
            </thead>
            <tbody>
              {courses.map((course) => (
                <tr key={course.slug} className="border-t border-white/10">
                  <td className="p-4 text-ink-300">{course.title}</td>
                  <td className="p-4 text-ink-500">{course.nextDate}</td>
                  <td className="p-4 text-ink-500">Lucknow / Online</td>
                  <td className="p-4 text-ink-500">{course.seatsRemaining} remaining</td>
                  <td className="p-4"><Button href={`/courses/${course.slug}`} variant="outline">Register</Button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {enrollCourse ? (
        <div className="fixed inset-0 z-[80] grid place-items-center bg-black/75 p-4">
          <div className="w-full max-w-lg border border-gold-300/30 bg-ink-900 p-6">
            <h3 className="font-display text-4xl font-light text-white">Enroll in {enrollCourse.title}</h3>
            <p className="mt-3 text-sm text-ink-500">Connect this action to your Razorpay flow and enrollments table. If not signed in, redirect to /auth/login first.</p>
            <div className="mt-6 flex gap-3">
              <Button href="/auth/login" className="flex-1">Sign In to Enroll</Button>
              <Button type="button" variant="outline" className="flex-1" onClick={() => setEnrollCourse(null)}>Close</Button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
