export default function DashboardCoursesPage() {
  return (
    <div className="border border-white/10 bg-ink-900 p-6">
      <h1 className="font-display text-5xl font-light text-white">My Courses</h1>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {[
          ["Basic Pranic Healing", "In Progress"],
          ["Advanced Pranic Healing", "Enrolled"],
          ["Pranic Psychotherapy", "Completed"]
        ].map(([title, status]) => (
          <div key={title} className="border border-white/10 p-4">
            <p className="font-display text-3xl text-white">{title}</p>
            <p className="mt-2 text-sm text-ink-500">Status: {status}</p>
            {status === "Completed" ? <button type="button" className="mt-3 border border-gold-300/40 px-3 py-2 text-xs uppercase tracking-[0.3em] text-gold-100">View Certificate</button> : null}
          </div>
        ))}
      </div>
    </div>
  );
}
