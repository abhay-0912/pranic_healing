"use client";

import { useState } from "react";
import Button from "@/components/ui/button";
import PageHero from "@/components/page-hero";
import SectionLabel from "@/components/section-label";
import { faqItems, services } from "@/lib/site-data";

function Section({ children, className = "" }) {
  return (
    <section className={`px-6 py-[130px] sm:px-10 lg:px-[60px] ${className}`.trim()}>
      <div className="mx-auto max-w-[1280px]">{children}</div>
    </section>
  );
}

export default function ServicesPage() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div>
      <PageHero
        eyebrow="Services"
        title="Energy Healing for Every Aspect of Your Life"
        subtitle="We offer a complete range of Pranic Healing services, from physical healing and emotional release to spiritual development and prosperity work."
        breadcrumb="Home / Services"
      />

      <Section>
        <div className="space-y-16">
          {services.map((service, index) => (
            <article key={service.slug} className="grid gap-8 border border-white/10 bg-ink-900 p-8 lg:grid-cols-2 lg:items-center">
              <div className={index % 2 === 0 ? "" : "lg:order-2"}>
                <p className="text-xs uppercase tracking-[0.35em] text-gold-200">{service.number}</p>
                <h2 className="mt-4 font-display text-5xl font-light text-white">{service.title}</h2>
                <div className="mt-5 space-y-4">
                  {service.longDescription.map((paragraph) => (
                    <p key={paragraph} className="leading-8 text-ink-500">{paragraph}</p>
                  ))}
                </div>
                <ul className="mt-6 grid gap-2 text-sm text-ink-300 sm:grid-cols-2">
                  {service.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-gold-200" />
                      {bullet}
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-sm text-gold-200">Duration: {service.duration} {service.price ? `| ${service.price}` : ""}</p>
                <Button href="/booking" className="mt-8">Book This Session</Button>
              </div>
              <div className={index % 2 === 0 ? "" : "lg:order-1"}>
                <div className="aspect-[4/3] border border-gold-300/20 bg-[radial-gradient(circle_at_center,rgba(201,169,110,0.2),rgba(10,12,16,0.9))]" />
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section className="bg-ink-900/35">
        <SectionLabel>Process</SectionLabel>
        <h2 className="mt-4 font-display text-5xl font-light text-white">How a Session Works</h2>
        <div className="mt-10 grid gap-4 md:grid-cols-5">
          {[
            "Book your session",
            "Pre-session questionnaire",
            "Healing session",
            "Post-session guidance",
            "Follow-up support"
          ].map((step, index) => (
            <div key={step} className="border border-white/10 bg-ink-900 p-4">
              <p className="text-xs uppercase tracking-[0.3em] text-gold-200">Step {index + 1}</p>
              <p className="mt-2 text-sm text-ink-300">{step}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionLabel>FAQ</SectionLabel>
        <h2 className="mt-4 font-display text-5xl font-light text-white">Common Questions</h2>
        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          {faqItems.map(([question, answer], index) => {
            const isOpen = openFaq === index;
            return (
              <button
                key={question}
                type="button"
                onClick={() => setOpenFaq(isOpen ? -1 : index)}
                className="text-left border border-white/10 bg-ink-900 p-6"
              >
                <p className="font-display text-3xl font-light text-white">{question}</p>
                <p className={`mt-3 text-sm leading-7 text-ink-500 ${isOpen ? "block" : "hidden"}`}>{answer}</p>
              </button>
            );
          })}
        </div>
      </Section>
    </div>
  );
}
