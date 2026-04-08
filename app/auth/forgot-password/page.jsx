"use client";

import { useState } from "react";
import { Loader2, Mail, CheckCircle2 } from "lucide-react";
import Button from "@/components/ui/button";
import AuthCard from "@/components/ui/auth-card";
import { getSupabaseBrowserClient, hasSupabaseEnv } from "@/lib/supabase/client";

export default function ForgotPasswordPage() {
  const supabase = getSupabaseBrowserClient();
  const supabaseConfigured = hasSupabaseEnv();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!supabase) {
      setError("Supabase environment variables are missing. Add them in .env.local.");
      return;
    }
    setLoading(true);
    setError("");

    const { error: resetError } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/auth/login`
    });

    if (resetError) {
      setError(resetError.message);
      setLoading(false);
      return;
    }

    setSent(true);
    setLoading(false);
  };

  return (
    <AuthCard
      eyebrow="Account Recovery"
      title="Forgot Password"
      subtitle="Send a reset link to the email address linked to your account."
      footer={
        <p className="text-sm text-ink-500">
          Remembered it?{" "}
          <Button href="/auth/login" variant="ghost" className="inline-flex p-0 text-sm font-medium text-gold-200 hover:text-gold-100">
            Back to Sign In
          </Button>
        </p>
      }
    >
      {sent ? (
        <div className="space-y-4 rounded-[1.75rem] border border-gold-300/20 bg-gold-300/10 px-5 py-6 text-center">
          <CheckCircle2 className="mx-auto h-10 w-10 text-gold-200" />
          <p className="font-display text-3xl font-light text-white">Check Your Inbox</p>
          <p className="text-sm leading-6 text-ink-500">
            We sent a password reset link to your email address. If it does not arrive, check your spam folder.
          </p>
        </div>
      ) : (
        <form className="space-y-4" onSubmit={handleSubmit}>
          <label className="block space-y-2">
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-gold-200/80">Email</span>
            <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-ink-950/70 px-4 py-3 focus-within:border-gold-300/60">
              <Mail className="h-4 w-4 text-gold-200/70" />
              <input
                type="email"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="w-full bg-transparent text-sm text-white outline-none placeholder:text-ink-500"
                placeholder="you@example.com"
              />
            </div>
          </label>

          {error ? (
            <p className="rounded-2xl border border-red-400/20 bg-red-400/10 px-4 py-3 text-sm text-red-200">
              {error}
            </p>
          ) : null}

          {!supabaseConfigured ? (
            <p className="rounded-2xl border border-amber-300/20 bg-amber-300/10 px-4 py-3 text-sm text-amber-100">
              Supabase is not configured yet. Set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY in .env.local.
            </p>
          ) : null}

          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
            {loading ? "Sending Reset Link..." : "Send Reset Link"}
          </Button>
        </form>
      )}
    </AuthCard>
  );
}
