import SectionLabel from "@/components/section-label";

export default function PageHero({ eyebrow, title, subtitle, breadcrumb }) {
  return (
    <section className="relative overflow-hidden border-b border-white/5 bg-ink-950 px-6 pb-20 pt-28 sm:px-10 lg:px-16 lg:pb-24 lg:pt-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(201,169,110,0.1),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(60,160,160,0.08),transparent_26%)]" />
      <div className="pointer-events-none absolute right-[-8rem] top-[-4rem] h-[24rem] w-[24rem] rounded-full border border-gold-300/10 opacity-40" />
      <div className="relative mx-auto max-w-5xl">
        {breadcrumb ? <p className="mb-10 text-xs uppercase tracking-[0.35em] text-ink-500">{breadcrumb}</p> : null}
        <div className="max-w-3xl space-y-6">
          {eyebrow ? <SectionLabel>{eyebrow}</SectionLabel> : null}
          <h1 className="font-display text-5xl font-light leading-[0.95] text-white sm:text-6xl lg:text-7xl">{title}</h1>
          {subtitle ? <p className="max-w-2xl text-base leading-8 text-ink-500 sm:text-lg">{subtitle}</p> : null}
        </div>
      </div>
    </section>
  );
}
