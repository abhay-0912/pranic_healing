"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { getSupabaseBrowserClient } from "@/lib/supabase/client";

const nav = [
  ["Admin Home", "/admin"],
  ["Bookings", "/admin/bookings"],
  ["Courses", "/admin/courses"],
  ["Leads", "/admin/leads"],
  ["Testimonials", "/admin/testimonials"],
  ["Healers", "/admin/healers"]
];

export default function AdminLayout({ children }) {
  const pathname = usePathname();
  const router = useRouter();
  const supabase = getSupabaseBrowserClient();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;

    async function guard() {
      if (!supabase) {
        setLoading(false);
        return;
      }

      const { data: sessionData } = await supabase.auth.getSession();
      const user = sessionData.session?.user;
      if (!user) {
        router.replace("/auth/login");
        return;
      }

      const { data } = await supabase.from("profiles").select("role").eq("id", user.id).single();
      if (!active) return;

      if (data?.role !== "admin") {
        router.replace("/");
        return;
      }

      setLoading(false);
    }

    guard();
    return () => {
      active = false;
    };
  }, [router, supabase]);

  if (loading) {
    return <div className="px-6 py-24 text-center text-ink-500">Loading admin panel...</div>;
  }

  return (
    <div className="min-h-screen bg-ink-950 px-6 py-10 sm:px-10 lg:px-16">
      <div className="mx-auto grid max-w-[1280px] gap-6 lg:grid-cols-[260px,1fr]">
        <aside className="h-fit border border-white/10 bg-ink-900 p-5 lg:sticky lg:top-24">
          <p className="font-display text-4xl text-gold-200">Admin</p>
          <nav className="mt-5 space-y-2">
            {nav.map(([label, href]) => (
              <Link key={href} href={href} className={`block border px-3 py-2 text-sm ${pathname === href ? "border-gold-300 text-gold-200" : "border-white/10 text-ink-300"}`}>
                {label}
              </Link>
            ))}
          </nav>
        </aside>
        <main>{children}</main>
      </div>
    </div>
  );
}
