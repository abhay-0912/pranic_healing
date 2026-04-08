import Link from "next/link";

export default function DashboardHomePage() {
  return (
    <div className="space-y-6">
      <div className="border border-white/10 bg-ink-900 p-6">
        <h1 className="font-display text-5xl font-light text-gold-200">Welcome back</h1>
        <p className="mt-3 text-sm text-ink-500">Track your sessions, courses, and activity from one place.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {[
          ["Upcoming Bookings", "2"],
          ["Enrolled Courses", "3"],
          ["Sessions Completed", "14"]
        ].map(([label, value]) => (
          <div key={label} className="border border-white/10 bg-ink-900 p-5">
            <p className="text-xs uppercase tracking-[0.35em] text-ink-500">{label}</p>
            <p className="mt-2 font-display text-5xl text-gold-200">{value}</p>
          </div>
        ))}
      </div>

      <div className="border border-white/10 bg-ink-900 p-6">
        <p className="text-xs uppercase tracking-[0.35em] text-gold-200">Next booking</p>
        <p className="mt-3 text-sm text-ink-300">Personal Healing Session · 2026-04-20 · 10:00 AM</p>
        <button type="button" className="mt-4 border border-red-300/40 px-4 py-2 text-xs uppercase tracking-[0.3em] text-red-200">Cancel</button>
      </div>

      <div className="border border-white/10 bg-ink-900 p-6">
        <p className="text-xs uppercase tracking-[0.35em] text-gold-200">Quick actions</p>
        <div className="mt-4 flex gap-3">
          <Link href="/booking" className="border border-gold-300 bg-gold-300 px-4 py-2 text-xs uppercase tracking-[0.3em] text-ink-950">Book a New Session</Link>
          <Link href="/courses" className="border border-gold-300/40 px-4 py-2 text-xs uppercase tracking-[0.3em] text-gold-100">Browse Courses</Link>
        </div>
      </div>
    </div>
  );
}