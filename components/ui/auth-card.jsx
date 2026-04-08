export default function AuthCard({ eyebrow, title, subtitle, children, footer }) {
  return (
    <section className="w-full max-w-[460px] rounded-[2rem] border border-gold-300/20 bg-ink-900/90 p-6 shadow-glow backdrop-blur-xl sm:p-8">
      <div className="mb-8 space-y-3 text-center">
        {eyebrow ? (
          <p className="text-xs uppercase tracking-[0.45em] text-gold-200/85">{eyebrow}</p>
        ) : null}
        <h1 className="font-display text-4xl font-light text-white sm:text-5xl">{title}</h1>
        {subtitle ? <p className="text-sm leading-6 text-ink-500 sm:text-base">{subtitle}</p> : null}
      </div>

      {children}

      {footer ? <div className="mt-6 text-center">{footer}</div> : null}
    </section>
  );
}
