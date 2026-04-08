export default function AdminHomePage() {
  return (
    <div className="space-y-6">
      <div className="border border-white/10 bg-ink-900 p-6">
        <h1 className="font-display text-5xl font-light text-white">Admin Dashboard</h1>
      </div>
      <div className="grid gap-4 md:grid-cols-4">
        {[
          ["Total Users", "248"],
          ["Bookings Today", "12"],
          ["Revenue This Month", "₹1,92,000"],
          ["New Leads", "17"]
        ].map(([label, value]) => (
          <div key={label} className="border border-white/10 bg-ink-900 p-5">
            <p className="text-xs uppercase tracking-[0.35em] text-ink-500">{label}</p>
            <p className="mt-3 text-xl text-gold-200">{value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
