export default function AdminHealersPage() {
  return (
    <div className="space-y-4 border border-white/10 bg-ink-900 p-6">
      <h1 className="font-display text-5xl font-light text-white">Manage Healers</h1>
      <button type="button" className="border border-gold-300 bg-gold-300 px-4 py-2 text-xs uppercase tracking-[0.3em] text-ink-950">Add New Healer</button>
      <div className="border border-white/10 p-4 text-sm text-ink-300">Anita Rai · Active · Manage slots</div>
      <div className="border border-white/10 p-4 text-sm text-ink-300">Arjun Mehta · Active · Manage slots</div>
    </div>
  );
}
