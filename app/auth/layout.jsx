import BrandMark from "@/components/brand-mark";

export default function AuthLayout({ children }) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-ink-950 text-ink-300">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(201,169,110,0.12),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(126,94,182,0.08),transparent_28%)]" />
      <div className="pointer-events-none absolute -left-24 top-16 h-72 w-72 rounded-full border border-gold-300/20 opacity-40 blur-[1px]" />
      <div className="pointer-events-none absolute right-[-6rem] top-[20vh] h-[34rem] w-[34rem] rounded-full border border-gold-300/10 opacity-30" />
      <div className="pointer-events-none absolute bottom-[-8rem] left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full border border-gold-300/10 opacity-20" />

      <header className="relative z-10 mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-6 sm:px-10 lg:px-16">
        <BrandMark />
        <div className="hidden text-right text-xs uppercase tracking-[0.4em] text-ink-500 sm:block">
          Ancient wisdom, modern practice
        </div>
      </header>

      <main className="relative z-10 flex min-h-[calc(100vh-88px)] items-center justify-center px-6 pb-12 pt-4 sm:px-10 lg:px-16">
        {children}
      </main>
    </div>
  );
}
