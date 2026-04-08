"use client";

import { useState } from "react";
import PageHero from "@/components/page-hero";
import Button from "@/components/ui/button";
import { getSupabaseBrowserClient } from "@/lib/supabase/client";
import { contactChannels } from "@/lib/site-data";

function Section({ children, className = "" }) {
  return (
    <section className={`px-6 py-[130px] sm:px-10 lg:px-[60px] ${className}`.trim()}>
      <div className="mx-auto max-w-[1280px]">{children}</div>
    </section>
  );
}

export default function ContactPage() {
  const supabase = getSupabaseBrowserClient();
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      interest: formData.get("subject"),
      message: formData.get("message"),
      source: "contact_page",
      status: "new"
    };

    if (!supabase) {
      setStatus("Supabase not configured. Form captured locally only.");
      event.currentTarget.reset();
      return;
    }

    setLoading(true);
    const { error } = await supabase.from("contact_leads").insert(payload);
    setLoading(false);

    if (error) {
      setStatus(error.message);
      return;
    }

    setStatus("Message sent successfully. We will respond within 24 hours.");
    event.currentTarget.reset();
  }

  return (
    <div>
      <PageHero
        eyebrow="Contact"
        title="Let's Begin Your Journey Together"
        subtitle="Have a question, want to book, or just want to know more? We're here and will respond within 24 hours."
        breadcrumb="Home / Contact"
      />

      <Section>
        <div className="grid gap-4 md:grid-cols-3">
          {contactChannels.map(([title, value, description]) => (
            <div key={title} className="border border-white/10 bg-ink-900 p-6 text-center">
              <p className="text-xs uppercase tracking-[0.35em] text-gold-200">{title}</p>
              <p className="mt-3 text-xl text-white">{value}</p>
              <p className="mt-2 text-sm text-ink-500">{description}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <form onSubmit={handleSubmit} className="space-y-4 border border-white/10 bg-ink-900 p-6">
            <input name="name" required placeholder="Name" className="w-full border border-white/10 bg-ink-950 px-4 py-3 text-sm text-white outline-none" />
            <input name="email" required type="email" placeholder="Email" className="w-full border border-white/10 bg-ink-950 px-4 py-3 text-sm text-white outline-none" />
            <input name="phone" placeholder="Phone" className="w-full border border-white/10 bg-ink-950 px-4 py-3 text-sm text-white outline-none" />
            <select name="subject" className="w-full border border-white/10 bg-ink-950 px-4 py-3 text-sm text-white outline-none">
              <option>General Inquiry</option>
              <option>Book a Session</option>
              <option>Course Info</option>
              <option>Become a Healer</option>
              <option>Partnership</option>
              <option>Other</option>
            </select>
            <textarea name="message" required rows="6" placeholder="Message" className="w-full border border-white/10 bg-ink-950 px-4 py-3 text-sm text-white outline-none" />
            <Button type="submit" className="w-full" disabled={loading}>{loading ? "Sending..." : "Send Message"}</Button>
            {status ? <p className="text-sm text-ink-500">{status}</p> : null}
          </form>

          <div className="space-y-4">
            <div className="aspect-[4/3] border border-white/10 bg-[linear-gradient(180deg,rgba(201,169,110,0.15),rgba(10,12,16,0.9))] p-6">
              <p className="text-sm uppercase tracking-[0.3em] text-gold-200">Map Placeholder</p>
              <p className="mt-3 text-sm text-ink-500">Add your Google Maps embed URL in this panel.</p>
            </div>
            <div className="border border-white/10 bg-ink-900 p-6">
              <p className="text-sm uppercase tracking-[0.35em] text-gold-200">Weekly meditation schedule</p>
              <p className="mt-4 text-sm leading-7 text-ink-500">Every Sunday, 7:00 AM IST. Online via Zoom and in-person at the center. Free for all seekers.</p>
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-ink-900/35">
        <div className="border border-white/10 bg-ink-900 p-6">
          <p className="text-sm uppercase tracking-[0.35em] text-gold-200">Location & Hours</p>
          <div className="mt-4 grid gap-2 text-sm text-ink-300">
            <p>Monday-Friday: 9:00 AM - 7:00 PM</p>
            <p>Saturday: 9:00 AM - 5:00 PM</p>
            <p>Sunday: Meditation 7:00 AM | Sessions 10:00 AM - 3:00 PM</p>
            <p>Public Holidays: Closed (with advance notice)</p>
          </div>
        </div>
      </Section>
    </div>
  );
}
