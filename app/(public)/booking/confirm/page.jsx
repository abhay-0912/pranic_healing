import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import Button from "@/components/ui/button";

export default function BookingConfirmPage({ searchParams }) {
  const ref = searchParams.ref || "PHC-DEMO01";
  const service = searchParams.service || "personal-healing";
  const date = searchParams.date || "2026-04-20";
  const slot = searchParams.slot || "10:00 AM";

  return (
    <section className="px-6 py-[130px] sm:px-10 lg:px-[60px]">
      <div className="mx-auto max-w-3xl border border-white/10 bg-ink-900 p-8 text-center">
        <CheckCircle2 className="mx-auto h-20 w-20 text-gold-200" />
        <h1 className="mt-6 font-display text-6xl font-light text-white">Booking Confirmed!</h1>
        <p className="mt-4 text-sm text-ink-500">Reference: {ref}</p>
        <div className="mt-8 space-y-2 text-sm text-ink-300">
          <p>Service: {service}</p>
          <p>Date: {date}</p>
          <p>Time: {slot}</p>
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href={`https://calendar.google.com/calendar/render?action=TEMPLATE&text=Pranic+Healing+Session&dates=20260420T100000/20260420T110000`} target="_blank" className="inline-flex items-center justify-center rounded-full border border-gold-300 bg-gold-300 px-5 py-3 text-sm font-medium text-ink-950">Add to Google Calendar</Link>
          <Button href="/">Back to Home</Button>
        </div>
      </div>
    </section>
  );
}
