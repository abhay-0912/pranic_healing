"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { getSupabaseBrowserClient } from "@/lib/supabase/client";

const nav = [
  ["Dashboard", "/dashboard"],
  ["My Bookings", "/dashboard/bookings"],
  ["My Courses", "/dashboard/courses"],
  ["Edit Profile", "/dashboard/profile"]
];

export default function DashboardLayout({ children }) {
  const pathname = usePathname();
  const router = useRouter();
  const supabase = getSupabaseBrowserClient();
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    let active = true;

    async function load() {
      if (!supabase) {
        setLoading(false);
        return;
      }
      const { data: sessionData } = await supabase.auth.getSession();
      const session = sessionData.session;
      if (!session) {
        router.replace("/auth/login");
        return;
      }

      const { data } = await supabase
        .from("profiles")
        .select("full_name, email")
        .eq("id", session.user.id)
        .single();

      if (!active) return;
      setProfile(data || { full_name: session.user.user_metadata?.full_name || "User", email: session.user.email });
      setLoading(false);
    }

    load();
    return () => {
      active = false;
    };
  }, [router, supabase]);

  async function signOut() {
    if (supabase) {
      await supabase.auth.signOut();
    }
    router.push("/auth/login");
  }

  if (loading) {
    return <div className="px-6 py-24 text-center text-ink-500">Loading dashboard...</div>;
  }

  return (
    <div className="min-h-screen bg-ink-950 px-6 py-10 sm:px-10 lg:px-16">
      <div className="mx-auto grid max-w-[1280px] gap-6 lg:grid-cols-[260px,1fr]">
        <aside className="h-fit border border-white/10 bg-ink-900 p-5 lg:sticky lg:top-24">
          <div className="mb-6 border-b border-white/10 pb-4">
            <p className="font-display text-3xl text-white">{profile?.full_name || "User"}</p>
            <p className="text-sm text-ink-500">{profile?.email || ""}</p>
          </div>
          <nav className="space-y-2">
            {nav.map(([label, href]) => (
              <Link key={href} href={href} className={`block border px-3 py-2 text-sm ${pathname === href ? "border-gold-300 text-gold-200" : "border-white/10 text-ink-300"}`}>
                {label}
              </Link>
            ))}
            <button type="button" onClick={signOut} className="block w-full border border-white/10 px-3 py-2 text-left text-sm text-ink-300">
              Sign Out
            </button>
          </nav>
        </aside>
        <main>{children}</main>
      </div>
    </div>
  );
}
