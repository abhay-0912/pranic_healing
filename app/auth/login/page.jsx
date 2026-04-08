"use client";

import { useState } from "react";
import { Eye, EyeOff, Mail, Lock, Loader2, Chrome } from "lucide-react";
import { useRouter } from "next/navigation";
import Button from "@/components/ui/button";
import AuthCard from "@/components/ui/auth-card";
import { getSupabaseBrowserClient, hasSupabaseEnv } from "@/lib/supabase/client";

export default function LoginPage() {
  const router = useRouter();
  const supabase = getSupabaseBrowserClient();
  const supabaseConfigured = hasSupabaseEnv();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!supabase) {
      setError("Supabase environment variables are missing. Add them in .env.local.");
      return;
    }
    setLoading(true);
    setError("");

    const { error: authError } = await supabase.auth.signInWithPassword({
      email,
      password
    });

    if (authError) {
      setError(authError.message);
      setLoading(false);
      return;
    }

    router.replace("/dashboard");
  };

  const handleGoogleLogin = async () => {
    if (!supabase) {
      setError("Supabase environment variables are missing. Add them in .env.local.");
      return;
    }
    setError("");
    const redirectTo = `${window.location.origin}/dashboard`;

    const { error: oauthError } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo
      }
    });

    if (oauthError) {
      setError(oauthError.message);
    }
  };

  return (
    <AuthCard
      eyebrow="Welcome Back"
      title="Sign In"
      subtitle="Access your account, bookings, courses, and healing history."
      footer={
        <p className="text-sm text-ink-500">
          Don&apos;t have an account?{" "}
          <Button href="/auth/register" variant="ghost" className="inline-flex p-0 text-sm font-medium text-gold-200 hover:text-gold-100">
            Register
          </Button>
        </p>
      }
    >
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

        <label className="block space-y-2">
          <span className="text-xs font-medium uppercase tracking-[0.3em] text-gold-200/80">Password</span>
          <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-ink-950/70 px-4 py-3 focus-within:border-gold-300/60">
            <Lock className="h-4 w-4 text-gold-200/70" />
            <input
              type={showPassword ? "text" : "password"}
              required
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="w-full bg-transparent text-sm text-white outline-none placeholder:text-ink-500"
              placeholder="Your password"
            />
            <button
              type="button"
              onClick={() => setShowPassword((current) => !current)}
              className="text-ink-500 transition-colors hover:text-gold-200"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
          </div>
        </label>

        <div className="flex items-center justify-end">
          <Button href="/auth/forgot-password" variant="ghost" className="p-0 text-xs font-medium uppercase tracking-[0.25em] text-gold-200/80 hover:text-gold-100">
            Forgot Password?
          </Button>
        </div>

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
          {loading ? "Signing In..." : "Sign In"}
        </Button>

        <div className="relative py-2 text-center text-xs uppercase tracking-[0.35em] text-ink-500">
          <span className="relative z-10 bg-ink-900/90 px-3">or continue with</span>
          <span className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-white/10" />
        </div>

        <Button type="button" variant="outline" className="w-full" onClick={handleGoogleLogin}>
          <Chrome className="h-4 w-4" />
          Google Sign-In
        </Button>
      </form>
    </AuthCard>
  );
}
