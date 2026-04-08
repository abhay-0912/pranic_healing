export default function AdminLeadsPage() {
  return (
    <div className="space-y-4 border border-white/10 bg-ink-900 p-6">
      <div className="flex items-center justify-between">
        <h1 className="font-display text-5xl font-light text-white">Contact Leads</h1>
        <button type="button" className="border border-gold-300/40 px-4 py-2 text-xs uppercase tracking-[0.3em] text-gold-100">Export CSV</button>
      </div>
      <div className="border border-white/10 p-4 text-sm text-ink-300">Name · Email · Message · Source · Status</div>
    </div>
  );
}
