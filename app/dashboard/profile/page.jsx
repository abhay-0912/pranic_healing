"use client";

import { useState } from "react";
import { getSupabaseBrowserClient } from "@/lib/supabase/client";
import Button from "@/components/ui/button";

export default function DashboardProfilePage() {
  const supabase = getSupabaseBrowserClient();
  const [status, setStatus] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const full_name = formData.get("full_name");
    const phone = formData.get("phone");
    const city = formData.get("city");
    const bio = formData.get("bio");

    if (!supabase) {
      setStatus("Supabase not configured.");
      return;
    }

    const { data: sessionData } = await supabase.auth.getSession();
    const userId = sessionData.session?.user?.id;
    if (!userId) {
      setStatus("You are not signed in.");
      return;
    }

    const { error } = await supabase.from("profiles").update({ full_name, phone, city, bio }).eq("id", userId);
    setStatus(error ? error.message : "Profile updated.");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 border border-white/10 bg-ink-900 p-6">
      <h1 className="font-display text-5xl font-light text-white">Edit Profile</h1>
      <input name="full_name" placeholder="Full Name" className="w-full border border-white/10 bg-ink-950 px-4 py-3 text-sm text-white outline-none" />
      <input name="phone" placeholder="Phone" className="w-full border border-white/10 bg-ink-950 px-4 py-3 text-sm text-white outline-none" />
      <input name="city" placeholder="City" className="w-full border border-white/10 bg-ink-950 px-4 py-3 text-sm text-white outline-none" />
      <textarea name="bio" rows="4" placeholder="Short bio" className="w-full border border-white/10 bg-ink-950 px-4 py-3 text-sm text-white outline-none" />
      <Button type="submit">Save Profile</Button>
      {status ? <p className="text-sm text-ink-500">{status}</p> : null}
    </form>
  );
}
