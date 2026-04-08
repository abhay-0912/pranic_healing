export default function AdminCoursesPage() {
  return (
    <div className="space-y-4 border border-white/10 bg-ink-900 p-6">
      <h1 className="font-display text-5xl font-light text-white">Manage Courses</h1>
      <button type="button" className="border border-gold-300 bg-gold-300 px-4 py-2 text-xs uppercase tracking-[0.3em] text-ink-950">Add New Course</button>
      <div className="border border-white/10 p-4 text-sm text-ink-300">Basic Pranic Healing · Active · Edit / Toggle / Delete</div>
      <div className="border border-white/10 p-4 text-sm text-ink-300">Advanced Pranic Healing · Active · Edit / Toggle / Delete</div>
    </div>
  );
}
