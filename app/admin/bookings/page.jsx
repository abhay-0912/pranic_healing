export default function AdminBookingsPage() {
  return (
    <div className="border border-white/10 bg-ink-900 p-6 overflow-x-auto">
      <h1 className="font-display text-5xl font-light text-white">Manage Bookings</h1>
      <table className="mt-6 w-full min-w-[860px] text-sm">
        <thead>
          <tr className="text-left text-gold-200">
            <th className="p-3">User</th>
            <th className="p-3">Service</th>
            <th className="p-3">Healer</th>
            <th className="p-3">Date</th>
            <th className="p-3">Status</th>
            <th className="p-3">Amount</th>
            <th className="p-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-t border-white/10 text-ink-300">
            <td className="p-3">rahul@mail.com</td>
            <td className="p-3">Personal Healing</td>
            <td className="p-3">Anita Rai</td>
            <td className="p-3">2026-04-20</td>
            <td className="p-3">Pending</td>
            <td className="p-3">₹2,500</td>
            <td className="p-3">Confirm / Cancel</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
