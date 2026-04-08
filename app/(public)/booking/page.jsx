"use client";

import { useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import PageHero from "@/components/page-hero";
import Button from "@/components/ui/button";
import { healers, services } from "@/lib/site-data";

const prices = {
  "personal-healing": 2500,
  "pranic-psychotherapy": 3000,
  "relationship-healing": 3000,
  "distance-healing": 2500,
  "prosperity-healing": 3500,
  "twin-hearts-meditation": 0
};

function Section({ children, className = "" }) {
  return (
    <section className={`px-6 py-[130px] sm:px-10 lg:px-[60px] ${className}`.trim()}>
      <div className="mx-auto max-w-[1280px]">{children}</div>
    </section>
  );
}

export default function BookingPage() {
  const searchParams = useSearchParams();
  const initialService = searchParams.get("service") || "";
  const initialHealer = searchParams.get("healer") || "";
  const router = useRouter();

  const [step, setStep] = useState(1);
  const [service, setService] = useState(initialService);
  const [healer, setHealer] = useState(initialHealer || "any");
  const [date, setDate] = useState("");
  const [slot, setSlot] = useState("");
  const [sessionType, setSessionType] = useState("In-Person");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const amount = useMemo(() => prices[service] ?? 2500, [service]);
  const slots = ["10:00 AM", "11:00 AM", "1:00 PM", "3:00 PM", "5:00 PM"];

  function continueStep() {
    setStep((current) => Math.min(current + 1, 4));
  }

  function submitBooking() {
    const ref = `PHC-${Math.random().toString(36).slice(2, 8).toUpperCase()}`;
    router.push(`/booking/confirm?ref=${ref}&service=${service}&date=${date}&slot=${slot}`);
  }

  return (
    <div>
      <PageHero eyebrow="Booking" title="Book Your Healing Session" subtitle="Choose service, healer, slot, and confirm in a guided 4-step flow." breadcrumb="Home / Booking" />

      <Section>
        <div className="mb-8 grid gap-2 md:grid-cols-4">
          {["Choose Service", "Choose Healer", "Date & Time", "Confirm & Pay"].map((label, index) => (
            <div key={label} className={`border p-3 text-center text-xs uppercase tracking-[0.3em] ${step >= index + 1 ? "border-gold-300 text-gold-200" : "border-white/10 text-ink-500"}`}>{label}</div>
          ))}
        </div>

        {step === 1 ? (
          <div>
            <h2 className="font-display text-5xl font-light text-white">Step 1: Choose Service</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {services.map((item) => (
                <button key={item.slug} type="button" onClick={() => setService(item.slug)} className={`border p-5 text-left ${service === item.slug ? "border-gold-300 bg-ink-900" : "border-white/10 bg-ink-950"}`}>
                  <p className="text-xs uppercase tracking-[0.3em] text-gold-200">{item.number}</p>
                  <p className="mt-2 font-display text-3xl text-white">{item.title}</p>
                </button>
              ))}
            </div>
            <Button className="mt-6" onClick={continueStep} disabled={!service}>Continue</Button>
          </div>
        ) : null}

        {step === 2 ? (
          <div>
            <h2 className="font-display text-5xl font-light text-white">Step 2: Choose Healer</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <button type="button" onClick={() => setHealer("any")} className={`border p-5 text-left ${healer === "any" ? "border-gold-300 bg-ink-900" : "border-white/10 bg-ink-950"}`}>
                <p className="font-display text-3xl text-white">Any Available Healer</p>
                <p className="mt-2 text-sm text-ink-500">Auto-assign based on availability</p>
              </button>
              {healers.map((item) => (
                <button key={item.slug} type="button" onClick={() => setHealer(item.slug)} className={`border p-5 text-left ${healer === item.slug ? "border-gold-300 bg-ink-900" : "border-white/10 bg-ink-950"}`}>
                  <p className="font-display text-3xl text-white">{item.name}</p>
                  <p className="mt-2 text-sm text-gold-200">{item.title}</p>
                  <p className="mt-2 text-sm text-ink-500">{item.speciality}</p>
                </button>
              ))}
            </div>
            <div className="mt-6 flex gap-3">
              <Button variant="outline" onClick={() => setStep(1)}>Back</Button>
              <Button onClick={continueStep} disabled={!healer}>Continue</Button>
            </div>
          </div>
        ) : null}

        {step === 3 ? (
          <div>
            <h2 className="font-display text-5xl font-light text-white">Step 3: Choose Date & Time</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <input type="date" value={date} onChange={(event) => setDate(event.target.value)} className="border border-white/10 bg-ink-900 px-4 py-3 text-white outline-none" />
              <div className="flex gap-2">
                {["In-Person", "Online"].map((item) => (
                  <button key={item} type="button" onClick={() => setSessionType(item)} className={`border px-4 py-3 text-xs uppercase tracking-[0.3em] ${sessionType === item ? "border-gold-300 text-gold-200" : "border-white/10 text-ink-500"}`}>{item}</button>
                ))}
              </div>
            </div>
            <div className="mt-6 grid gap-3 md:grid-cols-5">
              {slots.map((item) => (
                <button key={item} type="button" onClick={() => setSlot(item)} className={`border px-3 py-2 text-sm ${slot === item ? "border-gold-300 bg-gold-300 text-ink-950" : "border-gold-300/30 text-gold-100"}`}>{item}</button>
              ))}
            </div>
            <div className="mt-6 flex gap-3">
              <Button variant="outline" onClick={() => setStep(2)}>Back</Button>
              <Button onClick={continueStep} disabled={!date || !slot}>Continue</Button>
            </div>
          </div>
        ) : null}

        {step === 4 ? (
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="border border-white/10 bg-ink-900 p-6">
              <h2 className="font-display text-5xl font-light text-white">Step 4: Confirm & Pay</h2>
              <div className="mt-5 space-y-3 text-sm text-ink-300">
                <p>Service: {services.find((item) => item.slug === service)?.title}</p>
                <p>Healer: {healer === "any" ? "Any Available Healer" : healers.find((item) => item.slug === healer)?.name}</p>
                <p>Date & Time: {date} {slot}</p>
                <p>Session Type: {sessionType}</p>
                <p className="text-gold-200">Amount: ₹{amount.toLocaleString("en-IN")}</p>
              </div>
            </div>
            <div className="border border-white/10 bg-ink-900 p-6 space-y-4">
              <input value={name} onChange={(event) => setName(event.target.value)} placeholder="Full Name" className="w-full border border-white/10 bg-ink-950 px-4 py-3 text-white outline-none" />
              <input value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Email" className="w-full border border-white/10 bg-ink-950 px-4 py-3 text-white outline-none" />
              <input value={phone} onChange={(event) => setPhone(event.target.value)} placeholder="Phone" className="w-full border border-white/10 bg-ink-950 px-4 py-3 text-white outline-none" />
              <textarea rows="4" placeholder="Notes" className="w-full border border-white/10 bg-ink-950 px-4 py-3 text-white outline-none" />
              <div className="flex gap-3">
                <Button variant="outline" onClick={() => setStep(3)}>Back</Button>
                <Button onClick={submitBooking} disabled={!name || !email}>{amount === 0 ? "Confirm" : "Pay with Razorpay"}</Button>
              </div>
            </div>
          </div>
        ) : null}
      </Section>
    </div>
  );
}
