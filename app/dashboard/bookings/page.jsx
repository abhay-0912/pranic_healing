"use client";

import { useMemo, useState } from "react";

const rows = [
  { id: 1, service: "Personal Healing", healer: "Anita Rai", datetime: "2026-04-20 10:00", status: "Confirmed" },
  { id: 2, service: "Distance Healing", healer: "Arjun Mehta", datetime: "2026-03-18 11:00", status: "Completed" },
  { id: 3, service: "Pranic Psychotherapy", healer: "Anita Rai", datetime: "2026-03-01 09:00", status: "Cancelled" }
];

export default function DashboardBookingsPage() {
  const [tab, setTab] = useState("Upcoming");
  const visible = useMemo(() => {
    if (tab === "Upcoming") return rows.filter((row) => row.status === "Confirmed");
    if (tab === "Past") return rows.filter((row) => row.status === "Completed");
    return rows.filter((row) => row.status === "Cancelled");
  }, [tab]);

  return (
    <div className="border border-white/10 bg-ink-900 p-6">
      <h1 className="font-display text-5xl font-light text-white">My Bookings</h1>
      <div className="mt-4 flex gap-2">
        {["Upcoming", "Past", "Cancelled"].map((item) => (
          <button key={item} type="button" onClick={() => setTab(item)} className={`border px-4 py-2 text-xs uppercase tracking-[0.3em] ${tab === item ? "border-gold-300 text-gold-200" : "border-white/10 text-ink-500"}`}>{item}</button>
        ))}
      </div>

      <div className="mt-6 space-y-3">
        {visible.map((row) => (
          <div key={row.id} className="border border-white/10 p-4 text-sm text-ink-300">
            <p>{row.service} · {row.healer}</p>
            <p className="mt-1 text-ink-500">{row.datetime} · {row.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
